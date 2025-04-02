import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HexColorPicker } from "react-colorful";
import { RootState } from "../store/store";
import {
  updateSectionColor,
  updateContent,
  updateImage,
  updateFont,
  reorderSections,
} from "../store/templateSlice";
import {
  ChevronDown,
  ChevronUp,
  Image,
  X,
  Menu,
  GripVertical,
} from "lucide-react";
import { ImageUploader } from "./ImageUploader";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const fontOptions = [
  { value: "font-sans", label: "Sans Serif" },
  { value: "font-serif", label: "Serif" },
  { value: "font-mono", label: "Monospace" },
];

interface SortableSectionProps {
  id: string;
  type: string;
  isActive: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SortableSection: React.FC<SortableSectionProps> = ({
  id,
  type,
  isActive,
  onToggle,
  children,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`mb-6 ${isDragging ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between w-full p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
        <div {...attributes} {...listeners} className="cursor-grab">
          <GripVertical className="w-5 h-5 text-gray-500" />
        </div>
        <h3 className="font-medium flex-1 ml-3">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h3>
        <button onClick={onToggle} className="ml-3">
          {isActive ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      {isActive && <div className="mt-3 space-y-4">{children}</div>}
    </div>
  );
};

export const Editor: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTemplate, customizations } = useSelector(
    (state: RootState) => state.template
  );
  const [activeSectionId, setActiveSectionId] = React.useState<string | null>(
    null
  );
  const [isOpen, setIsOpen] = React.useState(true);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const handleOpenEditorSection = (event: CustomEvent) => {
      const { sectionId, elementKey } = event.detail;
      setActiveSectionId(sectionId);

      // Scroll to the section in the editor
      const sectionElement = document.querySelector(
        `[data-section-id="${sectionId}"]`
      );
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }

      // If there's a specific element key, focus on its input
      if (elementKey) {
        const inputElement = document.querySelector(
          `[data-input-key="${elementKey}"]`
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.focus();
        }
      }
    };

    window.addEventListener(
      "openEditorSection",
      handleOpenEditorSection as EventListener
    );
    return () => {
      window.removeEventListener(
        "openEditorSection",
        handleOpenEditorSection as EventListener
      );
    };
  }, []);

  if (!selectedTemplate) return null;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = selectedTemplate.sections.findIndex(
        (section) => section.id === active.id
      );
      const newIndex = selectedTemplate.sections.findIndex(
        (section) => section.id === over.id
      );

      dispatch(reorderSections({ oldIndex, newIndex }));
    }
  };

  const handleImageUpdate = (key: string, url: string) => {
    dispatch(updateImage({ key, url }));
  };

  const handleFontChange = (sectionId: string, font: string) => {
    dispatch(updateFont({ sectionId, font }));
  };

  const handleContentUpdate = (key: string, content: string) => {
    dispatch(updateContent({ key, content }));
  };

  const toggleSection = (sectionId: string) => {
    setActiveSectionId(activeSectionId === sectionId ? null : sectionId);
  };

  const renderFeatureInputs = (section: any) => {
    return (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Section Heading
          </label>
          <input
            type="text"
            value={
              customizations.content[`${section.id}-heading`] ||
              section.content.heading
            }
            onChange={(e) =>
              handleContentUpdate(`${section.id}-heading`, e.target.value)
            }
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            data-input-key="heading"
          />
        </div>
        {section.content.features.map((feature: any, index: number) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <h4 className="font-medium mb-2">Feature {index + 1}</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-feature-${index}-title`
                    ] || feature.title
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-feature-${index}-title`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`feature-${index}-title`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-feature-${index}-description`
                    ] || feature.description
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-feature-${index}-description`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`feature-${index}-description`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Icon
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-feature-${index}-icon`
                    ] || feature.icon
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-feature-${index}-icon`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`feature-${index}-icon`}
                />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const renderTestimonialInputs = (section: any) => {
    return (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Section Heading
          </label>
          <input
            type="text"
            value={
              customizations.content[`${section.id}-heading`] ||
              section.content.heading
            }
            onChange={(e) =>
              handleContentUpdate(`${section.id}-heading`, e.target.value)
            }
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            data-input-key="heading"
          />
        </div>
        {section.content.testimonials.map((testimonial: any, index: number) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <h4 className="font-medium mb-2">Testimonial {index + 1}</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quote
                </label>
                <textarea
                  value={
                    customizations.content[
                      `${section.id}-testimonial-${index}-quote`
                    ] || testimonial.quote
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-testimonial-${index}-quote`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  rows={3}
                  data-input-key={`testimonial-${index}-quote`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-testimonial-${index}-author`
                    ] || testimonial.author
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-testimonial-${index}-author`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`testimonial-${index}-author`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Position
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-testimonial-${index}-position`
                    ] || testimonial.position
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-testimonial-${index}-position`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`testimonial-${index}-position`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label>
                <input
                  type="text"
                  value={
                    customizations.images[
                      `${section.id}-testimonial-${index}`
                    ] || testimonial.image
                  }
                  onChange={(e) =>
                    handleImageUpdate(
                      `${section.id}-testimonial-${index}`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 mb-2"
                  data-input-key={`testimonial-${index}-image`}
                />
                <ImageUploader
                  onImageSelect={(dataUrl) =>
                    handleImageUpdate(
                      `${section.id}-testimonial-${index}`,
                      dataUrl
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const renderPortfolioInputs = (section: any) => {
    return (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Section Heading
          </label>
          <input
            type="text"
            value={
              customizations.content[`${section.id}-heading`] ||
              section.content.heading
            }
            onChange={(e) =>
              handleContentUpdate(`${section.id}-heading`, e.target.value)
            }
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            data-input-key="heading"
          />
        </div>
        {section.content.projects.map((project: any, index: number) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <h4 className="font-medium mb-2">Project {index + 1}</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-project-${index}-title`
                    ] || project.title
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-project-${index}-title`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`project-${index}-title`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  value={
                    customizations.content[
                      `${section.id}-project-${index}-category`
                    ] || project.category
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-project-${index}-category`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  data-input-key={`project-${index}-category`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={
                    customizations.content[
                      `${section.id}-project-${index}-description`
                    ] || project.description
                  }
                  onChange={(e) =>
                    handleContentUpdate(
                      `${section.id}-project-${index}-description`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  rows={2}
                  data-input-key={`project-${index}-description`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Image
                </label>
                <input
                  type="text"
                  value={
                    customizations.images[`${section.id}-project-${index}`] ||
                    project.image
                  }
                  onChange={(e) =>
                    handleImageUpdate(
                      `${section.id}-project-${index}`,
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 mb-2"
                  data-input-key={`project-${index}-image`}
                />
                <ImageUploader
                  onImageSelect={(dataUrl) =>
                    handleImageUpdate(`${section.id}-project-${index}`, dataUrl)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-20 z-50 p-2 bg-white rounded-full shadow-lg md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Editor</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={selectedTemplate.sections.map((section) => section.id)}
                strategy={verticalListSortingStrategy}
              >
                {selectedTemplate.sections.map((section) => (
                  <SortableSection
                    key={section.id}
                    id={section.id}
                    type={section.type}
                    isActive={activeSectionId === section.id}
                    onToggle={() => toggleSection(section.id)}
                  >
                    <div data-section-id={section.id}>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Background Color
                        </label>
                        <HexColorPicker
                          color={
                            customizations.colors[section.id] ||
                            section.style.backgroundColor
                          }
                          onChange={(color) =>
                            dispatch(
                              updateSectionColor({
                                sectionId: section.id,
                                color,
                              })
                            )
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Font Style
                        </label>
                        <select
                          value={
                            customizations.fonts[section.id] || "font-sans"
                          }
                          onChange={(e) =>
                            handleFontChange(section.id, e.target.value)
                          }
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        >
                          {fontOptions.map((font) => (
                            <option key={font.value} value={font.value}>
                              {font.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {section.type === "features" &&
                        renderFeatureInputs(section)}
                      {section.type === "testimonials" &&
                        renderTestimonialInputs(section)}
                      {section.type === "portfolio" &&
                        renderPortfolioInputs(section)}

                      {Object.entries(section.content).map(([key, value]) => {
                        if (
                          typeof value === "string" &&
                          !key.includes("heading")
                        ) {
                          if (key.toLowerCase().includes("image")) {
                            return (
                              <div key={key} className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                                  <Image className="w-4 h-4" />
                                  {key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                <input
                                  type="text"
                                  value={
                                    customizations.images[
                                      `${section.id}-${key}`
                                    ] || value
                                  }
                                  onChange={(e) =>
                                    handleImageUpdate(
                                      `${section.id}-${key}`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Enter image URL"
                                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 mb-2"
                                  data-input-key={key}
                                />
                                <ImageUploader
                                  onImageSelect={(dataUrl) =>
                                    handleImageUpdate(
                                      `${section.id}-${key}`,
                                      dataUrl
                                    )
                                  }
                                />
                              </div>
                            );
                          }
                          return (
                            <div key={key} className="space-y-2">
                              <label className="block text-sm font-medium text-gray-700">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </label>
                              <input
                                type="text"
                                value={
                                  customizations.content[
                                    `${section.id}-${key}`
                                  ] || value
                                }
                                onChange={(e) =>
                                  handleContentUpdate(
                                    `${section.id}-${key}`,
                                    e.target.value
                                  )
                                }
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                data-input-key={key}
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </SortableSection>
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
    </>
  );
};

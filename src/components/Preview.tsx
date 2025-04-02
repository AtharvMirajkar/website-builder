import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import * as Icons from "lucide-react";
import { setEditing } from "../store/templateSlice";

interface PreviewElementProps {
  sectionId: string;
  elementKey?: string;
  children: React.ReactNode;
  onElementClick: (sectionId: string, elementKey?: string) => void;
}

const PreviewElement: React.FC<PreviewElementProps> = ({
  sectionId,
  elementKey,
  children,
  onElementClick,
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onElementClick(sectionId, elementKey);
      }}
      className="cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 transition-all"
    >
      {children}
    </div>
  );
};

export const Preview: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTemplate, customizations } = useSelector(
    (state: RootState) => state.template
  );

  const handleElementClick = (sectionId: string, elementKey?: string) => {
    // Ensure editor is open
    dispatch(setEditing(true));

    // Dispatch an event to open the specific section in the editor
    window.dispatchEvent(
      new CustomEvent("openEditorSection", {
        detail: { sectionId, elementKey },
      })
    );
  };

  if (!selectedTemplate) return null;

  const renderSection = (section: any) => {
    const style = {
      backgroundColor:
        customizations.colors[section.id] || section.style.backgroundColor,
      color: section.style.textColor,
      padding: section.style.padding,
    };

    const getContent = (key: string, defaultValue: string) => {
      return customizations.content[`${section.id}-${key}`] || defaultValue;
    };

    const getImage = (key: string, defaultImage: string) => {
      return customizations.images[`${section.id}-${key}`] || defaultImage;
    };

    const getFeatureContent = (
      index: number,
      key: string,
      defaultValue: string
    ) => {
      return (
        customizations.content[`${section.id}-feature-${index}-${key}`] ||
        defaultValue
      );
    };

    const getTestimonialContent = (
      index: number,
      key: string,
      defaultValue: string
    ) => {
      return (
        customizations.content[`${section.id}-testimonial-${index}-${key}`] ||
        defaultValue
      );
    };

    const sectionFont = customizations.fonts[section.id] || "font-sans";

    const renderContent = (element: JSX.Element) => (
      <div className={sectionFont}>{element}</div>
    );

    switch (section.type) {
      case "hero":
        return renderContent(
          <PreviewElement
            sectionId={section.id}
            onElementClick={handleElementClick}
          >
            <div
              style={{
                ...style,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getImage(
                  "backgroundImage",
                  section.content.backgroundImage
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-center min-h-[600px] flex items-center justify-center"
            >
              <div>
                <PreviewElement
                  sectionId={section.id}
                  elementKey="heading"
                  onElementClick={handleElementClick}
                >
                  <h1 className="text-5xl font-bold mb-4">
                    {getContent("heading", section.content.heading)}
                  </h1>
                </PreviewElement>
                <PreviewElement
                  sectionId={section.id}
                  elementKey="subheading"
                  onElementClick={handleElementClick}
                >
                  <p className="text-xl mb-8">
                    {getContent("subheading", section.content.subheading)}
                  </p>
                </PreviewElement>
                <PreviewElement
                  sectionId={section.id}
                  elementKey="ctaText"
                  onElementClick={handleElementClick}
                >
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    {getContent("ctaText", section.content.ctaText)}
                  </button>
                </PreviewElement>
              </div>
            </div>
          </PreviewElement>
        );

      case "features":
        return renderContent(
          <PreviewElement
            sectionId={section.id}
            onElementClick={handleElementClick}
          >
            <div style={style}>
              <PreviewElement
                sectionId={section.id}
                elementKey="heading"
                onElementClick={handleElementClick}
              >
                <h2 className="text-3xl font-bold text-center mb-12">
                  {getContent("heading", section.content.heading)}
                </h2>
              </PreviewElement>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {section.content.features.map((feature: any, index: number) => {
                  const iconName = getFeatureContent(
                    index,
                    "icon",
                    feature.icon
                  );
                  const Icon = Icons[iconName as keyof typeof Icons];
                  return (
                    <PreviewElement
                      key={index}
                      sectionId={section.id}
                      elementKey={`feature-${index}`}
                      onElementClick={handleElementClick}
                    >
                      <div className="text-center">
                        {Icon && <Icon className="w-12 h-12 mx-auto mb-4" />}
                        <h3 className="text-xl font-semibold mb-2">
                          {getFeatureContent(index, "title", feature.title)}
                        </h3>
                        <p>
                          {getFeatureContent(
                            index,
                            "description",
                            feature.description
                          )}
                        </p>
                      </div>
                    </PreviewElement>
                  );
                })}
              </div>
            </div>
          </PreviewElement>
        );

      case "testimonials":
        return renderContent(
          <PreviewElement
            sectionId={section.id}
            onElementClick={handleElementClick}
          >
            <div style={style}>
              <PreviewElement
                sectionId={section.id}
                elementKey="heading"
                onElementClick={handleElementClick}
              >
                <h2 className="text-3xl font-bold text-center mb-12">
                  {getContent("heading", section.content.heading)}
                </h2>
              </PreviewElement>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {section.content.testimonials.map(
                  (testimonial: any, index: number) => (
                    <PreviewElement
                      key={index}
                      sectionId={section.id}
                      elementKey={`testimonial-${index}`}
                      onElementClick={handleElementClick}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img
                          src={getImage(
                            `testimonial-${index}`,
                            testimonial.image
                          )}
                          alt={getTestimonialContent(
                            index,
                            "author",
                            testimonial.author
                          )}
                          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                        />
                        <p className="text-lg italic mb-4">
                          "
                          {getTestimonialContent(
                            index,
                            "quote",
                            testimonial.quote
                          )}
                          "
                        </p>
                        <p className="font-semibold">
                          {getTestimonialContent(
                            index,
                            "author",
                            testimonial.author
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          {getTestimonialContent(
                            index,
                            "position",
                            testimonial.position
                          )}
                        </p>
                      </div>
                    </PreviewElement>
                  )
                )}
              </div>
            </div>
          </PreviewElement>
        );

      case "portfolio":
        return renderContent(
          <PreviewElement
            sectionId={section.id}
            onElementClick={handleElementClick}
          >
            <div style={style}>
              <PreviewElement
                sectionId={section.id}
                elementKey="heading"
                onElementClick={handleElementClick}
              >
                <h2 className="text-3xl font-bold text-center mb-12">
                  {getContent("heading", section.content.heading)}
                </h2>
              </PreviewElement>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {section.content.projects.map((project: any, index: number) => (
                  <PreviewElement
                    key={index}
                    sectionId={section.id}
                    elementKey={`project-${index}`}
                    onElementClick={handleElementClick}
                  >
                    <div className="group relative overflow-hidden rounded-lg">
                      <img
                        src={getImage(`project-${index}`, project.image)}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm mb-2">{project.category}</p>
                          <p className="text-sm">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </PreviewElement>
                ))}
              </div>
            </div>
          </PreviewElement>
        );

      case "about":
        return renderContent(
          <PreviewElement
            sectionId={section.id}
            onElementClick={handleElementClick}
          >
            <div style={style}>
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <PreviewElement
                    sectionId={section.id}
                    elementKey="image"
                    onElementClick={handleElementClick}
                  >
                    <img
                      src={getImage("image", section.content.image)}
                      alt="Profile"
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                  </PreviewElement>
                </div>
                <div className="md:w-1/2">
                  <PreviewElement
                    sectionId={section.id}
                    elementKey="heading"
                    onElementClick={handleElementClick}
                  >
                    <h2 className="text-3xl font-bold mb-6">
                      {getContent("heading", section.content.heading)}
                    </h2>
                  </PreviewElement>
                  <PreviewElement
                    sectionId={section.id}
                    elementKey="description"
                    onElementClick={handleElementClick}
                  >
                    <p className="text-lg mb-6">
                      {getContent("description", section.content.description)}
                    </p>
                  </PreviewElement>
                  <div className="grid grid-cols-2 gap-4">
                    {section.content.skills.map(
                      (skill: string, index: number) => (
                        <div
                          key={index}
                          className="bg-white bg-opacity-20 rounded-lg p-3 text-center"
                        >
                          {skill}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </PreviewElement>
        );

      case "contact":
        return renderContent(
          <PreviewElement
            sectionId={section.id}
            onElementClick={handleElementClick}
          >
            <div style={style} className="text-center">
              <PreviewElement
                sectionId={section.id}
                elementKey="heading"
                onElementClick={handleElementClick}
              >
                <h2 className="text-3xl font-bold mb-4">
                  {getContent("heading", section.content.heading)}
                </h2>
              </PreviewElement>
              <PreviewElement
                sectionId={section.id}
                elementKey="subheading"
                onElementClick={handleElementClick}
              >
                <p className="text-xl mb-8">
                  {getContent("subheading", section.content.subheading)}
                </p>
              </PreviewElement>
              <div className="max-w-2xl mx-auto">
                {section.content.email && (
                  <PreviewElement
                    sectionId={section.id}
                    elementKey="email"
                    onElementClick={handleElementClick}
                  >
                    <p className="mb-4">
                      <strong>Email:</strong>{" "}
                      {getContent("email", section.content.email)}
                    </p>
                  </PreviewElement>
                )}
                {section.content.phone && (
                  <PreviewElement
                    sectionId={section.id}
                    elementKey="phone"
                    onElementClick={handleElementClick}
                  >
                    <p className="mb-4">
                      <strong>Phone:</strong>{" "}
                      {getContent("phone", section.content.phone)}
                    </p>
                  </PreviewElement>
                )}
                {section.content.address && (
                  <PreviewElement
                    sectionId={section.id}
                    elementKey="address"
                    onElementClick={handleElementClick}
                  >
                    <p className="mb-4">
                      <strong>Address:</strong>{" "}
                      {getContent("address", section.content.address)}
                    </p>
                  </PreviewElement>
                )}
                {section.content.social && (
                  <div className="flex justify-center gap-4 mt-6">
                    {Object.entries(section.content.social).map(
                      ([platform, handle]) => (
                        <a
                          key={platform}
                          href={`https://${platform}.com/${handle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                        >
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </PreviewElement>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {selectedTemplate.sections.map((section) => (
        <div key={section.id}>{renderSection(section)}</div>
      ))}
    </div>
  );
};

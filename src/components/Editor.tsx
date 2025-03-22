import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HexColorPicker } from 'react-colorful';
import { RootState } from '../store/store';
import { updateSectionColor, updateContent, updateImage, updateFont } from '../store/templateSlice';
import { Settings, Type, Image, X, Menu } from 'lucide-react';
import { ImageUploader } from './ImageUploader';

const fontOptions = [
  { value: 'font-sans', label: 'Sans Serif' },
  { value: 'font-serif', label: 'Serif' },
  { value: 'font-mono', label: 'Monospace' },
];

export const Editor: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTemplate, customizations } = useSelector((state: RootState) => state.template);
  const [activeSectionId, setActiveSectionId] = React.useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);

  if (!selectedTemplate) return null;

  const handleImageUpdate = (key: string, url: string) => {
    dispatch(updateImage({ key, url }));
  };

  const handleFontChange = (sectionId: string, font: string) => {
    dispatch(updateFont({ sectionId, font }));
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-20 z-50 p-2 bg-white rounded-full shadow-lg md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Editor Panel */}
      <div className={`fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:translate-x-0`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Editor</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="p-2 rounded hover:bg-gray-100"
                title="Toggle color picker"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {selectedTemplate.sections.map((section) => (
              <div key={section.id} className="mb-6">
                <div
                  className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer"
                  onClick={() => setActiveSectionId(section.id)}
                >
                  <h3 className="font-medium">{section.type.charAt(0).toUpperCase() + section.type.slice(1)}</h3>
                  <Type className="w-4 h-4" />
                </div>

                {activeSectionId === section.id && (
                  <div className="mt-3 space-y-4">
                    {/* Font Selection */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Font Style
                      </label>
                      <select
                        value={customizations.fonts[section.id] || 'font-sans'}
                        onChange={(e) => handleFontChange(section.id, e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                      >
                        {fontOptions.map((font) => (
                          <option key={font.value} value={font.value}>
                            {font.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {Object.entries(section.content).map(([key, value]) => {
                      if (typeof value === 'string') {
                        if (key.toLowerCase().includes('image')) {
                          return (
                            <div key={key} className="space-y-2">
                              <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Image className="w-4 h-4" />
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </label>
                              <input
                                type="text"
                                value={customizations.images[`${section.id}-${key}`] || value}
                                onChange={(e) => handleImageUpdate(`${section.id}-${key}`, e.target.value)}
                                placeholder="Enter image URL"
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 mb-2"
                              />
                              <ImageUploader
                                onImageSelect={(dataUrl) => handleImageUpdate(`${section.id}-${key}`, dataUrl)}
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
                              value={customizations.content[`${section.id}-${key}`] || value}
                              onChange={(e) =>
                                dispatch(
                                  updateContent({
                                    key: `${section.id}-${key}`,
                                    content: e.target.value,
                                  })
                                )
                              }
                              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        );
                      }
                      return null;
                    })}

                    {showColorPicker && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Background Color
                        </label>
                        <HexColorPicker
                          color={customizations.colors[section.id] || section.style.backgroundColor}
                          onChange={(color) =>
                            dispatch(updateSectionColor({ sectionId: section.id, color }))
                          }
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
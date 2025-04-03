import React from "react";
import { useDispatch } from "react-redux";
import { setTemplate } from "../store/templateSlice";
import { templates } from "../data/templates";
import {
  Wand,
  MousePointer,
  Palette,
  Layout,
  ArrowUpDown,
  Share,
} from "lucide-react";

export const TemplateList: React.FC = () => {
  const dispatch = useDispatch();

  const features = [
    {
      icon: <MousePointer className="w-6 h-6 text-blue-500" />,
      title: "Click to Edit",
      description:
        "Click any element on the preview to edit its content directly",
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-500" />,
      title: "Customize Design",
      description: "Change colors, fonts, and styles to match your brand",
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: "Responsive Layout",
      description: "Your website will look great on all devices",
    },
    {
      icon: <ArrowUpDown className="w-6 h-6 text-blue-500" />,
      title: "Drag & Drop Sections",
      description: "Easily reorder sections by dragging them up or down",
    },
    {
      icon: <Wand className="w-6 h-6 text-blue-500" />,
      title: "Real-time Preview",
      description: "See your changes instantly as you edit",
    },
    {
      icon: <Share className="w-6 h-6 text-blue-500" />,
      title: "Easy Publishing",
      description: "Publish your website with one click when ready",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Create Your Website in Minutes
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Choose a template below and customize it to create your perfect
          website. Our intuitive editor makes it easy to modify content, change
          styles, and rearrange sections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Choose Your Template
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => dispatch(setTemplate(template))}
            >
              <div className="relative">
                <img
                  src={template.previewImage}
                  alt={template.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Customize Template
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600">
                  Perfect for{" "}
                  {template.id === "modern-business"
                    ? "business websites"
                    : template.id === "creative-portfolio"
                    ? "creative professionals"
                    : template.id === "restaurant-template"
                    ? "restaurants and cafes"
                    : "fitness and health businesses"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Guide */}
      <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          Getting Started
        </h3>
        <ol className="space-y-4 text-blue-800">
          <li className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 shrink-0">
              1
            </span>
            <p>
              Choose a template that best matches your needs from the options
              above
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 shrink-0">
              2
            </span>
            <p>
              Click on any element in the preview to edit its content directly
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 shrink-0">
              3
            </span>
            <p>
              Use the editor panel to customize colors, fonts, and other styles
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 shrink-0">
              4
            </span>
            <p>Drag and drop sections to reorder them as needed</p>
          </li>
          <li className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 shrink-0">
              5
            </span>
            <p>Preview your changes in real-time and publish when ready</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

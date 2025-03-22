import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import * as Icons from 'lucide-react';

export const Preview: React.FC = () => {
  const { selectedTemplate, customizations } = useSelector((state: RootState) => state.template);

  if (!selectedTemplate) return null;

  const renderSection = (section: any) => {
    const style = {
      backgroundColor: customizations.colors[section.id] || section.style.backgroundColor,
      color: section.style.textColor,
      padding: section.style.padding,
    };

    const content = Object.entries(section.content).reduce((acc: any, [key, value]) => {
      acc[key] = customizations.content[`${section.id}-${key}`] || value;
      return acc;
    }, {});

    const getImage = (key: string, defaultImage: string) => {
      return customizations.images[`${section.id}-${key}`] || defaultImage;
    };

    const sectionFont = customizations.fonts[section.id] || 'font-sans';

    const renderContent = (element: JSX.Element) => (
      <div className={sectionFont}>{element}</div>
    );

    switch (section.type) {
      case 'hero':
        return renderContent(
          <div
            style={{
              ...style,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getImage('backgroundImage', content.backgroundImage)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="text-center min-h-[600px] flex items-center justify-center"
          >
            <div>
              <h1 className="text-5xl font-bold mb-4">{content.heading}</h1>
              <p className="text-xl mb-8">{content.subheading}</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {content.ctaText}
              </button>
            </div>
          </div>
        );

      case 'features':
        return renderContent(
          <div style={style}>
            <h2 className="text-3xl font-bold text-center mb-12">{content.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.features.map((feature: any, index: number) => {
                const Icon = Icons[feature.icon as keyof typeof Icons];
                return (
                  <div key={index} className="text-center">
                    {Icon && <Icon className="w-12 h-12 mx-auto mb-4" />}
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'testimonials':
        return renderContent(
          <div style={style}>
            <h2 className="text-3xl font-bold text-center mb-12">{content.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {content.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={getImage(`testimonial-${index}`, testimonial.image)}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'portfolio':
        return renderContent(
          <div style={style}>
            <h2 className="text-3xl font-bold text-center mb-12">{content.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.projects.map((project: any, index: number) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={getImage(`project-${index}`, project.image)}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm mb-2">{project.category}</p>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return renderContent(
          <div style={style}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src={getImage('profile', content.image)}
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">{content.heading}</h2>
                <p className="text-lg mb-6">{content.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {content.skills.map((skill: string, index: number) => (
                    <div key={index} className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return renderContent(
          <div style={style} className="text-center">
            <h2 className="text-3xl font-bold mb-4">{content.heading}</h2>
            <p className="text-xl mb-8">{content.subheading}</p>
            <div className="max-w-2xl mx-auto">
              {content.email && (
                <p className="mb-4">
                  <strong>Email:</strong> {content.email}
                </p>
              )}
              {content.phone && (
                <p className="mb-4">
                  <strong>Phone:</strong> {content.phone}
                </p>
              )}
              {content.address && (
                <p className="mb-4">
                  <strong>Address:</strong> {content.address}
                </p>
              )}
              {content.social && (
                <div className="flex justify-center gap-4 mt-6">
                  {Object.entries(content.social).map(([platform, handle]) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/${handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
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
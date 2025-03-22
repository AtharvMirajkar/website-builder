import React from 'react';
import { useDispatch } from 'react-redux';
import { setTemplate } from '../store/templateSlice';
import { templates } from '../data/templates';

export const TemplateList: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
          onClick={() => dispatch(setTemplate(template))}
        >
          <img
            src={template.previewImage}
            alt={template.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{template.name}</h3>
            <p className="mt-2 text-gray-600">Click to customize this template</p>
          </div>
        </div>
      ))}
    </div>
  );
};
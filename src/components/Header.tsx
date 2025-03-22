import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { selectedTemplate } = useSelector((state: RootState) => state.template);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {selectedTemplate && (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Templates
            </button>
          )}
          <h1 className="text-xl font-bold text-gray-900">
            {selectedTemplate ? selectedTemplate.name : 'Website Builder'}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </header>
  );
};
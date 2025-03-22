import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setEditing } from '../store/templateSlice';
import { ArrowLeft, LogOut, Edit, Eye } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedTemplate, isEditing } = useSelector((state: RootState) => state.template);

  const handleLogout = () => {
    // Handle logout logic
    navigate('/signin');
  };

  const toggleEditing = () => {
    dispatch(setEditing(!isEditing));
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {selectedTemplate ? (
            <button
              onClick={() => navigate('/templates')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Templates
            </button>
          ) : (
            <Link to="/" className="text-xl font-bold text-gray-900">
              Website Builder
            </Link>
          )}
          <h1 className="text-xl font-bold text-gray-900">
            {selectedTemplate ? selectedTemplate.name : ''}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {selectedTemplate && (
            <button
              onClick={toggleEditing}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              {isEditing ? (
                <>
                  <Eye className="w-5 h-5" />
                  Preview Mode
                </>
              ) : (
                <>
                  <Edit className="w-5 h-5" />
                  Edit Mode
                </>
              )}
            </button>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
          {selectedTemplate && isEditing && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
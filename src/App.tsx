import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TemplateList } from './components/TemplateList';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Header } from './components/Header';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { LandingPage } from './components/LandingPage';
import { ContactUs } from './components/ContactUs';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const MainContent = () => {
  const { selectedTemplate, isEditing } = useSelector((state: RootState) => state.template);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {selectedTemplate ? (
          <div className="flex">
            <div className={`flex-1 ${isEditing ? 'mr-0 md:mr-80' : ''}`}>
              <Preview />
            </div>
            {isEditing && <Editor />}
          </div>
        ) : (
          <div className="container mx-auto py-12">
            <TemplateList />
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/templates" element={<MainContent />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
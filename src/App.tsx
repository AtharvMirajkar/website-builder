import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TemplateList } from './components/TemplateList';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom'; 

const MainContent = () => {
  const selectedTemplate = useSelector((state: RootState) => state.template.selectedTemplate);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {!selectedTemplate ? (
          <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Choose Your Template
            </h1>
            <TemplateList />
          </div>
        ) : (
          <div className="flex">
            <div className="flex-1 mr-0 md:mr-80">
              <Preview />
            </div>
            <Editor />
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router> {/* Wrap your app in Router */}
        <MainContent />
      </Router>
    </Provider>
  );
}

export default App;

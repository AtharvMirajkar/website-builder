export interface Template {
  id: string;
  name: string;
  previewImage: string;
  sections: Section[];
}

export interface Section {
  id: string;
  type: 'hero' | 'features' | 'testimonials' | 'contact' | 'portfolio' | 'about' | 'gallery';
  content: Record<string, any>;
  style: {
    backgroundColor: string;
    textColor: string;
    padding: string;
  };
}
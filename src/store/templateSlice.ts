import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Template } from '../types/template';

interface TemplateState {
  selectedTemplate: Template | null;
  isEditing: boolean;
  customizations: {
    colors: Record<string, string>;
    content: Record<string, string>;
    images: Record<string, string>;
    fonts: Record<string, string>;
  };
}

const initialState: TemplateState = {
  selectedTemplate: null,
  isEditing: true,
  customizations: {
    colors: {},
    content: {},
    images: {},
    fonts: {},
  },
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<Template>) => {
      state.selectedTemplate = action.payload;
      state.customizations = initialState.customizations;
    },
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    updateSectionColor: (state, action: PayloadAction<{ sectionId: string; color: string }>) => {
      state.customizations.colors[action.payload.sectionId] = action.payload.color;
    },
    updateContent: (state, action: PayloadAction<{ key: string; content: string }>) => {
      state.customizations.content[action.payload.key] = action.payload.content;
    },
    updateImage: (state, action: PayloadAction<{ key: string; url: string }>) => {
      state.customizations.images[action.payload.key] = action.payload.url;
    },
    updateFont: (state, action: PayloadAction<{ sectionId: string; font: string }>) => {
      state.customizations.fonts[action.payload.sectionId] = action.payload.font;
    },
    reorderSections: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      if (state.selectedTemplate) {
        const { oldIndex, newIndex } = action.payload;
        const sections = [...state.selectedTemplate.sections];
        const [movedSection] = sections.splice(oldIndex, 1);
        sections.splice(newIndex, 0, movedSection);
        state.selectedTemplate.sections = sections;
      }
    },
  },
});

export const { 
  setTemplate, 
  setEditing, 
  updateSectionColor, 
  updateContent, 
  updateImage, 
  updateFont,
  reorderSections
} = templateSlice.actions;
export default templateSlice.reducer;
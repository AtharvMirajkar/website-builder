import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Template } from '../types/template';

interface TemplateState {
  selectedTemplate: Template | null;
  customizations: {
    colors: Record<string, string>;
    content: Record<string, string>;
    images: Record<string, string>;
    fonts: Record<string, string>;
  };
}

const initialState: TemplateState = {
  selectedTemplate: null,
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
      // Reset customizations when selecting a new template
      state.customizations = initialState.customizations;
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
  },
});

export const { setTemplate, updateSectionColor, updateContent, updateImage, updateFont } = templateSlice.actions;
export default templateSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import categories from "../../utils/categories";
import { ICategoryNames, IWidget } from "../../Types";

// name of action
// initial state
// reducer

const initialState = {
  categories,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    createWidget: (
      state,
      action: {
        payload: { widgetCategory: ICategoryNames; data: IWidget };
        type: string;
      }
    ) => {
      const { widgetCategory, data } = action.payload;
      state.categories[widgetCategory].widgets.push(data);
    },
    removeWidget: (
      state,
      action: {
        payload: { widgetCategory: ICategoryNames; widgetId: string };
        type: string;
      }
    ) => {
      const { widgetCategory, widgetId } = action.payload;
      console.log(widgetCategory, widgetId);
      state.categories[widgetCategory].widgets = state.categories[
        widgetCategory
      ].widgets.filter((widget) => widget.id !== widgetId);
    },
  },
});

export const { createWidget, removeWidget } = dashboardSlice.actions;

export default dashboardSlice.reducer;

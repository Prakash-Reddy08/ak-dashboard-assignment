export type ICategoryNames = "cspm" | "cwpp" | "image" | "ticket";
export type ICategories = Record<
  ICategoryNames,
  { name: string; widgets: IWidget[] }
>;

export type IWidget = {
  id: string;
  name: string;
  text: string;
};

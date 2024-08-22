import { ICategories } from "../Types";
import { v4 as uuidv4 } from "uuid";
const categories: ICategories = {
  cspm: {
    name: "CSPM Executive Dashboard",
    widgets: [
      {
        id: uuidv4(),
        name: "Cloud Accounts",
        text: "",
      },
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Account Risk Assessment",
      },
    ],
  },
  cwpp: {
    name: "CWPP Dashboard",
    widgets: [
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Accounts",
      },
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Account Risk Assessment",
      },
    ],
  },
  image: {
    name: "Registry Scan",
    widgets: [
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Accounts",
      },
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Account Risk Assessment",
      },
    ],
  },
  ticket: {
    name: "Ticket Dashboard",
    widgets: [
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Accounts",
      },
      {
        id: uuidv4(),
        text: "",
        name: "Cloud Account Risk Assessment",
      },
    ],
  },
};

export default categories;

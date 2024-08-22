import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { createWidget } from "../../features/dashboard/dashboardSlice";
import { ICategoryNames } from "../../Types";
import { v4 as uuidv4 } from "uuid";

export function AddWidgetModal() {
  const [open, setOpen] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<ICategoryNames>("cspm");

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.dashboard.categories);

  const handleAddWidget = () => {
    if (newWidgetName.trim() !== "") {
      dispatch(
        createWidget({
          widgetCategory: selectedCategory,
          data: {
            id: uuidv4(),
            name: newWidgetName.trim(),
            text: newWidgetText.trim(),
          },
        })
      );
      setNewWidgetName("");
      setNewWidgetText("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Widget</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Widget</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input
              id="name"
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="text" className="text-right">
              Text
            </label>
            <Input
              id="text"
              value={newWidgetText}
              onChange={(e) => setNewWidgetText(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="category" className="text-right">
              Category
            </label>
            <Select
              value={selectedCategory}
              onValueChange={(value) =>
                setSelectedCategory(value as ICategoryNames)
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(categories).map(([key, category]) => (
                  <SelectItem key={key} value={key}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleAddWidget}>Add Widget</Button>
      </DialogContent>
    </Dialog>
  );
}

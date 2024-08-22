import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ICategoryNames } from "../Types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AddWidgetModal } from "@/components/ui/AddWidgetModal";
import { removeWidget } from "@/features/dashboard/dashboardSlice";

export default function Dashboard() {
  const categories = useAppSelector((state) => state.dashboard.categories);
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveWidget = (
    widgetCategory: ICategoryNames,
    widgetId: string
  ) => {
    dispatch(removeWidget({ widgetCategory, widgetId }));
  };

  const filteredCategories = useMemo(
    () =>
      Object.entries(categories).map(([key, category]) => ({
        ...category,
        key: key as ICategoryNames,
        widgets: category.widgets.filter((w) =>
          w.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      })),
    [categories, searchTerm]
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <AddWidgetModal />
      </div>

      <Input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />

      <div className="grid grid-cols-1 gap-6">
        {filteredCategories.map(({ key, name, widgets }) => (
          <Card key={key} className="shadow-lg">
            <CardHeader className="bg-gray-100">
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {widgets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1">
                  {widgets.map((widget) => (
                    <div
                      key={widget.id}
                      className="bg-white p-4 rounded shadow"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{widget.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveWidget(key, widget.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">{widget.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 p-4">No widgets in this category</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

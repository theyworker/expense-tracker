import { addNewCategory, getAllCategories, getCategory } from "../controllers/category";

export function categoryEndPoints(app: any) {
  app.post("/category", addNewCategory);
  // app.put("/category", addNewCategory);
  // app.delete("/category", addNewCategory);
  app.get("/category/:id", getCategory);
  app.get("/category", getAllCategories);
}

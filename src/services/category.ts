import { addCategoryToDB, readAllCategoriesForUserFromDB, readAllCategoriesFromDB, readCategoryFromDB } from "../repo/category";
import { Category } from "../types/category";

export const addCategory = (newCatergory: Category) =>
  addCategoryToDB(newCatergory);

export const fetchCategory = (id: String) => readCategoryFromDB(id)

export const fetchAllCategories = () => readAllCategoriesFromDB()
export const fetchAllCategoriesForUser = (userId:String) => readAllCategoriesForUserFromDB(userId)
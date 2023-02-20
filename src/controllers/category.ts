import { uuid } from "uuidv4";
import {
  addCategory,
  fetchAllCategories,
  fetchAllCategoriesForUser,
  fetchCategory,
} from "../services/category";

export const addNewCategory = async (req, res) => {
  let { name, description, user } = req.body;
  let createdAt = Date.now();
  let id = uuid();
  let config = { customType: true, user };
  let newCategory = await addCategory({
    name,
    description,
    createdAt,
    id,
    config,
    active: true,
  });
  res.send(newCategory);
};

export const getCategory = async (req, res) => {
  let { id } = req.params;

  console.log(id);
  let searchedCategory = await fetchCategory(id);
  res.send(searchedCategory);
};

export const getAllCategories = async (req, res) => {
  let { user } = req.query;
  if (user) {
    let categoryList = await fetchAllCategoriesForUser(user);
    res.send(categoryList);
  } else {
    let categoryList = await fetchAllCategories();
    res.send(categoryList);
  }
};

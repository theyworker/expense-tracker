import { Category } from "../types/category";
import { executeDB } from "./db";

const getCategoryCollection = (client) => {
  const db = client.db("expense-tracker");
  const categoryCollection = db.collection("category");
  return categoryCollection;
};

export const readCategoryFromDB = async (id: String) => {
  let result = await executeDB((client) =>
    getCategoryCollection(client).findOne({ id })
  );
  return result;
};
export const readAllCategoriesFromDB = async () => {
  let result = await executeDB((client) =>
    getCategoryCollection(client).find({}).toArray()
  );

  return result;
};
export const readAllCategoriesForUserFromDB = async (userId: String) => {
  let result = await executeDB((client) =>
    getCategoryCollection(client)
      .find({ config: { customType: true, user: userId }, active: true })
      .toArray()
  );

  return result;
};

export const addCategoryToDB = async (newCategory: Category) => {
  let isExist = await executeDB((client) => {
    return getCategoryCollection(client).findOne({
      name: newCategory.name,
      id: newCategory.id,
    });
  });

  if (isExist) {
    return { message: "Already Exists." };
  } else {
    let result = await executeDB((client) => {
      return getCategoryCollection(client).insertOne({
        ...newCategory,
        createdAt: new Date(),
      });
    });
    return result;
  }
};

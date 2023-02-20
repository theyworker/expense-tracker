import { User } from "../types/user";
import { executeDB } from "./db";

const getUserCollection = (client) => {
  const db = client.db("expense-tracker");
  const userCollection = db.collection("user");
  return userCollection;
};

export const readUserFromDBbyName = async (name: String) => {
  let result = await executeDB((client) =>
    getUserCollection(client).findOne({ name })
  );
  return result;
};
export const readUserFromDBbyId = async (id: String) => {
  let result = await executeDB((client) =>
    getUserCollection(client).findOne({ id })
  );
  return result;
};

export const addUserToDB = async (newUser: User) => {
  let isExist = await executeDB((client) => {
    return getUserCollection(client).findOne({
      name: newUser.name,
    });
  });

  if (isExist) {
    return { message: "Already Exists." };
  } else {
    let result = await executeDB((client) => {
      return getUserCollection(client).insertOne({
        ...newUser,
        createdAt: new Date(),
      });
    });
    return result;
  }
};

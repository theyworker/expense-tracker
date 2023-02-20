import {
  addUserToDB,
  readUserFromDBbyId,
  readUserFromDBbyName,
} from "../repo/user";
import { User } from "../types/user";

export const addUser = async (user: User) => addUserToDB(user);

export const getUser = async (name?: string, id?: string) => {
  if (name) {
    return readUserFromDBbyName(name);
  }

  if (id) {
    return readUserFromDBbyId(id);
  }
  if (name == undefined && id == undefined) {
    return { message: "invalid request" };
  }
};

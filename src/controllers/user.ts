import { uuid } from "uuidv4";
import { addUser, getUser } from "../services/user";

export const addNewUser = async (req, res) => {
  let { name, password, currency = "USD" } = req.body;
  let createdAt = Date.now();
  let id = uuid();
  if (name == undefined || password == undefined) {
    res.send({ error: "invalid request" });
  }
  let newUser = await addUser({ name, password, createdAt, id, currency });
  res.send(newUser);
};

export const readUser = async (req, res) => {
  let { name, id } = req.query;

  let searchResult = name || id ? await getUser(name, id) : {};

  res.send(searchResult || { message: "no results" });
};

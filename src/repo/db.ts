import { mongo_string } from "../config";

const MongoClient = require("mongodb").MongoClient;

export const DB_Name = "expense-tracker"
export const executeDB = (callBack) =>
  MongoClient.connect(mongo_string).then(callBack);

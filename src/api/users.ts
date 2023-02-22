import { addNewUser, putUser, readUser } from "../controllers/user";

export function userEndPoints(app) {
  app.post("/user", addNewUser);
  // TODO:
  app.put("/user", putUser);
  // app.delete("/user", addNewUser);
  app.get("/user", readUser);
}

// module.exports = {
//   userEndPoints,
// };

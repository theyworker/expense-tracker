import { addNewExpense, getAllExpensesForUser } from "../controllers/expense";

export function expenseEndPoints(app) {
  app.post("/expense", addNewExpense);
  // TODO:
  // app.put("/user", addNewUser);
  // app.delete("/user", addNewUser);
  app.get("/expense", getAllExpensesForUser);
}

// module.exports = {
//   userEndPoints,
// };

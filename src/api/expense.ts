import {
  addNewExpense,
  getAllExpensesForUser,
  putExpense,
} from "../controllers/expense";

export function expenseEndPoints(app) {
  app.post("/expense", addNewExpense);
  // TODO:
  app.put("/expense", putExpense);
  // app.delete("/user", addNewUser);
  app.get("/expense", getAllExpensesForUser);
}

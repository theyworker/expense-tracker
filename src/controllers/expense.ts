import { uuid } from "uuidv4";
import { addExpense, fetchAllExpenses, updateExpense } from "../services/expense";

export const addNewExpense = async (req, res) => {
  let { amount, type, agent, user, paymentMethod, date } = req.body;
  let id = uuid();
  let newExpense = await addExpense({
    amount,
    type,
    agent,
    user,
    paymentMethod,
    date,
    id,
  });
  res.send(newExpense);
};

export const getAllExpensesForUser = async (req, res) => {
  let { user } = req.query;
  let expenseList = await fetchAllExpenses(user);
  res.send(expenseList);
};

export const putExpense = async (req, res) => {
    let { id } = req.body;
    let updatedExpense = await updateExpense(id, { ...req.body });
    res.send(updatedExpense);
  };
  
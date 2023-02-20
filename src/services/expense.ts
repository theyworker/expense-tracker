import { addExpenseToDB, readAllExpensesFromDB } from "../repo/expense";
import { Expense } from "../types/expense";

export const addExpense = (newExpense: Expense) => addExpenseToDB(newExpense)

export const fetchAllExpenses = (user: String)=> readAllExpensesFromDB(user)
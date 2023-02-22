import { addExpenseToDB, readAllExpensesFromDB, updateExpenseOnDB } from "../repo/expense";
import { Expense } from "../types/expense";
import { fetchCategory } from "./category";


export const addExpense = (newExpense: Expense) => {
    //valid amount
const checkValidity = newExpense.amount > 0 && fetchCategory(newExpense.type)
    //user and type match 

return addExpenseToDB(newExpense)}

export const fetchAllExpenses = (user: String)=> readAllExpensesFromDB(user)
export const updateExpense = (id : String, updatedData: Object)=> updateExpenseOnDB(id, updatedData)
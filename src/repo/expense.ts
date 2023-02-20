import { Expense } from "../types/expense";
import { executeDB } from "./db";

const getExpenseCollection = (client) => {
  const db = client.db("expense-tracker");
  const categoryCollection = db.collection("expense");
  return categoryCollection;
};

export const readExpenseFromDB = async (id: String) => {
  let result = await executeDB((client) =>
    getExpenseCollection(client).findOne({ id })
  );
  return result;
};

export const readAllExpensesFromDB = async (id: String) => {
    let result = await executeDB((client) =>
      getExpenseCollection(client).find({ }).toArray()
    );
    return result;
  };
  
  
export const addExpenseToDB = async (newExpense: Expense) => {

      let result = await executeDB((client) => {
        return getExpenseCollection(client).insertOne({
          ...newExpense,
          createdAt: new Date(),
        });
      });
      return result;
    
  };
  
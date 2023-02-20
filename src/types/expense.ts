
export type Expense = {
    amount : Number
    type: string,
    date: Number | Date,
    agent : "app" | "siri",
    user: String,
    paymentMethod? : String,
    id: String
}
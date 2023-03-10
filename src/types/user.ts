export type User = {
    name: string;
    password: string;
    createdAt: Date | number;
    id: string;
    currency: "LKR" | "$" | string,
    paymentMethods? : [{name: String, id: String}]
  };
  
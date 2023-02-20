import * as express from "express";
import { categoryEndPoints } from "./api/category";
import { expenseEndPoints } from "./api/expense";
import { userEndPoints } from "./api/users";
import { node_port } from "./config";

const app = express();
app.use(express.json());


userEndPoints(app);
categoryEndPoints(app);
expenseEndPoints(app);


app.listen(node_port, () => {
  return console.log(`Express is listening at http://localhost:${node_port}`);
});

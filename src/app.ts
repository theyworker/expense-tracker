import * as express from "express";
import { categoryEndPoints } from "./api/category";
import { expenseEndPoints } from "./api/expense";
import { userEndPoints } from "./api/users";
import { node_port } from "./config";

const app = express();
app.use(express.json());
const checkHeader = (req, res, next) => {
  if (req.query && req.query.user == "123") {
    next();
  } else {
    res.send({ message: "validation failed" });
  }
};
app.use(checkHeader)

userEndPoints(app);
categoryEndPoints(app);
expenseEndPoints(app);

app.listen(node_port, () => {
  return console.log(`Express is listening at http://localhost:${node_port}`);
});

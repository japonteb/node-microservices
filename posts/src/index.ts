import express, { Application } from "express";
import { routes } from "../routes";
import bodyParser from "body-parser";

const app: Application = express();
const port: Number = 4000;

app.use(bodyParser.json());

routes(app);

app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);

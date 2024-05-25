import express, { Application } from "express";
import { routes } from "../routes";

const app: Application = express();
const port: Number = 4001;

routes(app);

app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);

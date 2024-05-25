import express, { Application } from "express";
import { routes } from "../routes";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const port: Number = 4000;

app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);

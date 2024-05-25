import {
  type Request,
  type Response,
  type NextFunction,
  Router,
} from "express";
import { randomBytes } from "crypto";

export const PostRouter: Router = Router();

interface Post {
  id: string;
  title: string;
}

interface Posts {
  [id: string]: Post;
}

const posts: Posts = {};

PostRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send(posts);
});

PostRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

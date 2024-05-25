import { randomBytes } from "crypto";
import {
  type Request,
  type Response,
  type NextFunction,
  Router,
} from "express";

export const CommentRouter: Router = Router();

interface Comment {
  id: string;
  content: string;
}

interface Comments {
  [id: string]: Comment[];
}

const commentByPostId: Comments = {};

CommentRouter.get("/posts/:id/comments", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send(commentByPostId[req.params.id] || []);
});

CommentRouter.post("/posts/:id/comments", (req: Request, res: Response, next: NextFunction) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentByPostId[req.params.id] || [];
  const comment: Comment = {id: commentId, content};
  comments.push(comment);
  commentByPostId[req.params.id] = comments;
  res
    .status(201)
    .send(comments);
});
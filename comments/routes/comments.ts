import {
  type Request,
  type Response,
  type NextFunction,
  Router,
} from "express";

export const CommentRouter: Router = Router();

CommentRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send({
      status: true,
      statusCode: 200,
      data: [{ msg: "you get data comment" }],
    });
});

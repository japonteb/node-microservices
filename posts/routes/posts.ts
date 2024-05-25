import {
  type Request,
  type Response,
  type NextFunction,
  Router,
} from "express";

export const PostRouter: Router = Router();

PostRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send({
      status: true,
      statusCode: 200,
      data: [{ msg: "you get data product" }],
    });
});

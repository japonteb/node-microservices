import { type Application, type Router } from "express";
import { CommentRouter } from "./comments";

const _routes: Array<[string, Router]> = [["/comment", CommentRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

import { type Application, type Router } from "express";
import { PostRouter } from "./posts";

const _routes: Array<[string, Router]> = [["/post", PostRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

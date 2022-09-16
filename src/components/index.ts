import { Router } from "express";
import hello from "./hello";

const routes = () => {
    const app = Router();

    hello.route(app);

    return app;
}

export { routes }
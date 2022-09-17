import { Service, Container } from 'typedi';
import { Router } from "express";
import HelloController from "./hello/controller";

export default () => {
    const app = Router();

    // attach each component we want

    // attach hello component
    const helloController = Container.get(HelloController);
    helloController.route(app);

    return app;
}
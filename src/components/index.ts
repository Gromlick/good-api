import { Service } from 'typedi';
import { Router } from "express";
import HelloController from "./hello/route";

@Service()
class Components {
    constructor (
        private readonly hello: HelloController,
    ) {}

    routes() {
        const app = Router();

        this.hello.route(app);

        return app;
    }
}

export default Components;
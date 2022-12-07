import { Service, Container } from 'typedi';
import { Router } from 'express';
import HelloRoute from './hello';

export default () => {
    const app = Router();

    // attach each component we want

    // attach hello component
    const helloRoute = Container.get(HelloRoute);
    helloRoute.route(app);

    return app;
}
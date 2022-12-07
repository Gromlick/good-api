import { Router } from 'express';
import { Service } from 'typedi';
import mid from '@/middleware';
import HelloService from '@/services/hello';

@Service()
class HelloRoute {
    constructor (private readonly helloService: HelloService) {}

    route (app: Router) {
        const route = Router();
        const body = this.helloService.getMessage();
        const headers = {
            'content-type': 'text/plain',
            'content-length': body.length,
        };
    
        app.use('/hello', route);

        route.get('/', mid.logRequest, (req, res) => {
            res.set(headers).status(200).send(body);
        });

        route.head('/', mid.logRequest, (req, res) => {
            res.status(200).set(headers);
        });
    }
}

export default HelloRoute;
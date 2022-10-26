import { Router } from 'express';
import { Service } from 'typedi';
import mid from '@/middleware';
import HelloService from './service';

@Service()
class HelloController {
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
            res.send(body).status(200).set(headers);
        });

        route.head('/', mid.logRequest, (req, res) => {
            res.status(200).set(headers);
        });
    }
}

export default HelloController;
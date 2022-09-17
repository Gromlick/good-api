import { Router } from 'express';
import { Service } from 'typedi';
import mid from '@/middleware';
import HelloService from './service';

@Service()
class HelloController {
    constructor (private readonly helloService: HelloService) {}
    route (app: Router) {
        const route = Router();
    
        app.use('/hello', route);

        route.get('/', mid.logRequest, (req, res) => {
            res.send(this.helloService.getMessage()).status(200);
        });
    }
}

export default HelloController;
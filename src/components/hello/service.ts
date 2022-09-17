import { Service, Container } from 'typedi';
import { Logger } from 'winston';

@Service()
class HelloService {
    constructor() {
        const logger:Logger = Container.get('logger');
        logger.info('well hello!');
    }

    getMessage () {
        return "\nHello World!\n";
    }
}

export default HelloService;
import { Service, Container } from 'typedi';
import { Logger } from 'winston';

@Service()
class HelloService {
    constructor (private readonly logger: Logger) {
        logger = Container.get('logger');
        logger.info('well hello!');
    }

    getMessage () {
        return "\nHello World!\n";
    }
}

export default HelloService;
import { Service, Container } from 'typedi';
import { Logger } from 'winston';
import HelloData from '@/data/hello';

@Service()
class HelloService {
    constructor(private readonly helloData: HelloData) {}

    getMessage () {
        return this.helloData.getMessage();
    }
}

export default HelloService;
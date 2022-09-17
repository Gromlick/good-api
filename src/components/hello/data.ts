import { Service, Container } from 'typedi';
import { Logger } from 'winston';

@Service()
class HelloData {
	constructor() {}

	getMessage() {
		return "\nHello Word\n";
	}
}

export default HelloData;
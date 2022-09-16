import { Container } from 'typedi';
import { Logger } from 'winston'

export default (req, res, next) => {
    const logger:Logger = Container.get('logger');
    logger.info(req.originalUrl + ' accessed');

    next();
}
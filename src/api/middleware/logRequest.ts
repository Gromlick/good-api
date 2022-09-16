import logger from "@/loaders/logger";

export default (req, res, next) => {
    logger.info(req.originalUrl + " accessed");
    next();
}
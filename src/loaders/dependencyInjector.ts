import { Container } from "typedi";
import config from "../config";
import logger from "./logger";

export default () => {
    try {
        logger.info(config);

        Container.set("logger", logger);

        return;
    } catch (err) {
        logger.error("Error loading dependency injector: %o", err);
        throw err;
    }
};
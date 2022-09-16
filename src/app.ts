import "reflect-metadata";
import config from "./config";
import express from "express";
import loader from "./loaders";
// import logger from "./loaders/logger"
import { Container } from 'typedi';
import { Logger } from 'winston';

async function start () {
    const app = express();

    await loader({ app });

    const logger:Logger = Container.get('logger');

    app.listen(config.port, () => {
        logger.info(`
            ***********************************************
            Super Good API listening on port ${config.port}
            ***********************************************
        `);
    });
}

start();
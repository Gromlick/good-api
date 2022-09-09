import "reflect-metadata";
import config from "./config";
import express from "express";
import loader from "./loaders";
import logger from "./loaders/logger"

async function start () {
    const app = express();

    await loader({ app });

    app.listen(config.port, () => {
        logger.info(`
            ***********************************************
            Super Good API listening on port ${config.port}
            ***********************************************
        `);
    });
}

start();
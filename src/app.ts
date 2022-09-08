import config from "./config";
import loader from "./loaders";
import express from "express";
import logger from "./loaders/logger"

async function start () {
    const app = express();

    await loader({ app });

    app.get("/", (req, res) => {
        res.send("\nHello World!\n");
    });

    app.listen(config.port, () => {
        logger.info(`
            ***********************************************
            Super Good API listening on port ${config.port}
            ***********************************************
        `);
    });
}

start();
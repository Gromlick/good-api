import config from "./config.js";
import loader from "./loaders/loader.js";
import express from "express";
import logger from "./loaders/logger.js"

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
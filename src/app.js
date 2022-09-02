import config from "./config.js";
import loader from "./loader.js";
import express from "express";

async function start () {
    const app = express();

    await loader({ app });

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`);
    });
}

start();
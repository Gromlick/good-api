import config from "./config.js";
import express from "express";

async function start () {
    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`);
    });
}

start();
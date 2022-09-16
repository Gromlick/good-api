import express from "express";
import Container from 'typedi';
import Components from "@/components";

export default ({ app }) => {

    // health check
    app.get("/status", (req, res) => {
        res.status(200).end();
    });

    // we're gonna want that proxy traffic
    app.enable("trust proxy");

    // transform body into json obj
    app.use(express.json());

    // load in routes
    const components: Components = Container.get(Components);
    app.use("/", components.routes());

    // catch anything that wasn't found
    app.use((req, res, next) => {
        const err = new Error("Not found");
        err["status"] = 404;
        next(err);
    });

    // error handling
    app.use((err, req, res, next) => {
        res.status(err.status || 500);

        res.json({
            errors: {
                message: err.message
            },
        });
    });
}
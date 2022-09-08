import express from "express";
import diLoader from "./dependencyInjector";
import logger from "./logger";

export default async ({ app }) => {

    await diLoader();
    logger.info("Dependency injector loaded");

    app.enable("trust proxy");
    app.use(express.json());
    logger.info("Express loaded");
}
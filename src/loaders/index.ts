import express from "express";
import diLoader from "./dependencyInjector";
import expressLoader from "./express";
import logger from "./logger";

export default async ({ app }) => {
    await diLoader();
    logger.info("Dependency injector loaded");

    await expressLoader({ app });
    logger.info("Express loaded");
}
import express from "express";
import diLoader from "./dependencyInjector";
import expressLoader from "./express";

import { Container } from 'typedi';
import { Logger } from 'winston';

export default async ({ app }) => {
    await diLoader();
    const logger:Logger = Container.get('logger');
    logger.info("Dependency injector loaded");

    await expressLoader({ app });
    logger.info("Express loaded");
}
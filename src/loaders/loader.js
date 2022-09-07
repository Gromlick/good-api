import express from "express";
import logger from "./logger.js";

export default async ({ app }) => {
    app.enable("trust proxy");

    app.use(express.json());

    logger.info("hi hi hi");
}
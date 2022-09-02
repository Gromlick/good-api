import express from "express";

export default async ({ app }) => {
    app.enable("trust proxy");

    app.use(express.json());
}
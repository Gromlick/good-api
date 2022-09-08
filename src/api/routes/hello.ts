import { Router } from "express";
const route = Router();

export default (app: Router) => {
    app.use("/hello", route);

    route.get("/", (req, res) => {
        res.send("\nHello World!\n").status(200);
    });
}
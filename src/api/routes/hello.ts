import { Router } from "express";
import mid from "../middleware";
const route = Router();

export default (app: Router) => {
    app.use("/hello", route);

    route.get("/", mid.logRequest, (req, res) => {
        res.send("\nHello World!\n").status(200);
    });
}
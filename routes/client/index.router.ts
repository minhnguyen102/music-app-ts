import { Express } from "express";
import { topicRouter } from "./topic.router";

const RouterClient = (app: Express) => {
    app.use("/topics", topicRouter)
}


export default RouterClient;
import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"
import * as database from "./config/database"
import Topic from "./models/topic.model"

const app: Express = express()
const port: number | string  = process.env.PORT || 3000
dotenv.config();

// pug
app.set('views', './views')
app.set('view engine', 'pug')
// end pug

// connect database
database.connect();
// end connect database

app.get('/topics', async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted : false
  })
  console.log(topics);
  res.render("client/pages/topics/index.pug")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
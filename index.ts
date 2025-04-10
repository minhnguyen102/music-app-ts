import dotenv from "dotenv"
import express, { Express } from "express"
import * as database from "./config/database"
import RouterClient from "./routes/client/index.router"

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

// routerClient
RouterClient(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
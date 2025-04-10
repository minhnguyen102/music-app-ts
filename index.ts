import express, { Express, Request, Response } from "express"

const app: Express = express()
const port: number = 3000

// pug
app.set('views', './views')
app.set('view engine', 'pug')
// end pug

app.get('/topics', (req: Request, res: Response) => {
  res.render("client/pages/topics/index.pug")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
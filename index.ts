import express, { Express, Request, Response } from "express"

const app: Express = express()
const port: number = 3000

app.get('/topics', (req: Request, res: Response) => {
  res.send('Trang chủ đề bài hat')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
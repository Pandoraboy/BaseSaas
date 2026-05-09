import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'API Don Pandora funcionando'
  })
})

export default app
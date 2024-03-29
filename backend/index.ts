require("dotenv").config()
import express from 'express'
import routes from "./routes"
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)
/*app.use("/auth", routes.auth)
app.use("/items", routes.items)
app.use("/lists", routes.lists)*/

app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening at ${process.env.PORT} || 4000`)
})
const express = require("express")
const mongoose = require("mongoose")
const categorieRoute = require("./routes/categorieRoute")
const offreRouter = require("./routes/offreRoute")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/offres", offreRouter)
app.use("/categories", categorieRoute)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log("Server running")
    })
  })
  .catch((err) => console.log(err))

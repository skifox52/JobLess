const express = require("express")
const mongoose = require("mongoose")
const ErrorHandler = require("./middlewares/ErrorHandler")
const offreRouter = require("./routes/offreRoute")
const userRouter = require("./routes/userRoute")
const categorieRoute = require("./routes/categorieRoute")
const candidatureRoute = require("./routes/candidatureRoute")
const authRouter = require("./routes/authRouter")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/offres", offreRouter)
app.use("/users", userRouter)
app.use("/categories", categorieRoute)
app.use("/candidatures", candidatureRoute)
app.use("/auth", authRouter)

app.use("/*", (req, res) => {
  res.status(404).json("Not found!")
})
app.use(ErrorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log("Server running")
    })
  })
  .catch((err) => console.log(err))

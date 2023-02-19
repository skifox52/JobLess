const express = require("express")
const mongoose = require("mongoose")

const categorieRoute = require("./routes/categorieRoute")

const ErrorHandler = require("./middlewares/ErrorHandler")

const offreRouter = require("./routes/offreRoute")
const userRouter = require("./routes/userRoute")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/offres", offreRouter)
<<<<<<< HEAD
app.use("/users", userRouter)
=======

app.use("/categories", categorieRoute)


>>>>>>> 88f249c7bc3d97d11758c6a597f997a676df1302
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

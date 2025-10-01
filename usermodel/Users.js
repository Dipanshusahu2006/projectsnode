const mongoose = require("mongoose");

  const  Usersmodel = new mongoose.Schema({
      username: String,
      email : String,
      phone: String,
      password : String
  })

  const Userss = new mongoose.model("myusemodel",Usersmodel)
  module.exports = Userss
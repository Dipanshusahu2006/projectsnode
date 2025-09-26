const express = require("express");
const  Userss = require("../usermodel/Users");
const Routes = express.Router();

 Routes.post("/Userpost", async(req,res)=>{
    const Myusers = new Userss(req.body);
      const Savedata = await Myusers.save();
      if (Savedata) {
      res.status(201).json({
        message: "User saved successfully",
        data: Savedata
      });
    } else {
      res.status(400).json({
        message: "User not saved "
      });
    }
 })
  Routes.get("/Usersget",async(req,res)=>{
     const Data = await Userss.find();
      res.json({ Data: Data });
    })

    module.exports = Routes;

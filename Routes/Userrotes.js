const express = require("express");
const  Userss = require("../usermodel/Users");
const UserRouter = express.Router();

 UserRouter.post("/Userpost", async(req,res)=>{
    const Myusers = new Userss(req.body);
      const Savedata = await Myusers.save();
      if (Savedata) {
      res.status(200).json({
        message: "User saved successfully",
        data: Savedata
      });
    } else {
      res.status(400).json({
        message: "User not saved "
      });
    }
 })

  UserRouter.get("/Usersget",async(req,res)=>{
     const Data = await Userss.find();
      res.json({ Data: Data });
    })

    module.exports = UserRouter;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")


require("./Mongodp/mongodpconnect")


const server = express();

server.use(cors( origin = "*" ));
server.use(bodyParser.json()); 

server.get("/", (req, res) => {
  res.send("🚀 Hello! Your Vercel server is working.");
});

const UserRouter = require("./Routes/Userrotes");

server.use("/user", UserRouter);

const port = 8000;
 
server.listen(port,(req,res)=>{
    console.log(`server runnin at http://localhost:${port}`);
})
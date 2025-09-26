const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const Routes = require("./Routes/Userrotes");
require("./Mongodp/mongodpconnect")


const server = express();

server.use(cors({ origin: "*" }));
server.use(bodyParser.json()); 

server.use("/Users", Routes);

 
const port = 8000;


server.listen(port,(req,res)=>{
    console.log(`Server is running at http://localhost:${port}`);
});


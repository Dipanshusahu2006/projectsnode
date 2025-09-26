        const mongoose = require("mongoose");
        
        mongoose.connect("mongodb+srv://dipanshu123456v7_db_user:TUlwwVixPATpNORo@nodeculster.rpxhsuj.mongodb.net/?retryWrites=true&w=majority&appName=Nodeculster",{
                family :  4
        })
        .then (()=>console.log("mongooesdp connected succesfully"))
        .catch( console.log("server are not working"))

        



const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-buddyapp:wlsl4378@cluster0-ptcl2.mongodb.net/test", {useNewUrlParser:true, useUnifiedTopology: true}) //콤마 사이에는 DB 주소가 들어간다. 
    .then(() => console.log ("MongoDB is successfully connected!"))
    .catch(err => console.log(error));
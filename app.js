let express = require("express");
let app = express();
let path = require("path");

app.use(express.static("public"))

app.listen(process.env.PORT || 5000)
console.log("Running at Port 5000")

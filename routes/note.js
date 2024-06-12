const express = require("express");
const fs = require("fs");
const route = express.Router();
const dataPathName = "./db/db.json";

route.get("/", (req, res) => {
    fs.readFile(dataPathName, "utf8", (err, data) => {
        if(err){
            console.log("Fail in reading file");
            res.status(500).send("Interal issue");
        }else{
            res.json(JSON.parse(data));
        }
    });
});

module.exports = route;
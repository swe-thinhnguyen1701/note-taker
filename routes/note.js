const express = require("express");
const Crud = require("../helpers/Crud");
const fs = require("fs");
const route = express.Router();

const crud = new Crud();
const DATA_BASE = crud.getDataBase();

route.get("/", (req, res) => {
    // fs.readFile(dataPathName, "utf8", (err, data) => {
    //     if(err){
    //         console.log("Fail in reading file");
    //         res.status(500).send("Interal issue");
    //     }else{
    //         res.json(JSON.parse(data));
    //     }
    // });
    res.json(DATA_BASE);
});

route.post("/", (req, res) => {
    console.log(req.body);
});

module.exports = route;
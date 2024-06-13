const express = require("express");
const route = express.Router();
const Crud = require("../helpers/Crud");
const crud = new Crud();


route.get("/", (req, res) => {
    const DATA_BASE = crud.getDataBase();
    res.json(JSON.parse(DATA_BASE));
});

route.post("/", (req, res) => {
    console.log(req.body);
});

module.exports = route;
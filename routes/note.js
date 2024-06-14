const express = require("express");
const route = express.Router();
const Crud = require("../helpers/Crud");
const crud = new Crud();


route.get("/", (req, res) => {
    const DATA_BASE = crud.getDataBase();
    res.json(DATA_BASE);
});

route.post("/", (req, res) => {
    const status = crud.insert(req.body);
    console.log(req.body);
    console.log(status);
});

route.delete("/:id", (req, res) => {
    const id = req.body.id;
    crud.delete(id);
});

module.exports = route;
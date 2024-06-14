const { json } = require("express");
const data= require("../db/db.json");
const FileReader = require("./FileReader");
const FileWriter = require("./FileWriter");

const fileReader = new FileReader();

class Crud {
    constructor() { 
        this.DATA_BASE = [];
        this.loadData();
    }

    async loadData () {
        try{
            const data = await fileReader.getData();
            this.DATA_BASE = JSON.parse(data) || [];
            // console.log(`fetching DATA: ${this.DATA_BASE}`);
        }catch (error){
            console.log("LOADING data fails\n", error);
            this.DATA_BASE = [];
        }
    }

    insert(data) {
        this.data = data;
        this.data.id = this.generateNewId();
        this.DATA_BASE.push(this.data);

        this.writeDataBase();

        return `${this.data.title} is ADDED`;
    }

    delete (id){
        if(id < this.DATA_BASE.length || id >= this.DATA_BASE.length)
            return `Item with id(${id}) not found`;
        const updateDB = this.DATA_BASE.filter(data => data.id !== id);
        console.log(JSON.stringify(updateDB));
        this.DATA_BASE = updateDB;

        this.writeDataBase();

        return `Item with ID(${id}) is DELETED`;
    }

    getDataBase() {
        this.loadData();
        return this.DATA_BASE;
    }

    generateNewId(){
        return `${this.DATA_BASE.length}`;
    }

    async writeDataBase(){
        const fileWriter = new FileWriter(JSON.stringify(this.DATA_BASE));
        await fileWriter.saveData();
    }
}

module.exports = Crud;
const data= require("../db/db.json");
const FileReader = require("./FileReader");
const FileWriter = require("./FileWriter");

class Crud {
    constructor() { 
        this.DATA_BASE = [];
        this.loadData();
    }

    async loadData () {
        const fileReader = new FileReader();
        try{
            const data = await fileReader.getData();
            this.DATA_BASE = data || [];
        }catch (error){
            console.log("LOADING data fails\n", error);
            this.DATA_BASE = [];
        }
    }

    insert(data) {
        this.data = data;
        this.data.id = generateNewId();
        this.DATA_BASE.push(this.data);

        return `${this.data.title} is ADDED`;
    }

    delete (id){
        if(id < this.DATA_BASE.length || id >= this.DATA_BASE.length)
            return `Item with id(${id}) not found`;
        const lastIdx = this.DATA_BASE.length - 1;
        this.DATA_BASE[id] =  this.DATA_BASE[lastIdx];
        this.DATA_BASE.pop();
        return `Item with ID(${id}) is DELETED`;
    }

    getDataBase() {
        return this.DATA_BASE;
    }

    generateNewId(){
        return this.DATA_BASE.length;
    }

    writeDataBase(){
        const fileWriter = new FileWriter(this.DATA_BASE);
        fileWriter.saveData();
    }
}

module.exports = Crud;
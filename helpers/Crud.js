const data = require("../db/db.json");
const FileReader = require("./FileReader");
const FileWriter = require("./FileWriter");
const idGenerator = require("./idGenerator");

const fileReader = new FileReader();

/**
 * Class representing CRUD operations.
 */
class Crud {
    constructor() {
        /** 
         * @property {Array} DATA_BASE - Array to hold database items.
         */
        this.DATA_BASE = [];
        this.loadData();
    }

    /**
    * Asynchronously loads data from a file and initializes the DATA_BASE property.
    * @async
    */
    async loadData() {
        try {
            const data = await fileReader.getData();
            this.DATA_BASE = JSON.parse(data) || [];
        } catch (error) {
            this.DATA_BASE = [];
        }
    }

    /**
     * Inserts a new item into the database.
     * @param {Object} data - The data object to insert.
     * @param {string} data.title - The title of the data item.
     * @returns {string} Confirmation message indicating the item is added.
     */
    insert(data) {
        this.data = data;
        const id = idGenerator();
        this.data.id = id;
        this.DATA_BASE.push(this.data);

        this.writeDataBase();

        return `${this.data.title} is ADDED`;
    }

    /**
     * Deletes an item from the database by its ID.
     * @param {string} id - The ID of the item to delete.
     * @returns {string} Confirmation message indicating the item is deleted.
     */
    delete(id) {
        const updateDB = this.DATA_BASE.filter(data => data.id !== id);
        this.DATA_BASE = updateDB;

        this.writeDataBase();

        return `Item with ID(${id}) is DELETED`;
    }


    /**
     * Retrieves the current state of the database.
     * @returns {Array} The current database array.
     */
    getDataBase() {
        this.loadData();
        return this.DATA_BASE;
    }

    /**
     * Asynchronously writes the current state of the database to a file.
     * @async
     */
    async writeDataBase() {
        const fileWriter = new FileWriter(JSON.stringify(this.DATA_BASE));
        await fileWriter.saveData();
    }
}

module.exports = Crud;
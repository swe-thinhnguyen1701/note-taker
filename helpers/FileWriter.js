const fs = require("fs");

const DESTINATION = "../db/db.json";

class FileWriter {
    constructor(data) {
        this.data = data;
    }

    saveData() {
        fs.writeFile(DESTINATION, this.data, error => {
            error ? console.log("ERROR while writing") : console.log(`new data ${this.data.title} is saved!`);
        })
    }
}

module.exports = FileWriter;
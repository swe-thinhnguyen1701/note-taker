const fs = require("fs");

const DESTINATION = "./db/db.json";

class FileWriter {
    constructor(data) {
        this.data = data;
        // console.log(this.data);
    }

    saveData() {
        fs.writeFile(DESTINATION, this.data, error => {
            error ? console.log("Error while writing file") : console.log("New data is saved");;
        });
    }
}

module.exports = FileWriter;
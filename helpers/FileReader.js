const fs = require("fs");
const file = "../db/db.json";


class FileReader {
    constructor() { }

    getData() {
        return fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                console.log("Error occurs while reading file");
            }
            return data;
        });
    }
}

module.exports = FileReader;
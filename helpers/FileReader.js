const { readFile } = require("node:fs/promises");
const file = "./db/db.json";


class FileReader {
    constructor() { }

    async getData() {
        try{
            const data = await readFile(file, { encoding: "utf8"});
            return JSON.parse(data);
        }catch(err){
            console.log("ERROR occurs while reading file\n", err);
            return `[]`;
        }
    }
}

module.exports = FileReader;
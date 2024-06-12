const express = require("express");
const app = express();
const notes = require("./routes/note");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/notes", notes);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
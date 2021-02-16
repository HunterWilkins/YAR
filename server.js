const express = require("express");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log("Yar is listening on port " + PORT);
    }); 
})

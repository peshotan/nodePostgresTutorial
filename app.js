const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db_pool/poolconfig");
const monsters = require("./routes/monsters_route");
const heros = require("./routes/heros_routes");
const winners = require("./routes/winners_route");

const app = express();

app.use(bodyParser.json());

app.use("/monsters", monsters);
app.use("/heros", heros);
app.use("/winners", winners)

app.use((err, req, res, next) => {
   console.log(err);
   res.json(err)
});


module.exports = app;
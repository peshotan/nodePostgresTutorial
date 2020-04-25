const { Router } = require("express");
const pool = require("../db_pool/poolconfig");

const router = Router();

// routes

router.get("/", (req, res, next) => {
    pool.query("SELECT *, heros.strength AS heros_strength FROM winners JOIN heros ON winners.hero=heros.name", (err, response) => {
       if (err) return next(err);
       res.json(response.rows);
    });
});




module.exports = router;
const { Router } = require("express");
const pool = require("../db_pool/poolconfig");

const router = Router();

router.get("/", (req, res, next) => {
   pool.query("SELECT * FROM heros", (err, response) => {
      if (err) return next(err);
      res.json(response.rows);
   });
});

router.post("/", (req, res, next) => {
   const { name, strength } = req.body;
   pool.query("INSERT INTO heros(name, strength) VALUES ($1, $2)", [name, strength], (err, response) => {
      if (err) return  next(err);
      res.redirect("/heros");
   });
});

router.put("/:id", (req, res, next) => {
   const { id } = req.params;

   // array with names of all possible keys
    const all_names = ['name', 'strength'];
    const existing_key_names = [];

    all_names.forEach((name) => {
       if (req.body[name]) existing_key_names.push(name);
    });

    console.log(existing_key_names);

    existing_key_names.map((name, index) => {
        pool.query(`UPDATE heros SET ${name}=($1) WHERE id=($2)`, [req.body[name], id] , (err, response) => {
           if (err) return next(err);
           if(index === existing_key_names.length - 1) res.redirect("/heros");
        });
    })

});

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    pool.query("DELETE FROM heros WHERE id=$1", [id], (err, response) => {
        if (err) return next(err);
        res.redirect("/heros");
    });
})

module.exports = router;
const { Router } = require("express");
const pool = require("../db_pool/poolconfig");

const router = Router();


router.get("/", (req, res, next) => {
    //run a psql query to get all the monsters
    pool.query("SELECT * FROM monsters", (err, response) => {
        if (err) return next(err);
        res.json(response.rows);
    })
})


router.post("/", (req, res, next) => {
    const { name, behaviour } = req.body;

    console.log(name, behaviour)

    pool.query("INSERT INTO monsters(name, behaviour) VALUES ($1, $2)", [name, behaviour], (err, response) => {
        if (err) return next(err);
        res.redirect("/monsters");
    });

});


router.put("/:id", (req, res, next) => {
   const { id } = req.params;

   const all_names = ["name", "personality"];
   const existing_key_names = [];

   all_names.forEach(key => {
       if (req.body[key]) existing_key_names.push(key);
   })

    console.log(existing_key_names);

   existing_key_names.map((name, i) => {
       pool.query(`UPDATE monsters SET ${name}=($1) WHERE id=($2)`, [req.body[name], id], (err, response) => {
           if (err) return next(err);
           if (i === existing_key_names.length - 1) {
               console.log("this gets hit");
               res.redirect("/monsters");
           }
       });
   })
});

router.delete("/:id", (req, res, next) => {
    const {id} = req.params;
    pool.query("DELETE FROM monsters WHERE id=$1", [id], (err, response) => {
        if (err) return next(err);
        res.redirect("/monsters");
    })
});




module.exports = router;
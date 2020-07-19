const router = require("express").Router();
let Brand = require("../models/brand");

router.route("/").get((req, res) => {
  Brand.find()
    .then((brands) => res.json(brands))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newBrand = new Brand({ name });

  newBrand
    .save()
    .then(() => res.json("Brand added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete
router.route("/:id").delete((req, res) => {
  Brand.findByIdAndDelete(req.params.id)
    .then(() => res.json("Brand deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

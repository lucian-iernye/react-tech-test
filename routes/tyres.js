const router = require("express").Router();
let Tyre = require("../models/tyre");

router.route("/").get((req, res) => {
  Tyre.find()
    .then((tyres) => res.json(tyres))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const brand = req.body.brand;
  const description = req.body.description;
  const width = Number(req.body.width);
  const profile = Number(req.body.profile);
  const rim = Number(req.body.rim);
  const speed = req.body.speed;
  const date = Date.parse(req.body.date);
  const imgUrl = req.body.imgUrl;

  const newTyre = new Tyre({
    name,
    type,
    brand,
    description,
    width,
    profile,
    rim,
    speed,
    date,
    imgUrl,
  });

  newTyre
    .save()
    .then(() => res.json("Tyre added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//show
router.route("/:id").get((req, res) => {
  Tyre.findById(req.params.id)
    .then((tyre) => res.json(tyre))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete
router.route("/:id").delete((req, res) => {
  Tyre.findByIdAndDelete(req.params.id)
    .then(() => res.json("Tyre deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update
router.route("/update/:id").post((req, res) => {
  Tyre.findById(req.params.id)
    .then((tyre) => {
      tyre.name = req.body.name;
      tyre.type = req.body.type;
      tyre.brand = req.body.brand;
      tyre.description = req.body.description;
      tyre.width = Number(req.body.width);
      tyre.profile = Number(req.body.profile);
      tyre.rim = Number(req.body.rim);
      tyre.speed = req.body.speed;
      tyre.date = Date.parse(req.body.date);
      tyre.imgUrl = req.body.imgUrl;

      tyre
        .save()
        .then(() => res.json("Tyre updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

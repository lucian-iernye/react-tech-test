const mongoose = require("mongoose");
// const Tyre = require("./tyre");

// we create the schema (table)
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

// this is to prevent to remove the brand if he still have tyres added asociated with that particulary id
// brandSchema.pre("remove", function (next) {
//   Tyre.find({ brand: this.id }, (err, tyres) => {
//     if (err) {
//       next(err);
//     } else if (tyres.length > 0) {
//       next(new Error("This brand has tyres still!"));
//     } else {
//       next();
//     }
//   });
// });

// we export the schema created
module.exports = mongoose.model("Brand", brandSchema);

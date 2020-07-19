// we initialize the db
const mongoose = require("mongoose");

// we create the schema (table)
const tyreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  width: {
    type: Number,
    required: true,
  },
  profile: {
    type: Number,
    required: true,
  },
  rim: {
    type: Number,
    required: true,
  },
  speed: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // coverImage: {
  //   type: Buffer,
  //   required: true,
  // },
  // coverImageType: {
  //   type: String,
  //   required: true,
  // },
  // brand: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Brand",
  // },
});

// to create a virtual variable
// tyreSchema.virtual("coverImagePath").get(function () {
//   if (this.coverImage != null && this.coverImageType != null) {
//     return `data:${
//       this.coverImageType
//     };charset=utf-8;base64,${this.coverImage.toString("base64")}`;
//   }
// });

// we export the schema created
module.exports = mongoose.model("Tyre", tyreSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Mongoose schema
// https://mongoosejs.com/docs/guide.html#definition
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

// Convert the schema into a model we can work with
// which in this case is exported as a node module
module.exports = mongoose.model("Data", DataSchema);

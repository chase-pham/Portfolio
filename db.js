const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yourDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = { Contact }; // Export models as needed

const express = require("express");
const router = express.Router();
const { Contact } = require("./db"); // Import Mongoose model
console.log("Routes file is loaded");

router.post("/submit-form", async (req, res) => {
  console.log("Form submit route hit", req.body);
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newContact = new Contact({ name, email, message });
    console.log("New contact before saving:", newContact);
    await newContact.save();

    res.redirect("/thank-you.html");
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).send("There was an error processing your request.");
  }
});

module.exports = router;

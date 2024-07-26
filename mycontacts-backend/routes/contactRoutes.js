const express = require("express");
const router = express.Router();
const {getContacts, deleteContact,createContact,getContact,updateContact} = require("../controllers/contatController");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;

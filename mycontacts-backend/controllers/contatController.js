//@desc Get all contacts
//@route GET /api/contatcs
//@acess public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
  }

//@desc Create new contact
//@route POST /api/contatcs
//@acess public
const createContact = (req, res) => {
    res.status(201).json({ message: "Create contacts" });
  }

//@desc Get a contact
//@route GET /api/contatcs/:id
//@acess public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  }

//@desc Update contact
//@route PUT /api/contatcs/:id
//@acess public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
  }

//@desc Delete contact
//@route DELETE /api/contatcs/:id
//@acess public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
  }

  module.exports = {getContacts,getContact, createContact,updateContact,deleteContact};
const express = require("express");
const router = express.Router();

const Note = require("../../models/Note");

router.get("/", (req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => err);
});

router.post("/", (req, res) => {
  const newNote = new Note({
    note: req.body.note
  });

  newNote
    .save()
    .then(item => res.json(item))
    .catch(err => err);
});

router.delete("/:id", (req, res) => {
  Note.findById(req.params.id).then(note =>
    note
      .remove()
      .then(() => res.send("Successfully deleted"))
      .catch(err => res.status(404).json({ error: err }))
  );
});

module.exports = router;

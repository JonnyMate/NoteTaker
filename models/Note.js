const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  note: { type: String, required: true }
});

module.exports = mongoose.model("Note", NoteSchema);

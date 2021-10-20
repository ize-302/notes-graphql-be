import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String,
  body: String,
});

const Note = mongoose.model("Note", noteSchema);

export default Note;

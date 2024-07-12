const Note = require("../model/note");
const codeHandler = require("../util/codeHandler");

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    if (notes.length === 0) {
      return codeHandler.handle404Note(res);
    }
    return codeHandler.handle200Success(res, notes);
  } catch (error) {
    console.error(error);
    return codeHandler.handle500Error(res);
  }
};

exports.postNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      userId: req.userId,
    });
    await note.save();
    codeHandler.handle201Success(res, note);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
};

exports.putNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return codeHandler.handle404NoteById(res);
    }
    if (note.userId !== req.userId) {
      return codeHandler.handle403Error(res);
    }
    note.title = req.body.title;
    note.content = req.body.content;
    await note.save();
    codeHandler.handle200Success(res, note);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
};

exports.deleteNoteById = async (req, res) => {
  try {
    console.log("Trying to delete note with id:", req.params.id);
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      console.log("Note not found");
      return codeHandler.handle404NoteById(res);
    }
    if (note.userId !== req.userId) {
      console.log("Unauthorized user");
      return codeHandler.handle403Error(res);
    }
    console.log("Removing note");
    await note.destroy();
    console.log("Note removed successfully");
    codeHandler.handle204Success(res);
  } catch (error) {
    console.error("Error deleting note:", error);
    codeHandler.handle500Error(res);
  }
};

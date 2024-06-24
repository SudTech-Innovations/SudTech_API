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

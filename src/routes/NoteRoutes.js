const { NoteModel } = require("../db");

module.exports = (app) => {
  app.post("/notes", async (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        message: "title and content required",
      });
    }
    if (title.trim().length > 50) {
      return res.status(400).json({
        message: "title is too long",
      });
    }
    const note = await NoteModel.create({
      title: title.trim(),
      content: content.trim(),
    });
    return res.status(201).json({
      message: "Note created",
      data: note,
    });
  });
};

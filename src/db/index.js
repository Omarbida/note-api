const mongoose = require("mongoose");
const NoteSchema = require("./NotesModel");
const UserSchema = require("./userModel");
const SessionSchema = require("./SessionModel");
module.exports = {
  connect: () => {
    mongoose
      .connect(process.env.DB_HOST)
      .then(() => console.log("Connected to mongoDB"))
      .catch((err) => console.log(err));
  },
  NoteModel: NoteSchema(mongoose),
  UserModel: UserSchema(mongoose),
  SessionModel: SessionSchema(mongoose),
};

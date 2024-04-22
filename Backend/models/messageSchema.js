import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: [3, "name must contain at Least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: [validator.isEmail, "please provide valid email!"],
  },
  subject: {
    type: String,
    required: [true, "Please provide subject"],
    minLength: [5, "subject must contain at Least 5 characters!"],
  },
  message: {
    type: String,
    requiredd: [true, "Please write message"],
    minLength: [10, "message must contain at Least 10 characters!"],
  },
});


export const Message = mongoose.model("Message",messageSchema)
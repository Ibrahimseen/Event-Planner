import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if ((!name || !email, !subject || !message)) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required!",
      });
    }
    await Message.create({
      name,
      email,
      subject,
      message,
    });
    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = "";

      if (error.errors.name) {
        errorMessage += error.errors.name.message + "";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + "";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + "";
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + "";
      }
      res.status(500).json({
        success: false,
        errorMessage,
      });
    }
    res.status(500).json({
      success: false,
      message: "unknown Error",
    });
  }
};

import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";
import twilio from "twilio";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  // ✅ Load Twilio env vars at runtime
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhoneNumber) {
    console.error("Twilio ENV:", { accountSid, authToken, twilioPhoneNumber });
    return next(new ErrorHandler("Twilio credentials are missing. Check your environment variables.", 500));
  }

  const client = new twilio(accountSid, authToken);

  // Save message to DB
  await Message.create({ firstName, lastName, email, phone, message });

  // Send SMS
  try {
    await client.messages.create({
      body: `Appointment Request from ${firstName} ${lastName} (${email}, ${phone}): ${message}`,
      from: twilioPhoneNumber,
      to: "+918077253544",
    });
  } catch (error) {
    console.error("Twilio SMS Error:", error.message, error.code);
    return next(new ErrorHandler(`Failed to send SMS: ${error.message}`, 500));
  }

  res.status(200).json({
    success: true,
    message: "Message Sent Successfully!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});

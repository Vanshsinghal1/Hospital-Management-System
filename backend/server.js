import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import cloudinary from "cloudinary";
import app from "./app.js";

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

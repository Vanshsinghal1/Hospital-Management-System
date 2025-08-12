import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' }); 

import cors from "cors";
import cookieParser from "cookie-parser";
import app from "./app.js";
import cloudinary from "cloudinary";

// If your app is behind a proxy (e.g. when deployed on some hosts), enable trust proxy
// so that secure cookies and origin detection work correctly.
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// CORS: allow your frontend origins (dev + deployed)
const allowedOrigins = [ // local dev frontend
  "https://hospital-management-system-4ivh.vercel.app" // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin like mobile apps or curl
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy: This origin is not allowed."));
      }
    },
    credentials: true, // allow cookies (Access-Control-Allow-Credentials)
  })
);

// If you use cookies to store session / auth, parse them
app.use(cookieParser());

// Start the server with fallback port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

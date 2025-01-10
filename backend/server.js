const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig.js");

const authRoute = require("./routes/authRoutes");
// const authRoute = require("./routes/authRoutes")
const userRoute = require("./routes/userRoutes.js")
dotenv.config();

const port = process.env.PORT;

const allowedOrigins = [
    process.env.BASE_URL,
    process.env.ALTER_URL,
    process.env.VERCEL_URL,
  ];
  app.use(express.json())
  app.use(express.static(path.join(__dirname, "assets")));
  // app.use(cors({
  //   origin: '*'
  // }));
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true
  }));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Middleware to set COOP headers
// app.use((req, res, next) => {
//   res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//   res.setHeader("Cross-Origin-Embedder-Policy", "require-corp"); // Optional but may be necessary
//   next();
// });

app.get("/", (req, res) => {
    res.send("Welcome to Anand PKC");
  });
  

app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", authRoute);
// app.use("/api/v1", client);

connectDB();

app.listen(port,"0.0.0.0", () => {
  console.log(`Server up and running on port ${port}`);
});

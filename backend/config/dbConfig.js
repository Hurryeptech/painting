const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGODB_URI, {
      ssl: true,
      tlsAllowInvalidCertificates: false, // Ensure this is set according to your certificate policy
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

module.exports = connectDB;

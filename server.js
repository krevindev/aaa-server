require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const timeout = require("connect-timeout");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://aaa-db-monitor-rzaw.vercel.app"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use(cors());
app.use(timeout("30s"));
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/", userRoutes);
// app.get("/", (req, res) => {
//   res.send("HELLO");
// });

// Error Handler
app.use(errorHandler);

// Start the server
// const PORT = process.env.PORT || 6700;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Export the app for Vercel to use
// // // app.listen(6700, () => console.log("Listening..."));

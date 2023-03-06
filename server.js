const express = require("express");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const path = require("path");
const connectDB = require("./DB/connect");
const invoiceRouter = require("./Routers/invoiceRouter");

const app = express();

// middleware
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());

// routes
app.use("/api/v1/invoices", invoiceRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// port variable
const port = process.env.PORT || 5000;

// server start function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

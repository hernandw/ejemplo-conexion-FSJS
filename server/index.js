const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");


/* import express from "express";
import router from "./routes/routes.js"; */
const app = express();
const port = process.env.port || 3005;


//Middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/", router);


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})
import express from "express";

import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

// route
import initRoute from "./src/routes";


// connect db : sequelize
const connectDB = require("./connect_db");
connectDB();

const app = express();


app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
}));

//CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoute(app);



const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
    console.log('Server is start on port = ', listener.address().port);
});

require("dotenv").config();

const express = require("express");
const app = express();

const router = require("./api/routes/posts");

app.use(express.json());
app.use(router);

module.exports = app;

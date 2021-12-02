const express = require("express");
const app = express();
const path = require("path");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares

// routes
const indexRoutes = require("./routes/index");
app.use('/', indexRoutes);

const detalleMenu = require("./routes/detalleMenu");
app.use('/detalle', detalleMenu);

// Static files
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

module.exports = app;
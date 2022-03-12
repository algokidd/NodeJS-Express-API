const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message : "Server is Live!"
    });
});


module.exports = app;
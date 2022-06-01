const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/user");

mongoose.connect('mongodb+srv://node-rest:node-rest@cluster0.ss8prra.mongodb.net/?retryWrites=true&w=majority');
//const { json } = require("body-parser");
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
})

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);


// app.use((req, res, next) => {
//     const error = new Error('Not Found!');
//     error.status = 404;
//     next(error);
// });

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
});

module.exports = app;
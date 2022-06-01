const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;
// const swaggerUi = require('swagger-ui-express'),
//     swaggerDocument = require('./openapi.json');


const server = http.createServer(app);
// app.use(
//     '/',
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerDocument)
// );
server.listen(port);

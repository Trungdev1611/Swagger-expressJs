// Import required packages
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./SwagerConfig"); //cấu hình swager trong file Swager config
//router
const routerUser = require("./routes/userRouter");

// Create a new Express app
const app = express();
app.use(express.json());
// Initialize Swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Configure the app to use Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    swaggerOptions: { tagsSorter: "alpha" },
  }), //explorer: true sẽ show thanh searchbar,
  swaggerUi.setup(swaggerDocs)
);

app.use("", routerUser);

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

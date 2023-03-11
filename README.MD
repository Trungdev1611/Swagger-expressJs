1. Để sử dụng Swagger trong dự án ta cần cài đặt swagger-jsdoc và swagger-express
   const swaggerJsDoc = require("swagger-jsdoc");
   const swaggerUi = require("swagger-ui-express");

2. Tạo 1 file Swagger option với cấu hình swagger
3. sau khi cấu hình xong ta import file cấu hình đó vào index.js
   / Initialize Swagger-jsdoc
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

4. Tạo 1 file SwaggerAnotation.yaml để định thông tin cho từng endpoint

5. Lưu ý trong file SwaggerConfig.js dòng này

apis: ["./SwagerAnotation.yaml", "./routes/*.js"],

đối số thứ 2 chỉ đường dẫn tương đối đến nơi chứa các router enpoint

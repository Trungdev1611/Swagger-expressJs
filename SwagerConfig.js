// Define the Swagger options - Cái này cấu hình Swager
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", //phải xác định phiên bản cho nó, có nhiều phiên bản
    info: {
      title: "My API", //title của Swager - tùy ý
      version: "1.0.0", // version - tùy ý (example v1, v2, v3)
      description: "My API documentation", //miêu rả
    },
    servers: [
      {
        url: "http://localhost:3000", //server chạy
        description: "Development server", //miêu tả
      },
    ],
  },
  // apis: ["index.js"], // file main
  //   apis: ["./routes/*.js"], //tất cả các file js trong thư mục routes  -

  // vì ta tạo SwagerAnotation ra 1 file riêng nên ta thêm một đối số thứ 1 là đường dẫn vào value in apis key
  apis: ["./SwagerAnotation.yaml", "./routes/*.js"],
};

module.exports = swaggerOptions;

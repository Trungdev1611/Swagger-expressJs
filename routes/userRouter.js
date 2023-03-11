const express = require("express");
const app = express();
const routerUser = express.Router();

routerUser.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];

  res.json(users);
});

routerUser.post("/users", (req, res) => {
  console.log("reqbody", req.body);
  const reqdata = req.body;
  res.json(reqdata);
});
module.exports = routerUser;

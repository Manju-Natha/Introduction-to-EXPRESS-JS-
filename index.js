const express = require("express");

const app = express();

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today Date ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3002);

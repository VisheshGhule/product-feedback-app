const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(4200, '0.0.0.0', () => {
  console.log("Running on 4200");
});

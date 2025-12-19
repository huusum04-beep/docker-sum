const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('<h1>PM1_Cuoi ky_Nguyen Thanh Thuan</h1>');
});

app.listen(port, () => {
  console.log(`App dang chay tai port ${port}`);
});
console.log("App version 2.0 - CI/CD Triggered");
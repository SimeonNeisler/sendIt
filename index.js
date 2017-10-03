const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'There'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, () => {
  console.log("Server uplink established");
});

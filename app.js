const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("Hello World!"));

res.write("Hello World! 2");

app.listen(port);
console.log(`Test Repo App running on http://localhost:${port}`);

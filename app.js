import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
var app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname,"src")));
app.get('/', function (req, res) {
  res.sendFile("index.html");
})

app.listen(port);
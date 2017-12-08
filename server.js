const http = require('http');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('App listening on port 3000'))
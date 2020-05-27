const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 6000;
const app = express();

app.use('/', serveStatic(path.join(__dirname, 'dist')));

app.listen(PORT, console.log(`Server listen on port : ${PORT}`));
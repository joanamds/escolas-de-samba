const express = require('express');
const { escolasRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/escolas', escolasRouter);
// app.use('/escolas/rj', rjRouter);
// app.use('/escolas/sp', spRouter);

module.exports = app;
const express = require('express');
const { escolasController } = require('../controllers');

const escolasRouter = express.Router();

escolasRouter.get('/', escolasController.listAllSchools);
escolasRouter.get('/search', escolasController.searchSchools);

module.exports = escolasRouter;
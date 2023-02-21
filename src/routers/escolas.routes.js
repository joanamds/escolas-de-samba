const express = require('express');
const { escolasController } = require('../controllers');

const escolasRouter = express.Router();

escolasRouter.get('/', escolasController.listAllSchools);

module.exports = escolasRouter;
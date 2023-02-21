const express = require('express');
const { rjController } = require('../controllers');

const rjRouter = express.Router();

rjRouter.get('/', rjController.listAllSchoolsRj);

module.exports = rjRouter;
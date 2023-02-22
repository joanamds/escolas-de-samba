const express = require('express');
const { rjController } = require('../controllers');

const rjRouter = express.Router();

rjRouter.get('/', rjController.listAllSchoolsRj);
rjRouter.get('/:id', rjController.getSchoolByIdRj);

module.exports = rjRouter;
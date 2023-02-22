const express = require('express');
const { spController } = require('../controllers');

const spRouter = express.Router();

spRouter.get('/', spController.listAllSchoolsSp);
spRouter.get('/search', spController.searchSchoolsSp);
spRouter.get('/:id', spController.getSchoolByIdSp);

module.exports = spRouter;
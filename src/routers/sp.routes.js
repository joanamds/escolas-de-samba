const express = require('express');
const { spController } = require('../controllers');

const spRouter = express.Router();

spRouter.get('/', spController.listAllSchoolsSp);

module.exports = spRouter;
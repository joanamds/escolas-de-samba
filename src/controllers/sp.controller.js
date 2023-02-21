const { spService } = require('../services');
const camelize = require('camelize');

const listAllSchoolsSp = async (_req, res) => {
  const { message } = await spService.getAllSchools();

  res.status(200).json(camelize(message))
}

module.exports = {
  listAllSchoolsSp,
}
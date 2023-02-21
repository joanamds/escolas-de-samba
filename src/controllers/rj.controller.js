const { rjService } = require('../services');
const camelize = require('camelize');

const listAllSchoolsRj = async (_req, res) => {
  const { message } = await rjService.getAllSchools();

  res.status(200).json(camelize(message))
}

module.exports = {
  listAllSchoolsRj,
}
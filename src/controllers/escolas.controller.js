const { escolasService } = require('../services');
const camelize = require('camelize');

const listAllSchools = async (_req, res) => {
  const { message } = await escolasService.getAllSchools();
  console.log(message);
  res.status(200).json(camelize(message))
}

module.exports = {
  listAllSchools,
}
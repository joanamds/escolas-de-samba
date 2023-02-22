const { escolasService } = require('../services');
const camelize = require('camelize');

const listAllSchools = async (_req, res) => {
  const { message } = await escolasService.getAllSchools();
  res.status(200).json(camelize(message))
}

const searchSchools = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await escolasService.getSchoolBySearch(q);
  if (type) return res.status(404).json(message);
  return res.status(200).json(camelize(message));
}

module.exports = {
  listAllSchools,
  searchSchools,
}
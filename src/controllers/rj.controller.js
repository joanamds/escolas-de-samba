const { rjService } = require('../services');
const camelize = require('camelize');

const listAllSchoolsRj = async (_req, res) => {
  const { message } = await rjService.getAllSchools();

  return res.status(200).json(camelize(message))
}

const getSchoolByIdRj = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await rjService.getByIdRj(id);
  if (type) return res.status(404).json(message);
  return res.status(200).json(camelize(message));
}

const searchSchoolsRj = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await rjService.getBySearchRj(q);
  if (type) return res.status(404).json(message);
  return res.status(200).json(camelize(message));
}

module.exports = {
  listAllSchoolsRj,
  getSchoolByIdRj,
  searchSchoolsRj,
}
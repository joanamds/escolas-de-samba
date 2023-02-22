const { spService } = require('../services');
const camelize = require('camelize');

const listAllSchoolsSp = async (_req, res) => {
  const { message } = await spService.getAllSchools();

  res.status(200).json(camelize(message))
}

const getSchoolByIdSp = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await spService.getByIdSp(id);
  if (type) return res.status(404).json(message);
  return res.status(200).json(camelize(message));
}

const searchSchoolsSp = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await spService.getBySearchSp(q);
  if (type) return res.status(404).json(message);
  return res.status(200).json(camelize(message));
}

module.exports = {
  listAllSchoolsSp,
  getSchoolByIdSp,
  searchSchoolsSp,
}
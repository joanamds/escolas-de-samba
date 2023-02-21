const { escolasModel } = require('../models');

const getAllSchools = async () => {
  const schools = await escolasModel.findAll();
  return { type: null, message: schools };
};

module.exports = {
  getAllSchools,
}
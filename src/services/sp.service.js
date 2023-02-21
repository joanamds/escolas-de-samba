const { spModel } = require('../models');

const getAllSchools = async () => {
  const schools = await spModel.findAllSp();
  return { type: null, message: schools };
};

module.exports = {
  getAllSchools,
}
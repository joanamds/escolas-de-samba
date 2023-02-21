const { rjModel } = require('../models');

const getAllSchools = async () => {
  const schools = await rjModel.findAllRj();
  return { type: null, message: schools };
};

module.exports = {
  getAllSchools,
}
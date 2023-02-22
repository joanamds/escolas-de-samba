const { escolasModel } = require('../models');

const getAllSchools = async () => {
  const schools = await escolasModel.findAll();
  return { type: null, message: schools };
};

const getSchoolBySearch = async(search) => {
  const result = await escolasModel.searchAll(search);
  if(result.length === 0) return { type: 'SCHOOL_NOT_FOUND', message: 'Escola não encontrada'}
  return {type: null, message: result}
}

module.exports = {
  getAllSchools,
  getSchoolBySearch,
}
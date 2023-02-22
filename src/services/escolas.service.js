const { escolasModel } = require('../models');

const getAllSchools = async () => {
  const schools = await escolasModel.findAll();
  return { type: null, message: schools };
};

const getSchoolBySearch = async(search) => {
  const schools = await escolasModel.searchAll(search);
  if(schools.length === 0) return { type: 'SCHOOL_NOT_FOUND', message: 'Escola não encontrada'}
  return { type: null, message: { results: schools.length, schools } };
}

module.exports = {
  getAllSchools,
  getSchoolBySearch,
}
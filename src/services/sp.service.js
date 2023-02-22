const { spModel } = require('../models');

const getAllSchools = async () => {
  const schools = await spModel.findAllSp();
  return { type: null, message: schools };
};

const getByIdSp = async (id) => {
  const school = await spModel.findByIdSp(id);
  if (school.length === 0) return { type: 'SCHOOL_NOT_FOUND', message: 'Escola de Samba não encontrada' };
  return { type: null, message: school };
}

const getBySearchSp = async (search) => {
  const schools = await spModel.findBySearchSp(search);
  if (schools.length === 0) return { type: 'SCHOOL_NOT_FOUND', message: 'Escola de Samba não encontrada' };
  return { type: null, message: { results: schools.length, schools } };
}

module.exports = {
  getAllSchools,
  getByIdSp,
  getBySearchSp,
}
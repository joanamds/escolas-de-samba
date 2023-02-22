const { rjModel } = require('../models');

const getAllSchools = async () => {
  const schools = await rjModel.findAllRj();
  return { type: null, message: schools };
};

const getByIdRj = async (id) => {
  const school = await rjModel.findByIdRj(id);
  if (school.length === 0) return { type: 'SCHOOL_NOT_FOUND', message: 'Escola de Samba não encontrada' };
  return { type: null, message: school };
}

const getBySearchRj = async (search) => {
  const schools = await rjModel.findBySearchRj(search);
  if (schools.length === 0) return { type: 'SCHOOL_NOT_FOUND', message: 'Escola de Samba não encontrada' };
  return { type: null, message: { results: schools.length, schools } };
}

module.exports = {
  getAllSchools,
  getByIdRj,
  getBySearchRj,
}
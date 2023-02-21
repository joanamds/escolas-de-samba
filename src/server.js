// configuração retirada do projeto Store Manager da Trybe
const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

const db = require("../models/index");
const Professor = db.Professor;

const getProfessores = async (req, res) => {

  const jane = await Professor.create({ nome: "Jane", matricula: 1231, formacao: "Mestrado", categoria: "Pós-graduado" });

  res.json(jane);
}


module.exports = {
  getProfessores
}
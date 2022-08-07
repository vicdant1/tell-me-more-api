'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Professor.belongsToMany(models.Disciplina, { through: 'DisciplinaProfessor' });
    }
  }
  Professor.init({
    nome: DataTypes.STRING,
    matricula: DataTypes.NUMBER,
    formacao: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Disciplina.belongsToMany(models.Professor, { through: 'DisciplinaProfessor' });
    }
  }
  Disciplina.init({
    nome: DataTypes.STRING,
    codigo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplina',
  });
  return Disciplina;
};
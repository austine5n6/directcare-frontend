'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicationList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MedicationList.init({
    name_of_med: DataTypes.STRING,
    the_dose: DataTypes.STRING,
    times_taken: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MedicationList',
  });
  return MedicationList;
};
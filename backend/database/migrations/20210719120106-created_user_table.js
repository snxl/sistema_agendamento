'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      } ,
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      provider:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users')

  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('schedule', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        appointment:{
            type: Sequelize.DATE,
            allowNull: false, 
            primaryKey: true
        },
        provider_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {model: "users", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        user_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: "users", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            
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

    await queryInterface.dropTable('schedule');

  }
};

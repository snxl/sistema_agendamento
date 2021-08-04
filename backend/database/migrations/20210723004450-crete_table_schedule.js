'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('schedule', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date:{
            type: Sequelize.DATE,
            allowNull: false, 
        },
        provider_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {model: "users", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
            allowNull:true
        },
        user_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: "users", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            
        },
        canceled_at: {
            type: Sequelize.DATE
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

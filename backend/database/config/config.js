require('dotenv').config()
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:process.env.PORT_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define:{
      timestamps:true,
      underscored: true,
      underscoredAll:true
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:process.env.PORT_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define:{
      timestamps:true,
      underscored: true,
      underscoredAll:true
    }
  },
  production: {
    host: process.env.DATABASE_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_AWS,
    port:process.env.PORT_DATABASE_AWS,
    dialect: "postgres",
    timeout:60000,
    define:{
        timestamps:true,
        underscored: true,
        underscoredAll:true
      }
  }
}

require("dotenv").config();

module.exports = {
  database: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
  },
};

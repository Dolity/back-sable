require("dotenv").config();

module.exports = {
    setting: {
      port: process.env.S_POST,
      username: process.env.S_USER,
      password: process.env.S_PASS
    },
  };
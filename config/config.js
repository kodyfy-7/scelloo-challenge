const dotenv = require("dotenv").config();

const {
  RDS_USERNAME,
  RDS_PASSWORD,
  RDS_DB_NAME,
  RDS_HOSTNAME,
  RDS_PORT,
  DIALECT,
  SEEDER_STORAGE
} = process.env;

module.exports = {
  development: {
    username: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DB_NAME,
    host: RDS_HOSTNAME,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DB_NAME,
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    dialect: DIALECT,
    seederStorage: SEEDER_STORAGE,
    appPort: process.env.APP_PORT,

    approvalMsUrl: process.env.APPROVAL_MS_URL,
    commerceMsUrl: process.env.COMMERCE_MS_URL,
    messageMsUrl: process.env.MESSAGE_MS_URL,
    quantumMsUrl: process.env.QUANTUM_MS_URL
  },
  staging: {
    username: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DB_NAME,
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    dialect: DIALECT,
    seederStorage: SEEDER_STORAGE,
    appPort: process.env.APP_PORT,

    approvalMsUrl: process.env.APPROVAL_MS_URL,
    commerceMsUrl: process.env.COMMERCE_MS_URL,
    messageMsUrl: process.env.MESSAGE_MS_URL,
    quantumMsUrl: process.env.QUANTUM_MS_URL
  },
  production: {
    username: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DB_NAME,
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    dialect: DIALECT,
    seederStorage: SEEDER_STORAGE,
    appPort: process.env.APP_PORT,

    approvalMsUrl: process.env.APPROVAL_MS_URL,
    commerceMsUrl: process.env.COMMERCE_MS_URL,
    messageMsUrl: process.env.MESSAGE_MS_URL,
    quantumMsUrl: process.env.QUANTUM_MS_URL
  }
};

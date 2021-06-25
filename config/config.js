require('dotenv').config()
module.exports = {
  development: {
    database: 'barber_development',
    dialect: 'postgres'
  },
  test: {
    database: 'barber_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const express = require('express')
AdminBro.registerAdapter(AdminBroSequelize)

const { sequelize } = require('./db/database')
const auth = require('./mock/auth')
const options = require('./options/options')

const app = express()

const PORT = process.env.port || 8080

const adminBro = new AdminBro(options)

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    return auth(email, password)
  },
  cookiePassword: 'secret',
})
  
app.use(adminBro.options.rootPath, router)

async function start(){
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        app.listen(PORT, () => {
            console.log(`server has been started on: localhost:${PORT}`)
            console.log(`AdminBro is under localhost:${PORT}/admin`)
        })

      } 
      
      catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

start()


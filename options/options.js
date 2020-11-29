const AdminBro = require('admin-bro')
const { Weather } = require('../db/database')

const contentNavigation = {
    icon: 'Cloud',
  }

module.exports = {
    resources: [{ 
        resource: Weather, 
        options: { 
            navigation: contentNavigation,
            listProperties: ['day', 'date','temperature', 'pressure', 'humidity'],
            properties: {
                date: {isTitle: true, isVisible: {edit: false}},
                temperature: { isVisible: {edit: true}}
            },
        },
    }],
    
    dashboard: {
      handler: () => {
        return Weather.findAll({
          attributes: ['day', 'date','temperature', 'pressure', 'humidity']
        })
      },
      component: AdminBro.bundle('../frontend/CustomDashbord')
    },

    rootPath: '/admin'
}
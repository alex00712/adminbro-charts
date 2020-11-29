const { INTEGER, TEXT } = require('sequelize');

module.exports = function(sequelise){
    return sequelise.define('weather', {
        id: {
            type: INTEGER,
            autoincrement: true,
            primaryKey: true,
            allowNull: false
        },
        day: {
            type: TEXT
        },
        date: {
            type: TEXT
        },
        temperature: {
            type: INTEGER
        },
        pressure: {
            type: INTEGER
        },
        humidity: {
            type: INTEGER
        }
    }, {
        timestamps: false
    })
}
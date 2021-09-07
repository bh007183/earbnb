const bcrypt = require("bcrypt")
const salt = 10
module.exports = function(sequelize, DataTypes){
    const House = sequelize.define("House", {
         title: {
             type: DataTypes.STRING,
             allowNull: false
         },
         price: {
             type: DataTypes.FLOAT,
             allowNull: false
         },
         description: {
             type: DataTypes.STRING,
             allowNull: false
         },
         images: {
             type: DataTypes.JSON,
             allowNull: false
         },
         address: {
             type: DataTypes.STRING,
             allowNull: false
         },
         
         


    })
    House.associate = function(models){
        House.belongsTo(models.User, {onDelete: "cascade"})
    }
    return House
}


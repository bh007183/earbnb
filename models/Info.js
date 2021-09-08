const { UserInputError } = require("apollo-server-core")

module.exports = function(sequelize, DataTypes){
    const Info = sequelize.define("Info", {
        persons:{
            type: DataTypes.INTEGER
        },
        baths:{
            type: DataTypes.FLOAT
        },
        pets: {
            type: DataTypes.BOOLEAN
        },
        offstreet: {
            type: DataTypes.BOOLEAN
        },
        other: {
            type: DataTypes.JSON
        }
        

    })
   Info.associate = function(models){
       Info.belongsTo(models.House)
   }
    return Info
}
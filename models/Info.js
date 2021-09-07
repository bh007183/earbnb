const { UserInputError } = require("apollo-server-core")

module.exports = function(sequelize, DataTypes){
    const Info = sequelize.define("Info", {
        persons:{
            type: DataTypes.INTEGER
        },
        baths:{
            type: DataTypes.INTEGER
        },
        pets: {
            type: DataTypes.BOOLEAN
        },
        offstree: {
            type: DataTypes.BOOLEAN
        },
        other: {
            type: DataTypes.JSON
        }
        

    })
    Info.associate = function(models){
        Info.belongsTo(models.House, {as: "info", onDelete: "cascade"})
    }
    return Info
}
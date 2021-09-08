
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
         }

    })
    House.associate = function(models){
        House.belongsTo(models.Lister, {onDelete: "cascade"})
        House.hasMany(models.Review)
        House.hasMany(models.Renter)
        House.hasOne(models.Info)
    }
    return House
}


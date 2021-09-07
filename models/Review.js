module.exports = function(sequelize, DataTypes){
    const Review = sequelize.define("Review", {
        title: {
            type: DataTypes.STRING
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false
        },
        star: {
            type: DataTypes.FLOAT
        }

    })
    Review.associate = function(models){
      Review.belongsTo(models.Renter)
    }
    return Review
}
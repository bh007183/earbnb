const bcrypt = require("bcrypt")
const salt = 10
module.exports = function(sequelize, DataTypes){
    const Lister= sequelize.define("Lister", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: {
                    args: [4,100],
                    msg: "Length must be longer than 2 and less than 10"
                }
            }
        },
        
    })
    Lister.associate = function(models){
        Lister.hasMany(models.House, {onDelete: "cascade"})
    }
    Lister.beforeCreate(async (lister) => {
        const hashed = await bcrypt.hashSync(lister.password, salt)
        
        lister.password = hashed
        
    })
    
    return Lister
}
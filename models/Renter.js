const bcrypt = require("bcrypt")
const salt = 10
module.exports = function(sequelize, DataTypes){
    const Renter= sequelize.define("Renter", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
    Renter.beforeCreate(async (renter) => {
        const hashed = await bcrypt.hashSync(renter.password, salt)
        
        renter.password = hashed
        
    })
   
    return Renter
}
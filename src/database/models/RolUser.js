module.exports = (sequelize, dataTypes) => {
    let alias = "RolUser";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        roluser_id: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    }

    let config = {
        tableName: "rolusers",
        timestamps: false,
    }
    
    const RolUser = sequelize.define(alias, cols, config);
    
    RolUser.associate = (models)=>{

        RolUser.hasMany(models.User,{           
            as: "users",//tiene muchos usuarios
            foreignKey: "roluser_id"          
        })
    }

    return RolUser;
}
// Modelo.associate = (models)=>{
//     Modelo.hasMany(models.otroModelo,{
//         as: "aliasnuevo",
//         foreignKey: "columna"          
//     })
// }
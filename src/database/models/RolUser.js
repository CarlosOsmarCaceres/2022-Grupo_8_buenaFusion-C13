module.exports = (sequelize, dataTypes) => {
    let alias = "RolUser";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        rol: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }

    let config = {
        tableName: "rolusers",
        timestamps: false,
    }

    RolUser.associate = (models)=>{

        RolUser.hasMany(models.User,{           
            as: "users",//Pertenece a muchos usuarios
            foreignKey: "roluser_id"          
        })
    }

    const RolUser = sequelize.define(alias, cols, config);

    return RolUser;
}
// Modelo.associate = (models)=>{
//     Modelo.hasMany(models.otroModelo,{
//         as: "aliasnuevo",
//         foreignKey: "columna"          
//     })
// }
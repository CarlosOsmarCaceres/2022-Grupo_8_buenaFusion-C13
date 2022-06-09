module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        // fecha: {
        //     type: dataTypes.INTEGER(11),   
        //     allowNull: false,
        // },
        telefono: {
            type: dataTypes.INTEGER(20),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),//estaria bueno poner unique
            allowNull: false,
        },
        pass: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(45),
        },
        roluser_id: {//FK Asociado
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }

    let config = {
        tableName: "Users",
        timestamps: false,
    }

    User.associate = (models)=>{

        User.belongsTo(models.RolUser,{
            as: "roluser",//Pertenece a un rol, mas comodo para hacer el includ asociacion
            foreignKey: "roluser_id"          
        })
        User.hasMany(models.Order,{
            as: "orders",//Pertenece a un rol, mas comodo para hacer el includ asociacion
            foreignKey: "estado_id"          
        })
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}
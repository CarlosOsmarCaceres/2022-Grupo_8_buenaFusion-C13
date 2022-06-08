module.exports = (sequelize, dataTypes) => {
    let alias = "Model";
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
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        pass: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        rol: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }
    
    let config = {
        tableName: "",
        //timestamps: false,
    }

    const Model = sequelize.define(alias, cols, config);

    return Model;
}
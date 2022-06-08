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

    const RolUser = sequelize.define(alias, cols, config);

    return RolUser;
}
module.exports = (sequelize, dataTypes) => {
    let alias = "Order";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        estado: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }
    
    let config = {
        tableName: "orders",
        timestamps: false,
    }

    const Order = sequelize.define(alias, cols, config);

    return Order;
}
module.exports = (sequelize, dataTypes) => {
    let alias = "Order_Product";
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
        tableName: "orders_products",
        //timestamps: false,
    }

    const Order_Product = sequelize.define(alias, cols, config);

    return Order_Product;
}
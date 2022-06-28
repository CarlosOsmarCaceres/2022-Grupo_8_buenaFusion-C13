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
        order_id: {//FK
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        product_id: {//FK
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }

    let config = {
        tableName: "orders_products",
        timestamps: false,
    }

    const Order_Product = sequelize.define(alias, cols, config);

    Order_Product.associate = (models)=>{

        /* Order_Product.hasMany(models.Product,{
            as: "products",
            foreignKey: "product_id" ,        
        }) */
        Order_Product.hasMany(models.Order,{//tiene muchos
            as: "orders",
            foreignKey: "order_id" ,        
        }) 
    }

    return Order_Product;
}
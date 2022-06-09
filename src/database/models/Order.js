module.exports = (sequelize, dataTypes) => {
    let alias = "Order";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        estado_id: {//FK
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }

    let config = {
        tableName: "orders",
        timestamps: false,
    }

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models)=>{

        Order.hasMany(models.Order_Product,{
            as: "ordersproducts",
            foreignKey: "order_id" ,        
        })
        Order.belongsTo(models.User,{
            as: "User",
            foreignKey: "estado_id" ,        
        }) 
    }

    return Order;
}
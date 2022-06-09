module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        category_id:{//FK
            type: dataTypes.INTEGER(11),
            allowNull: true,        
        },
        discount:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        stock: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },   
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=>{

        Product.hasMany(models.Order_Product,{
            as: "ordersproducts",
            foreignKey: "product_id" ,        
        })
        Product.belongsTo(models.category,{
            as: "category",
            foreignKey: "category_id",        
        })
    }
    

    return Product;
}

// module.exports = (sequelize, dataTypes) => {
//     let alias = "Model";
//     let cols = {
//         id: {
//             type: dataTypes.INTEGER(11),
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//         }

//     }
//     let config = {
//         tableName: "",
//         //timestamps: false,
//     }

//     const Model = sequelize.define(alias, cols, config);

//     return Model;
// }
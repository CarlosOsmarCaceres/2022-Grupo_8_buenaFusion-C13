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
        category:{
            type: dataTypes.INTEGER(11),
            allowNull: false,        
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
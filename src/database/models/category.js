module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameCategory: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        product_Id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }
    
    let config = {
        tableName: "categories",
        timestamps: false,
    }

    const Category = sequelize.define(alias, cols, config);

    return Category;
}
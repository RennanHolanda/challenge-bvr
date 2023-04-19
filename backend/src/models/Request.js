module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define(
      "Request",{
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          purchase_date: {
            type: DataTypes.DATE,
            allowNull: false
          },
          amont: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          status: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          total_value: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          product_id: {
            type: DataTypes.INTEGER(10),
            references: {
              model: { tableName: 'products' },
              key: 'id'
            },
            allowNull: false
          } 
      },
      {
        tableName: "requests",
        timestamps: false,
      }
      
     
    );
    return Request;
  };
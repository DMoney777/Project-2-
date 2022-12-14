const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      comment_text: {
          type: DataTypes.TEXT('long'),
          allowNull: false,
          len: [1]
      },
      user_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
      },
      hobby_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'hobby',
          key: 'id'
        }
      }
    },   
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
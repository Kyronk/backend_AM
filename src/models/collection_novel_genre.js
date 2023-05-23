'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class collection_novel_genre extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    collection_novel_genre.init({
        genreID: DataTypes.INTEGER,
        novelID: DataTypes.INTEGER,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'collection_novel_genre',
    });
    return collection_novel_genre;
};
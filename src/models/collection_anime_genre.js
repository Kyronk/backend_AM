'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class collection_anime_genre extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    collection_anime_genre.init({
        genreID: DataTypes.INTEGER,
        animeID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'collection_anime_genre',
    });
    return collection_anime_genre;
};
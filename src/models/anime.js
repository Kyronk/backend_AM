'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Anime extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //Book.belongsTo(models.Category, { foreignKey: 'category_code', targetKey: 'code', as: 'categoryData' });
            Anime.hasMany(models.collection_anime_genre,{foreignKey: 'animeID', targetKey: 'ID', as: 'collData'});
        }
    }
    Anime.init({
        animeName: DataTypes.STRING,
        release: DataTypes.INTEGER,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        link: DataTypes.STRING,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Anime',
    });
    return Anime;
};
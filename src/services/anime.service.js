import db from '../models';
import { Op } from 'sequelize';


// create
export const createAnimeService = ()  => new Promise( async (resolve, reject) => {
    try {
        resolve({
            error: 0,
            message: "router from Service"
        })
    } catch (error) {
        reject(error);        
    }
})


// read a list

// read item
export const getOneAnimeService = (id) => new Promise (async (resolve, reject) => {
    try {
        // console.log(id)
        const response = await db.Anime.findOne({
            where: {animeID: 1},
            attributes: [
                'animeID', 'animeName', 'release'
            ],
            include: [
                { 
                    model: db.collection_anime_genre, 
                    as: 'collData',
                    attributes: [
                        'id', 'genreID', 'animeID'
                    ]
                }
            ]
        });
        console.log(response);

        resolve({
            error: 0,
            response: response
        })
    } catch (error) {
        reject(error);
    }
})

// update one and many

// delete one and many
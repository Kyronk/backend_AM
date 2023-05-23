import * as services from "../services";

// create
export const createAnime = async(req, res) => {
    try {
        const response = await services.createAnimeService();

        res.status(200).json({
            access: true,
            error: 0,
            message: "route này chắt là chạy được",
            res: response

        })
    } catch (error) {
        
    }
}

// read all
export const getListAnime = async (req, res) => {

} 

// read one item
export const getItemAnime = async (req, res) => {
    try {
        const {id} = req.params;
        
        // console.log(req.params)
        // res.json({
        //     error: 0,
        //     message: "vô cái route này",
        //     id 
        // })

        const response = await services.getOneAnimeService(id);

        return res.status(200).json(response);

    } catch (error) {
        return res.status(400).json({
            error: 1,
            message: error
        });
    }
}


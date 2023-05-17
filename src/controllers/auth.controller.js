import * as services from "../services";

import joi from 'joi';
import {name, email, password} from '../helper/joi_schema';


// register
export const register = async(req, res) => {
    try {
        const {error} = joi.object({name, email, password }).validate(req.body);
        console.log(req.body);
        console.log(error.details[0].message);
        if(error) return res.status(400).json({
            error: 1,
            message: error.details[0]?.message
        })
        
        const response = await services.registerService(req.body);

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({
            error: 1,
            message: error
        })
    }
};

// login
export const login = async (req, res) => {
    try {
        const {error} = joi.object({email, password}).validate(req.body);
        if(error) return res.status(400).json({
            error: 1,
            message: error.details[0].message
        })

        const response = await services.loginService(req.body);
        return res.status(200).json(response);

    } catch (error) {
        return res.status(400).json({
            error: 1,
            message: error
        })
    }
}

import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const registerService = ({name, email, password}) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: {email: email},
            defaults: {
                name: name, 
                email: email,
                password: hashPassword(password)
            }
        })
        // console.log(response[1]);

        const token = response[1] ? jwt.sign({
            id: response[0].id,
            name: response[0].name,
            email: response[0].email,
            role_code: response[0].role_code = 'R3',
        }, process.env.JWT_SECRET,
        {
            expiresIn: '5d'
        }): null;
        resolve({
            error: response[1]? 0 : 1,
            message: response[1] ? "Register is successfully" : "Email is used",
            'access_token': token
        })

    } catch (error) {
        reject(error);
    }
});

export const loginService = ({email, password}) => new Promise(async(resolve, reject) => {
    const response = await db.User.findOne({
        where: {email: email},
        raw: true
    });
    const isCheckPassword = response && bcrypt.compareSync(password, response.password);
        const token = isCheckPassword ? jwt.sign({
            id: response.id,
            email: response.email,
            name: response.name,
            role_code: response.role_code,
        }, process.env.JWT_SECRET,{
            expiresIn: '5d'
        }) : null

        resolve({
            err: token ? 0: -1,
            message: token ? 'login is successfully': response ? 'password is wrong' : 'email has been registered',
            'access_token': token ? `Bearer ${token}` : token //(token này là null)
        });
})


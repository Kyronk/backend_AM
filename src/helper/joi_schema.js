import joi from 'joi';

export const name = joi.string().min(3).max(30);
export const email = joi.string()
                        .pattern(new RegExp('gmail.com$'))
                        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                        .required();

export const password = joi.string()
                        // .pattern(new RegExp('^[a-zA-Z0-9]$'))
                        .min(6)
                        .max(30)
                        .required();

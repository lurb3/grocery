const Joi = require('joi');

const schemaSignup = Joi.object(
  {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required() 
  }
);

module.exports = schemaSignup
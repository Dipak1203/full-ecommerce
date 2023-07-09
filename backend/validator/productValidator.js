
import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    size: Joi.string().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
    searchKey: Joi.string().required(),
    gender: Joi.string().required(),
});

export default productSchema;
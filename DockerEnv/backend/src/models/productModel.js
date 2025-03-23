/* eslint-disable no-useless-catch */

import Joi from 'joi'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const PRODUCT_COLLECTION_NAME = 'products'
const PRODUCT_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().trim().strict(),
  categoryId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).default(null),
  description: Joi.string(),
  avgPrice: Joi.number().default(0),
  totalStock: Joi.number().default(0),
  medias: Joi.array().items(Joi.string()),
  avatar: Joi.string(),
  brand: Joi.string(),
  rating: Joi.number().default(0),
  sold: Joi.number().default(0),
  slug: Joi.string().required(),
  types: Joi.array().items({
    typeId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
    properties: Joi.array().items({
      key: Joi.string().trim().strict(),
      value: Joi.string().trim().strict()
    }),
    avatar: Joi.string(),
    stock: Joi.number().default(0),
    price: Joi.number().default(0),
    discount: Joi.number().default(0),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _deleted: Joi.boolean().default(false)
  }),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _deleted: Joi.boolean().default(false)
})

// const createProduct = async (productData) => {

// };

export const productModel = {
  PRODUCT_COLLECTION_NAME,
  PRODUCT_COLLECTION_SCHEMA
  // createProduct,
}

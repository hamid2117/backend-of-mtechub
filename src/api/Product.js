import express from 'express'
import Product from './../models/productModel.js'
const router = express.Router()
import asyncHandler from 'express-async-handler'
//*@desc Fetch All products
//*@Api GET /api/v1/products
//*@Access Public

router.get(
  '/products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  })
)

//*@desc Fetch each product
//*@Api GET /api/v1/products/:id
//*@Access Public

router.get(
  '/products/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      throw new Error('Product not found')
    }
  })
)

export default router

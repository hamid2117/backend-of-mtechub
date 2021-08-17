import express from 'express'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { protect, admin } from './../auth/authMiddleware.js'
import Product from '../models/productModel.js'
const router = express.Router()

//*@desc admin user
//*@Api GET /api/v1/users
//*@Access Private

router.get(
  '/users',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.find({})
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not Found')
    }
  })
)

//*@desc Delete user by admin
//*@Api GET /api/v1/user/:id
//*@Access Private

router.delete(
  '/user/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not Found')
    }
  })
)

//*@desc admin user
//*@Api GET /api/v1/users
//*@Access Private

router.get(
  '/user/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-passowrd')
    console.log(req.params.id)
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not Found')
    }
  })
)

//*@desc admin user
//*@Api Put /api/v1/user/:id/edit
//*@Access Private

router.put(
  '/user/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
      user.email = req.body.email || user.email
      user.isAdmin = req.body.isAdmin

      const updatedUser = await user.save()

      res.status(200).json({
        _id: updatedUser._id,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not Found')
    }
  })
)

//*@desc create Product
//*@Api delete /api/v1/createproduct
//*@Access Private

router.delete(
  '/product/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    console.log('asdfasf')

    if (product) {
      await product.remove()
      res.json({ message: 'Product is removed' })
    } else {
      res.status(404)
      throw new Error('Product is not found')
    }
  })
)

//*@desc create Product
//*@Api post /api/v1/createproduct
//*@Access Private

router.post(
  '/createproduct',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const product = new Product({
      price: 0,
      heading: 'sample name',
      url: 'https://static9.depositphotos.com/1431107/1154/i/600/depositphotos_11542091-stock-photo-sample-stamp.jpg',
      desc: 'Sample Product description ......',
      user: req.user._id,
    })
    const createProduct = await product.save()
    res.status(201).json(createProduct)
  })
)
//*@desc create Product
//*@Api post /api/v1/createproduct
//*@Access Private

router.put(
  '/updateproduct/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      product.price = req.body.price || product.price
      product.desc = req.body.desc || product.desc
      product.heading = req.body.heading || product.heading
      product.url = req.body.url || product.url

      const updatedProduct = await product.save()
      res.status(200).json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('product not found ')
    }
  })
)

export default router

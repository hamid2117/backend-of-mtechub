import express from 'express'
import registerApi from './register.js'
import loginApi from './login.js'
import productApi from './Product.js'
import adminApi from './admin.js'
const router = express.Router()

router.use(registerApi)
router.use(loginApi)
router.use(productApi)
router.use(adminApi)

export default router

import { Router } from 'express'
import { productsRouter , carritoRouter } from './route.js'
const router = Router()


router.use('/productos',productsRouter)
router.use('/carrito',carritoRouter)


export {router}
import { Router } from "express";
const carritoRouter = Router()
import { ControllerFire } from '../controllers/index.js'
import { fetchProduct } from '../middlewares/middlewares.js'


//!-----------------------------------------------FIRE -------------------------------------------


//!Borrar producto por ID y por ID de carrito
carritoRouter.delete('/:id/productos/:id_prod',async (req, res) => {
  const { id , id_prod} = req.params
  try {
    const respuesta = await ControllerFire.deleteProdByID(id,id_prod)
    if(!respuesta) { throw `Error`}
    console.log(respuesta)
    res.status(200).json({ok : "ok"})
  } catch (error) {
    console.log(error)
    res.status(401).json({error : "error"})
  }
})

//! Crea carrito y devuelve el id
carritoRouter.post('/', async(req,res) => {

  try {
    const respuesta = await ControllerFire.newCart()
    if(!respuesta) {throw `Error`}
    console.log('Se creo un nuevo carrito')
    res.json(respuesta)

  } catch (error) {
    res.status(401)
   .json({
      error : -2 ,
      descripcion : `${req.originalUrl} no existe`
     })
  }
})



//! Borrar un carrito por id

carritoRouter.delete('/:id',async (req,res,next) => {
  const { id } = req.params
  try {
    const respuesta = await ControllerFire.deleteCartId(id)
    if(!respuesta) { throw `No existe el carrito.`}
    res.status(202).json({ok : `eliminado carrito con ID-${id}`})
  } catch (error) {
    res.status(404).json({error : "Error" , descripcion : error})
    
  }
})



//! Busca el carrito y muestra sus productos.
carritoRouter.get('/:id/productos', async (req, res) => {
  const { id } = req.params
  try {
    const cart = await ControllerFire.getCartById(id)
    if (!cart) {throw `Error`}
    console.log(cart)
    res.json({products : cart})

  } catch (error) {
    res.status(404)
    .json({
      error : -4 ,
      descripcion : `Este carrito con ID N°${req.params.id} no existe`
     })
  }


})


//! Agregar producto al carrito.

carritoRouter.post('/:id/productos', fetchProduct , async (req,res) => {
  const { id } = req.params
  const { producto } = req.body
  try {
    const respuesta = await ControllerFire.saveCart(id,producto)
    if(!respuesta) { throw `Error`}
    res.status(200).json({ok : "ok"})
    // res.json(req.body)
  } catch (error) {
    res.status(401).json({
      error : -4 ,
      descripcion : `Este carrito con ID N°${req.params.id} no existe`
     })
  }
})


export {carritoRouter}
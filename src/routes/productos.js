import { Router } from 'express'
const productsRouter = Router()
import  {ControllerFire}  from '../controllers/index.js'
import { isAdmin } from '../middlewares/middlewares.js'


//!--------------------------------------------FIRE-----------------------------------------------------


//! Save()
productsRouter.post ('/', isAdmin , async(req,res,next) => {
  const {body} = req
  try {
    const respuesta = await ControllerFire.createProduct(body)
    if(!respuesta) {throw `Error`}
    res.json({ok : ok})
  } catch (error) {
    res.json({
      error : -2 ,
      descripcion : `${req.originalUrl} no existe`
     })

  }
})

//! getByID
productsRouter.get('/:id?', async(req,res) => {
  const {id} = req.query
  try {
    let producto
    if(id){
      producto = await ControllerFire.getById(id)
    }else{
      producto = await ControllerFire.getAllProducts()
    }
    
    if(!producto) {throw `No existe el ID`}
    res.json(producto)
  } catch (error) {
    res.json({
      error : -2 ,
      res: true,
      descripcion : `${req.originalUrl} No hay productos para mostrar`
     })
  }
})



//! Actualizar()

productsRouter.put('/:id', isAdmin, async(req,res) => {
  const { id } = req.params
  const { body } = req
  try {
    const producto = await ControllerFire.actualizar(id, body)
    if(!producto) { throw `No se pudo actualizar`}
    res.json(producto)
  } catch (error) {
    res.json({
      error : -2 ,
      descripcion : `${req.originalUrl} no existe`
     })
  }
})



//! Delete()

productsRouter.delete('/:id', isAdmin , async(req,res) => {
  const { id } = req.params
  console.log(id)
  try {
    const respuesta = await ControllerFire.delete(id)
    if (!respuesta) { throw `Error`}
    res.json(respuesta)
  } catch (error) {
    res.json({
      error : -2 ,
      descripcion : `${req.originalUrl} no existe`
     })
  }
})

















export {productsRouter}
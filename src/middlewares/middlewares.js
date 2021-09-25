import { query } from "../../dbFirebase.js";


//! isAdmin
  const isAdmin = (req,res,next) => {
    try {
      const { isAdmin } =  req.body
      if(isAdmin === true) {
        console.log("Permitido")
        next()
      }else{
        throw `Unauthorized`
      }
    } catch (err) {
      res.status(401)
      next(err)
    }
  }

//! existe el producto para agregar al carrito?
const fetchProduct = async (req,res,next) => {
  const { id } = req.body 
  try {
    
    const doc = query.doc(id)
    const item = await doc.get()
    const response = item.data()
  
     req.body.producto = {...response , id : doc.id}
    next()
  } catch (error) {
    res.status(404)
    next(error)
  }
}







export { isAdmin , fetchProduct}
import { query,queryCart } from "../../dbFirebase.js";
import { v4 as uuidv4 } from 'uuid';



class ControllerFire  {
  constructor(){}

  async createProduct(producto){
    try {
      let id = uuidv4()
      let doc = await query.doc(`${id}`)
     await doc.create(producto)
    } catch (error) {
      console.log(error)
      return null
    }
  }


  async getAllProducts (){
    let data;
    try {
      data = await query.get()
      data = data.docs.map(prod => {
        console.log(`ID del producto ${prod.id}`)
        return { 
          _id : prod.id,
          code : prod.data().code,
          description : prod.data().description,
          isAdmin : prod.data().isAdmin,
          pictureURL : prod.data().pictureURL,
          price : prod.data().price,
          stock : prod.data().stock,
          timestamp : prod.data().timestamp,
          title : prod.data().title
        }
      }) 
      console.log(data)
      return data  


    } catch (error) {
      return null
    }
  }


  async getById(id){
    try {
     const doc = query.doc(id)
     const item = await doc.get()
     const response = item.data()
    return {response}
    } catch (error) {
      return null
    }
  }


  async actualizar(id, objeto){
    try {
      const doc = query.doc(id)
      const item =await doc.update(objeto)
      if (!producto) {throw `Error`}
      return `Se actualizo exitosamente`
    } catch (error) {
      return null
    }
  }
 


  async delete(id){
    try {
      const doc = query.doc(id)
      const item = await doc.delete()
      if (!producto) {throw `Error`}
      return `Se actualizo exitosamente`
    } catch (error) {
      return null
    }
  }
 
//!----------------------------------------------------Carrito-------------------------------------------
 
async newCart(){
  try {
    let id = uuidv4()
    let doc = queryCart.doc(`${id}`)
   await doc.create({ timestamp : new Date().toLocaleString() , products : [] })
   return id
  } catch (error) {
    console.log(error)
    return null
  }
}

async deleteCartId(id){
  try {
    const doc = queryCart.doc(id)
    const item = await doc.delete()
    return `Se actualizo exitosamente`
  } catch (error) {
    return null
  }
}

async getCartById(id){
  try {
   const doc = queryCart.doc(id)
   const item = await doc.get()
   const response = item.data()

  return response.products
  } catch (error) {
    return null
  }
}


async saveCart(id, objeto){
  try {
    let arr = []
    const doc = queryCart.doc(id)
    const item = await doc.get()
    const response = item.data()
     arr = response.products
     arr.push(objeto)

     const res = await doc.update({products : arr })
     if (!res) {throw `Error`}
    return 1
  } catch (error) {
    return null
  }
}



async deleteProdByID(id,id_prod){
  try {
    let arr = []
    const doc = queryCart.doc(id)
    const item = await doc.get()
    const response = item.data()
     arr = response.products

    arr = arr.filter(prod => prod.id !== id_prod)

    const res = await doc.update({products : arr })
     if (!res) {throw `Error`}




    // if (!producto) {throw `Error`}
    return 1
  } catch (error) {
    return null
  }
}





}


export default new ControllerFire()


const viewCarrito = document.getElementById('viewCarrito')

viewCarrito.addEventListener('click',async()=>{

  try {
    let id = prompt("Ingrese el id del carrito a buscar")
    if(!id){ throw `Ingresar un numero`}
    
    const respuesta = await fetch(`${HOST}/carrito/${id}/productos`,{
      method : 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const datas = await respuesta.json()

    if(respuesta.status === 404){ throw `No existe el carrito con el ID ingresado`}
  
  
    if(!datas.products){
      document.getElementById('cards').innerHTML = `<h2 class="text-center"> Carrito Vacio </h2>`
    }else{
      let data = datas.products
      let html = Handlebars.templates['cardsCart']({data})
      document.getElementById('cards').innerHTML = html
      
    }
    const deleteBtn = document.querySelectorAll('.deleteBtn')
    console.log(deleteBtn)
    deleteBtn.forEach((btn) =>{
      btn.addEventListener('click',async ()=>{

          const respuestaD = await fetch(`${HOST}/carrito/${id}/productos/${btn.id}`,{
            method : 'DELETE',

            headers:{
                    'Content-Type': 'application/json'
                    }
          })

          const resp = await respuestaD.json()
          if(respuestaD.status === 200) { 
            alert("Producto eliminado")
            window.location.href = 'index.html'
          }
     
      })
    })

    // .then((res) =>   res.json())
    // .then((res) =>  console.log(res))
    // .catch(() =>  alert("No se pudo crear el carrito"))
  } catch (error) {
    alert(error)
  }

})
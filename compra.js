document.addEventListener("DOMContentLoaded", function () { 
    const lista = document.getElementById("lista-productos");
    const carritoData = localStorage.getItem("carrito");
  
    if (carritoData) {
      try {
        const productos = JSON.parse(carritoData);
        let totalCarrito = 0;
  
        if (Array.isArray(productos) && productos.length > 0) {
          productos.forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
  
            const precioTotalItem = item.precio * item.cantidad;
            totalCarrito += precioTotalItem;
  
            // Nombre del producto
            const nombre = document.createElement("span");
            nombre.textContent = item.nombre;
  
            // Cantidad como badge
            const badge = document.createElement("span");
            badge.className = "badge badge-primary badge-pill ml-2";
            badge.textContent = `x${item.cantidad}`;
  
            li.appendChild(nombre);
            li.appendChild(badge);
            lista.appendChild(li);
          });
  
          // Agregar el total al final de la lista
          const totalLi = document.createElement("li");
          totalLi.className = "list-group-item d-flex justify-content-between align-items-center font-weight-bold text-success";
          totalLi.textContent = `Total del carrito: $${totalCarrito.toFixed(2)}`;
          lista.appendChild(totalLi);
  
        } else {
          lista.innerHTML = `<li class="list-group-item text-muted">El carrito está vacío</li>`;
        }
      } catch (e) {
        console.error("Error al procesar los datos del carrito:", e);
        lista.innerHTML = `<li class="list-group-item text-danger">Error al leer carrito</li>`;
      }
    } else {
      lista.innerHTML = `<li class="list-group-item text-muted">No hay productos en el carrito</li>`;
    }
  });
const btnComprar = document.getElementById("btn_comprar");
btnComprar.addEventListener("click", function (e) {
    e.preventDefault(); // Previene que el botón intente enviar un formulario si está dentro de uno
    alert("¡Compra exitosa!✅");
});
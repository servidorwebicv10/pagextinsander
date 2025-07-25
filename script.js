let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto) {
  const existente = carrito.find(p => p.id === producto.id);

  if (existente) {
    existente.cantidad += 1;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}


function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalElemento = document.getElementById('total');
  lista.innerHTML = '';
  let total = 0;

  carrito.forEach((p, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      ${p.nombre} - $${p.precio} x 
      <button onclick="cambiarCantidad(${index}, -1)">-</button>
      <span>${p.cantidad}</span>
      <button onclick="cambiarCantidad(${index}, 1)">+</button>
    `;
    lista.appendChild(item);
    total += p.precio * p.cantidad;
  });

  totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1); // Elimina si llega a 0
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}



// Mostrar carrito al cargar
mostrarCarrito();

// Lógica para abrir y cerrar el sidebar
const abrirBtn = document.getElementById('abrir-carrito');
const cerrarBtn = document.getElementById('cerrar-carrito');
const carritoSidebar = document.getElementById('carrito-sidebar');
const vaciarBtn = document.getElementById('vaciar-carrito');

abrirBtn.addEventListener('click', () => {
  carritoSidebar.classList.add('abierto');
  document.body.classList.add('carrito-abierto');
});

cerrarBtn.addEventListener('click', () => {
  carritoSidebar.classList.remove('abierto');
  document.body.classList.remove('carrito-abierto');
});

vaciarBtn.addEventListener('click', () => {
  carrito = []; // Vacía el array
  localStorage.removeItem('carrito'); // Borra del almacenamiento local
  mostrarCarrito(); // Refresca la vista
});


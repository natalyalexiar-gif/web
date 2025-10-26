// Mostrar año actual en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Selección de producto y color
document.querySelectorAll('.card').forEach(card => {
  const productBtn = card.querySelector('.seleccionar');
  const colorBtns = card.querySelectorAll('.color-btn');
  const title = card.querySelector('.card-title').textContent;

  let selectedColor = "";

  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = btn.dataset.color;
      document.getElementById('colorSel').value = selectedColor;
    });
  });

  productBtn.addEventListener('click', () => {
    document.getElementById('productoSel').value = title;
    if (!selectedColor) {
      selectedColor = "No especificado";
    }
    document.getElementById('colorSel').value = selectedColor;
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });
});

// Envío del formulario a WhatsApp
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = encodeURIComponent(document.getElementById('cliente').value);
  const contacto = encodeURIComponent(document.getElementById('contactoInfo').value);
  const producto = encodeURIComponent(document.getElementById('productoSel').value);
  const color = encodeURIComponent(document.getElementById('colorSel').value);
  const fecha = encodeURIComponent(document.getElementById('fecha').value);
  const mensaje = encodeURIComponent(document.getElementById('mensaje').value);

  // 🔹 Número de WhatsApp (en formato internacional sin + ni espacios)
  const telefono = "59179445478";

  // 🔹 Mensaje que se enviará
  const texto = `*Solicitud de Cita — Rojas Industries*%0A
👤 Nombre: ${nombre}%0A
📞 Contacto: ${contacto}%0A
🪑 Producto: ${producto}%0A
🎨 Color: ${color}%0A
📅 Fecha: ${fecha}%0A
💬 Mensaje: ${mensaje}`;

  // 🔹 Crear y abrir enlace de WhatsApp
  const url = `https://wa.me/${telefono}?text=${texto}`;
  window.open(url, "_blank");
});

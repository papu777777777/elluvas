// Toggle menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Validación simple del formulario
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Validar nombre
  const nameInput = form.name;
  const nameError = nameInput.nextElementSibling;
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Validar email
  const emailInput = form.email;
  const emailError = emailInput.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Ingresa un correo electrónico válido.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Validar mensaje
  const messageInput = form.message;
  const messageError = messageInput.nextElementSibling;
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  if (valid) {
    alert('¡Mensaje enviado correctamente! Gracias por contactarme.');
    form.reset();
  }
});

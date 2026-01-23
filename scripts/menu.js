// Espera a que el HTML cargue
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav-list a');

    // Abrir / cerrar menú
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Cerrar menú al hacer click en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});

// Mensaje de formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto");
  const mensaje = document.getElementById("form-mensaje");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        mensaje.style.display = "block";
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    })
    .catch(() => {
      alert("No se pudo enviar el mensaje.");
    });
  });
});

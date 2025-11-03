document.addEventListener("DOMContentLoaded", () => {
  const slot = document.getElementById("session-nav");
  if (!slot) return;

  const raw = localStorage.getItem("user");
  if (!raw) {
    // Visitante (no logeado)
    slot.innerHTML = `
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Tu cuenta</a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="inicio_sesion.html">Iniciar sesión</a></li>
        <li><a class="dropdown-item" href="registro.html">Regístrate</a></li>
      </ul>
    `;
    return;
  }

  const user = JSON.parse(raw);
  const nameOrEmail = user?.name?.trim() || user?.email || "Mi cuenta";
  const isAdmin = user?.role === "Administrador";

  slot.innerHTML = `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">${nameOrEmail}</a>
    <ul class="dropdown-menu dropdown-menu-end">

      ${
        isAdmin
          ? `<li><a class="dropdown-item" href="admin_dashboard.html">Menú administrador</a></li>`
          : `<li><a class="dropdown-item" href="cupones.html">Mis cupones</a></li>`
      }

      <li><hr class="dropdown-divider"></li>
      <li><button id="logoutBtn" class="dropdown-item" type="button">Cerrar sesión</button></li>
    </ul>
  `;

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "inicio.html";
  });
});

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active custom-link" aria-current="page">Inicio</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register">
                <a class="nav-link custom-link">Registro</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">
                <a class="nav-link custom-link">Iniciar sesión</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <b-container class="mt-4">
      <h1 class="text-center">Bienvenido a Trading Bitacores</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros fringilla, aliquam quam eget,
        ullamcorper velit. Maecenas quis mi at justo lacinia gravida.
      </p>
      <p>
        Vestibulum lacinia tortor eget fermentum tempus. Sed gravida velit at justo bibendum,
        sit amet feugiat tortor maximus. Nulla facilisi.
      </p>
    </b-container>

    <!-- Footer -->
    <b-footer class="mt-4">
      <b-container>
        <b-row align-v="center">
          <b-col>
            <p class="text-center mb-0">© 2023 Mi Sitio. Todos los derechos reservados.</p>
          </b-col>
        </b-row>
      </b-container>
    </b-footer>


  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style>

</style>
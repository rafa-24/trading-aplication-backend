<template>
  <div>
    <h3>Hola Rafael</h3>
    <p>
      <router-link to="/profile">Perfil</router-link>
    </p>
    <p>
      <router-link to="/feelings-log">Bitacora De Sentimientos</router-link>
    </p>
    <p>
      <router-link to="/financial-journal">Bitacora Economica</router-link>
    </p>
    <p>
      <router-link to="/top-traders">Top Traders</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeApp",
};
</script>

<style></style>

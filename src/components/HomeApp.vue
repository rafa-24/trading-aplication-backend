<template>
  <div>
    <GreetUser/>
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
import GreetUser from "../components/GreetUser.vue";
export default {
  name: "HomeApp",
  components: {
    GreetUser
  }
};
</script>

<style></style>

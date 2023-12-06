<template>
  <div class="container mt-4">
    <GreetUser/>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <router-link to="/profile" class="text-decoration-none">
              <h5 class="card-title">Perfil</h5>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <router-link to="/feeling-log" class="text-decoration-none">
              <h5 class="card-title">Bitácora de Sentimientos</h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <router-link to="/financial-journal" class="text-decoration-none">
              <h5 class="card-title">Bitácora Económica</h5>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <router-link to="/top-traders" class="text-decoration-none">
              <h5 class="card-title">Top Traders</h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GreetUser from "./GreetUser.vue";
export default {
  name: "HomeApp",
  components: {
    GreetUser
  }
};
</script>

<style>
.card {
  border-radius: 25px;
}
</style>

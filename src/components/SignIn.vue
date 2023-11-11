<template>
  <div class="login-form">
    <div class="card">
      <h2>Trading Bitacores</h2>
      <form @submit.prevent="signIn">
        <div class="input-group">
          <input
            type="text"
            v-model="user.username"
            placeholder="Nombre de usuario"
            class="input-field"
          />
        </div>
        <div class="input-group">
          <input
            type="password"
            v-model="user.password"
            placeholder="Contraseña"
            class="input-field"
          />
        </div>
        <button type="submit" class="login-button">Inicia sesion</button>
      </form>
    </div>
  </div>
  <div class="card-register">
    <p>¿No tienes cuenta?</p>
    <router-link to="/">Registrate</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      axios
        .post("http://localhost:3000/auth/login", this.user)
        .then((response) => {
          response.data.error === true
            ? alert(response.data.message)
            : this.$router.push("/home-app");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: beige;
}

.card {
  max-width: 800px;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
}

.input-group {
  margin: 10px 0;
}

.input-field {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  background-color: #008c15;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: black;
}

.card-register {
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>

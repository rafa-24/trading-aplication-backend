<template>
  <div class="registration-form">
    <div class="card">
      <h2>Trading Bitacores</h2>
      <p>Regístrate, toma control emocional y financiero de tu trading</p>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <input type="text" v-model="nombre" placeholder="Nombre completo" />
        </div>
        <div class="input-group">
          <input type="text" v-model="pais" placeholder="País" />
        </div>
        <div class="input-group">
          <input type="email" v-model="correo" placeholder="Correo Electrónico" />
        </div>
        <div class="input-group">
          <input type="tel" v-model="telefono" placeholder="Teléfono" />
        </div>
        <div class="input-group">
          <input type="text" v-model="mercado_financiero" placeholder="Mercado Financiero" />
        </div>
        <div class="input-group">
          <input type="text" v-model="tipo_de_trader" placeholder="Tipo de Trader" />
        </div>
        <div class="input-group">
          <input type="text" v-model="nombre_usuario" placeholder="Nombre de Usuario" />
        </div>
        <div class="input-group">
          <input type="password" v-model="contraseña" placeholder="Contraseña" />
        </div>
        <div>
          <button type="submit">Registrarte</button>
        </div>
      </form>
    </div>
    <div class="card-signIn">
      <p>¿Tienes una cuenta?</p>
      <router-link to="/signIn">Iniciar sesión</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegistrationForm",
  data() {
    return {
      nombre: null,
      pais: null,
      correo: null,
      telefono: null,
      mercado_financiero: null,
      tipo_de_trader: null,
      nombre_usuario: null,
      contraseña: null
    };
  },
  methods: {
    handleSubmit() {
      const body = this.$data;
      axios.post('http://localhost:3000/auth/register', body)
      .then((response) => {
        if(response.data.error === false) {
          alert(response.data.message);
          this.$router.push('/signIn');
        }else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error('error al llenar formulario', error);
      })
    },
  },
};
</script>

<style scoped>
.registration-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.card {
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
}

form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fafafa;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input::placeholder {
  color: #999;
}

.input-group input:focus {
  border-color: #007bff;
}

button {
  background-color: #008c15;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #000000;
}

.card-signIn {
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>

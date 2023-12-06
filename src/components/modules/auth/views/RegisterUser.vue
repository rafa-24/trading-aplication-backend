<template>
  <div class="container">
    <div class="card border-0">
      <div class="card-header bg-white border-bottom-0">
        <h4 class="mb-0">Registro</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="registerUser">
          <div class="form-group">
            <input
              type="text"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Nombre"
              v-model="newUser.nombre"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="País"
              v-model="newUser.pais"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Correo electrónico"
              v-model="newUser.correo"
            />
          </div>
          <div class="form-group">
            <input
              type="tel"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Teléfono"
              v-model="newUser.telefono"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Mercado financiero"
              v-model="newUser.mercado_financiero"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Tipo de trader"
              v-model="newUser.tipo_de_trader"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Nombre de usuario"
              v-model="newUser.nombre_usuario"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
              placeholder="Contraseña"
              v-model="newUser.contraseña"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-block">Enviar</button>
          </div>
          <div class="alert alert-success mt-3" role="alert" v-if="error">
            ¡Usuario registrado exitosamente!
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../store/store";

export default {
  name: "RegistrationForm",
  data() {
    return {
      newUser: {
        nombre: null,
        pais: null,
        correo: null,
        telefono: null,
        mercado_financiero: null,
        tipo_de_trader: null,
        nombre_usuario: null,
        contraseña: null,
      },
      error: false,
    };
  },
  methods: {
    showAlert(value) {
      value === false ? (this.error = true) : this.error;
      setTimeout(() => {
        this.error = false;
      }, 3000);
    },

    async registerUser() {
      const res = await registerUser(this.newUser);
      if (res.error === false) {
        this.showAlert(false);
        setTimeout(() => {
          this.$router.push("/login");
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
}

.card-header h4 {
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #3897f0;
  border-color: #3897f0;
}

.btn-primary:hover {
  background-color: #2684f0;
  border-color: #2684f0;
}

.border-top-0,
.border-left-0,
.border-right-0 {
  border-color: #dfe6e9;
}

.border-bottom-0 {
  border-bottom: none;
}

.rounded-0 {
  border-radius: 0;
}

button {
  width: 300px;
}


.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}
</style>
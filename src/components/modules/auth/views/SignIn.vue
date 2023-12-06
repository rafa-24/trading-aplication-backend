<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card border-0 bg-white">
          <h2 class="text-center mt-4">Trading Bitacores</h2>
          <form @submit.prevent="signIn" class="px-4 py-3">
            <div class="form-group">
              <input
                type="text"
                v-model="user.username"
                placeholder="Nombre de usuario"
                class="form-control rounded-pill"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="user.password"
                placeholder="Contraseña"
                class="form-control rounded-pill"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-block rounded-pill"
            >
              Inicia sesión
            </button>
          </form>
          <div class="text-center mt-3 mb-4">
            <p>
              ¿No tienes cuenta?
              <router-link to="/register">Regístrate</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      Error credenciales invalidas
    </div>
    <div class="alert alert-success" role="alert" v-if="succesfull">
      Inicio de sesion exitoso
    </div>
  </div>
</template>

<script>
import { signIn } from "../store/store";
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      token: "",
      error: false,
      succesfull: false,
    };
  },
  methods: {
    showAlertDanger(value) {
      value === true ? (this.error = true) : this.error;
      setTimeout(() => {
        this.error = false;
      }, 3000);
    },
    showAlertSuccess(value) {
      value === false ? (this.succesfull = true) : this.error;
      setTimeout(() => {
        this.succesfull = false;
      }, 3000);
    },
    async signIn() {
      try {
        const res = await signIn(this.user);
        if (res.error === true) {
          this.showAlertDanger(res.error);
        } else {
          this.showAlertSuccess(res.error);
          localStorage.setItem("token", res.accessToken);
          setTimeout(() => {
            this.$router.push("/home-app"); // debe ir a home app
          }, 3000);
        }
      } catch (error) {
        console.error("Error en la peticion");
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card form {
  margin-bottom: 0;
}

.card h2 {
  font-size: 28px;
}

.form-control {
  border: 1px solid #dbdbdb;
  padding: 12px 15px;
}

.btn-primary {
  background-color: #3897f0;
  border-color: #3897f0;
  color: #fff;
}

.btn-primary:hover {
  background-color: #2684f0;
  border-color: #2684f0;
}

.text-center {
  text-align: center;
}

.rounded-pill {
  border-radius: 50px;
}
</style>

<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center vh-100"
  >
    <div class="card text-center p-4">
      <div class="profile-container">
        <label for="fileInput" class="profile-picture">
          <img
            :src="profilePicture"
            alt="Foto de perfil"
            class="img-fluid rounded-circle"
            @click="triggerFileInput"
          />
          <input
            type="file"
            id="fileInput"
            style="display: none"
            @change="uploadProfilePhoto"
          />
        </label>
        <div class="profile-info">
          <h3>{{ userName }}</h3>
          <h4>{{ country }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
  data() {
    return {
      profilePicture: null,
      userName: "",
      description: "",
      token: null,
      country: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    this.getAvatar(token);
    this.getProfileData(token);
  },
  methods: {
    async uploadProfilePhoto(event) {
      // obtener archivo
      const file = event.target.files[0];

      // obtener token de usuario del localstorage
      this.token = localStorage.getItem("token"); // esto deberia ser una funcion en helpers

      // agregar el archivo seleccionado
      const formData = new FormData();
      formData.append("file", file, file.name);

      try {
        const response = await fetch("http://localhost:3000/auth/upload", {
          method: "POST",
          headers: {
            token_access: this.token,
          },
          body: formData,
        });
        const data = await response.json();
        if (data.error === false) {
          // llamada endponint subir foto
          alert(data.message);
          this.getAvatar(this.token);
        }
      } catch (error) {
        return error;
      }
    },
    getAvatar(token) {
      const config = {
        headers: {
          token_access: token,
        },
      };
      axios
        .get("http://localhost:3000/auth/avatar", config)
        .then((response) => {
          this.profilePicture = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getProfileData(token) {
      const config = {
        headers: {
          token_access: token,
        },
      };
      axios
        .get("http://localhost:3000/auth/user-profile", config)
        .then((response) => {
          this.userName = response.data.name;
          this.country = response.data.country;
        })
        .catch((error) => {
          console.error("Error en la peticion", error);
          return error;
        });
    },
  },
};
</script>

<style>
.profile-container {
  text-align: center;
}

.profile-picture {
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info h2,
.profile-info h4 {
  margin-bottom: 5px;
}
</style>

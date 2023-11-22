<template>
  <div class="profile-container">
    <label for="fileInput" class="profile-picture">
      <!-- Imagen de perfil circular -->
      <img :src="profilePicture" alt="Foto de perfil" />
      <input
        type="file"
        id="fileInput"
        style="display: none"
        @change="uploadProfilePhoto"
      />
    </label>
    <div class="profile-info">
      <h2>{{ userName }}</h2>
      <h2>{{ country }}</h2>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

/* Estilos de la foto de perfil circular */
.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer; /* Agregar cursor apuntador al pasar sobre la imagen */
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilos del botón y la descripción */
.edit-button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #2980b9;
}

.description {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>

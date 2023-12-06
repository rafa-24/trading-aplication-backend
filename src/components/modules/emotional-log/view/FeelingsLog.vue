<template>
  <div>
    <h3>Tus bitacoras emocionales</h3>
    <button type="button" class="btn btn-primary" @click="showModal">
      + Crear una bitacora emocional
    </button>
    <!--Modal-->
    <div class="modal" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="submitForm">
            <div class="modal-header">
              <h5 class="modal-title">Bitacora Emocional</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="estadoEmocional" class="form-label"
                  >Estado Emocional:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="estadoEmocional"
                  v-model="emotionalLogData.estado_emocional"
                />
              </div>
              <div class="form-check mb-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="antesSesion"
                  v-model="emotionalLogData.antes_tradear"
                />
                <label class="form-check-label" for="antesSesion"
                  >Antes de sesión de trading</label
                >
              </div>
              <div class="form-check mb-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="despuesSesion"
                  v-model="emotionalLogData.despues_tradear"
                />
                <label class="form-check-label" for="despuesSesion"
                  >Después de sesión de trading</label
                >
              </div>
              <div class="mb-3">
                <label for="comentarios" class="form-label">Contenido:</label>
                <textarea
                  class="form-control"
                  id="comentarios"
                  v-model="emotionalLogData.contenido"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="card" v-for="items in emotionalLogArr" :key="items.id">
        <div class="card-body d-flex align-items-center">
          <div class="flex-grow-1" >
            <h5 class="card-title">{{ items.estado_emocional }}</h5>
            <p class="card-text">{{ items.contenido }}</p>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="checkbox1" />
            <label class="form-check-label" for="checkbox1">Checkbox</label>
          </div>
          <div>
            <button class="btn btn-primary mx-1" @click="actualizar">
              Actualizar
            </button>
            <button class="btn btn-danger mx-1" @click="eliminar">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { createEmotionalLog, getAllEmotionalLog } from "../store/store";
export default {
  name: "FeelingsLog",
  data() {
    return {
      emotionalLogData: {
        estado_emocional: "",
        antes_tradear: false,
        despues_tradear: false,
        contenido: "",
      },
      token: "",
      emotionalLogArr: [],
      modal: null,
    };
  },
  async mounted() {
    this.modal = new Modal(document.getElementById("myModal"));
    // llamar a endpoint de motrar todas la bitacoras
    await this.getAllEmotionalLog();
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    cleanForm(obj) {
      for (let key in obj) {
        if (typeof obj[key] === "string") {
          obj[key] = "";
        }
      }
    },
    async submitForm() {
      try {
        this.token = localStorage.getItem("token");

        const config = {
          headers: {
            token_access: this.token,
          },
        };
        const data = this.emotionalLogData;
        // validar campos
        if (data.estado_emocional === "" || data.contenido === "") {
          alert("Debe diligenciar todos los campos");
        } else {
          const response = await createEmotionalLog(config, data);
          alert(`${response.message}`);
          this.emotionalLogArr.push(data);
          this.closeModal();
          this.cleanForm(data);
        }
      } catch (error) {
        console.error("Error en la peticion", error);
      }
    },
    async getAllEmotionalLog() {
      try {
        const config = {
          headers: {
            token_access: localStorage.getItem("token"),
          },
        };
        const resp = await getAllEmotionalLog(config);
        if(resp.length !== 0) {
          this.emotionalLogArr = resp;                    
        }        
      } catch (error) {
        console.error("Error el la peticion", error);
      }
    },
  },
};
</script>

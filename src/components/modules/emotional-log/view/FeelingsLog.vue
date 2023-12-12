<template>
  <div>
    <h3>Tus bitacoras emocionales</h3>
    <button type="button" class="btn btn-primary" @click="showModal">
      + Crear una bitacora emocional
    </button>
    <div class="modal" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="update ? updateEmotionalLog() : submitForm()">
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
              <button
                class="btn btn-primary"
                v-if="update"
                @click="updateEmotionalLog"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="card" v-for="items in emotionalLogArr" :key="items.id">
        <div class="card-body d-flex align-items-center">
          <div class="flex-grow-1">
            <h5 class="card-title">{{ items.estado_emocional }}</h5>
            <p class="card-text">{{ items.contenido }}</p>
          </div>
          <div>
            <button
              class="btn btn-danger mx-1"
              @click="deleteEmotionalLog(items.id)"
            >
              Eliminar
            </button>
            <button
              class="btn btn-primary mx-1"
              @click="getDataModal(items.id)"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import {
  createEmotionalLog,
  getAllEmotionalLog,
  deleteEmotionalLog,
  updateEmotionalLog,
} from "../store/store";
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
      update: false,
      emotionalLogId: null,
    };
  },
  async created() {
    await this.getAllEmotionalLog();
  },
  async mounted() {
    this.modal = new Modal(document.getElementById("myModal"));
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
          await this.getAllEmotionalLog();
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
        if (resp.length !== 0) {
          this.emotionalLogArr = resp;
          return this.emotionalLogArr;
        }
      } catch (error) {
        console.error("Error el la peticion", error);
      }
    },
    async deleteEmotionalLog(id) {
      try {
        const config = {
          headers: {
            token_access: localStorage.getItem("token"),
          },
        };
        const resp = await deleteEmotionalLog(config, id);
        alert(`${resp.message}`);
        await this.getAllEmotionalLog();
      } catch (error) {
        console.error("Error en la peticion", error);
      }
    },

    getDataModal(id) {
      this.emotionalLogId = id;
      this.emotionalLogArr.forEach((emotionalLog) => {
        if (emotionalLog.id === this.emotionalLogId) {
          this.update = true;
          this.showModal();
          this.emotionalLogData.estado_emocional = emotionalLog.estado_emocional;
          this.emotionalLogData.antes_tradear = emotionalLog.antes_tradear;
          this.emotionalLogData.despues_tradear = emotionalLog.despues_tradear;
          this.emotionalLogData.contenido = emotionalLog.contenido;
        }
      });
    },
    async updateEmotionalLog() {
      try {
        const config = {
          headers: {
            token_access: localStorage.getItem("token"),
          },
        };
        const resp = await updateEmotionalLog(
          config,
          this.emotionalLogId,
          this.emotionalLogData
        );
        alert(`${resp.message}`);
        this.closeModal();
        await this.getAllEmotionalLog();
      } catch (error) {
        console.log("Error en la peticion", error);
      }
    },
  },
};
</script>

<template>
  <MiddleBox class="shadowHover centerDiv">
    <v-form v-model="formValid" @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h1>{{ titulo }}</h1>
          </v-col>

          <v-col cols="12" md="12">
            <slot />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              :rules="rules"
              label="Nombre"
              v-model="formData.name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              :rules="rules"
              label="Precio"
              v-model="formData.price"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              :rules="rules"
              label="Id"
              v-model="formData.id"
              required
            ></v-text-field>
          </v-col>




          <v-col cols="12" md="12">
            <v-btn
              color="success"
              class="mr-4"
              type="submit"
              :disabled="!formValid"
              @click="enviarDataChildren()"
            >
              Registrar
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset()" v-if="limpiar">
              Limpiar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </MiddleBox>
</template>

<script>
import MiddleBox from "../components/static/MiddleBox.vue";

export default {
  name: "HomeView",
  components: {
    MiddleBox,
  },
  props: {
    formData: Object,
    titulo: String,
    limpiar: Boolean,
  },
  data: () => ({
    formDataDefault: {
      name: "",
      price: "",
      id: "",
    },
    formValid: false,
    rules: [
      (value) => {
        if (value) return true;

        return "Este campo es obligatorio";
      },
    ],
  }),
  methods: {
    enviarDataChildren: function () {
      this.$emit("enviarData");
    },
    reset: function () {
      this.formData = this.formDataDefault
    },
  },
};
</script>

<style scoped>
.home {
  background: #fff;
}

.centerDiv {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

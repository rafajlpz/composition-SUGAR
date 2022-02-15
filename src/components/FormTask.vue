<template>
  <form class="form" @submit.prevent>
    <div class="field">
      <label for="task">Tarea</label>
      <input v-model="data.valor" type="text" id="task" name="tarea" />
    </div>
    <hr />
    <div class="field">
      <label for="ratio">Ratio</label>
      <input v-model="data.ratio" type="number" id="ratio" name="rating" />
    </div>
    <hr />

    <button @click="insertar">Enviar</button>
    <!-- {{data}} -->
  </form>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  data: {
    type: Object,
  },
});

const insertar = () => {
  // console.log(`Guardando ${props.data.valor}`)
  props.data.id = `id - ${Date.now()}`
  store.dispatch("insertTask", props.data);
};
</script>

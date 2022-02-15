<template>
  <TheTitle titulo="Tareas" />

  <FormTask :data="task" />

  <section>
<h2>Tareas</h2>
  <ul>
    <li v-for="(item) in tasks" :key="item.id">
      ({{item.id}}) - ({{item.id}}) Ratio: {{item.ratio}}
    </li>
  </ul>
  

  </section>


  
</template>

<script setup>
//Forma sugar
import TheTitle from "./components/TheTitle.vue";
import FormTask from "./components/FormTask.vue";
//Cargar la libreria de Vuex
import { useStore } from "vuex";
import { computed } from "vue";
//Utilizamos el store
const store = useStore();

const task = computed(() => {
  return store.state.task;
});

const tasks = computed(() =>{
  return store.state.tasks;
});


console.log(task.value)
</script>

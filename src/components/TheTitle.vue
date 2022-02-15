<template>
  <h1>{{titulo}}</h1>
  

</template>

<script setup>
    const props = defineProps({
        titulo:{
            type: String,
            default: "Titulo"
        },
    });
</script>

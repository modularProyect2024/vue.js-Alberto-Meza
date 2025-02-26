<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Bienvenido a la mejor app de Fútbol Mexicano ⚽</p>
    <ul>
      <li v-for="equipo in equipos" :key="equipo.id">{{ equipo.nombre }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const title = inject('title');
const equipos = ref([
  { id: 1, nombre: 'América' },
  { id: 2, nombre: 'Chivas' },
  { id: 3, nombre: 'Cruz Azul' },
  { id: 4, nombre: 'Pumas' }
]);
</script>

<style>
h1 {
  color: green;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 18px;
  margin: 5px 0;
}
</style>

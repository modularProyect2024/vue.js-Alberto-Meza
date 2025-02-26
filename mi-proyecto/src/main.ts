import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.provide('title', 'Fútbol Mexicano');
app.mount('#app');

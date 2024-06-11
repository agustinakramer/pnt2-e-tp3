import { createRouter, createWebHistory } from 'vue-router';
import FormularioComponent from '../src/views/FormularioComponent.vue';
import UsuariosComponent from '../src/views/UsuariosComponent.vue';

const routes = [
  { path: '/', name: 'Formulario', component: FormularioComponent },
  { path: '/formulario', name: 'Formulario', component: FormularioComponent },
  { path: '/usuarios', name: 'Usuarios', component: UsuariosComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createSSRApp } from 'vue'

import App from './App.vue'
import {createPinia} from "pinia";
// логика инициализации, специфичная для клиента...
const app = createSSRApp(App)

// это предполагает, что в шаблоне App.vue будет корневой элемент с `id="app"`
app.use(createPinia()).mount('#app')
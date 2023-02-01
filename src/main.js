// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'

/** MODULES SECTION */
import loginModule from "./modules/login";
import productsModule from "./modules/products";

import { registerModules } from "./register-modules";
registerModules({
     login: loginModule,
     products: productsModule
});

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
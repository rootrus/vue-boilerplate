import {createWebHistory, createRouter} from "vue-router";

import Home from "./../views/Home.vue";
import Form from "./../views/Form.vue";
import Product from "./../views/Product.vue";

const routes = [
     {
          path: "/",
          name: "Home",
          component: Home
     },
     {
          path: "/login",
          name: "Login",
          component: Form
     },
     {
          path: "/products",
          name: "Product",
          component: Product
     }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
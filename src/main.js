import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import startPage from './views/startPage.vue'
import page1 from './views/page1.vue'
import page2 from './views/page2.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: startPage }, 
    { 
        path: "/page1", 
        component: page1,
    }, 
    { 
        path: "/page2", 
        component: page2,
    }, 
    { path: "/*", redirect: '/' },
    // redirect -> 重新定向 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 透過 app.use(router) 使app的所有子元件，都能存取 this.$router 和 this.$route
// createApp(App).use(router)
// 掛載
createApp(App).use(router).mount('#app')

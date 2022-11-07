import { createRouter, createWebHistory } from "vue-router";

// import HomePage from '../components/Home-page.vue'

//  const LoginData =()=>   import('../views/Login.vue')

//Not correct {process.env.BASE_URL}
//Correct {import.meta.env.BASE_URL}

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[

        {
            path: "/", component: ()=> import('../components/Home-page.vue')
        },
        {
            path: "/login", component: ()=> import('../views/Login.vue')
        },
        {
            path: "/register", component: ()=> import('../views/Register.vue')
        },

        {
            path: "/property-list", component: ()=> import('../views/Property-list.vue')
        },
        
        {
            path: "/property-grid", component: ()=> import('../views/Property-grid.vue')
        },
        {
            path: "/home-widget", component: ()=> import('../views/HomeWidget.vue')
        }
    ]
}) 
 
import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "@/components/HelloWorld";
import About from "@/components/About";
import Login from "@/view/LoginAuth.vue";
Vue.use(Router);

export default new Router({
    routes: [

        {
            path: "/",
            name:"",
            component:HelloWorld,
        },
        {
            path: "/about",
            name:"AboutPage",
            component:About,
        },
        {
            path: "/login",
            name:"login",
            component:Login,
        },
    ]
});

import Vue from "vue";
import Router from "vue-router";

import About from "@/components/About";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/view/HomePage.vue";
import Login from "@/view/LoginAuth.vue";
import Register from "@/view/RegisterAuth.vue";
import ForgotPassword from "@/view/ForgotPassword.vue";
import DefaultLayout from "@/layouts/Default.vue";
import BookRoom from "@/view/BookRoom.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/default",
      name: "Default",
      component: DefaultLayout,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home,
        },
        {
          path: "/about",
          name: "AboutPage",
          component: About,
        },
        {
          path: "/bookroom",
          name: "BookRoom",
          component: BookRoom,
        },
      ]
    },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/navbar",
      name: "Navbar",
      component: Navbar,
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer,
    },
  ],
});

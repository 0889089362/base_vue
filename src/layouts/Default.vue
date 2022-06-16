<template>
  <div class="default">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "default-layout",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style scoped>
.default {
  width: 100%;
  height: 100%;
  /* background-color: white; */
  /* display: flex;
  flex-direction: column; */
}
</style>

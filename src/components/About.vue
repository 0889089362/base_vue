<template>
  <div class="about">
    {{about}}
    About
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'AboutPage',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      about: "about",
      courses: "courses",
    })
  },
  mounted() {
    console.log(this.about)
  }
}
</script>


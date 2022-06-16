<template>
  <div id="home">
    <Section1 />
    <Section2 />
    <Section3 />
    <BarChart />
    <Section4 />
  </div>
</template>

<script>
import Section1 from "@/components/Section1.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import BarChart from "@/components/BarChart.vue";
import Section4 from "@/components/Section4.vue";

export default {
  name: "HomePage",
  components: {
    Section1,
    Section2,
    Section3,
    BarChart,
    Section4,
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: auto;
}
</style>

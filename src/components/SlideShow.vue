<template>
  <div class="slide-show">
    <h2>Nổi Bật</h2>
    <div class="container">
      <carousel-3d>
        <slide :index="0"><img src="@/assets/house1.jpg" alt="" /></slide>
        <slide :index="1"><img src="@/assets/house2.jpg" alt="" /></slide>
        <slide :index="2"><img src="@/assets/hosue3.jpg" alt="" /> </slide>
        <slide :index="3"> <img src="@/assets/house4.jpg" alt="" /></slide>
        <slide :index="4"> <img src="@/assets/house5.jpg" alt="" /> </slide>
        <slide :index="5"> <img src="@/assets/house6.jpg" alt="" /> </slide>
        <slide :index="6"> <img src="@/assets/house7.jpg" alt="" /> </slide>
        <slide :index="7"> <img src="@/assets/house8.jpg" alt="" /> </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide-Show",
};
</script>

<style>
.slide-show {
  background-color: #edf6f5;
  /* background-image: url(@/assets/header-background.png); */
  width: 100%;
  height: auto;
  padding: 100px 0;
  overflow: hidden;
}

.slide-show > h2 {
  color: #222;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.2;
  font-size: 30px;
  margin-bottom: 60px;
}
.carousel-3d-slide img {
  height: 100%;
  cursor: pointer;
}
</style>

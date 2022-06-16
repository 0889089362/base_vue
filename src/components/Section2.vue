<template>
  <div class="section2">
    <!-- section-2 -->
    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 order-2 order-md-1 sectione2-left">
            <h2 class="section2-title">Mục Tiêu & Tầm Nhìn</h2>
            <p class="section2-text">
              LaLiSa Home mang đến công cụ giúp quản lý và làm đơn giản mô hình
              cho thuê phòng, nhà trọ, gọi chung là bất động sản cho thuê. Mục
              tiêu giúp người cho thuê quản lý toàn bộ công việc cho thuê và
              giúp kết nối đến các khách hàng tiềm năng. Công cụ cũng cung cấp
              nền tảng cho khách hàng để giao tiếp và quản lý phòng mình thuê dễ
              dàng hơn
            </p>
          </div>
          <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <div style="overflow: hidden">
              <img
                src="@/assets/app-tim-tro.jpg"
                alt=""
                style="height: auto; width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Section-2",
};
</script>

<style>
.section2 {
  background-color: #ffffff;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.section2-title {
  color: #222;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.2;
  font-size: 30px;
  margin-bottom: 30px;
  width: 100%;
}

.section2-text {
  width: 100%;
  font-weight: 400;
  color: #777;
  font-size: 16px;
  line-height: 1.7;
  font-family: sans-serif;
  margin-top: 0;
  margin-bottom: 1rem;
}

.sectione2-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
}
</style>

<template>
  <div class="section4">
    <section class="counter">
      <h2 class="section4-title">KẾT QUẢ ĐÃ ĐẠT ĐƯỢC</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="counter-text">
              <div class="cell">
                <h2>2001</h2>
                <p>KHÁCH HÀNG HÀI LÒNG</p>
              </div>
              <div class="cell">
                <h2>101</h2>
                <p>VẤN ĐỀ ĐÃ GIẢI QUYẾT</p>
              </div>
              <div class="cell">
                <h2>99</h2>
                <p>PHẢN HỒI TÍCH CỰC</p>
              </div>
              <div class="cell">
                <h2>82</h2>
                <p>CASE STUDY ĐÃ HOÀN THÀNH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Section-4",
};
</script>

<style scoped>
.section4 {
  padding: 70px 0;
  height: auto;
  width: 100%;
}

.counter {
  padding-top: 6.5rem;
  padding-bottom: 5.375rem;
  background-color: #fff;
  text-align: center;
  background-color: #edf6f5 !important;
}

.counter-text {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.section4-title {
  color: #222;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.2;
  font-size: 30px;
  margin-bottom: 60px;
}

.cell > h2 {
  color: #333;
  font: 700 3.5rem/4.25rem montserrat, sans-serif;
  vertical-align: middle;
}

.cell > p {
  margin-bottom: 0;
  color: #666;
  font: 0.875rem/1.25rem open sans, sans-serif;
  vertical-align: middle;
}
</style>

<template>
  <div class="section1">
    <!-- section-1 -->
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h2 class="section-title">Các chức năng chính</h2>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="feature-card text-center">
              <i class="fas fa-home card-icon"></i>
              <h4 class="mb-2 card-title">Quản Lý Toà Nhà</h4>
              <p>
                Giúp quản lý nhiều toà nhà trong một ứng dụng duy nhất. Phân
                quyền quản lý và hỗ trợ quản lý theo nhóm người
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="feature-card text-center">
              <i class="fas fa-box card-icon"></i>
              <h4 class="mb-2 card-title">Dịch Vụ & Tiện Ích Phòng Thuê</h4>
              <p>
                Quản lý dịch vụ và tiện ích trong toà nhà hoặc cho riêng từng
                phòng. Chỉ cần tạo một lần duy nhất, thay đổi linh hoạt
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="feature-card text-center">
              <i class="far fa-credit-card card-icon"></i>
              <h4 class="mb-2 card-title">Chốt Phòng & Dịch Vụ</h4>
              <p>
                Việc chốt tiền phòng sẽ đơn giản &amp; nhanh chóng, hỗ trợ các
                tính năng hiện đại như mã QR code
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="feature-card text-center">
              <i class="fas fa-headphones card-icon"></i>
              <h4 class="mb-2 card-title">Hợp Đồng Điện Tử</h4>
              <p>
                Hợp đồng điện tử sẽ được tạo giữa bên thuê và cho thuê. Minh
                bạch, an toàn được đặt lên hàng đầu, việc sửa đổi sẽ phải được
                các bên thông qua.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="feature-card text-center">
              <i class="fas fa-cloud-upload-alt card-icon"></i>
              <h4 class="mb-2 card-title">Quản Lý Hoá Đơn</h4>
              <p>
                Hoá đơn được tạo giúp người thuê và cho thuê quản lý đơn giản,
                theo dõi và đưa ra thống kê chi tiết
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-4">
            <div class="feature-card text-center">
              <i class="fas fa-comment-dots card-icon"></i>
              <h4 class="mb-2 card-title">Chat - Báo Cáo Sự Cố</h4>
              <p>
                Báo cáo sự cố, xử lý sự cố sẽ được thực hiện đơn giản, nhanh
                chóng qua ứng dụng. Tiến độ xử lý cũng được cập nhật liên tục
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Section-1",
};
</script>

<style scoped>
.section1 {
  background-color: #edf6f5;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.section-title {
  margin-bottom: 30px;
  color: #222;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.2;
  font-size: 30px;
}

.card-title {
  color: #222;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.2;
}

.card-icon {
  font-size: 30px;
  color: #44ac3b;
  display: inline-block;
  margin-bottom: 16px;
}

.feature-card {
  border-radius: 10px;
  padding: 20px;
  transition: 0.2s ease;
  background-color: #fff;
}

.text-center {
  text-align: center !important;
}

p {
  font-weight: 400;
  color: #777;
  font-size: 16px;
  line-height: 1.7;
  font-family: sans-serif;
}
</style>

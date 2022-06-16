<template>
  <div class="navbar-all">
    <!-- ======= Header Section ======= -->
    <section id="hero">
      <div class="hero-container">
        <div data-aos="fade-in">
          <div class="hero-logo">
            <img class="" src="@/assets/hotels-logo-41825.png" alt="home" />
          </div>

          <h1>Welcome to LALISA Home</h1>
          <h2>
            We create
            <span
              class="typed"
              data-typed-items="beautiful graphics, functional websites, working mobile apps"
            ></span>
          </h2>
          <div class="actions">
            <a href="#about" class="btn-get-started">Bắt Đầu ngay</a>
            <a href="#services" class="btn-services">Xem Dịch Vụ</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <a href="/#/" class="logo mr-auto"
          ><img src="@/assets/hotels-logo-41825.png" alt=""
        /></a>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="/#/" @click="active">Trang Chủ</a></li>
            <li><a class="nav-link scrollto" href="/#/about" @click="active">Xem Thêm</a></li>
            <li><a class="nav-link scrollto" href="/#/bookroom"  @click="active">Đặt Phòng</a></li>
            <li>
              <a class="nav-link scrollto" href="#portfolio" @click="active">Kinh Nghiệm</a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#testimonials" @click="active">Tin Tức</a>
            </li>
            <li><a class="nav-link scrollto" href="#team" @click="active">Liên Hệ</a></li>
            <li><a class="nav-link scrollto" href="#contact" @click="active">FAQ</a></li>
          </ul>
          <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
        </nav>
        <!-- .navbar -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    active(event) {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove('active'));
      event.target.classList.add("active");
    }
  },
  computed: {},
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Header section
--------------------------------------------------------------*/
.navbar-all {
  width: 100%;
  height: auto;
  background: white;
  padding: 0;
}

#hero {
  display: table;
  width: 100%;
  height: 100vh;
  background: url("@/assets/hero-bg.jpg") top center;
  background-size: cover;
}
@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}
#hero .hero-logo {
  margin: 20px;
}
#hero .hero-logo img {
  max-width: 100%;
}
#hero .hero-container {
  background: rgba(0, 0, 0, 0.8);
  display: table-cell;
  margin: 0;
  padding: 0;
  text-align: center;
  vertical-align: middle;
}
#hero h1 {
  margin: 30px 0 10px 0;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  color: #fff;
}
@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
}
#hero h2 {
  color: #ccc;
  margin-bottom: 50px;
}
#hero h2 span {
  color: #fff;
  transition: 0.3s;
  border-bottom: 2px solid #03c4eb;
}
@media (max-width: 768px) {
  #hero h2 {
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 30px;
  }
  #hero h2 .rotating {
    display: block;
  }
}
#hero .rotating > .animated {
  display: inline-block;
}
#hero .actions a {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 20px;
  border-radius: 2px;
  transition: 0.5s;
  margin: 10px;
}
#hero .btn-get-started {
  background: #03c4eb;
  border: 2px solid #03c4eb;
  color: #fff;
}
#hero .btn-get-started:hover {
  background: none;
  border: 2px solid #fff;
  color: #fff;
}
#hero .btn-services {
  border: 2px solid #fff;
  color: #fff;
}
#hero .btn-services:hover {
  background: #03c4eb;
  border: 2px solid #03c4eb;
}
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  background: #0d0d0d;
  transition: all 0.5s;
  z-index: 997;
  height: 70px;
}
@media (max-width: 992px) {
  #header {
    height: 60px;
  }
}
#header.fixed-top {
  background: rgba(0, 0, 0, 0.85);
}
#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#header .logo a {
  color: #fff;
}
#header .logo img {
  height: 50px;
}

.scrolled-offset {
  margin-top: 70px;
}
@media (max-width: 992px) {
  .scrolled-offset {
    margin-top: 60px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #03c4eb;
}
/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #333333;
}
.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover > a {
  color: #03c4eb;
}
.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover > a {
  color: #03c4eb;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}
/*--------------------------------------------------------------
# Sections
--------------------------------------------------------------*/
/* Sections Common
--------------------------------*/
section {
  overflow: hidden;
}

.section-title {
  font-size: 32px;
  color: #111;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
}

.section-description {
  text-align: center;
  margin-bottom: 40px;
}

.section-title-divider {
  width: 50px;
  height: 3px;
  background: #03c4eb;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>

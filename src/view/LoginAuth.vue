<template>
  <div id="login">
    <div class="container">
      <select v-model="language" @change="changeLanguage()">
        <option value="en">EN</option>
        <option value="vn">VN</option>
      </select>
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3 style="float: left">{{ $t("logIn.signIn") }}</h3>
            <div class="d-flex justify-content-end social_icon">
              <span><i class="fab fa-facebook-square"></i></span>
              <span><i class="fab fa-google-plus-square"></i></span>
              <span><i class="fab fa-twitter-square"></i></span>
            </div>
          </div>
          <div class="card-body">
            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-user"></i
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="username"
                  v-model="userName"
                  ref="userName"
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-key"></i
                  ></span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  id="passWord"
                  v-model="passWord"
                  ref="passWord"
                />
              </div>
              <div class="form-group" style="padding-top: 16px">
                <button
                  type="submit"
                  value=""
                  class="btn float-right login_btn bg-red"
                  @click.prevent="login()"
                >{{ $t("logIn.signIn") }}</button>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              {{ $t("logIn.Dont_have_an_account") }}
              <router-link :to="{ name: 'Register', param: {} }">
                <a>{{ $t("logIn.signUp") }}</a>
              </router-link>
            </div>
            <div class="d-flex justify-content-center">
              <router-link :to="{ name: 'ForgotPassword', param: {} }">
                <a>{{ $t("logIn.Forgot_your_password") }}</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "LoginAuth",
  data() {
    return {
      language: null,
      userName: "",
      passWord: "",
    }
  },
  components: {},
  methods: {
    changeLanguage() {
      localStorage.setItem("language", this.language);
      window.location.reload();
    },
    
    login() {
      // console.log(this.$refs.userName.value);
      // console.log(actions.login());
      const data = {
        userName: this.$refs.userName.value,
        passWord: this.$refs.passWord.value,
      };
      // this.$store.dispatch('getAllUser')
      this.$store.dispatch('userLogin', {data});
      // console.log(data)
    }
  },
  computed:{
     ...mapGetters(['user']),
     ...mapActions(['getAllUser'])
  }
};
</script>

<style>
#login {
  width: 100%;
  height: 100%;
}

/* Made with love by Mutiullah Samim*/
@import url("https://fonts.googleapis.com/css?family=Numans");

html,
body {
  background-image: url("http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #ffc312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #ffc312 !important;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white !important;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}
</style>

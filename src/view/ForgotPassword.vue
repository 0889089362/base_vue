<template>
  <div id="forgotpassword">
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card" style="width: 480px; height: 300px;">
          <div class="card-header">
            <h3 style="float: left">Forgot Password</h3>
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
                    ><i class="fa fa-envelope" aria-hidden="true"></i
                  ></span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div class="input-group form-group" style="display: none;">
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
                />
              </div>
              <div class="form-group" style="padding-top: 16px">
                <input
                  type="submit"
                  value="Submit"
                  class="btn float-right login_btn bg-red"
                />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between links">
              <router-link :to="{ name: 'Login', param: {} }">
                <a>Sign In</a>
              </router-link>
              <router-link :to="{ name: 'Register', param: {} }">
                <a>Sign Up</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  components: {},
  methods: {},
};
</script>

<style scoped>
#forgotpassword {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div id="register">
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3 style="float: left">Sign Up</h3>
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
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fa fa-envelope" aria-hidden="true"></i
                  ></span>
                </div>
                <input type="email" class="form-control" placeholder="email" />
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
                  placeholder="confirm password"
                />
              </div>
              <div class="form-group" style="padding-top: 16px">
                <input
                  type="submit"
                  value="Login"
                  class="btn float-right login_btn bg-red"
                />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Have an account
              <router-link :to="{ name: 'Login', param: {} }">
                <a>Sign In</a>
              </router-link>
            </div>
            <div class="d-flex justify-content-center">
              <router-link :to="{ name: 'ForgotPassword', param: {} }">
                <a>Forgot your password?</a>
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
  name: "RegisterAuth",
  components: {},
};
</script>

<style scoped>
#register {
  width: 100%;
  height: 100%;
}

.card {
  height: 470px;
  display: flex;
}
</style>

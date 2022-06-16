import ApiService from "@/common/api.service";

// action types
export const CHANGE_USER = "changeUser";
export const GET_USER = "getUser";
export const ADD_USER = "addUser";
export const UPDATE_USER = "updateUser";
export const REMOVE_USER = "removeUser";

export const Login = "/user/login";

// export const UPDATE_PRODUCT = "updateProduct";
const state = {
 users: [],
 newUser: "",
};

const getters = {
  user(state) {
    return state.users;
  },
};

const actions = {
  // [CHANGE_USER](context) {
  //   return new Promise((resolve) => {
  //     ApiService.get(CHANGE_USER).then(({ data }) => {
  //       if (data.status) {
  //         context.commit(GET_USER, data);
  //       }
  //       resolve(data);
  //     });
  //   });
  // },

  getAllUser(context) {
    // console.log('context', context);
    return new Promise((resolve) => {
      ApiService.get("/user/getall").then(({ data }) => {
        if (data) {
          state.users = data;
          context.commit(GET_USER, data);
        }
        console.log('users', state.users)
        resolve(this.users);
      });
    });
  },

  userLogin(context, data) {
    return new Promise((resolve) => {
      ApiService.post(Login, data.data).then(({ response}) => { 
        if (response.message) {
          state.users =  response
          context.commit(ADD_USER, response);
        }
        resolve(this.users);
      });
    });
  }
};

const mutations = {
  [GET_USER](state, data) {
    state.users = data;
  },

  [ADD_USER](state) {
    state.users.push({
      body: state.newUser,
    })
  },

  [UPDATE_USER](state, data) {
    let user = state.users
    user.splice(user.indexOf(data), 1)
    state.users = user
    state.newUser = data.body
  },

  [REMOVE_USER](state, data) {
    var user = state.users
    user.splice(user.indexOf(data), 1)
  }
};

export default {
  state,
  actions,
  mutations,
  getters,
};

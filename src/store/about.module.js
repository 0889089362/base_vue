import ApiService from "@/common/api.service";

// action types
export const CHANGE_ABOUT = "changeAbout";
export const GET_ABOUT = "getAbout";


// export const UPDATE_PRODUCT = "updateProduct";
const state = {
  about : 'about 121221'
};
const getters = {
  about(state) {
    return state.about;
  },

};

const actions = {
  [CHANGE_ABOUT](context) {
    return new Promise(resolve => {
      ApiService.get(CHANGE_ABOUT)
          .then(({ data }) => {
            if (data.status) {
              context.commit(GET_ABOUT, data);
            }
            resolve(data);
          })
    });
  },
};

const mutations = {
  [GET_ABOUT](state, data) {
    state.about = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

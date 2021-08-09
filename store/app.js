import api from '../services/api'
export const state=()=>({
    authenticating: false,
    isLoading:false,
    // accessToken: TokenService.getToken(),
    isLoggedIn: false,
    authenticationErrorCode: 0,
    authenticationError: "",
    user: {},
    services: [],
    roles: [],
});
export const mutations = {
    IS_LOADING(state,payload){
      state.isLoading = payload;
    },
    UPDATED_USER_DATA(state, payload) {
        state.user = payload;
        // state.services = payload.service;
        // state.roles = payload.roles

    },

    loginRequest(state) {
        state.authenticating = true;
        state.authenticationError = "";
        state.authenticationErrorCode = 0;
    },


    loginSuccess(state, data) {
        state.accessToken = data.token;
        state.authenticating = false;
        state.isLoggedIn = true;

        // console.log(state.user);
    },


    loginError(state, {
        errorCode,
        errorMessage
    }) {
        state.authenticating = false;
        state.authenticationErrorCode = errorCode;
        state.authenticationError = errorMessage;
    },

    logoutSuccess(state) {
        state.accessToken = "";
        state.isLoggedIn = false;
    },
    GET_SCHEDULE(state, payload) {
        state.schedules = payload
    }
}
export const actions = {
    async setCookie({
        commit
    }) {
        return new Promise((resolve, reject) => {
            return api.get_cokkie().then((res) => {
                resolve(res);
            })
        })
    },


    async login({
        commit
    }, data) {

        commit("loginRequest");
         return  router.replace("account-verification");
        // await api.login(data).then((res) => {
        //     let r = res.data;

            // TokenService.saveToken(r.data.token)
            // TokenService.saveRefreshToken(r.data.token)
            // ApiSetUp.setHeader();
            // commit("loginSuccess", r);
            // commit("UPDATED_USER_DATA", r.data.user);

            // return router.push(router.history.current.query.redirect || "/home");
            // return router.push("/dashboard");
            // return true;
        // });
        // })


    },
    getUserProfileAction({commit}){
        return api.getUserProfile().then((res)=>{
            let r = res.data;
            commit("UPDATED_USER_DATA", r);
        })
    },
    updateProfileInfoAction({
        commit
    }, form) {
        return new Promise((resolve, reject) => {
            api.updateProfileInfo(form).then((res) => {
                let t = res.data.data;
                commit("UPDATED_USER_DATA", t);
                resolve(t);
            })
        })
    },
    updateAffordabilityInfoAction({commit},form){
        return new Promise((resolve,reject)=>{
            api.updateAffordabilityInfo(form).then((res)=>{
                let t = res.data.data;
                 commit("UPDATED_USER_DATA", t);
                 resolve(t);
            })
        })
    },
    async register({
        commit
      }, data) {
        commit("loginRequest");
        let res = await this.$axios.$post(api.register(), data);
        let r = res.data;
        return r;

        // await api.register(data).then((res) => {
        //     let r = res.data;
        //     TokenService.saveToken(r.data.token)
        //     TokenService.saveRefreshToken(r.data.token)
        //     ApiSetUp.setHeader();
        //     commit("loginSuccess", r);
        //     commit("UPDATED_USER_DATA", r.data.user);
        //     router.replace("account-verification");
        //     return true;
        // })

      },
    async verifyUserMailAction({
        commit
      }, data) {
        // return new Promise((resolve, reject) => {
        let res = await this.$axios.$post(api.verifyUserEmail(), data);
        let result = res.data;
        // commit("UPDATED_USER_DATA", result);
        return result
        // })


      },
    async forgotPasswordAction({
      commit
    }, data) {
      let res = await this.$axios.$post(api.forgotPassword(),data);
      return res.data.data;
      // return new Promise((resolve, reject) => {
      //   api.forgotPassword(data).then((res) => {
      //     let r = res.data.data;
      //     resolve(r);
      //   });
      // })
    },
  async changePasswordByForgotAction({
        commit
      }, data) {
        let res =await this.$axios.$post(api.changePassowrdByForgot(),data);
        return res.data.data;

  },
    async getProfileAction({
        commit
    }) {
        await api.getProfileInfo().then((res) => {
            let p = res.data.data;
            commit("UPDATED_USER_DATA", p);
        })
    },

    logout({
        commit
    }) {
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        ApiService.removeHeader();
        sessionStorage.clear();
        commit("logoutSuccess");
        router.push({
            name: 'login'
        });
    },


    verifyusercodeAction({ commit }, data) {
      return new Promise((resolve, reject) => {
            this.$axios.$post(api.verifyUserEmail(), data).then((res)=>{
              let result = res.data.data;
              // commit("UPDATED_USER_DATA", result);
              resolve(result);
            })

          })

    },

    resendCodeAction({
        commit
    }) {
        return new Promise((resolve, reject) => {
            api.resendCode().then((res) => {
                resolve(res);
            })
        })
    },


    logoutAction({
        commit
    }) {
        // api.logout();
        TokenService.removeToken()
        TokenService.removeUser()
        TokenService.removeRefreshToken()
        ApiSetUp.removeHeader()
        commit("logoutSuccess");
        router.push({
            name: 'login'
        });
    },
    getAllSchedule({
        commit
    }) {
        api.mySchedule().then((res) => {
            let p = res.data.data;
            commit("GET_SCHEDULE", p)
        })
    },

    getAllUserSavedPropertiesAction({
        commit
    }) {
        api.all_saved_properties().then((res) => {
            let p = res.data.data;
            commit("USER_SAVED_PROPERTIES", p);
        })
    },
    async addPropertyTofavouriteAction({
        commit
    }, form) {
        let r = form.user + '/' + form.property;
        console.log("save_form", form)
        await new Promise((resolve, reject) => {
            api.add_saved_property(r).then((res) => {
                let p = res.data.data;
                resolve(p)
            })
        })
    }

}
export const getters = {
    userid: state => state.user.id,
    userIsVerified: state => state.user.is_verified,
    isLoggedIn:state=>state.isLoggedIn,
    accessToken:state=>state.accessToken
}

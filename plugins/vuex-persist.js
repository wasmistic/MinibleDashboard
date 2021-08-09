// import VuexPersistence from 'vuex-persist'

// export default ({
//   store
// }) => {
//   new VuexPersistence({
//     storage: window.localStorage
//     /* your options */
//   }).plugin(store);
// }



import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({
  store,
  req,
  isDev
}) => {
  createPersistedState({
    key: '_afrealAdmin',
    paths: [],
    storage: {
      getItem(key) {
        return process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key]
      },
      // 1 hour cookie expiration
      setItem(key, value) {
        return Cookies.set(key, value, {
          expires: 0.02, // in days
          secure: !isDev
        })
      },
      removeItem(key) {
        return Cookies.remove(key)
      }
    }
  })(store)
}

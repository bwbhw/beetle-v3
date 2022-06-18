import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 创建一个新的 store 实例
const store = createStore({
  state: {
    userName: '',
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
      console.log(state.userName)
    },
    loginOut(state) {
        state.userName = '';
        localStorage.removeItem('token');
    }
  },
  actions: {},
  // 配置插件
    plugins: [
        createPersistedState({
            key: 'vuex_PersistedState',
           
        })
    ]
})

export default store

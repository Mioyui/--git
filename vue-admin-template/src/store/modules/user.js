
import { login, logout, getInfo } from '@/api/user'
// 引入对token的操作的方法
import { getToken, setToken, removeToken } from '@/utils/auth'
// 引入重置路由的方法
import { resetRouter , asyncRoutes,anyRoutes,constantRoutes} from '@/router'
import router from '@/router'

const getDefaultState = () => {
  return {
    // 获取token
    token: getToken(),
    name: '',
    avatar: '',
    // 以下都是菜单显示的权限信息
    routes:[],
    roles:[],
    buttons:[],
    // 定义一个权限数据 根据后端返回的菜单标记(routes)计算出可以访问 显示的菜单
    resultAsyncRoutes:[],
    // 将计算出的 异步路由 和之前的常量路由 合并成 当前用户的[常量路由]
    resultAllRoutes:[],
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    // 合并清空 按我理解 当重置信息 登录时获得的state替换之前存储好的信息
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO:(state,userInfo)=>{
    state.name=userInfo.name;
    state.avatar=userInfo.avatar;
    // 存储用户可以访问的路由 routes是个数组
    state.routes=userInfo.routes;
    // 存储用户拥有的角色
    state.roles=userInfo.roles;
    // 存储按钮级别权限
    state.buttons=userInfo.buttons;
  },
  // 存储计算出来的权限路由 asyncRoutes
  SET_RESULTASYNCROUTES:(state,asyncRoutes)=>{
    state.resultAsyncRoutes=asyncRoutes;
    state.resultAllRoutes=constantRoutes.concat(state.resultAsyncRoutes,anyRoutes)
    // 将路由添加到router里
    router.addRoutes(state.resultAllRoutes)
  }
}

// 定义计算函数  两个函数进行对比 对比出当前用户能显示的路由
const computedAsyncRoutes=(asyncRoutes,routes)=>{
    // 过滤当前用户需要展示的路由
    return asyncRoutes.filter(item=>{
      // 数组没有该路由 则索引值为-1 因此不等-1则代表 返回的权限有该路由
      if(routes.indexOf(item.name)!=-1){
        // 递归子路由 这个之后得好好看看
        if(item.children>0&&item.children){
          item.children=computedAsyncRoutes(item.children,routes);
        }
        return true
      }
    })
}


const actions = {
  // 登录验证 若成功 则存储token 失败返回失败状态promsie
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let result=await login({ username: username.trim(), password: password })
    console.log(result)
    if(result.code===20000){
      console.log('登录成功返回的result:',result)
      commit('SET_TOKEN', result.data.token);
      setToken(result.data.token);

      return 'ok';
    }else{
      return Promise.reject(new Error('faile'));
    }
    // return new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password }).then(response => {
    //     const { data } = response
    //     commit('SET_TOKEN', data.token)
    //     setToken(data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // get user info
  // 获取用户信息
  async getInfo({ commit, state }) {
    let result=await getInfo(state.token);
    console.log('登录后获取到的结果:',result)
    if(result.code===20000){
        // const {userInfo} = result.data
        commit('SET_USERINFO', result.data)
        // 将本地异步路由和后端返回菜单进行计算 生成 该用户 可访问的异步路由
        commit('SET_RESULTASYNCROUTES',computedAsyncRoutes(asyncRoutes,result.data.routes))
    }else{
      return Promise.reject(new Error('faile'));
    }
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
      // 返回用户信息 包含 用户名name 用户头像 avatar routes不同用户该展现哪些菜单的标记 以及角色role 
    //     const { data } = response

    //     if (!data) {
    //       return reject('Verification failed, please Login again.')
    //     }

    //     const { name, avatar } = data

    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


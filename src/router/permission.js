import router from 'router/index.js'
import { getLocalStorage } from 'utils/storage.js'

// beforeEach在路由地址改变之前触发
// to即将进入的路由地址
// from 上一个路由地址
// next() 放行 可以改url地址 可以渲染路由组件
//        参数：可写可不写
//        1:字符串：路由地址
//        2:回掉函数：回参 赋值是this.$router
router.beforeEach((to, from, next) => {
    // 更改页面title
    document.title = to.meta.title
    // 需要登录的地方验证是否已经登录有token
    if (to.meta.auth) {
        if (getLocalStorage('token')) {
            // 如果有token就放行
            next()
        }
        else {
            // 没有token返回登录页面并提示登录
            next('/login');
        }
    }
    next()
})

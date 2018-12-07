import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
// 配置路由
let routes = []

routes = routes.concat([
  { path: '/', name: 'HelloWorld', name_CN: '首页', component: HelloWorld }
])

// 定义各页面的标题
let HEADER_MAP = {}
for (let item of routes) {
  HEADER_MAP[item.name] = item
}
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  let title = to.name ? (HEADER_MAP[to.name] ? HEADER_MAP[to.name].name_CN : HEADER_MAP.DEFAULT) : HEADER_MAP.DEFAULT
  document.title = title
  document.head.title = title

  next()
})

export default router

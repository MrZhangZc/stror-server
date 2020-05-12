/*
 * @Descripttion: 路由中间件
 * @Author: zhangzhichao
 * @Date: 2020-05-10 12:56:25
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-10 12:56:47
 */

const Router = require('koa-router')
const { resolve } = require('path')
const glob = require('glob')

const routerFile = glob.sync(resolve(__dirname, '../router', './*.js')).map(require)

const router = app => {
  const router = new Router()

  routerFile.forEach(item => {
    router.stack = router.stack.concat(item.stack)
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}

module.exports = {
  router
}

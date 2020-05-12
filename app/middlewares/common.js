/*
 * @Descripttion: 
 * @Author: zhangzhichao
 * @Date: 2020-05-10 12:55:33
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-10 12:55:47
 */

const bodyParser = require('koa-body');

const addbodyParse = app => {
  app.use(bodyParser());
}

module.exports = {
  addbodyParse,
}

/*
 * @Descripttion: 入口文件
 * @Author: zhangzhichao
 * @Date: 2020-05-10 12:39:41
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-10 12:50:21
 */

const Koa = require('koa');
const R = require('ramda');

const { resolve } = require('path');
const r = path => resolve(__dirname, path);

const MIDDLEWARES = ['logger', 'database', 'common', 'router'];

const useMiddleWares = app => {
  return R.map(R.compose(
    R.map(i => i(app)),
    require,
    i => `${r('./app/middlewares')}/${i}`
  ))
}

const app = new Koa();
useMiddleWares(app)(MIDDLEWARES);

module.exports = app;

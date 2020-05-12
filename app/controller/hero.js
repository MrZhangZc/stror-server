/*
 * @Descripttion: 
 * @Author: zhangzhichao
 * @Date: 2020-05-10 13:40:07
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-10 13:43:59
 */

const heroModel = require('../model/hero');

const fetchHerp = async name => {
  const hero = await heroModel.fetchHerp(name);
  return hero;
}

module.exports = {
  fetchHerp,
}

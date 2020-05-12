/*
 * @Descripttion: 
 * @Author: zhangzhichao
 * @Date: 2020-05-10 13:40:07
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 20:20:26
 */

const heroModel = require('../model/hero');

const fetchHeroById = async heroId => {
  if (!heroId) {
    __ilogger.error('参数错误');
    return new Error('参数错误');
  };
  const hero = await heroModel.fetchHeroById(heroId);
  return hero;
}

module.exports = {
  fetchHeroById,
}

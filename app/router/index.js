/*
 * @Descripttion: 
 * @Author: zhangzhichao
 * @Date: 2020-05-10 12:57:19
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-13 01:40:31
 */

const router = require('koa-router')();
const heroController = require('../controller/hero');

router.get('/getHeroInfo/:id', async ctx => {
  const jsonData = {};
  const heroId = ctx.params.id;
  try {
    const hero = await heroController.fetchHeroById(heroId);
    jsonData.succ = true;
    jsonData.data = hero;
    ctx.body = jsonData;
  } catch (error) {
    jsonData.succ = false;
    jsonData.msg = error.message;
    jsonData.data = {};
    __ilogger.error('zzc error' + error.message);
    ctx.body = jsonData;
  }
});

module.exports = router;

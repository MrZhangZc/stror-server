/*
 * @Descripttion: 
 * @Author: zhangzhichao
 * @Date: 2020-05-10 12:57:19
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-10 13:45:55
 */

const router = require('koa-router')();
const heroController = require('../controller/hero');

router.get('/zzc', async ctx => {
  const jsonData = {};
  try {
    const hero = await heroController.fetchHerp('猴子');
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

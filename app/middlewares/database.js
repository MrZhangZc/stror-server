/*
 * @Descripttion: mongodb数据库中间件
 * @Author: zhangzhichao
 * @Date: 2020-05-10 12:53:43
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 20:07:42
 */

const mongoose = require('mongoose');
const config = require('config');
const { resolve } = require('path');
const glob = require('glob');

glob.sync(resolve(__dirname, '../model', './*.js')).map(require);
const herosStory = require(resolve(__dirname, '../crawler/herosStory.json'))
const database = app => {
  if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
  }
  mongoose.connect(config.get('mongo.url'), { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.get('mongo.url'), { useNewUrlParser: true, useUnifiedTopology: true })
  })

  mongoose.connection.on('error', err => {
    __mlogger.error('mongodb连接失败', err.message);
  })

  mongoose.connection.on('open', async ()=> {
    __mlogger.info('成功连接mongodb数据库', config.get('mongo.url'));

    const Hero = mongoose.model("Hero");
    const existHero = await Hero.find({}).exec();

    if (!existHero.length) Hero.insertMany(herosStory)
  })
}

module.exports = {
  database
}

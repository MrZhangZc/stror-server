/*
 * @Descripttion: 英雄故事数据模型
 * @Author: zhangzhichao
 * @Date: 2020-05-10 08:56:15
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 20:22:33
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  name: String,
  img: String,
  alias: [
    String
  ],
  storyData: String,
  heroId: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

HeroSchema.pre('save', function (next) {
  if(this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  } else {
    this.meta.updatedAt = Date.now();
  }

  next();
})

const thisModel = mongoose.model('Hero', HeroSchema);

/**
 * 查找某英雄信息
 * @param {String} name
 * @return {Object} hero 
 */
const fetchHeroById = async heroId => {
  const hero = await thisModel.findOne({
    heroId: heroId
  });
  return hero;
}

module.exports = {
  fetchHeroById,
}

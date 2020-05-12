/*
 * @Descripttion: 
 * @Author: zhangzhichao
 * @Date: 2020-05-10 14:24:10
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-10 14:29:02
 */

const request = require('supertest');
const { expect } = require('chai');

const app = require('../index');

describe('hero', () => {
  let server;
  before(function() {
    server = app.listen(9999);
  })

  after(function() {
    server.close();
  })

  describe('#GET test', () => {
    it('shoule request success', async () => {
      const res = await request(server)
        .get('/zzc')
        .expect(200)
      const result = res.body;
      expect(result.succ).equal(true);
    }).timeout(1000);
  })
})

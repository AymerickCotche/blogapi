/* eslint-disable no-undef */
import { expect} from "chai"
const request = require('supertest');
const app = require('../server');

describe('TEST FOR CATEGORIES', () => {

  describe(" -- get ALL Categories", () => {
    it('should return a response with status 200 and all categories infos',  async () => {
      const categories = await request(app)
         .get('/categories')
      expect(categories.status).equal(200);
    })
  })
  
  
});
/*
 * SwaggerでマンガAPIを遊ぶ
 * マンガのためのAPI
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Swaggerapi);
  }
}(this, function(expect, Swaggerapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Swaggerapi.CommentApi();
  });

  describe('(package)', function() {
    describe('CommentApi', function() {
      describe('getCommentsByTitleId', function() {
        it('should call getCommentsByTitleId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCommentsByTitleId call and complete the assertions
          /*
          var titleId = 789;

          instance.getCommentsByTitleId(titleId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Swaggerapi.Comment);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(1);
              expect(data.userId).to.be.a('number');
              expect(data.userId).to.be(1);
              expect(data.titleId).to.be.a('number');
              expect(data.titleId).to.be(1);
              expect(data.body).to.be.a('string');
              expect(data.body).to.be("IBARU JAPAN");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putCommentByTitleId', function() {
        it('should call putCommentByTitleId successfully', function(done) {
          // TODO: uncomment, update parameter values for putCommentByTitleId call
          /*
          var titleId = 789;
          var userId = 789;
          var body = "body_example";

          instance.putCommentByTitleId(titleId, userId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
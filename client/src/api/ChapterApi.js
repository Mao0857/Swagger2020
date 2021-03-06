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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Chapter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Chapter'));
  } else {
    // Browser globals (root is window)
    if (!root.Swaggerapi) {
      root.Swaggerapi = {};
    }
    root.Swaggerapi.ChapterApi = factory(root.Swaggerapi.ApiClient, root.Swaggerapi.Chapter);
  }
}(this, function(ApiClient, Chapter) {
  'use strict';

  /**
   * Chapter service.
   * @module api/ChapterApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ChapterApi. 
   * @alias module:api/ChapterApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getChapterById operation.
     * @callback module:api/ChapterApi~getChapterByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Chapter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get chapter by id
     * @param {Number} id ID of chapter to return
     * @param {module:api/ChapterApi~getChapterByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Chapter}
     */
    this.getChapterById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getChapterById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Chapter;

      return this.apiClient.callApi(
        '/chapters/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Chapter', 'model/Comment', 'model/Manga', 'api/ChapterApi', 'api/CommentApi', 'api/MangaApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Chapter'), require('./model/Comment'), require('./model/Manga'), require('./api/ChapterApi'), require('./api/CommentApi'), require('./api/MangaApi'));
  }
}(function(ApiClient, Chapter, Comment, Manga, ChapterApi, CommentApi, MangaApi) {
  'use strict';

  /**
   * API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Swaggerapi = require('index'); // See note below*.
   * var xxxSvc = new Swaggerapi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Swaggerapi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Swaggerapi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Swaggerapi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Chapter model constructor.
     * @property {module:model/Chapter}
     */
    Chapter: Chapter,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The Manga model constructor.
     * @property {module:model/Manga}
     */
    Manga: Manga,
    /**
     * The ChapterApi service constructor.
     * @property {module:api/ChapterApi}
     */
    ChapterApi: ChapterApi,
    /**
     * The CommentApi service constructor.
     * @property {module:api/CommentApi}
     */
    CommentApi: CommentApi,
    /**
     * The MangaApi service constructor.
     * @property {module:api/MangaApi}
     */
    MangaApi: MangaApi
  };

  return exports;
}));

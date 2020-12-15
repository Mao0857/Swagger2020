<?php
/**
 * MangaApiInterface
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Server
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * SwaggerでマンガAPIを遊ぶ
 *
 * マンガのためのAPI
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Server\Api;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Swagger\Server\Model\Manga;

/**
 * MangaApiInterface Interface Doc Comment
 *
 * @category Interface
 * @package  Swagger\Server\Api
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
interface MangaApiInterface
{

    /**
     * Operation getMangaById
     *
     * Get manga by id
     *
     * @param  int $id  ID of manga to return (required)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return Swagger\Server\Model\Manga[]
     *
     */
    public function getMangaById($id, &$responseCode, array &$responseHeaders);

    /**
     * Operation getMangas
     *
     * Get list of registered mangas
     *
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return Swagger\Server\Model\Manga[]
     *
     */
    public function getMangas(&$responseCode, array &$responseHeaders);
}
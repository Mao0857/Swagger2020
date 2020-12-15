# Swagger\Server\Api\MangaApiInterface

All URIs are relative to *https://virtserver.swaggerhub.com/Mao0857/Manga/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMangaById**](MangaApiInterface.md#getMangaById) | **GET** /mangas/{id} | Get manga by id
[**getMangas**](MangaApiInterface.md#getMangas) | **GET** /mangas | Get list of registered mangas


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.manga:
        class: Acme\MyBundle\Api\MangaApi
        tags:
            - { name: "swagger_server.api", api: "manga" }
    # ...
```

## **getMangaById**
> Swagger\Server\Model\Manga getMangaById($id)

Get manga by id

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/MangaApiInterface.php

namespace Acme\MyBundle\Api;

use Swagger\Server\Api\MangaApiInterface;

class MangaApi implements MangaApiInterface
{

    // ...

    /**
     * Implementation of MangaApiInterface#getMangaById
     */
    public function getMangaById($id)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of manga to return |

### Return type

[**Swagger\Server\Model\Manga**](../Model/Manga.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **getMangas**
> Swagger\Server\Model\Manga getMangas()

Get list of registered mangas

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/MangaApiInterface.php

namespace Acme\MyBundle\Api;

use Swagger\Server\Api\MangaApiInterface;

class MangaApi implements MangaApiInterface
{

    // ...

    /**
     * Implementation of MangaApiInterface#getMangas
     */
    public function getMangas()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Swagger\Server\Model\Manga**](../Model/Manga.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


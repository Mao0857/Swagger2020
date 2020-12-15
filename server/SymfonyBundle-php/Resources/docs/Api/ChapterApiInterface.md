# Swagger\Server\Api\ChapterApiInterface

All URIs are relative to *https://virtserver.swaggerhub.com/Mao0857/Manga/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChapterById**](ChapterApiInterface.md#getChapterById) | **GET** /chapters/{id} | Get chapter by id


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.chapter:
        class: Acme\MyBundle\Api\ChapterApi
        tags:
            - { name: "swagger_server.api", api: "chapter" }
    # ...
```

## **getChapterById**
> Swagger\Server\Model\Chapter getChapterById($id)

Get chapter by id

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/ChapterApiInterface.php

namespace Acme\MyBundle\Api;

use Swagger\Server\Api\ChapterApiInterface;

class ChapterApi implements ChapterApiInterface
{

    // ...

    /**
     * Implementation of ChapterApiInterface#getChapterById
     */
    public function getChapterById($id)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of chapter to return |

### Return type

[**Swagger\Server\Model\Chapter**](../Model/Chapter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


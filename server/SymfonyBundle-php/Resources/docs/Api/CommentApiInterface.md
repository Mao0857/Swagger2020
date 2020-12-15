# Swagger\Server\Api\CommentApiInterface

All URIs are relative to *https://virtserver.swaggerhub.com/Mao0857/Manga/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCommentsByTitleId**](CommentApiInterface.md#getCommentsByTitleId) | **GET** /comments | Get comment by title_id
[**putCommentByTitleId**](CommentApiInterface.md#putCommentByTitleId) | **PUT** /comments | Send comment to title


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.comment:
        class: Acme\MyBundle\Api\CommentApi
        tags:
            - { name: "swagger_server.api", api: "comment" }
    # ...
```

## **getCommentsByTitleId**
> Swagger\Server\Model\Comment getCommentsByTitleId($titleId)

Get comment by title_id

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/CommentApiInterface.php

namespace Acme\MyBundle\Api;

use Swagger\Server\Api\CommentApiInterface;

class CommentApi implements CommentApiInterface
{

    // ...

    /**
     * Implementation of CommentApiInterface#getCommentsByTitleId
     */
    public function getCommentsByTitleId($titleId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **int**| ID of title id |

### Return type

[**Swagger\Server\Model\Comment**](../Model/Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **putCommentByTitleId**
> putCommentByTitleId($titleId, $userId, $body)

Send comment to title

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/CommentApiInterface.php

namespace Acme\MyBundle\Api;

use Swagger\Server\Api\CommentApiInterface;

class CommentApi implements CommentApiInterface
{

    // ...

    /**
     * Implementation of CommentApiInterface#putCommentByTitleId
     */
    public function putCommentByTitleId($titleId, $userId, $body)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **int**| ID of title id |
 **userId** | **int**| ID of user id |
 **body** | **string**| comment |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


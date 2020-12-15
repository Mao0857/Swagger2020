# Swaggerapi.CommentApi

All URIs are relative to *https://virtserver.swaggerhub.com/Mao0857/Manga/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCommentsByTitleId**](CommentApi.md#getCommentsByTitleId) | **GET** /comments | Get comment by title_id
[**putCommentByTitleId**](CommentApi.md#putCommentByTitleId) | **PUT** /comments | Send comment to title


<a name="getCommentsByTitleId"></a>
# **getCommentsByTitleId**
> [Comment] getCommentsByTitleId(titleId)

Get comment by title_id

### Example
```javascript
var Swaggerapi = require('swaggerapi');

var apiInstance = new Swaggerapi.CommentApi();

var titleId = 789; // Number | ID of title id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommentsByTitleId(titleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **Number**| ID of title id | 

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putCommentByTitleId"></a>
# **putCommentByTitleId**
> putCommentByTitleId(titleId, userId, body)

Send comment to title

### Example
```javascript
var Swaggerapi = require('swaggerapi');

var apiInstance = new Swaggerapi.CommentApi();

var titleId = 789; // Number | ID of title id

var userId = 789; // Number | ID of user id

var body = "body_example"; // String | comment


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putCommentByTitleId(titleId, userId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titleId** | **Number**| ID of title id | 
 **userId** | **Number**| ID of user id | 
 **body** | **String**| comment | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


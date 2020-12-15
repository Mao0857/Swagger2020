# Swaggerapi.ChapterApi

All URIs are relative to *https://virtserver.swaggerhub.com/Mao0857/Manga/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChapterById**](ChapterApi.md#getChapterById) | **GET** /chapters/{id} | Get chapter by id


<a name="getChapterById"></a>
# **getChapterById**
> Chapter getChapterById(id)

Get chapter by id

### Example
```javascript
var Swaggerapi = require('swaggerapi');

var apiInstance = new Swaggerapi.ChapterApi();

var id = 789; // Number | ID of chapter to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChapterById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of chapter to return | 

### Return type

[**Chapter**](Chapter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


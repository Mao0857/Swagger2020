# Swaggerapi.MangaApi

All URIs are relative to *https://virtserver.swaggerhub.com/Mao0857/Manga/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMangaById**](MangaApi.md#getMangaById) | **GET** /mangas/{id} | Get manga by id
[**getMangas**](MangaApi.md#getMangas) | **GET** /mangas | Get list of registered mangas


<a name="getMangaById"></a>
# **getMangaById**
> Manga getMangaById(id)

Get manga by id

### Example
```javascript
var Swaggerapi = require('swaggerapi');

var apiInstance = new Swaggerapi.MangaApi();

var id = 789; // Number | ID of manga to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMangaById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of manga to return | 

### Return type

[**Manga**](Manga.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMangas"></a>
# **getMangas**
> [Manga] getMangas()

Get list of registered mangas

### Example
```javascript
var Swaggerapi = require('swaggerapi');

var apiInstance = new Swaggerapi.MangaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMangas(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Manga]**](Manga.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


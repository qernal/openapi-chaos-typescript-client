# .TokensApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authTokensCreate**](TokensApi.md#authTokensCreate) | **POST** /auth/tokens | Create new auth token
[**authTokensDelete**](TokensApi.md#authTokensDelete) | **DELETE** /auth/tokens/{token_id} | Delete token
[**authTokensGet**](TokensApi.md#authTokensGet) | **GET** /auth/tokens/{token_id} | Get token information
[**authTokensList**](TokensApi.md#authTokensList) | **GET** /auth/tokens | List all user auth tokens
[**authTokensUpdate**](TokensApi.md#authTokensUpdate) | **PUT** /auth/tokens/{token_id} | Update token


# **authTokensCreate**
> AuthToken authTokensCreate(AuthTokenBody)

Create new OAuth client which can be used to access user private data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokensApi(configuration);

let body:.TokensApiAuthTokensCreateRequest = {
  // AuthTokenBody
  AuthTokenBody: {
    name: "Build token",
    expiry_duration: 1,
  },
};

apiInstance.authTokensCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AuthTokenBody** | **AuthTokenBody**|  |


### Return type

**AuthToken**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth2 with client id and client secret |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authTokensDelete**
> DeletedResponse authTokensDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokensApi(configuration);

let body:.TokensApiAuthTokensDeleteRequest = {
  // string | Token ID reference
  token_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.authTokensDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | [**string**] | Token ID reference | defaults to undefined


### Return type

**DeletedResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource deleted |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authTokensGet**
> AuthTokenMeta authTokensGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokensApi(configuration);

let body:.TokensApiAuthTokensGetRequest = {
  // string | Token ID reference
  token_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.authTokensGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | [**string**] | Token ID reference | defaults to undefined


### Return type

**AuthTokenMeta**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token meta information |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authTokensList**
> ListAuthTokens authTokensList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokensApi(configuration);

let body:.TokensApiAuthTokensListRequest = {
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.authTokensList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListAuthTokens**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of auth token meta |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authTokensUpdate**
> AuthToken authTokensUpdate(AuthTokenPatch)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokensApi(configuration);

let body:.TokensApiAuthTokensUpdateRequest = {
  // string | Token ID reference
  token_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // AuthTokenPatch
  AuthTokenPatch: null,
};

apiInstance.authTokensUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AuthTokenPatch** | **AuthTokenPatch**|  |
 **token_id** | [**string**] | Token ID reference | defaults to undefined


### Return type

**AuthToken**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth2 with client id and client secret |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



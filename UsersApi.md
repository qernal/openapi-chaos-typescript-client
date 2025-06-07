# .UsersApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersQuotasGet**](UsersApi.md#usersQuotasGet) | **GET** /users/{user_id}/quotas/{quota_entity_quota} | Get specific user quota
[**usersQuotasList**](UsersApi.md#usersQuotasList) | **GET** /users/{user_id}/quotas | List user quotas


# **usersQuotasGet**
> Array<Quota> usersQuotasGet()

Get a specific quota for a user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersQuotasGetRequest = {
  // string | User ID reference
  user_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string
  quota_entity_quota: "projects_secrets",
};

apiInstance.usersQuotasGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | [**string**] | User ID reference | defaults to undefined
 **quota_entity_quota** | [**string**] |  | defaults to undefined


### Return type

**Array<Quota>**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List quotas |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersQuotasList**
> Array<Quota> usersQuotasList()

Get the quotas for a user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersQuotasListRequest = {
  // string | User ID reference
  user_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.usersQuotasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | [**string**] | User ID reference | defaults to undefined


### Return type

**Array<Quota>**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List quotas |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



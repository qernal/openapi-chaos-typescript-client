# .QuotasApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationsQuotasGet**](QuotasApi.md#organisationsQuotasGet) | **GET** /organisations/{organisation_id}/quotas/{quota_entity_quota} | Get specific organisation quota
[**organisationsQuotasList**](QuotasApi.md#organisationsQuotasList) | **GET** /organisations/{organisation_id}/quotas | List organisation quotas
[**projectsQuotasGet**](QuotasApi.md#projectsQuotasGet) | **GET** /projects/{project_id}/quotas/{quota_entity_quota} | Get specific project quota
[**projectsQuotasList**](QuotasApi.md#projectsQuotasList) | **GET** /projects/{project_id}/quotas | List project quotas
[**usersQuotasGet**](QuotasApi.md#usersQuotasGet) | **GET** /users/{user_id}/quotas/{quota_entity_quota} | Get specific user quota
[**usersQuotasList**](QuotasApi.md#usersQuotasList) | **GET** /users/{user_id}/quotas | List user quotas


# **organisationsQuotasGet**
> Array<Quota> organisationsQuotasGet()

Get a specific quota for an organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotasApi(configuration);

let body:.QuotasApiOrganisationsQuotasGetRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string
  quota_entity_quota: "projects_secrets",
};

apiInstance.organisationsQuotasGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisation_id** | [**string**] | Organisation ID reference | defaults to undefined
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

# **organisationsQuotasList**
> Array<Quota> organisationsQuotasList()

Get the quotas for an organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotasApi(configuration);

let body:.QuotasApiOrganisationsQuotasListRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.organisationsQuotasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisation_id** | [**string**] | Organisation ID reference | defaults to undefined


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

# **projectsQuotasGet**
> Array<Quota> projectsQuotasGet()

Get a specific quota for a project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotasApi(configuration);

let body:.QuotasApiProjectsQuotasGetRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string
  quota_entity_quota: "projects_secrets",
};

apiInstance.projectsQuotasGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
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

# **projectsQuotasList**
> Array<Quota> projectsQuotasList()

Get the quotas for a project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotasApi(configuration);

let body:.QuotasApiProjectsQuotasListRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.projectsQuotasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined


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

# **usersQuotasGet**
> Array<Quota> usersQuotasGet()

Get a specific quota for a user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotasApi(configuration);

let body:.QuotasApiUsersQuotasGetRequest = {
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
const apiInstance = new .QuotasApi(configuration);

let body:.QuotasApiUsersQuotasListRequest = {
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



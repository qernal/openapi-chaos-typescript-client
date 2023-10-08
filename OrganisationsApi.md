# .OrganisationsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationsCreate**](OrganisationsApi.md#organisationsCreate) | **POST** /organisations | Create organisations
[**organisationsDelete**](OrganisationsApi.md#organisationsDelete) | **DELETE** /organisations/{organisation_id} | Delete an organisation
[**organisationsGet**](OrganisationsApi.md#organisationsGet) | **GET** /organisations/{organisation_id} | Get an organisation
[**organisationsList**](OrganisationsApi.md#organisationsList) | **GET** /organisations | List organisations
[**organisationsUpdate**](OrganisationsApi.md#organisationsUpdate) | **PUT** /organisations/{organisation_id} | Update an organisation


# **organisationsCreate**
> OrganisationResponse organisationsCreate()

Create an organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiOrganisationsCreateRequest = {
  // OrganisationBody | Create/Update any field (optional)
  OrganisationBody: {
    name: "my org",
  },
};

apiInstance.organisationsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OrganisationBody** | **OrganisationBody**| Create/Update any field |


### Return type

**OrganisationResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Get organisation |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |
**409** | Resource Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationsDelete**
> DeletedResponse organisationsDelete()

Delete organisation, this will also delete all the resources within the organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiOrganisationsDeleteRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.organisationsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisation_id** | [**string**] | Organisation ID reference | defaults to undefined


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
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationsGet**
> OrganisationResponse organisationsGet()

Get a single organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiOrganisationsGetRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.organisationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisation_id** | [**string**] | Organisation ID reference | defaults to undefined


### Return type

**OrganisationResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get organisation |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationsList**
> ListOrganisationResponse organisationsList()

List organisations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiOrganisationsListRequest = {
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.organisationsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListOrganisationResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List organisations |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationsUpdate**
> OrganisationResponse organisationsUpdate()

Update an organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiOrganisationsUpdateRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationBody | Create/Update any field (optional)
  OrganisationBody: {
    name: "my org",
  },
};

apiInstance.organisationsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OrganisationBody** | **OrganisationBody**| Create/Update any field |
 **organisation_id** | [**string**] | Organisation ID reference | defaults to undefined


### Return type

**OrganisationResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get organisation |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



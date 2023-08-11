# .OrganisationsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrganisationsOrgId**](OrganisationsApi.md#deleteOrganisationsOrgId) | **DELETE** /organisations/{organisation_id} | Delete an organisation
[**getOrganisations**](OrganisationsApi.md#getOrganisations) | **GET** /organisations | List organisations
[**getOrganisationsOrgId**](OrganisationsApi.md#getOrganisationsOrgId) | **GET** /organisations/{organisation_id} | Get an organisation
[**postOrganisations**](OrganisationsApi.md#postOrganisations) | **POST** /organisations | Create organisations
[**putOrganisationsOrgId**](OrganisationsApi.md#putOrganisationsOrgId) | **PUT** /organisations/{organisation_id} | Update an organisation


# **deleteOrganisationsOrgId**
> DeletedResponse deleteOrganisationsOrgId()

Delete organisation, this will also delete all the resources within the organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiDeleteOrganisationsOrgIdRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.deleteOrganisationsOrgId(body).then((data:any) => {
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

[JWT](README.md#JWT)

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

# **getOrganisations**
> ListOrganisationResponse getOrganisations()

List organisations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiGetOrganisationsRequest = {
  // GetOrganisationsPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.getOrganisations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **GetOrganisationsPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListOrganisationResponse**

### Authorization

[JWT](README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List organisations |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganisationsOrgId**
> OrganisationResponse getOrganisationsOrgId()

Get a single organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiGetOrganisationsOrgIdRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.getOrganisationsOrgId(body).then((data:any) => {
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

[JWT](README.md#JWT)

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

# **postOrganisations**
> OrganisationResponse postOrganisations()

Create an organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiPostOrganisationsRequest = {
  // OrganisationBody | Create/Update any field (optional)
  OrganisationBody: {
    name: "name_example",
  },
};

apiInstance.postOrganisations(body).then((data:any) => {
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

[JWT](README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get organisation |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putOrganisationsOrgId**
> OrganisationResponse putOrganisationsOrgId()

Update an organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganisationsApi(configuration);

let body:.OrganisationsApiPutOrganisationsOrgIdRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationBody | Create/Update any field (optional)
  OrganisationBody: {
    name: "name_example",
  },
};

apiInstance.putOrganisationsOrgId(body).then((data:any) => {
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

[JWT](README.md#JWT)

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



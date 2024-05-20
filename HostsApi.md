# .HostsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsHostsCreate**](HostsApi.md#projectsHostsCreate) | **POST** /projects/{project_id}/hosts | Create host for project
[**projectsHostsDelete**](HostsApi.md#projectsHostsDelete) | **DELETE** /projects/{project_id}/hosts/{hostname} | Delete specific host by hostname
[**projectsHostsGet**](HostsApi.md#projectsHostsGet) | **GET** /projects/{project_id}/hosts/{hostname} | Get specific host by hostname
[**projectsHostsList**](HostsApi.md#projectsHostsList) | **GET** /projects/{project_id}/hosts | List hosts for project
[**projectsHostsUpdate**](HostsApi.md#projectsHostsUpdate) | **PUT** /projects/{project_id}/hosts/{hostname} | Update specific host by hostname
[**projectsHostsVerifyCreate**](HostsApi.md#projectsHostsVerifyCreate) | **POST** /projects/{project_id}/hosts/{hostname}/verify | Schedule host verification task


# **projectsHostsCreate**
> Host projectsHostsCreate(HostBody)

Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostsApi(configuration);

let body:.HostsApiProjectsHostsCreateRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // HostBody
  HostBody: {
    host: "example-domain.com",
    certificate: "projects:secrets/MY_CERT",
    disabled: true,
  },
};

apiInstance.projectsHostsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostBody** | **HostBody**|  |
 **project_id** | [**string**] | Project ID reference | defaults to undefined


### Return type

**Host**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Porject host |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |
**409** | Resource Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsHostsDelete**
> DeletedResponse projectsHostsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostsApi(configuration);

let body:.HostsApiProjectsHostsDeleteRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Hostname
  hostname: "example-domain.com",
};

apiInstance.projectsHostsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **hostname** | [**string**] | Hostname | defaults to undefined


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

# **projectsHostsGet**
> Host projectsHostsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostsApi(configuration);

let body:.HostsApiProjectsHostsGetRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Hostname
  hostname: "example-domain.com",
};

apiInstance.projectsHostsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **hostname** | [**string**] | Hostname | defaults to undefined


### Return type

**Host**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Porject host |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsHostsList**
> ListHosts projectsHostsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostsApi(configuration);

let body:.HostsApiProjectsHostsListRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.projectsHostsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListHosts**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of project hosts |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsHostsUpdate**
> Host projectsHostsUpdate(HostBodyPatch)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostsApi(configuration);

let body:.HostsApiProjectsHostsUpdateRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Hostname
  hostname: "example-domain.com",
  // HostBodyPatch
  HostBodyPatch: {
    certificate: "projects:secrets/MY_CERT",
    disabled: true,
  },
};

apiInstance.projectsHostsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HostBodyPatch** | **HostBodyPatch**|  |
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **hostname** | [**string**] | Hostname | defaults to undefined


### Return type

**Host**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Porject host |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsHostsVerifyCreate**
> Host projectsHostsVerifyCreate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HostsApi(configuration);

let body:.HostsApiProjectsHostsVerifyCreateRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Hostname
  hostname: "example-domain.com",
};

apiInstance.projectsHostsVerifyCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **hostname** | [**string**] | Hostname | defaults to undefined


### Return type

**Host**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Porject host |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



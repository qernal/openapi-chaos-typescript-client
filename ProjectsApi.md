# .ProjectsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationsProjectsList**](ProjectsApi.md#organisationsProjectsList) | **GET** /organisations/{organisation_id}/projects | Get all projects within an organisation
[**projectsCreate**](ProjectsApi.md#projectsCreate) | **POST** /projects | Create project
[**projectsDelete**](ProjectsApi.md#projectsDelete) | **DELETE** /projects/{project_id} | Delete project
[**projectsGet**](ProjectsApi.md#projectsGet) | **GET** /projects/{project_id} | Get project
[**projectsList**](ProjectsApi.md#projectsList) | **GET** /projects | List projects
[**projectsUpdate**](ProjectsApi.md#projectsUpdate) | **PUT** /projects/{project_id} | Update project


# **organisationsProjectsList**
> ListProjectResponse organisationsProjectsList()

Get all the projects linked to a specific organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiOrganisationsProjectsListRequest = {
  // string | Organisation ID reference
  organisation_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.organisationsProjectsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisation_id** | [**string**] | Organisation ID reference | defaults to undefined
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListProjectResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List projects |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsCreate**
> ProjectResponse projectsCreate()

Create a new project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiProjectsCreateRequest = {
  // ProjectBody | Create/Update any field (optional)
  ProjectBody: {
    org_id: "org_id_example",
    name: "name_example",
  },
};

apiInstance.projectsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ProjectBody** | **ProjectBody**| Create/Update any field |


### Return type

**ProjectResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Get project |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsDelete**
> DeletedResponse projectsDelete()

Delete project, this will also delete all the resources within the project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiProjectsDeleteRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.projectsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined


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

# **projectsGet**
> ProjectResponse projectsGet()

Get a specific project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiProjectsGetRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.projectsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined


### Return type

**ProjectResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get project |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsList**
> ListProjectResponse projectsList()

Get all projects for this user, paginated

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiProjectsListRequest = {
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.projectsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListProjectResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List projects |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsUpdate**
> ProjectResponse projectsUpdate()

Update project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiProjectsUpdateRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // ProjectBodyPatch | Update any field (optional)
  ProjectBodyPatch: {
    org_id: "org_id_example",
    name: "name_example",
  },
};

apiInstance.projectsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ProjectBodyPatch** | **ProjectBodyPatch**| Update any field |
 **project_id** | [**string**] | Project ID reference | defaults to undefined


### Return type

**ProjectResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get project |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



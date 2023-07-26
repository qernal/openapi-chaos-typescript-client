# .ProjectsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProjectsProjectId**](ProjectsApi.md#deleteProjectsProjectId) | **DELETE** /projects/{project_id} | Delete project
[**getOrganisationsOrgIdProjects**](ProjectsApi.md#getOrganisationsOrgIdProjects) | **GET** /organisations/{organisation_id}/projects | Get all projects within an organisation
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /projects | List projects
[**getProjectsProjectId**](ProjectsApi.md#getProjectsProjectId) | **GET** /projects/{project_id} | Get project
[**postProjects**](ProjectsApi.md#postProjects) | **POST** /projects | Create project
[**putProjectsProjectId**](ProjectsApi.md#putProjectsProjectId) | **PUT** /projects/{project_id} | Update project


# **deleteProjectsProjectId**
> DeletedResponse deleteProjectsProjectId()

Delete project, this will also delete all the resources within the project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiDeleteProjectsProjectIdRequest = {
  // string | Project ID reference
  projectId: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.deleteProjectsProjectId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID reference | defaults to undefined


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

# **getOrganisationsOrgIdProjects**
> ListProjectResponse getOrganisationsOrgIdProjects()

Get all the projects linked to a specific organisation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetOrganisationsOrgIdProjectsRequest = {
  // string | Organisation ID reference
  organisationId: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // GetOrganisationsPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.getOrganisationsOrgIdProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | [**string**] | Organisation ID reference | defaults to undefined
 **page** | **GetOrganisationsPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListProjectResponse**

### Authorization

[JWT](README.md#JWT)

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

# **getProjects**
> ListProjectResponse getProjects()

Get all projects for this user, paginated

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectsRequest = {
  // GetOrganisationsPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.getProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **GetOrganisationsPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListProjectResponse**

### Authorization

[JWT](README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List projects |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectsProjectId**
> ProjectResponse getProjectsProjectId()

Get a specific project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectsProjectIdRequest = {
  // string | Project ID reference
  projectId: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.getProjectsProjectId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID reference | defaults to undefined


### Return type

**ProjectResponse**

### Authorization

[JWT](README.md#JWT)

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

# **postProjects**
> ProjectResponse postProjects()

Create a new project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiPostProjectsRequest = {
  // ProjectBody | Create/Update any field (optional)
  projectBody: {
    orgId: "orgId_example",
    name: "name_example",
  },
};

apiInstance.postProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectBody** | **ProjectBody**| Create/Update any field |


### Return type

**ProjectResponse**

### Authorization

[JWT](README.md#JWT)

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

# **putProjectsProjectId**
> ProjectResponse putProjectsProjectId()

Update project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiPutProjectsProjectIdRequest = {
  // string | Project ID reference
  projectId: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // ProjectBody | Create/Update any field (optional)
  projectBody: {
    orgId: "orgId_example",
    name: "name_example",
  },
};

apiInstance.putProjectsProjectId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectBody** | **ProjectBody**| Create/Update any field |
 **projectId** | [**string**] | Project ID reference | defaults to undefined


### Return type

**ProjectResponse**

### Authorization

[JWT](README.md#JWT)

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



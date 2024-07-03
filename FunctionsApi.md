# .FunctionsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**functionsCreate**](FunctionsApi.md#functionsCreate) | **POST** /functions | Create function
[**functionsDelete**](FunctionsApi.md#functionsDelete) | **DELETE** /functions/{function_id} | Delete function
[**functionsGet**](FunctionsApi.md#functionsGet) | **GET** /functions/{function_id} | Get function (latest revision)
[**functionsRevisionsGet**](FunctionsApi.md#functionsRevisionsGet) | **GET** /functions/{function_id}/revisions/{function_revision_id} | Get a specific revision of a function
[**functionsRevisionsList**](FunctionsApi.md#functionsRevisionsList) | **GET** /functions/{function_id}/revisions | List all revisions for a function
[**functionsUpdate**](FunctionsApi.md#functionsUpdate) | **PUT** /functions/{function_id} | Update function
[**projectsFunctionsList**](FunctionsApi.md#projectsFunctionsList) | **GET** /projects/{project_id}/functions | List all functions within a project


# **functionsCreate**
> Function functionsCreate(FunctionBody)

Create a new function

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiFunctionsCreateRequest = {
  // FunctionBody | Create/Update any field
  FunctionBody: {
    project_id: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
    version: "1.0.0",
    name: "my-function",
    description: "My function does this",
    image: "docker.io/my-image:latest",
    type: "http",
    size: {
      cpu: 128,
      memory: 128,
    },
    port: 8080,
    routes: [
      {
        path: "/hello/{0-9+}",
        methods: ["GET","POST"],
        weight: 50,
      },
    ],
    scaling: {
      type: "cpu",
      low: 30,
      high: 60,
    },
    deployments: [
      {
        location: {
          provider_id: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
          continent: "EU",
          country: "GB",
          city: "London",
        },
        replicas: {
          min: 1,
          max: 5,
          affinity: {
            cluster: true,
            cloud: true,
          },
        },
      },
    ],
    secrets: [
      {
        name: "MY_ENV_VAR",
        reference: "project_id/secret_id@secret_revision",
      },
    ],
    compliance: [
      "soc2",
    ],
  },
};

apiInstance.functionsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **FunctionBody** | **FunctionBody**| Create/Update any field |


### Return type

**Function**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Get specific function |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **functionsDelete**
> DeletedResponse functionsDelete()

Delete a function (and all revisions)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiFunctionsDeleteRequest = {
  // string | Function ID reference
  function_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.functionsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **function_id** | [**string**] | Function ID reference | defaults to undefined


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

# **functionsGet**
> Function functionsGet()

Get a specific function (latest revision)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiFunctionsGetRequest = {
  // string | Function ID reference
  function_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.functionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **function_id** | [**string**] | Function ID reference | defaults to undefined


### Return type

**Function**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get specific function |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **functionsRevisionsGet**
> Function functionsRevisionsGet()

Get a specific revision of a function

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiFunctionsRevisionsGetRequest = {
  // string | Function ID reference
  function_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Function revision ID reference
  function_revision_id: "0069614e-adc8-47cb-a69c-decf9c5f90fc",
};

apiInstance.functionsRevisionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **function_id** | [**string**] | Function ID reference | defaults to undefined
 **function_revision_id** | [**string**] | Function revision ID reference | defaults to undefined


### Return type

**Function**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get specific function |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **functionsRevisionsList**
> ListFunction functionsRevisionsList()

List all revisions for a function

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiFunctionsRevisionsListRequest = {
  // string | Function ID reference
  function_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.functionsRevisionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **function_id** | [**string**] | Function ID reference | defaults to undefined
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListFunction**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List all functions (paginated) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **functionsUpdate**
> Function functionsUpdate(Function)

Update a function (creates a new revision)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiFunctionsUpdateRequest = {
  // string | Function ID reference
  function_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // Function | Update any field
  Function: {
    id: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
    project_id: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
    version: "1.0.0",
    name: "my-function",
    description: "My function does this",
    image: "docker.io/my-image:latest",
    revision: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
    type: "http",
    size: {
      cpu: 128,
      memory: 128,
    },
    port: 8080,
    routes: [
      {
        path: "/hello/{0-9+}",
        methods: ["GET","POST"],
        weight: 50,
      },
    ],
    scaling: {
      type: "cpu",
      low: 30,
      high: 60,
    },
    deployments: [
      {
        id: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
        location: {
          provider_id: "51687d2f-07b0-4260-8ecb-f5098305fdd4",
          continent: "EU",
          country: "GB",
          city: "London",
        },
        replicas: {
          min: 1,
          max: 5,
          affinity: {
            cluster: true,
            cloud: true,
          },
        },
      },
    ],
    secrets: [
      {
        name: "MY_ENV_VAR",
        reference: "project_id/secret_id@secret_revision",
      },
    ],
    compliance: [
      "soc2",
    ],
  },
};

apiInstance.functionsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Function** | **Function**| Update any field |
 **function_id** | [**string**] | Function ID reference | defaults to undefined


### Return type

**Function**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get specific function |  -  |
**400** | Resource Bad Request |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsFunctionsList**
> ListFunction projectsFunctionsList()

List all functions

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FunctionsApi(configuration);

let body:.FunctionsApiProjectsFunctionsListRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
};

apiInstance.projectsFunctionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined


### Return type

**ListFunction**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List all functions (paginated) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



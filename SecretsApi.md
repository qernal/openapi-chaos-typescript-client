# .SecretsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsSecretsCreate**](SecretsApi.md#projectsSecretsCreate) | **POST** /projects/{project_id}/secrets | Create project secret
[**projectsSecretsDelete**](SecretsApi.md#projectsSecretsDelete) | **DELETE** /projects/{project_id}/secrets/{secret_name} | Delete project secret
[**projectsSecretsGet**](SecretsApi.md#projectsSecretsGet) | **GET** /projects/{project_id}/secrets/{secret_name} | Get project secret
[**projectsSecretsList**](SecretsApi.md#projectsSecretsList) | **GET** /projects/{project_id}/secrets | List project secrets of a specific type
[**projectsSecretsUpdate**](SecretsApi.md#projectsSecretsUpdate) | **PUT** /projects/{project_id}/secrets/{secret_name} | Update project secret


# **projectsSecretsCreate**
> SecretResponse projectsSecretsCreate(SecretBody)

Create a new project secret

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiProjectsSecretsCreateRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // SecretBody | Create/Update any field  The example generated may only be for one of the secret types, look towards the payload section of the schema for further fields, values and examples. 
  SecretBody: {
    name: "R",
    type: "registry",
    payload: {
    registry: "ghcr.io",
    registry_value: "SGVsbG8gd29ybGQ=",
  },
    encryption: "keys/dek/123",
  },
};

apiInstance.projectsSecretsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SecretBody** | **SecretBody**| Create/Update any field  The example generated may only be for one of the secret types, look towards the payload section of the schema for further fields, values and examples.  |
 **project_id** | [**string**] | Project ID reference | defaults to undefined


### Return type

**SecretResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Get secret |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |
**409** | Resource Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsSecretsDelete**
> DeletedResponse projectsSecretsDelete()

Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiProjectsSecretsDeleteRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Unique secret name
  secret_name: "MY_SECRET",
};

apiInstance.projectsSecretsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **secret_name** | [**string**] | Unique secret name | defaults to undefined


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

# **projectsSecretsGet**
> SecretMetaResponse projectsSecretsGet()

Get a specific project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiProjectsSecretsGetRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Unique secret name
  secret_name: "MY_SECRET",
};

apiInstance.projectsSecretsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **secret_name** | [**string**] | Unique secret name | defaults to undefined


### Return type

**SecretMetaResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get secret metadata |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsSecretsList**
> ListSecretResponse projectsSecretsList()

List project secrets of a specific type

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiProjectsSecretsListRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
  // SecretMetaType | Type of secret to filter on (optional)
  secret_type: "registry",
};

apiInstance.projectsSecretsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined
 **secret_type** | **SecretMetaType** | Type of secret to filter on | (optional) defaults to undefined


### Return type

**ListSecretResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List secrets |  -  |
**404** | Resource Not Found |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **projectsSecretsUpdate**
> SecretResponse projectsSecretsUpdate(SecretBodyPatch)

Update project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecretsApi(configuration);

let body:.SecretsApiProjectsSecretsUpdateRequest = {
  // string | Project ID reference
  project_id: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Unique secret name
  secret_name: "MY_SECRET",
  // SecretBodyPatch | Update any field
  SecretBodyPatch: {
    type: "registry",
    payload: {
    registry: "ghcr.io",
    registry_value: "SGVsbG8gd29ybGQ=",
  },
    encryption: "keys/dek/123",
  },
};

apiInstance.projectsSecretsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SecretBodyPatch** | **SecretBodyPatch**| Update any field |
 **project_id** | [**string**] | Project ID reference | defaults to undefined
 **secret_name** | [**string**] | Unique secret name | defaults to undefined


### Return type

**SecretResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get secret |  -  |
**404** | Resource Not Found |  -  |
**400** | Resource Bad Request |  -  |
**403** | Unauthorised |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



# .LogsApi

All URIs are relative to *https://chaos.qernal.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logsList**](LogsApi.md#logsList) | **GET** /logs | Get logs


# **logsList**
> ListLogResponse logsList()

Retrieve logs for a specific project or function. Use the query parameter to search logs.  > Note: Logs are always returned in a descending order based on the timestamp. > Note: A max size of 500 logs is returned per request (when using page[size]). 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogsApi(configuration);

let body:.LogsApiLogsListRequest = {
  // OrganisationsListPageParameter | Query parameters for pagination (optional)
  page: {
    before: 20,
    after: 20,
    size: 20,
  },
  // string | Project uuid reference (optional)
  f_project: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // string | Function uuid reference (optional)
  f_function: "3069614e-adc8-47cb-a69c-decf9c5f90fc",
  // LogsListFTimestampsParameter | Timestamp restriction for query (optional)
  f_timestamps: {
    after: "2022-05-06T18:05:57.723262Z",
    before: "2023-05-06T18:05:57.723262Z",
  },
  // string | Text query string (optional)
  f_query: "bootstrap",
  // 'info' | 'error' | Type of log (optional)
  f_log_type: "error",
};

apiInstance.logsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **OrganisationsListPageParameter** | Query parameters for pagination | (optional) defaults to undefined
 **f_project** | [**string**] | Project uuid reference | (optional) defaults to undefined
 **f_function** | [**string**] | Function uuid reference | (optional) defaults to undefined
 **f_timestamps** | **LogsListFTimestampsParameter** | Timestamp restriction for query | (optional) defaults to undefined
 **f_query** | [**string**] | Text query string | (optional) defaults to undefined
 **f_log_type** | [**&#39;info&#39; | &#39;error&#39;**]**Array<&#39;info&#39; &#124; &#39;error&#39;>** | Type of log | (optional) defaults to undefined


### Return type

**ListLogResponse**

### Authorization

[cookie](README.md#cookie), [token](README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List logs |  -  |
**400** | Resource Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AuthToken } from '../models/AuthToken.ts';
import { AuthTokenBody } from '../models/AuthTokenBody.ts';
import { AuthTokenMeta } from '../models/AuthTokenMeta.ts';
import { AuthTokenPatch } from '../models/AuthTokenPatch.ts';
import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { BadRequestResponseFields } from '../models/BadRequestResponseFields.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { Function } from '../models/Function.ts';
import { FunctionBody } from '../models/FunctionBody.ts';
import { FunctionCompliance } from '../models/FunctionCompliance.ts';
import { FunctionDeployment } from '../models/FunctionDeployment.ts';
import { FunctionDeploymentBody } from '../models/FunctionDeploymentBody.ts';
import { FunctionEnv } from '../models/FunctionEnv.ts';
import { FunctionReplicas } from '../models/FunctionReplicas.ts';
import { FunctionReplicasAffinity } from '../models/FunctionReplicasAffinity.ts';
import { FunctionRoute } from '../models/FunctionRoute.ts';
import { FunctionScaling } from '../models/FunctionScaling.ts';
import { FunctionSize } from '../models/FunctionSize.ts';
import { FunctionType } from '../models/FunctionType.ts';
import { Host } from '../models/Host.ts';
import { HostBody } from '../models/HostBody.ts';
import { HostBodyPatch } from '../models/HostBodyPatch.ts';
import { HostVerificationStatus } from '../models/HostVerificationStatus.ts';
import { ListAuthTokens } from '../models/ListAuthTokens.ts';
import { ListFunction } from '../models/ListFunction.ts';
import { ListHosts } from '../models/ListHosts.ts';
import { ListLogResponse } from '../models/ListLogResponse.ts';
import { ListOrganisationResponse } from '../models/ListOrganisationResponse.ts';
import { ListProjectResponse } from '../models/ListProjectResponse.ts';
import { ListProviderResponse } from '../models/ListProviderResponse.ts';
import { ListSecretResponse } from '../models/ListSecretResponse.ts';
import { Location } from '../models/Location.ts';
import { Log } from '../models/Log.ts';
import { LogLog } from '../models/LogLog.ts';
import { LogsListFTimestampsParameter } from '../models/LogsListFTimestampsParameter.ts';
import { MetricHttpAggregation } from '../models/MetricHttpAggregation.ts';
import { MetricHttpAggregationHttpCodes } from '../models/MetricHttpAggregationHttpCodes.ts';
import { MetricHttpAggregationHttpCodesBucketsInner } from '../models/MetricHttpAggregationHttpCodesBucketsInner.ts';
import { MetricHttpAggregationHttpCodesBucketsInnerHistogram } from '../models/MetricHttpAggregationHttpCodesBucketsInnerHistogram.ts';
import { MetricResourceAggregation } from '../models/MetricResourceAggregation.ts';
import { MetricResourceAggregationResources } from '../models/MetricResourceAggregationResources.ts';
import { MetricResourceAggregationResourcesBucketsInner } from '../models/MetricResourceAggregationResourcesBucketsInner.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogram } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogram.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge.ts';
import { MetricsAggregationsList200Response } from '../models/MetricsAggregationsList200Response.ts';
import { ModelDate } from '../models/ModelDate.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationBody } from '../models/OrganisationBody.ts';
import { OrganisationResponse } from '../models/OrganisationResponse.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';
import { PaginationLinks } from '../models/PaginationLinks.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { ProjectBody } from '../models/ProjectBody.ts';
import { ProjectBodyPatch } from '../models/ProjectBodyPatch.ts';
import { ProjectResponse } from '../models/ProjectResponse.ts';
import { Provider } from '../models/Provider.ts';
import { ProviderLocations } from '../models/ProviderLocations.ts';
import { SecretBody } from '../models/SecretBody.ts';
import { SecretBodyPatch } from '../models/SecretBodyPatch.ts';
import { SecretCertificate } from '../models/SecretCertificate.ts';
import { SecretCreatePayload } from '../models/SecretCreatePayload.ts';
import { SecretCreateType } from '../models/SecretCreateType.ts';
import { SecretEnvironment } from '../models/SecretEnvironment.ts';
import { SecretMetaResponse } from '../models/SecretMetaResponse.ts';
import { SecretMetaResponseCertificatePayload } from '../models/SecretMetaResponseCertificatePayload.ts';
import { SecretMetaResponseDek } from '../models/SecretMetaResponseDek.ts';
import { SecretMetaResponsePayload } from '../models/SecretMetaResponsePayload.ts';
import { SecretMetaResponseRegistryPayload } from '../models/SecretMetaResponseRegistryPayload.ts';
import { SecretMetaType } from '../models/SecretMetaType.ts';
import { SecretRegistry } from '../models/SecretRegistry.ts';
import { SecretResponse } from '../models/SecretResponse.ts';
import { SecretResponsePayload } from '../models/SecretResponsePayload.ts';
import { UnauthorisedResponse } from '../models/UnauthorisedResponse.ts';

import { ObservableFunctionsApi } from "./ObservableAPI.ts";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi.ts";

export interface FunctionsApiFunctionsCreateRequest {
    /**
     * Create/Update any field
     * @type FunctionBody
     * @memberof FunctionsApifunctionsCreate
     */
    FunctionBody: FunctionBody
}

export interface FunctionsApiFunctionsDeleteRequest {
    /**
     * Function ID reference
     * @type string
     * @memberof FunctionsApifunctionsDelete
     */
    function_id: string
}

export interface FunctionsApiFunctionsGetRequest {
    /**
     * Function ID reference
     * @type string
     * @memberof FunctionsApifunctionsGet
     */
    function_id: string
}

export interface FunctionsApiFunctionsRevisionsGetRequest {
    /**
     * Function ID reference
     * @type string
     * @memberof FunctionsApifunctionsRevisionsGet
     */
    function_id: string
    /**
     * Function revision ID reference
     * @type string
     * @memberof FunctionsApifunctionsRevisionsGet
     */
    function_revision_id: string
}

export interface FunctionsApiFunctionsRevisionsListRequest {
    /**
     * Function ID reference
     * @type string
     * @memberof FunctionsApifunctionsRevisionsList
     */
    function_id: string
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof FunctionsApifunctionsRevisionsList
     */
    page?: OrganisationsListPageParameter
}

export interface FunctionsApiFunctionsUpdateRequest {
    /**
     * Function ID reference
     * @type string
     * @memberof FunctionsApifunctionsUpdate
     */
    function_id: string
    /**
     * Update any field
     * @type Function
     * @memberof FunctionsApifunctionsUpdate
     */
    Function: Function
}

export interface FunctionsApiProjectsFunctionsListRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof FunctionsApiprojectsFunctionsList
     */
    project_id: string
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof FunctionsApiprojectsFunctionsList
     */
    page?: OrganisationsListPageParameter
}

export class ObjectFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new function
     * Create function
     * @param param the request object
     */
    public functionsCreateWithHttpInfo(param: FunctionsApiFunctionsCreateRequest, options?: Configuration): Promise<HttpInfo<Function>> {
        return this.api.functionsCreateWithHttpInfo(param.FunctionBody,  options).toPromise();
    }

    /**
     * Create a new function
     * Create function
     * @param param the request object
     */
    public functionsCreate(param: FunctionsApiFunctionsCreateRequest, options?: Configuration): Promise<Function> {
        return this.api.functionsCreate(param.FunctionBody,  options).toPromise();
    }

    /**
     * Delete a function (and all revisions)
     * Delete function
     * @param param the request object
     */
    public functionsDeleteWithHttpInfo(param: FunctionsApiFunctionsDeleteRequest, options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        return this.api.functionsDeleteWithHttpInfo(param.function_id,  options).toPromise();
    }

    /**
     * Delete a function (and all revisions)
     * Delete function
     * @param param the request object
     */
    public functionsDelete(param: FunctionsApiFunctionsDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.functionsDelete(param.function_id,  options).toPromise();
    }

    /**
     * Get a specific function (latest revision)
     * Get function (latest revision)
     * @param param the request object
     */
    public functionsGetWithHttpInfo(param: FunctionsApiFunctionsGetRequest, options?: Configuration): Promise<HttpInfo<Function>> {
        return this.api.functionsGetWithHttpInfo(param.function_id,  options).toPromise();
    }

    /**
     * Get a specific function (latest revision)
     * Get function (latest revision)
     * @param param the request object
     */
    public functionsGet(param: FunctionsApiFunctionsGetRequest, options?: Configuration): Promise<Function> {
        return this.api.functionsGet(param.function_id,  options).toPromise();
    }

    /**
     * Get a specific revision of a function
     * Get a specific revision of a function
     * @param param the request object
     */
    public functionsRevisionsGetWithHttpInfo(param: FunctionsApiFunctionsRevisionsGetRequest, options?: Configuration): Promise<HttpInfo<Function>> {
        return this.api.functionsRevisionsGetWithHttpInfo(param.function_id, param.function_revision_id,  options).toPromise();
    }

    /**
     * Get a specific revision of a function
     * Get a specific revision of a function
     * @param param the request object
     */
    public functionsRevisionsGet(param: FunctionsApiFunctionsRevisionsGetRequest, options?: Configuration): Promise<Function> {
        return this.api.functionsRevisionsGet(param.function_id, param.function_revision_id,  options).toPromise();
    }

    /**
     * List all revisions for a function
     * List all revisions for a function
     * @param param the request object
     */
    public functionsRevisionsListWithHttpInfo(param: FunctionsApiFunctionsRevisionsListRequest, options?: Configuration): Promise<HttpInfo<ListFunction>> {
        return this.api.functionsRevisionsListWithHttpInfo(param.function_id, param.page,  options).toPromise();
    }

    /**
     * List all revisions for a function
     * List all revisions for a function
     * @param param the request object
     */
    public functionsRevisionsList(param: FunctionsApiFunctionsRevisionsListRequest, options?: Configuration): Promise<ListFunction> {
        return this.api.functionsRevisionsList(param.function_id, param.page,  options).toPromise();
    }

    /**
     * Update a function (creates a new revision)
     * Update function
     * @param param the request object
     */
    public functionsUpdateWithHttpInfo(param: FunctionsApiFunctionsUpdateRequest, options?: Configuration): Promise<HttpInfo<Function>> {
        return this.api.functionsUpdateWithHttpInfo(param.function_id, param.Function,  options).toPromise();
    }

    /**
     * Update a function (creates a new revision)
     * Update function
     * @param param the request object
     */
    public functionsUpdate(param: FunctionsApiFunctionsUpdateRequest, options?: Configuration): Promise<Function> {
        return this.api.functionsUpdate(param.function_id, param.Function,  options).toPromise();
    }

    /**
     * List all functions
     * List all functions within a project
     * @param param the request object
     */
    public projectsFunctionsListWithHttpInfo(param: FunctionsApiProjectsFunctionsListRequest, options?: Configuration): Promise<HttpInfo<ListFunction>> {
        return this.api.projectsFunctionsListWithHttpInfo(param.project_id, param.page,  options).toPromise();
    }

    /**
     * List all functions
     * List all functions within a project
     * @param param the request object
     */
    public projectsFunctionsList(param: FunctionsApiProjectsFunctionsListRequest, options?: Configuration): Promise<ListFunction> {
        return this.api.projectsFunctionsList(param.project_id, param.page,  options).toPromise();
    }

}

import { ObservableHostsApi } from "./ObservableAPI.ts";
import { HostsApiRequestFactory, HostsApiResponseProcessor} from "../apis/HostsApi.ts";

export interface HostsApiProjectsHostsCreateRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof HostsApiprojectsHostsCreate
     */
    project_id: string
    /**
     * 
     * @type HostBody
     * @memberof HostsApiprojectsHostsCreate
     */
    HostBody: HostBody
}

export interface HostsApiProjectsHostsDeleteRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof HostsApiprojectsHostsDelete
     */
    project_id: string
    /**
     * Hostname
     * @type string
     * @memberof HostsApiprojectsHostsDelete
     */
    hostname: string
}

export interface HostsApiProjectsHostsGetRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof HostsApiprojectsHostsGet
     */
    project_id: string
    /**
     * Hostname
     * @type string
     * @memberof HostsApiprojectsHostsGet
     */
    hostname: string
}

export interface HostsApiProjectsHostsListRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof HostsApiprojectsHostsList
     */
    project_id: string
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof HostsApiprojectsHostsList
     */
    page?: OrganisationsListPageParameter
}

export interface HostsApiProjectsHostsUpdateRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof HostsApiprojectsHostsUpdate
     */
    project_id: string
    /**
     * Hostname
     * @type string
     * @memberof HostsApiprojectsHostsUpdate
     */
    hostname: string
    /**
     * 
     * @type HostBodyPatch
     * @memberof HostsApiprojectsHostsUpdate
     */
    HostBodyPatch: HostBodyPatch
}

export interface HostsApiProjectsHostsVerifyCreateRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof HostsApiprojectsHostsVerifyCreate
     */
    project_id: string
    /**
     * Hostname
     * @type string
     * @memberof HostsApiprojectsHostsVerifyCreate
     */
    hostname: string
}

export class ObjectHostsApi {
    private api: ObservableHostsApi

    public constructor(configuration: Configuration, requestFactory?: HostsApiRequestFactory, responseProcessor?: HostsApiResponseProcessor) {
        this.api = new ObservableHostsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param param the request object
     */
    public projectsHostsCreateWithHttpInfo(param: HostsApiProjectsHostsCreateRequest, options?: Configuration): Promise<HttpInfo<Host>> {
        return this.api.projectsHostsCreateWithHttpInfo(param.project_id, param.HostBody,  options).toPromise();
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param param the request object
     */
    public projectsHostsCreate(param: HostsApiProjectsHostsCreateRequest, options?: Configuration): Promise<Host> {
        return this.api.projectsHostsCreate(param.project_id, param.HostBody,  options).toPromise();
    }

    /**
     * Delete specific host by hostname
     * @param param the request object
     */
    public projectsHostsDeleteWithHttpInfo(param: HostsApiProjectsHostsDeleteRequest, options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        return this.api.projectsHostsDeleteWithHttpInfo(param.project_id, param.hostname,  options).toPromise();
    }

    /**
     * Delete specific host by hostname
     * @param param the request object
     */
    public projectsHostsDelete(param: HostsApiProjectsHostsDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.projectsHostsDelete(param.project_id, param.hostname,  options).toPromise();
    }

    /**
     * Get specific host by hostname
     * @param param the request object
     */
    public projectsHostsGetWithHttpInfo(param: HostsApiProjectsHostsGetRequest, options?: Configuration): Promise<HttpInfo<Host>> {
        return this.api.projectsHostsGetWithHttpInfo(param.project_id, param.hostname,  options).toPromise();
    }

    /**
     * Get specific host by hostname
     * @param param the request object
     */
    public projectsHostsGet(param: HostsApiProjectsHostsGetRequest, options?: Configuration): Promise<Host> {
        return this.api.projectsHostsGet(param.project_id, param.hostname,  options).toPromise();
    }

    /**
     * List hosts for project
     * @param param the request object
     */
    public projectsHostsListWithHttpInfo(param: HostsApiProjectsHostsListRequest, options?: Configuration): Promise<HttpInfo<ListHosts>> {
        return this.api.projectsHostsListWithHttpInfo(param.project_id, param.page,  options).toPromise();
    }

    /**
     * List hosts for project
     * @param param the request object
     */
    public projectsHostsList(param: HostsApiProjectsHostsListRequest, options?: Configuration): Promise<ListHosts> {
        return this.api.projectsHostsList(param.project_id, param.page,  options).toPromise();
    }

    /**
     * Update specific host by hostname
     * @param param the request object
     */
    public projectsHostsUpdateWithHttpInfo(param: HostsApiProjectsHostsUpdateRequest, options?: Configuration): Promise<HttpInfo<Host>> {
        return this.api.projectsHostsUpdateWithHttpInfo(param.project_id, param.hostname, param.HostBodyPatch,  options).toPromise();
    }

    /**
     * Update specific host by hostname
     * @param param the request object
     */
    public projectsHostsUpdate(param: HostsApiProjectsHostsUpdateRequest, options?: Configuration): Promise<Host> {
        return this.api.projectsHostsUpdate(param.project_id, param.hostname, param.HostBodyPatch,  options).toPromise();
    }

    /**
     * Schedule host verification task
     * @param param the request object
     */
    public projectsHostsVerifyCreateWithHttpInfo(param: HostsApiProjectsHostsVerifyCreateRequest, options?: Configuration): Promise<HttpInfo<Host>> {
        return this.api.projectsHostsVerifyCreateWithHttpInfo(param.project_id, param.hostname,  options).toPromise();
    }

    /**
     * Schedule host verification task
     * @param param the request object
     */
    public projectsHostsVerifyCreate(param: HostsApiProjectsHostsVerifyCreateRequest, options?: Configuration): Promise<Host> {
        return this.api.projectsHostsVerifyCreate(param.project_id, param.hostname,  options).toPromise();
    }

}

import { ObservableLogsApi } from "./ObservableAPI.ts";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi.ts";

export interface LogsApiLogsListRequest {
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof LogsApilogsList
     */
    page?: OrganisationsListPageParameter
    /**
     * Project uuid reference
     * @type string
     * @memberof LogsApilogsList
     */
    f_project?: string
    /**
     * Function uuid reference
     * @type string
     * @memberof LogsApilogsList
     */
    f_function?: string
    /**
     * Timestamp restriction for query
     * @type LogsListFTimestampsParameter
     * @memberof LogsApilogsList
     */
    f_timestamps?: LogsListFTimestampsParameter
    /**
     * Text query string
     * @type string
     * @memberof LogsApilogsList
     */
    f_query?: string
    /**
     * Type of log
     * @type &#39;info&#39; | &#39;error&#39;
     * @memberof LogsApilogsList
     */
    f_log_type?: 'info' | 'error'
}

export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve logs for a specific project or function. Use the query parameter to search logs.  > Note: Logs are always returned in a descending order based on the timestamp. > Note: A max size of 500 logs is returned per request (when using page[size]). 
     * Get logs
     * @param param the request object
     */
    public logsListWithHttpInfo(param: LogsApiLogsListRequest = {}, options?: Configuration): Promise<HttpInfo<ListLogResponse>> {
        return this.api.logsListWithHttpInfo(param.page, param.f_project, param.f_function, param.f_timestamps, param.f_query, param.f_log_type,  options).toPromise();
    }

    /**
     * Retrieve logs for a specific project or function. Use the query parameter to search logs.  > Note: Logs are always returned in a descending order based on the timestamp. > Note: A max size of 500 logs is returned per request (when using page[size]). 
     * Get logs
     * @param param the request object
     */
    public logsList(param: LogsApiLogsListRequest = {}, options?: Configuration): Promise<ListLogResponse> {
        return this.api.logsList(param.page, param.f_project, param.f_function, param.f_timestamps, param.f_query, param.f_log_type,  options).toPromise();
    }

}

import { ObservableMetricsApi } from "./ObservableAPI.ts";
import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi.ts";

export interface MetricsApiMetricsAggregationsListRequest {
    /**
     * Metric aggregation type, types can be used with either a project or a function filter.  - httprequests: Aggregated HTTP requests - resourcestats: Aggregated resource stats (such as CPU, Memory and Network)  &gt; Note: aggregations cannot return more than 300 data points 
     * @type &#39;httprequests&#39; | &#39;resourcestats&#39;
     * @memberof MetricsApimetricsAggregationsList
     */
    metric_type: 'httprequests' | 'resourcestats'
    /**
     * Project uuid reference
     * @type string
     * @memberof MetricsApimetricsAggregationsList
     */
    f_project?: string
    /**
     * Function uuid reference
     * @type string
     * @memberof MetricsApimetricsAggregationsList
     */
    f_function?: string
    /**
     * Timestamp restriction for query
     * @type LogsListFTimestampsParameter
     * @memberof MetricsApimetricsAggregationsList
     */
    f_timestamps?: LogsListFTimestampsParameter
    /**
     * Histogram interval
     * @type number
     * @memberof MetricsApimetricsAggregationsList
     */
    f_histogram_interval?: number
}

export class ObjectMetricsApi {
    private api: ObservableMetricsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor) {
        this.api = new ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve metrics for a specific project or function. Use the query parameter to request a metrics report.  > Note: Metrics are always returned in a descending order based on the timestamp. 
     * Get metrics
     * @param param the request object
     */
    public metricsAggregationsListWithHttpInfo(param: MetricsApiMetricsAggregationsListRequest, options?: Configuration): Promise<HttpInfo<MetricsAggregationsList200Response>> {
        return this.api.metricsAggregationsListWithHttpInfo(param.metric_type, param.f_project, param.f_function, param.f_timestamps, param.f_histogram_interval,  options).toPromise();
    }

    /**
     * Retrieve metrics for a specific project or function. Use the query parameter to request a metrics report.  > Note: Metrics are always returned in a descending order based on the timestamp. 
     * Get metrics
     * @param param the request object
     */
    public metricsAggregationsList(param: MetricsApiMetricsAggregationsListRequest, options?: Configuration): Promise<MetricsAggregationsList200Response> {
        return this.api.metricsAggregationsList(param.metric_type, param.f_project, param.f_function, param.f_timestamps, param.f_histogram_interval,  options).toPromise();
    }

}

import { ObservableOrganisationsApi } from "./ObservableAPI.ts";
import { OrganisationsApiRequestFactory, OrganisationsApiResponseProcessor} from "../apis/OrganisationsApi.ts";

export interface OrganisationsApiOrganisationsCreateRequest {
    /**
     * Create/Update any field
     * @type OrganisationBody
     * @memberof OrganisationsApiorganisationsCreate
     */
    OrganisationBody?: OrganisationBody
}

export interface OrganisationsApiOrganisationsDeleteRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof OrganisationsApiorganisationsDelete
     */
    organisation_id: string
}

export interface OrganisationsApiOrganisationsGetRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof OrganisationsApiorganisationsGet
     */
    organisation_id: string
}

export interface OrganisationsApiOrganisationsListRequest {
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof OrganisationsApiorganisationsList
     */
    page?: OrganisationsListPageParameter
    /**
     * Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     * @type string
     * @memberof OrganisationsApiorganisationsList
     */
    f_name?: string
}

export interface OrganisationsApiOrganisationsUpdateRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof OrganisationsApiorganisationsUpdate
     */
    organisation_id: string
    /**
     * Create/Update any field
     * @type OrganisationBody
     * @memberof OrganisationsApiorganisationsUpdate
     */
    OrganisationBody?: OrganisationBody
}

export class ObjectOrganisationsApi {
    private api: ObservableOrganisationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganisationsApiRequestFactory, responseProcessor?: OrganisationsApiResponseProcessor) {
        this.api = new ObservableOrganisationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an organisation
     * Create organisations
     * @param param the request object
     */
    public organisationsCreateWithHttpInfo(param: OrganisationsApiOrganisationsCreateRequest = {}, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationsCreateWithHttpInfo(param.OrganisationBody,  options).toPromise();
    }

    /**
     * Create an organisation
     * Create organisations
     * @param param the request object
     */
    public organisationsCreate(param: OrganisationsApiOrganisationsCreateRequest = {}, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationsCreate(param.OrganisationBody,  options).toPromise();
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param param the request object
     */
    public organisationsDeleteWithHttpInfo(param: OrganisationsApiOrganisationsDeleteRequest, options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        return this.api.organisationsDeleteWithHttpInfo(param.organisation_id,  options).toPromise();
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param param the request object
     */
    public organisationsDelete(param: OrganisationsApiOrganisationsDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.organisationsDelete(param.organisation_id,  options).toPromise();
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param param the request object
     */
    public organisationsGetWithHttpInfo(param: OrganisationsApiOrganisationsGetRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationsGetWithHttpInfo(param.organisation_id,  options).toPromise();
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param param the request object
     */
    public organisationsGet(param: OrganisationsApiOrganisationsGetRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationsGet(param.organisation_id,  options).toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param param the request object
     */
    public organisationsListWithHttpInfo(param: OrganisationsApiOrganisationsListRequest = {}, options?: Configuration): Promise<HttpInfo<ListOrganisationResponse>> {
        return this.api.organisationsListWithHttpInfo(param.page, param.f_name,  options).toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param param the request object
     */
    public organisationsList(param: OrganisationsApiOrganisationsListRequest = {}, options?: Configuration): Promise<ListOrganisationResponse> {
        return this.api.organisationsList(param.page, param.f_name,  options).toPromise();
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param param the request object
     */
    public organisationsUpdateWithHttpInfo(param: OrganisationsApiOrganisationsUpdateRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationsUpdateWithHttpInfo(param.organisation_id, param.OrganisationBody,  options).toPromise();
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param param the request object
     */
    public organisationsUpdate(param: OrganisationsApiOrganisationsUpdateRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationsUpdate(param.organisation_id, param.OrganisationBody,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI.ts";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi.ts";

export interface ProjectsApiOrganisationsProjectsListRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof ProjectsApiorganisationsProjectsList
     */
    organisation_id: string
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof ProjectsApiorganisationsProjectsList
     */
    page?: OrganisationsListPageParameter
    /**
     * Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     * @type string
     * @memberof ProjectsApiorganisationsProjectsList
     */
    f_name?: string
}

export interface ProjectsApiProjectsCreateRequest {
    /**
     * Create/Update any field
     * @type ProjectBody
     * @memberof ProjectsApiprojectsCreate
     */
    ProjectBody?: ProjectBody
}

export interface ProjectsApiProjectsDeleteRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof ProjectsApiprojectsDelete
     */
    project_id: string
}

export interface ProjectsApiProjectsGetRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof ProjectsApiprojectsGet
     */
    project_id: string
}

export interface ProjectsApiProjectsListRequest {
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof ProjectsApiprojectsList
     */
    page?: OrganisationsListPageParameter
    /**
     * Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     * @type string
     * @memberof ProjectsApiprojectsList
     */
    f_name?: string
}

export interface ProjectsApiProjectsUpdateRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof ProjectsApiprojectsUpdate
     */
    project_id: string
    /**
     * Update any field
     * @type ProjectBodyPatch
     * @memberof ProjectsApiprojectsUpdate
     */
    ProjectBodyPatch?: ProjectBodyPatch
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param param the request object
     */
    public organisationsProjectsListWithHttpInfo(param: ProjectsApiOrganisationsProjectsListRequest, options?: Configuration): Promise<HttpInfo<ListProjectResponse>> {
        return this.api.organisationsProjectsListWithHttpInfo(param.organisation_id, param.page, param.f_name,  options).toPromise();
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param param the request object
     */
    public organisationsProjectsList(param: ProjectsApiOrganisationsProjectsListRequest, options?: Configuration): Promise<ListProjectResponse> {
        return this.api.organisationsProjectsList(param.organisation_id, param.page, param.f_name,  options).toPromise();
    }

    /**
     * Create a new project
     * Create project
     * @param param the request object
     */
    public projectsCreateWithHttpInfo(param: ProjectsApiProjectsCreateRequest = {}, options?: Configuration): Promise<HttpInfo<ProjectResponse>> {
        return this.api.projectsCreateWithHttpInfo(param.ProjectBody,  options).toPromise();
    }

    /**
     * Create a new project
     * Create project
     * @param param the request object
     */
    public projectsCreate(param: ProjectsApiProjectsCreateRequest = {}, options?: Configuration): Promise<ProjectResponse> {
        return this.api.projectsCreate(param.ProjectBody,  options).toPromise();
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param param the request object
     */
    public projectsDeleteWithHttpInfo(param: ProjectsApiProjectsDeleteRequest, options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        return this.api.projectsDeleteWithHttpInfo(param.project_id,  options).toPromise();
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param param the request object
     */
    public projectsDelete(param: ProjectsApiProjectsDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.projectsDelete(param.project_id,  options).toPromise();
    }

    /**
     * Get a specific project
     * Get project
     * @param param the request object
     */
    public projectsGetWithHttpInfo(param: ProjectsApiProjectsGetRequest, options?: Configuration): Promise<HttpInfo<ProjectResponse>> {
        return this.api.projectsGetWithHttpInfo(param.project_id,  options).toPromise();
    }

    /**
     * Get a specific project
     * Get project
     * @param param the request object
     */
    public projectsGet(param: ProjectsApiProjectsGetRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.projectsGet(param.project_id,  options).toPromise();
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param param the request object
     */
    public projectsListWithHttpInfo(param: ProjectsApiProjectsListRequest = {}, options?: Configuration): Promise<HttpInfo<ListProjectResponse>> {
        return this.api.projectsListWithHttpInfo(param.page, param.f_name,  options).toPromise();
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param param the request object
     */
    public projectsList(param: ProjectsApiProjectsListRequest = {}, options?: Configuration): Promise<ListProjectResponse> {
        return this.api.projectsList(param.page, param.f_name,  options).toPromise();
    }

    /**
     * Update project
     * Update project
     * @param param the request object
     */
    public projectsUpdateWithHttpInfo(param: ProjectsApiProjectsUpdateRequest, options?: Configuration): Promise<HttpInfo<ProjectResponse>> {
        return this.api.projectsUpdateWithHttpInfo(param.project_id, param.ProjectBodyPatch,  options).toPromise();
    }

    /**
     * Update project
     * Update project
     * @param param the request object
     */
    public projectsUpdate(param: ProjectsApiProjectsUpdateRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.projectsUpdate(param.project_id, param.ProjectBodyPatch,  options).toPromise();
    }

}

import { ObservableProvidersApi } from "./ObservableAPI.ts";
import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi.ts";

export interface ProvidersApiProvidersListRequest {
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof ProvidersApiprovidersList
     */
    page?: OrganisationsListPageParameter
}

export class ObjectProvidersApi {
    private api: ObservableProvidersApi

    public constructor(configuration: Configuration, requestFactory?: ProvidersApiRequestFactory, responseProcessor?: ProvidersApiResponseProcessor) {
        this.api = new ObservableProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a list of all providers with their respective deployed regions and cities.
     * Get available providers
     * @param param the request object
     */
    public providersListWithHttpInfo(param: ProvidersApiProvidersListRequest = {}, options?: Configuration): Promise<HttpInfo<ListProviderResponse>> {
        return this.api.providersListWithHttpInfo(param.page,  options).toPromise();
    }

    /**
     * Retrieve a list of all providers with their respective deployed regions and cities.
     * Get available providers
     * @param param the request object
     */
    public providersList(param: ProvidersApiProvidersListRequest = {}, options?: Configuration): Promise<ListProviderResponse> {
        return this.api.providersList(param.page,  options).toPromise();
    }

}

import { ObservableSecretsApi } from "./ObservableAPI.ts";
import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi.ts";

export interface SecretsApiProjectsSecretsCreateRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof SecretsApiprojectsSecretsCreate
     */
    project_id: string
    /**
     * Create/Update any field  The example generated may only be for one of the secret types, look towards the payload section of the schema for further fields, values and examples. 
     * @type SecretBody
     * @memberof SecretsApiprojectsSecretsCreate
     */
    SecretBody: SecretBody
}

export interface SecretsApiProjectsSecretsDeleteRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof SecretsApiprojectsSecretsDelete
     */
    project_id: string
    /**
     * Unique secret name
     * @type string
     * @memberof SecretsApiprojectsSecretsDelete
     */
    secret_name: string
}

export interface SecretsApiProjectsSecretsGetRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof SecretsApiprojectsSecretsGet
     */
    project_id: string
    /**
     * Unique secret name
     * @type string
     * @memberof SecretsApiprojectsSecretsGet
     */
    secret_name: string
}

export interface SecretsApiProjectsSecretsListRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof SecretsApiprojectsSecretsList
     */
    project_id: string
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof SecretsApiprojectsSecretsList
     */
    page?: OrganisationsListPageParameter
    /**
     * Type of secret to filter on
     * @type SecretMetaType
     * @memberof SecretsApiprojectsSecretsList
     */
    secret_type?: SecretMetaType
}

export interface SecretsApiProjectsSecretsUpdateRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof SecretsApiprojectsSecretsUpdate
     */
    project_id: string
    /**
     * Unique secret name
     * @type string
     * @memberof SecretsApiprojectsSecretsUpdate
     */
    secret_name: string
    /**
     * Update any field
     * @type SecretBodyPatch
     * @memberof SecretsApiprojectsSecretsUpdate
     */
    SecretBodyPatch: SecretBodyPatch
}

export class ObjectSecretsApi {
    private api: ObservableSecretsApi

    public constructor(configuration: Configuration, requestFactory?: SecretsApiRequestFactory, responseProcessor?: SecretsApiResponseProcessor) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param param the request object
     */
    public projectsSecretsCreateWithHttpInfo(param: SecretsApiProjectsSecretsCreateRequest, options?: Configuration): Promise<HttpInfo<SecretResponse>> {
        return this.api.projectsSecretsCreateWithHttpInfo(param.project_id, param.SecretBody,  options).toPromise();
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param param the request object
     */
    public projectsSecretsCreate(param: SecretsApiProjectsSecretsCreateRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.projectsSecretsCreate(param.project_id, param.SecretBody,  options).toPromise();
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param param the request object
     */
    public projectsSecretsDeleteWithHttpInfo(param: SecretsApiProjectsSecretsDeleteRequest, options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        return this.api.projectsSecretsDeleteWithHttpInfo(param.project_id, param.secret_name,  options).toPromise();
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param param the request object
     */
    public projectsSecretsDelete(param: SecretsApiProjectsSecretsDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.projectsSecretsDelete(param.project_id, param.secret_name,  options).toPromise();
    }

    /**
     * Get a specific project
     * Get project secret
     * @param param the request object
     */
    public projectsSecretsGetWithHttpInfo(param: SecretsApiProjectsSecretsGetRequest, options?: Configuration): Promise<HttpInfo<SecretMetaResponse>> {
        return this.api.projectsSecretsGetWithHttpInfo(param.project_id, param.secret_name,  options).toPromise();
    }

    /**
     * Get a specific project
     * Get project secret
     * @param param the request object
     */
    public projectsSecretsGet(param: SecretsApiProjectsSecretsGetRequest, options?: Configuration): Promise<SecretMetaResponse> {
        return this.api.projectsSecretsGet(param.project_id, param.secret_name,  options).toPromise();
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param param the request object
     */
    public projectsSecretsListWithHttpInfo(param: SecretsApiProjectsSecretsListRequest, options?: Configuration): Promise<HttpInfo<ListSecretResponse>> {
        return this.api.projectsSecretsListWithHttpInfo(param.project_id, param.page, param.secret_type,  options).toPromise();
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param param the request object
     */
    public projectsSecretsList(param: SecretsApiProjectsSecretsListRequest, options?: Configuration): Promise<ListSecretResponse> {
        return this.api.projectsSecretsList(param.project_id, param.page, param.secret_type,  options).toPromise();
    }

    /**
     * Update project
     * Update project secret
     * @param param the request object
     */
    public projectsSecretsUpdateWithHttpInfo(param: SecretsApiProjectsSecretsUpdateRequest, options?: Configuration): Promise<HttpInfo<SecretResponse>> {
        return this.api.projectsSecretsUpdateWithHttpInfo(param.project_id, param.secret_name, param.SecretBodyPatch,  options).toPromise();
    }

    /**
     * Update project
     * Update project secret
     * @param param the request object
     */
    public projectsSecretsUpdate(param: SecretsApiProjectsSecretsUpdateRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.projectsSecretsUpdate(param.project_id, param.secret_name, param.SecretBodyPatch,  options).toPromise();
    }

}

import { ObservableTokensApi } from "./ObservableAPI.ts";
import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi.ts";

export interface TokensApiAuthTokensCreateRequest {
    /**
     * 
     * @type AuthTokenBody
     * @memberof TokensApiauthTokensCreate
     */
    AuthTokenBody: AuthTokenBody
}

export interface TokensApiAuthTokensDeleteRequest {
    /**
     * Token ID reference
     * @type string
     * @memberof TokensApiauthTokensDelete
     */
    token_id: string
}

export interface TokensApiAuthTokensGetRequest {
    /**
     * Token ID reference
     * @type string
     * @memberof TokensApiauthTokensGet
     */
    token_id: string
}

export interface TokensApiAuthTokensListRequest {
    /**
     * Query parameters for pagination
     * @type OrganisationsListPageParameter
     * @memberof TokensApiauthTokensList
     */
    page?: OrganisationsListPageParameter
}

export interface TokensApiAuthTokensUpdateRequest {
    /**
     * Token ID reference
     * @type string
     * @memberof TokensApiauthTokensUpdate
     */
    token_id: string
    /**
     * 
     * @type AuthTokenPatch
     * @memberof TokensApiauthTokensUpdate
     */
    AuthTokenPatch: AuthTokenPatch
}

export class ObjectTokensApi {
    private api: ObservableTokensApi

    public constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param param the request object
     */
    public authTokensCreateWithHttpInfo(param: TokensApiAuthTokensCreateRequest, options?: Configuration): Promise<HttpInfo<AuthToken>> {
        return this.api.authTokensCreateWithHttpInfo(param.AuthTokenBody,  options).toPromise();
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param param the request object
     */
    public authTokensCreate(param: TokensApiAuthTokensCreateRequest, options?: Configuration): Promise<AuthToken> {
        return this.api.authTokensCreate(param.AuthTokenBody,  options).toPromise();
    }

    /**
     * Delete token
     * @param param the request object
     */
    public authTokensDeleteWithHttpInfo(param: TokensApiAuthTokensDeleteRequest, options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        return this.api.authTokensDeleteWithHttpInfo(param.token_id,  options).toPromise();
    }

    /**
     * Delete token
     * @param param the request object
     */
    public authTokensDelete(param: TokensApiAuthTokensDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.authTokensDelete(param.token_id,  options).toPromise();
    }

    /**
     * Get token information
     * @param param the request object
     */
    public authTokensGetWithHttpInfo(param: TokensApiAuthTokensGetRequest, options?: Configuration): Promise<HttpInfo<AuthTokenMeta>> {
        return this.api.authTokensGetWithHttpInfo(param.token_id,  options).toPromise();
    }

    /**
     * Get token information
     * @param param the request object
     */
    public authTokensGet(param: TokensApiAuthTokensGetRequest, options?: Configuration): Promise<AuthTokenMeta> {
        return this.api.authTokensGet(param.token_id,  options).toPromise();
    }

    /**
     * List all user auth tokens
     * @param param the request object
     */
    public authTokensListWithHttpInfo(param: TokensApiAuthTokensListRequest = {}, options?: Configuration): Promise<HttpInfo<ListAuthTokens>> {
        return this.api.authTokensListWithHttpInfo(param.page,  options).toPromise();
    }

    /**
     * List all user auth tokens
     * @param param the request object
     */
    public authTokensList(param: TokensApiAuthTokensListRequest = {}, options?: Configuration): Promise<ListAuthTokens> {
        return this.api.authTokensList(param.page,  options).toPromise();
    }

    /**
     * Update token
     * @param param the request object
     */
    public authTokensUpdateWithHttpInfo(param: TokensApiAuthTokensUpdateRequest, options?: Configuration): Promise<HttpInfo<AuthToken>> {
        return this.api.authTokensUpdateWithHttpInfo(param.token_id, param.AuthTokenPatch,  options).toPromise();
    }

    /**
     * Update token
     * @param param the request object
     */
    public authTokensUpdate(param: TokensApiAuthTokensUpdateRequest, options?: Configuration): Promise<AuthToken> {
        return this.api.authTokensUpdate(param.token_id, param.AuthTokenPatch,  options).toPromise();
    }

}

import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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

import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi.ts";
export class ObservableFunctionsApi {
    private requestFactory: FunctionsApiRequestFactory;
    private responseProcessor: FunctionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsApiRequestFactory,
        responseProcessor?: FunctionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsApiResponseProcessor();
    }

    /**
     * Create a new function
     * Create function
     * @param FunctionBody Create/Update any field
     */
    public functionsCreateWithHttpInfo(FunctionBody: FunctionBody, _options?: Configuration): Observable<HttpInfo<Function>> {
        const requestContextPromise = this.requestFactory.functionsCreate(FunctionBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.functionsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new function
     * Create function
     * @param FunctionBody Create/Update any field
     */
    public functionsCreate(FunctionBody: FunctionBody, _options?: Configuration): Observable<Function> {
        return this.functionsCreateWithHttpInfo(FunctionBody, _options).pipe(map((apiResponse: HttpInfo<Function>) => apiResponse.data));
    }

    /**
     * Delete a function (and all revisions)
     * Delete function
     * @param function_id Function ID reference
     */
    public functionsDeleteWithHttpInfo(function_id: string, _options?: Configuration): Observable<HttpInfo<DeletedResponse>> {
        const requestContextPromise = this.requestFactory.functionsDelete(function_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.functionsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a function (and all revisions)
     * Delete function
     * @param function_id Function ID reference
     */
    public functionsDelete(function_id: string, _options?: Configuration): Observable<DeletedResponse> {
        return this.functionsDeleteWithHttpInfo(function_id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get a specific function (latest revision)
     * Get function (latest revision)
     * @param function_id Function ID reference
     */
    public functionsGetWithHttpInfo(function_id: string, _options?: Configuration): Observable<HttpInfo<Function>> {
        const requestContextPromise = this.requestFactory.functionsGet(function_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.functionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific function (latest revision)
     * Get function (latest revision)
     * @param function_id Function ID reference
     */
    public functionsGet(function_id: string, _options?: Configuration): Observable<Function> {
        return this.functionsGetWithHttpInfo(function_id, _options).pipe(map((apiResponse: HttpInfo<Function>) => apiResponse.data));
    }

    /**
     * Get a specific revision of a function
     * Get a specific revision of a function
     * @param function_id Function ID reference
     * @param function_revision_id Function revision ID reference
     */
    public functionsRevisionsGetWithHttpInfo(function_id: string, function_revision_id: string, _options?: Configuration): Observable<HttpInfo<Function>> {
        const requestContextPromise = this.requestFactory.functionsRevisionsGet(function_id, function_revision_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.functionsRevisionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific revision of a function
     * Get a specific revision of a function
     * @param function_id Function ID reference
     * @param function_revision_id Function revision ID reference
     */
    public functionsRevisionsGet(function_id: string, function_revision_id: string, _options?: Configuration): Observable<Function> {
        return this.functionsRevisionsGetWithHttpInfo(function_id, function_revision_id, _options).pipe(map((apiResponse: HttpInfo<Function>) => apiResponse.data));
    }

    /**
     * List all revisions for a function
     * List all revisions for a function
     * @param function_id Function ID reference
     * @param page Query parameters for pagination
     */
    public functionsRevisionsListWithHttpInfo(function_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<HttpInfo<ListFunction>> {
        const requestContextPromise = this.requestFactory.functionsRevisionsList(function_id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.functionsRevisionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all revisions for a function
     * List all revisions for a function
     * @param function_id Function ID reference
     * @param page Query parameters for pagination
     */
    public functionsRevisionsList(function_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListFunction> {
        return this.functionsRevisionsListWithHttpInfo(function_id, page, _options).pipe(map((apiResponse: HttpInfo<ListFunction>) => apiResponse.data));
    }

    /**
     * Update a function (creates a new revision)
     * Update function
     * @param function_id Function ID reference
     * @param Function Update any field
     */
    public functionsUpdateWithHttpInfo(function_id: string, Function: Function, _options?: Configuration): Observable<HttpInfo<Function>> {
        const requestContextPromise = this.requestFactory.functionsUpdate(function_id, Function, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.functionsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a function (creates a new revision)
     * Update function
     * @param function_id Function ID reference
     * @param Function Update any field
     */
    public functionsUpdate(function_id: string, Function: Function, _options?: Configuration): Observable<Function> {
        return this.functionsUpdateWithHttpInfo(function_id, Function, _options).pipe(map((apiResponse: HttpInfo<Function>) => apiResponse.data));
    }

    /**
     * List all functions
     * List all functions within a project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsFunctionsListWithHttpInfo(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<HttpInfo<ListFunction>> {
        const requestContextPromise = this.requestFactory.projectsFunctionsList(project_id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsFunctionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all functions
     * List all functions within a project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsFunctionsList(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListFunction> {
        return this.projectsFunctionsListWithHttpInfo(project_id, page, _options).pipe(map((apiResponse: HttpInfo<ListFunction>) => apiResponse.data));
    }

}

import { HostsApiRequestFactory, HostsApiResponseProcessor} from "../apis/HostsApi.ts";
export class ObservableHostsApi {
    private requestFactory: HostsApiRequestFactory;
    private responseProcessor: HostsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HostsApiRequestFactory,
        responseProcessor?: HostsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HostsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HostsApiResponseProcessor();
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param project_id Project ID reference
     * @param HostBody 
     */
    public projectsHostsCreateWithHttpInfo(project_id: string, HostBody: HostBody, _options?: Configuration): Observable<HttpInfo<Host>> {
        const requestContextPromise = this.requestFactory.projectsHostsCreate(project_id, HostBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param project_id Project ID reference
     * @param HostBody 
     */
    public projectsHostsCreate(project_id: string, HostBody: HostBody, _options?: Configuration): Observable<Host> {
        return this.projectsHostsCreateWithHttpInfo(project_id, HostBody, _options).pipe(map((apiResponse: HttpInfo<Host>) => apiResponse.data));
    }

    /**
     * Delete specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsDeleteWithHttpInfo(project_id: string, hostname: string, _options?: Configuration): Observable<HttpInfo<DeletedResponse>> {
        const requestContextPromise = this.requestFactory.projectsHostsDelete(project_id, hostname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsDelete(project_id: string, hostname: string, _options?: Configuration): Observable<DeletedResponse> {
        return this.projectsHostsDeleteWithHttpInfo(project_id, hostname, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsGetWithHttpInfo(project_id: string, hostname: string, _options?: Configuration): Observable<HttpInfo<Host>> {
        const requestContextPromise = this.requestFactory.projectsHostsGet(project_id, hostname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsGet(project_id: string, hostname: string, _options?: Configuration): Observable<Host> {
        return this.projectsHostsGetWithHttpInfo(project_id, hostname, _options).pipe(map((apiResponse: HttpInfo<Host>) => apiResponse.data));
    }

    /**
     * List hosts for project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsHostsListWithHttpInfo(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<HttpInfo<ListHosts>> {
        const requestContextPromise = this.requestFactory.projectsHostsList(project_id, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List hosts for project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsHostsList(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListHosts> {
        return this.projectsHostsListWithHttpInfo(project_id, page, _options).pipe(map((apiResponse: HttpInfo<ListHosts>) => apiResponse.data));
    }

    /**
     * Update specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     * @param HostBodyPatch 
     */
    public projectsHostsUpdateWithHttpInfo(project_id: string, hostname: string, HostBodyPatch: HostBodyPatch, _options?: Configuration): Observable<HttpInfo<Host>> {
        const requestContextPromise = this.requestFactory.projectsHostsUpdate(project_id, hostname, HostBodyPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     * @param HostBodyPatch 
     */
    public projectsHostsUpdate(project_id: string, hostname: string, HostBodyPatch: HostBodyPatch, _options?: Configuration): Observable<Host> {
        return this.projectsHostsUpdateWithHttpInfo(project_id, hostname, HostBodyPatch, _options).pipe(map((apiResponse: HttpInfo<Host>) => apiResponse.data));
    }

    /**
     * Schedule host verification task
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsVerifyCreateWithHttpInfo(project_id: string, hostname: string, _options?: Configuration): Observable<HttpInfo<Host>> {
        const requestContextPromise = this.requestFactory.projectsHostsVerifyCreate(project_id, hostname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsVerifyCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule host verification task
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsVerifyCreate(project_id: string, hostname: string, _options?: Configuration): Observable<Host> {
        return this.projectsHostsVerifyCreateWithHttpInfo(project_id, hostname, _options).pipe(map((apiResponse: HttpInfo<Host>) => apiResponse.data));
    }

}

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi.ts";
export class ObservableLogsApi {
    private requestFactory: LogsApiRequestFactory;
    private responseProcessor: LogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApiResponseProcessor();
    }

    /**
     * Retrieve logs for a specific project or function. Use the query parameter to search logs.  > Note: Logs are always returned in a descending order based on the timestamp. > Note: A max size of 500 logs is returned per request (when using page[size]). 
     * Get logs
     * @param page Query parameters for pagination
     * @param f_project Project uuid reference
     * @param f_function Function uuid reference
     * @param f_timestamps Timestamp restriction for query
     * @param f_query Text query string
     * @param f_log_type Type of log
     */
    public logsListWithHttpInfo(page?: OrganisationsListPageParameter, f_project?: string, f_function?: string, f_timestamps?: LogsListFTimestampsParameter, f_query?: string, f_log_type?: 'info' | 'error', _options?: Configuration): Observable<HttpInfo<ListLogResponse>> {
        const requestContextPromise = this.requestFactory.logsList(page, f_project, f_function, f_timestamps, f_query, f_log_type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve logs for a specific project or function. Use the query parameter to search logs.  > Note: Logs are always returned in a descending order based on the timestamp. > Note: A max size of 500 logs is returned per request (when using page[size]). 
     * Get logs
     * @param page Query parameters for pagination
     * @param f_project Project uuid reference
     * @param f_function Function uuid reference
     * @param f_timestamps Timestamp restriction for query
     * @param f_query Text query string
     * @param f_log_type Type of log
     */
    public logsList(page?: OrganisationsListPageParameter, f_project?: string, f_function?: string, f_timestamps?: LogsListFTimestampsParameter, f_query?: string, f_log_type?: 'info' | 'error', _options?: Configuration): Observable<ListLogResponse> {
        return this.logsListWithHttpInfo(page, f_project, f_function, f_timestamps, f_query, f_log_type, _options).pipe(map((apiResponse: HttpInfo<ListLogResponse>) => apiResponse.data));
    }

}

import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi.ts";
export class ObservableMetricsApi {
    private requestFactory: MetricsApiRequestFactory;
    private responseProcessor: MetricsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsApiRequestFactory,
        responseProcessor?: MetricsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetricsApiResponseProcessor();
    }

    /**
     * Retrieve metrics for a specific project or function. Use the query parameter to request a metrics report.  > Note: Metrics are always returned in a descending order based on the timestamp. 
     * Get metrics
     * @param metric_type Metric aggregation type, types can be used with either a project or a function filter.  - httprequests: Aggregated HTTP requests - resourcestats: Aggregated resource stats (such as CPU, Memory and Network)  &gt; Note: aggregations cannot return more than 300 data points 
     * @param page Query parameters for pagination
     * @param f_project Project uuid reference
     * @param f_function Function uuid reference
     * @param f_timestamps Timestamp restriction for query
     * @param f_histogram_interval Histogram interval
     */
    public metricsAggregationsListWithHttpInfo(metric_type: 'httprequests' | 'resourcestats', page?: OrganisationsListPageParameter, f_project?: string, f_function?: string, f_timestamps?: LogsListFTimestampsParameter, f_histogram_interval?: number, _options?: Configuration): Observable<HttpInfo<MetricsAggregationsList200Response>> {
        const requestContextPromise = this.requestFactory.metricsAggregationsList(metric_type, page, f_project, f_function, f_timestamps, f_histogram_interval, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAggregationsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve metrics for a specific project or function. Use the query parameter to request a metrics report.  > Note: Metrics are always returned in a descending order based on the timestamp. 
     * Get metrics
     * @param metric_type Metric aggregation type, types can be used with either a project or a function filter.  - httprequests: Aggregated HTTP requests - resourcestats: Aggregated resource stats (such as CPU, Memory and Network)  &gt; Note: aggregations cannot return more than 300 data points 
     * @param page Query parameters for pagination
     * @param f_project Project uuid reference
     * @param f_function Function uuid reference
     * @param f_timestamps Timestamp restriction for query
     * @param f_histogram_interval Histogram interval
     */
    public metricsAggregationsList(metric_type: 'httprequests' | 'resourcestats', page?: OrganisationsListPageParameter, f_project?: string, f_function?: string, f_timestamps?: LogsListFTimestampsParameter, f_histogram_interval?: number, _options?: Configuration): Observable<MetricsAggregationsList200Response> {
        return this.metricsAggregationsListWithHttpInfo(metric_type, page, f_project, f_function, f_timestamps, f_histogram_interval, _options).pipe(map((apiResponse: HttpInfo<MetricsAggregationsList200Response>) => apiResponse.data));
    }

}

import { OrganisationsApiRequestFactory, OrganisationsApiResponseProcessor} from "../apis/OrganisationsApi.ts";
export class ObservableOrganisationsApi {
    private requestFactory: OrganisationsApiRequestFactory;
    private responseProcessor: OrganisationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganisationsApiRequestFactory,
        responseProcessor?: OrganisationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganisationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganisationsApiResponseProcessor();
    }

    /**
     * Create an organisation
     * Create organisations
     * @param OrganisationBody Create/Update any field
     */
    public organisationsCreateWithHttpInfo(OrganisationBody?: OrganisationBody, _options?: Configuration): Observable<HttpInfo<OrganisationResponse>> {
        const requestContextPromise = this.requestFactory.organisationsCreate(OrganisationBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an organisation
     * Create organisations
     * @param OrganisationBody Create/Update any field
     */
    public organisationsCreate(OrganisationBody?: OrganisationBody, _options?: Configuration): Observable<OrganisationResponse> {
        return this.organisationsCreateWithHttpInfo(OrganisationBody, _options).pipe(map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data));
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsDeleteWithHttpInfo(organisation_id: string, _options?: Configuration): Observable<HttpInfo<DeletedResponse>> {
        const requestContextPromise = this.requestFactory.organisationsDelete(organisation_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsDelete(organisation_id: string, _options?: Configuration): Observable<DeletedResponse> {
        return this.organisationsDeleteWithHttpInfo(organisation_id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsGetWithHttpInfo(organisation_id: string, _options?: Configuration): Observable<HttpInfo<OrganisationResponse>> {
        const requestContextPromise = this.requestFactory.organisationsGet(organisation_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsGet(organisation_id: string, _options?: Configuration): Observable<OrganisationResponse> {
        return this.organisationsGetWithHttpInfo(organisation_id, _options).pipe(map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data));
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     * @param f_name Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     */
    public organisationsListWithHttpInfo(page?: OrganisationsListPageParameter, f_name?: string, _options?: Configuration): Observable<HttpInfo<ListOrganisationResponse>> {
        const requestContextPromise = this.requestFactory.organisationsList(page, f_name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     * @param f_name Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     */
    public organisationsList(page?: OrganisationsListPageParameter, f_name?: string, _options?: Configuration): Observable<ListOrganisationResponse> {
        return this.organisationsListWithHttpInfo(page, f_name, _options).pipe(map((apiResponse: HttpInfo<ListOrganisationResponse>) => apiResponse.data));
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisation_id Organisation ID reference
     * @param OrganisationBody Create/Update any field
     */
    public organisationsUpdateWithHttpInfo(organisation_id: string, OrganisationBody?: OrganisationBody, _options?: Configuration): Observable<HttpInfo<OrganisationResponse>> {
        const requestContextPromise = this.requestFactory.organisationsUpdate(organisation_id, OrganisationBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisation_id Organisation ID reference
     * @param OrganisationBody Create/Update any field
     */
    public organisationsUpdate(organisation_id: string, OrganisationBody?: OrganisationBody, _options?: Configuration): Observable<OrganisationResponse> {
        return this.organisationsUpdateWithHttpInfo(organisation_id, OrganisationBody, _options).pipe(map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data));
    }

}

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi.ts";
export class ObservableProjectsApi {
    private requestFactory: ProjectsApiRequestFactory;
    private responseProcessor: ProjectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectsApiResponseProcessor();
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisation_id Organisation ID reference
     * @param page Query parameters for pagination
     * @param f_name Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     */
    public organisationsProjectsListWithHttpInfo(organisation_id: string, page?: OrganisationsListPageParameter, f_name?: string, _options?: Configuration): Observable<HttpInfo<ListProjectResponse>> {
        const requestContextPromise = this.requestFactory.organisationsProjectsList(organisation_id, page, f_name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsProjectsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisation_id Organisation ID reference
     * @param page Query parameters for pagination
     * @param f_name Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     */
    public organisationsProjectsList(organisation_id: string, page?: OrganisationsListPageParameter, f_name?: string, _options?: Configuration): Observable<ListProjectResponse> {
        return this.organisationsProjectsListWithHttpInfo(organisation_id, page, f_name, _options).pipe(map((apiResponse: HttpInfo<ListProjectResponse>) => apiResponse.data));
    }

    /**
     * Create a new project
     * Create project
     * @param ProjectBody Create/Update any field
     */
    public projectsCreateWithHttpInfo(ProjectBody?: ProjectBody, _options?: Configuration): Observable<HttpInfo<ProjectResponse>> {
        const requestContextPromise = this.requestFactory.projectsCreate(ProjectBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new project
     * Create project
     * @param ProjectBody Create/Update any field
     */
    public projectsCreate(ProjectBody?: ProjectBody, _options?: Configuration): Observable<ProjectResponse> {
        return this.projectsCreateWithHttpInfo(ProjectBody, _options).pipe(map((apiResponse: HttpInfo<ProjectResponse>) => apiResponse.data));
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param project_id Project ID reference
     */
    public projectsDeleteWithHttpInfo(project_id: string, _options?: Configuration): Observable<HttpInfo<DeletedResponse>> {
        const requestContextPromise = this.requestFactory.projectsDelete(project_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param project_id Project ID reference
     */
    public projectsDelete(project_id: string, _options?: Configuration): Observable<DeletedResponse> {
        return this.projectsDeleteWithHttpInfo(project_id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get a specific project
     * Get project
     * @param project_id Project ID reference
     */
    public projectsGetWithHttpInfo(project_id: string, _options?: Configuration): Observable<HttpInfo<ProjectResponse>> {
        const requestContextPromise = this.requestFactory.projectsGet(project_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific project
     * Get project
     * @param project_id Project ID reference
     */
    public projectsGet(project_id: string, _options?: Configuration): Observable<ProjectResponse> {
        return this.projectsGetWithHttpInfo(project_id, _options).pipe(map((apiResponse: HttpInfo<ProjectResponse>) => apiResponse.data));
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     * @param f_name Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     */
    public projectsListWithHttpInfo(page?: OrganisationsListPageParameter, f_name?: string, _options?: Configuration): Observable<HttpInfo<ListProjectResponse>> {
        const requestContextPromise = this.requestFactory.projectsList(page, f_name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     * @param f_name Filter resource on name, if the value ends in an asterix it will be treated as a partial search otherwise, it\&#39;ll be an exact match 
     */
    public projectsList(page?: OrganisationsListPageParameter, f_name?: string, _options?: Configuration): Observable<ListProjectResponse> {
        return this.projectsListWithHttpInfo(page, f_name, _options).pipe(map((apiResponse: HttpInfo<ListProjectResponse>) => apiResponse.data));
    }

    /**
     * Update project
     * Update project
     * @param project_id Project ID reference
     * @param ProjectBodyPatch Update any field
     */
    public projectsUpdateWithHttpInfo(project_id: string, ProjectBodyPatch?: ProjectBodyPatch, _options?: Configuration): Observable<HttpInfo<ProjectResponse>> {
        const requestContextPromise = this.requestFactory.projectsUpdate(project_id, ProjectBodyPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update project
     * Update project
     * @param project_id Project ID reference
     * @param ProjectBodyPatch Update any field
     */
    public projectsUpdate(project_id: string, ProjectBodyPatch?: ProjectBodyPatch, _options?: Configuration): Observable<ProjectResponse> {
        return this.projectsUpdateWithHttpInfo(project_id, ProjectBodyPatch, _options).pipe(map((apiResponse: HttpInfo<ProjectResponse>) => apiResponse.data));
    }

}

import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi.ts";
export class ObservableProvidersApi {
    private requestFactory: ProvidersApiRequestFactory;
    private responseProcessor: ProvidersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProvidersApiRequestFactory,
        responseProcessor?: ProvidersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProvidersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProvidersApiResponseProcessor();
    }

    /**
     * Retrieve a list of all providers with their respective deployed regions and cities.
     * Get available providers
     * @param page Query parameters for pagination
     */
    public providersListWithHttpInfo(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<HttpInfo<ListProviderResponse>> {
        const requestContextPromise = this.requestFactory.providersList(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.providersListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all providers with their respective deployed regions and cities.
     * Get available providers
     * @param page Query parameters for pagination
     */
    public providersList(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListProviderResponse> {
        return this.providersListWithHttpInfo(page, _options).pipe(map((apiResponse: HttpInfo<ListProviderResponse>) => apiResponse.data));
    }

}

import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi.ts";
export class ObservableSecretsApi {
    private requestFactory: SecretsApiRequestFactory;
    private responseProcessor: SecretsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsApiRequestFactory,
        responseProcessor?: SecretsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecretsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecretsApiResponseProcessor();
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param project_id Project ID reference
     * @param SecretBody Create/Update any field  The example generated may only be for one of the secret types, look towards the payload section of the schema for further fields, values and examples. 
     */
    public projectsSecretsCreateWithHttpInfo(project_id: string, SecretBody: SecretBody, _options?: Configuration): Observable<HttpInfo<SecretResponse>> {
        const requestContextPromise = this.requestFactory.projectsSecretsCreate(project_id, SecretBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param project_id Project ID reference
     * @param SecretBody Create/Update any field  The example generated may only be for one of the secret types, look towards the payload section of the schema for further fields, values and examples. 
     */
    public projectsSecretsCreate(project_id: string, SecretBody: SecretBody, _options?: Configuration): Observable<SecretResponse> {
        return this.projectsSecretsCreateWithHttpInfo(project_id, SecretBody, _options).pipe(map((apiResponse: HttpInfo<SecretResponse>) => apiResponse.data));
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsDeleteWithHttpInfo(project_id: string, secret_name: string, _options?: Configuration): Observable<HttpInfo<DeletedResponse>> {
        const requestContextPromise = this.requestFactory.projectsSecretsDelete(project_id, secret_name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsDelete(project_id: string, secret_name: string, _options?: Configuration): Observable<DeletedResponse> {
        return this.projectsSecretsDeleteWithHttpInfo(project_id, secret_name, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get a specific project
     * Get project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsGetWithHttpInfo(project_id: string, secret_name: string, _options?: Configuration): Observable<HttpInfo<SecretMetaResponse>> {
        const requestContextPromise = this.requestFactory.projectsSecretsGet(project_id, secret_name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific project
     * Get project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsGet(project_id: string, secret_name: string, _options?: Configuration): Observable<SecretMetaResponse> {
        return this.projectsSecretsGetWithHttpInfo(project_id, secret_name, _options).pipe(map((apiResponse: HttpInfo<SecretMetaResponse>) => apiResponse.data));
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     * @param secret_type Type of secret to filter on
     */
    public projectsSecretsListWithHttpInfo(project_id: string, page?: OrganisationsListPageParameter, secret_type?: SecretMetaType, _options?: Configuration): Observable<HttpInfo<ListSecretResponse>> {
        const requestContextPromise = this.requestFactory.projectsSecretsList(project_id, page, secret_type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     * @param secret_type Type of secret to filter on
     */
    public projectsSecretsList(project_id: string, page?: OrganisationsListPageParameter, secret_type?: SecretMetaType, _options?: Configuration): Observable<ListSecretResponse> {
        return this.projectsSecretsListWithHttpInfo(project_id, page, secret_type, _options).pipe(map((apiResponse: HttpInfo<ListSecretResponse>) => apiResponse.data));
    }

    /**
     * Update project
     * Update project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     * @param SecretBodyPatch Update any field
     */
    public projectsSecretsUpdateWithHttpInfo(project_id: string, secret_name: string, SecretBodyPatch: SecretBodyPatch, _options?: Configuration): Observable<HttpInfo<SecretResponse>> {
        const requestContextPromise = this.requestFactory.projectsSecretsUpdate(project_id, secret_name, SecretBodyPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update project
     * Update project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     * @param SecretBodyPatch Update any field
     */
    public projectsSecretsUpdate(project_id: string, secret_name: string, SecretBodyPatch: SecretBodyPatch, _options?: Configuration): Observable<SecretResponse> {
        return this.projectsSecretsUpdateWithHttpInfo(project_id, secret_name, SecretBodyPatch, _options).pipe(map((apiResponse: HttpInfo<SecretResponse>) => apiResponse.data));
    }

}

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi.ts";
export class ObservableTokensApi {
    private requestFactory: TokensApiRequestFactory;
    private responseProcessor: TokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokensApiResponseProcessor();
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param AuthTokenBody 
     */
    public authTokensCreateWithHttpInfo(AuthTokenBody: AuthTokenBody, _options?: Configuration): Observable<HttpInfo<AuthToken>> {
        const requestContextPromise = this.requestFactory.authTokensCreate(AuthTokenBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param AuthTokenBody 
     */
    public authTokensCreate(AuthTokenBody: AuthTokenBody, _options?: Configuration): Observable<AuthToken> {
        return this.authTokensCreateWithHttpInfo(AuthTokenBody, _options).pipe(map((apiResponse: HttpInfo<AuthToken>) => apiResponse.data));
    }

    /**
     * Delete token
     * @param token_id Token ID reference
     */
    public authTokensDeleteWithHttpInfo(token_id: string, _options?: Configuration): Observable<HttpInfo<DeletedResponse>> {
        const requestContextPromise = this.requestFactory.authTokensDelete(token_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete token
     * @param token_id Token ID reference
     */
    public authTokensDelete(token_id: string, _options?: Configuration): Observable<DeletedResponse> {
        return this.authTokensDeleteWithHttpInfo(token_id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get token information
     * @param token_id Token ID reference
     */
    public authTokensGetWithHttpInfo(token_id: string, _options?: Configuration): Observable<HttpInfo<AuthTokenMeta>> {
        const requestContextPromise = this.requestFactory.authTokensGet(token_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get token information
     * @param token_id Token ID reference
     */
    public authTokensGet(token_id: string, _options?: Configuration): Observable<AuthTokenMeta> {
        return this.authTokensGetWithHttpInfo(token_id, _options).pipe(map((apiResponse: HttpInfo<AuthTokenMeta>) => apiResponse.data));
    }

    /**
     * List all user auth tokens
     * @param page Query parameters for pagination
     */
    public authTokensListWithHttpInfo(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<HttpInfo<ListAuthTokens>> {
        const requestContextPromise = this.requestFactory.authTokensList(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all user auth tokens
     * @param page Query parameters for pagination
     */
    public authTokensList(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListAuthTokens> {
        return this.authTokensListWithHttpInfo(page, _options).pipe(map((apiResponse: HttpInfo<ListAuthTokens>) => apiResponse.data));
    }

    /**
     * Update token
     * @param token_id Token ID reference
     * @param AuthTokenPatch 
     */
    public authTokensUpdateWithHttpInfo(token_id: string, AuthTokenPatch: AuthTokenPatch, _options?: Configuration): Observable<HttpInfo<AuthToken>> {
        const requestContextPromise = this.requestFactory.authTokensUpdate(token_id, AuthTokenPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update token
     * @param token_id Token ID reference
     * @param AuthTokenPatch 
     */
    public authTokensUpdate(token_id: string, AuthTokenPatch: AuthTokenPatch, _options?: Configuration): Observable<AuthToken> {
        return this.authTokensUpdateWithHttpInfo(token_id, AuthTokenPatch, _options).pipe(map((apiResponse: HttpInfo<AuthToken>) => apiResponse.data));
    }

}

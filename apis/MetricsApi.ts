// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { LogsListFTimestampsParameter } from '../models/LogsListFTimestampsParameter.ts';
import { MetricsAggregationsList200Response } from '../models/MetricsAggregationsList200Response.ts';

/**
 * no description
 */
export class MetricsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve metrics for a specific project or function. Use the query parameter to request a metrics report.  > Note: Metrics are always returned in a descending order based on the timestamp. 
     * Get metrics
     * @param metric_aggregation_type Metric aggregation type, types can be used with either a project or a function filter.  - httprequests: Aggregated HTTP requests - resourcestats: Aggregated resource stats (such as CPU, Memory and Network)  &gt; Note: aggregations cannot return more than 300 data points 
     * @param f_project Project uuid reference
     * @param f_function Function uuid reference
     * @param f_timestamps Timestamp restriction for query
     * @param f_histogram_interval Histogram interval
     */
    public async metricsAggregationsList(metric_aggregation_type: 'httprequests' | 'resourcestats', f_project?: string, f_function?: string, f_timestamps?: LogsListFTimestampsParameter, f_histogram_interval?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'metric_aggregation_type' is not null or undefined
        if (metric_aggregation_type === null || metric_aggregation_type === undefined) {
            throw new RequiredError("MetricsApi", "metricsAggregationsList", "metric_aggregation_type");
        }






        // Path Params
        const localVarPath = '/metrics/aggregations/{metric_aggregation_type}'
            .replace('{' + 'metric_aggregation_type' + '}', encodeURIComponent(String(metric_aggregation_type)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (f_project !== undefined) {
            requestContext.setQueryParam("f_project", ObjectSerializer.serialize(f_project, "string", "uuid"));
        }

        // Query Params
        if (f_function !== undefined) {
            requestContext.setQueryParam("f_function", ObjectSerializer.serialize(f_function, "string", "uuid"));
        }

        // Query Params
        if (f_timestamps !== undefined) {
            requestContext.setQueryParam("f_timestamps", ObjectSerializer.serialize(f_timestamps, "LogsListFTimestampsParameter", ""));
        }

        // Query Params
        if (f_histogram_interval !== undefined) {
            requestContext.setQueryParam("f_histogram_interval", ObjectSerializer.serialize(f_histogram_interval, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MetricsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to metricsAggregationsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async metricsAggregationsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MetricsAggregationsList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricsAggregationsList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsAggregationsList200Response", ""
            ) as MetricsAggregationsList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequestResponse", ""
            ) as BadRequestResponse;
            throw new ApiException<BadRequestResponse>(response.httpStatusCode, "Resource Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MetricsAggregationsList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricsAggregationsList200Response", ""
            ) as MetricsAggregationsList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

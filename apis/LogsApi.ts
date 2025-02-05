// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { ListLogResponse } from '../models/ListLogResponse.ts';
import { LogsListFTimestampsParameter } from '../models/LogsListFTimestampsParameter.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';

/**
 * no description
 */
export class LogsApiRequestFactory extends BaseAPIRequestFactory {

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
    public async logsList(page?: OrganisationsListPageParameter, f_project?: string, f_function?: string, f_timestamps?: LogsListFTimestampsParameter, f_query?: string, f_log_type?: 'info' | 'error', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/logs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "OrganisationsListPageParameter", ""));
        }

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
        if (f_query !== undefined) {
            requestContext.setQueryParam("f_query", ObjectSerializer.serialize(f_query, "string", ""));
        }

        // Query Params
        if (f_log_type !== undefined) {
            requestContext.setQueryParam("f_log_type", ObjectSerializer.serialize(f_log_type, "'info' | 'error'", ""));
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

export class LogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to logsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async logsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLogResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListLogResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListLogResponse", ""
            ) as ListLogResponse;
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
            const body: ListLogResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListLogResponse", ""
            ) as ListLogResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { Function } from '../models/Function.ts';
import { FunctionBody } from '../models/FunctionBody.ts';
import { ListFunction } from '../models/ListFunction.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';

/**
 * no description
 */
export class FunctionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new function
     * Create function
     * @param FunctionBody Create/Update any field
     */
    public async functionsCreate(FunctionBody: FunctionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'FunctionBody' is not null or undefined
        if (FunctionBody === null || FunctionBody === undefined) {
            throw new RequiredError("FunctionsApi", "functionsCreate", "FunctionBody");
        }


        // Path Params
        const localVarPath = '/functions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(FunctionBody, "FunctionBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

    /**
     * Delete a function (and all revisions)
     * Delete function
     * @param function_id Function ID reference
     */
    public async functionsDelete(function_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'function_id' is not null or undefined
        if (function_id === null || function_id === undefined) {
            throw new RequiredError("FunctionsApi", "functionsDelete", "function_id");
        }


        // Path Params
        const localVarPath = '/functions/{function_id}'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(function_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Get a specific function (latest revision)
     * Get function (latest revision)
     * @param function_id Function ID reference
     */
    public async functionsGet(function_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'function_id' is not null or undefined
        if (function_id === null || function_id === undefined) {
            throw new RequiredError("FunctionsApi", "functionsGet", "function_id");
        }


        // Path Params
        const localVarPath = '/functions/{function_id}'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(function_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Get a specific revision of a function
     * Get a specific revision of a function
     * @param function_id Function ID reference
     * @param function_revision_id Function revision ID reference
     */
    public async functionsRevisionsGet(function_id: string, function_revision_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'function_id' is not null or undefined
        if (function_id === null || function_id === undefined) {
            throw new RequiredError("FunctionsApi", "functionsRevisionsGet", "function_id");
        }


        // verify required parameter 'function_revision_id' is not null or undefined
        if (function_revision_id === null || function_revision_id === undefined) {
            throw new RequiredError("FunctionsApi", "functionsRevisionsGet", "function_revision_id");
        }


        // Path Params
        const localVarPath = '/functions/{function_id}/revisions/{function_revision_id}'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(function_id)))
            .replace('{' + 'function_revision_id' + '}', encodeURIComponent(String(function_revision_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * List all revisions for a function
     * List all revisions for a function
     * @param function_id Function ID reference
     * @param page Query parameters for pagination
     */
    public async functionsRevisionsList(function_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'function_id' is not null or undefined
        if (function_id === null || function_id === undefined) {
            throw new RequiredError("FunctionsApi", "functionsRevisionsList", "function_id");
        }



        // Path Params
        const localVarPath = '/functions/{function_id}/revisions'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(function_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "OrganisationsListPageParameter", ""));
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

    /**
     * Update a function (creates a new revision)
     * Update function
     * @param function_id Function ID reference
     * @param Function Update any field
     */
    public async functionsUpdate(function_id: string, Function: Function, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'function_id' is not null or undefined
        if (function_id === null || function_id === undefined) {
            throw new RequiredError("FunctionsApi", "functionsUpdate", "function_id");
        }


        // verify required parameter 'Function' is not null or undefined
        if (Function === null || Function === undefined) {
            throw new RequiredError("FunctionsApi", "functionsUpdate", "Function");
        }


        // Path Params
        const localVarPath = '/functions/{function_id}'
            .replace('{' + 'function_id' + '}', encodeURIComponent(String(function_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(Function, "Function", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

    /**
     * List all functions
     * List all functions within a project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public async projectsFunctionsList(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("FunctionsApi", "projectsFunctionsList", "project_id");
        }



        // Path Params
        const localVarPath = '/projects/{project_id}/functions'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "OrganisationsListPageParameter", ""));
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

export class FunctionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to functionsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async functionsCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Function >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
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
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to functionsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async functionsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeletedResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeletedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletedResponse", ""
            ) as DeletedResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeletedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletedResponse", ""
            ) as DeletedResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to functionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async functionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Function >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to functionsRevisionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async functionsRevisionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Function >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to functionsRevisionsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async functionsRevisionsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListFunction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFunction", ""
            ) as ListFunction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFunction", ""
            ) as ListFunction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to functionsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async functionsUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Function >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequestResponse", ""
            ) as BadRequestResponse;
            throw new ApiException<BadRequestResponse>(response.httpStatusCode, "Resource Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Function = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Function", ""
            ) as Function;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsFunctionsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsFunctionsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListFunction >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFunction", ""
            ) as ListFunction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFunction", ""
            ) as ListFunction;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

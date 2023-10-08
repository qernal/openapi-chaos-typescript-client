// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AuthToken } from '../models/AuthToken.ts';
import { AuthTokenBody } from '../models/AuthTokenBody.ts';
import { AuthTokenMeta } from '../models/AuthTokenMeta.ts';
import { AuthTokenPatch } from '../models/AuthTokenPatch.ts';
import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { ListAuthTokens } from '../models/ListAuthTokens.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';

/**
 * no description
 */
export class TokensApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create new OAuth client which can be used to access user private data
     * Create new auth token
     * @param AuthTokenBody 
     */
    public async authTokensCreate(AuthTokenBody: AuthTokenBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'AuthTokenBody' is not null or undefined
        if (AuthTokenBody === null || AuthTokenBody === undefined) {
            throw new RequiredError("TokensApi", "authTokensCreate", "AuthTokenBody");
        }


        // Path Params
        const localVarPath = '/auth/tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(AuthTokenBody, "AuthTokenBody", ""),
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
     * Delete token
     * @param token_id Token ID reference
     */
    public async authTokensDelete(token_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token_id' is not null or undefined
        if (token_id === null || token_id === undefined) {
            throw new RequiredError("TokensApi", "authTokensDelete", "token_id");
        }


        // Path Params
        const localVarPath = '/auth/tokens/{token_id}'
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(token_id)));

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
     * Get token information
     * @param token_id Token ID reference
     */
    public async authTokensGet(token_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token_id' is not null or undefined
        if (token_id === null || token_id === undefined) {
            throw new RequiredError("TokensApi", "authTokensGet", "token_id");
        }


        // Path Params
        const localVarPath = '/auth/tokens/{token_id}'
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(token_id)));

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
     * List all user auth tokens
     * @param page Query parameters for pagination
     */
    public async authTokensList(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/auth/tokens';

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
     * Update token
     * @param token_id Token ID reference
     * @param AuthTokenPatch 
     */
    public async authTokensUpdate(token_id: string, AuthTokenPatch: AuthTokenPatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token_id' is not null or undefined
        if (token_id === null || token_id === undefined) {
            throw new RequiredError("TokensApi", "authTokensUpdate", "token_id");
        }


        // verify required parameter 'AuthTokenPatch' is not null or undefined
        if (AuthTokenPatch === null || AuthTokenPatch === undefined) {
            throw new RequiredError("TokensApi", "authTokensUpdate", "AuthTokenPatch");
        }


        // Path Params
        const localVarPath = '/auth/tokens/{token_id}'
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(token_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(AuthTokenPatch, "AuthTokenPatch", ""),
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

}

export class TokensApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authTokensCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authTokensCreate(response: ResponseContext): Promise<AuthToken > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuthToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthToken", ""
            ) as AuthToken;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
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
            const body: AuthToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthToken", ""
            ) as AuthToken;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authTokensDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authTokensDelete(response: ResponseContext): Promise<DeletedResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeletedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletedResponse", ""
            ) as DeletedResponse;
            return body;
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
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authTokensGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authTokensGet(response: ResponseContext): Promise<AuthTokenMeta > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuthTokenMeta = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthTokenMeta", ""
            ) as AuthTokenMeta;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
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
            const body: AuthTokenMeta = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthTokenMeta", ""
            ) as AuthTokenMeta;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authTokensList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authTokensList(response: ResponseContext): Promise<ListAuthTokens > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAuthTokens = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAuthTokens", ""
            ) as ListAuthTokens;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
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
            const body: ListAuthTokens = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAuthTokens", ""
            ) as ListAuthTokens;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authTokensUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authTokensUpdate(response: ResponseContext): Promise<AuthToken > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuthToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthToken", ""
            ) as AuthToken;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
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
            const body: AuthToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthToken", ""
            ) as AuthToken;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

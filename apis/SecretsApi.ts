// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { ListSecretResponse } from '../models/ListSecretResponse.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';
import { SecretBody } from '../models/SecretBody.ts';
import { SecretBodyPatch } from '../models/SecretBodyPatch.ts';
import { SecretMetaResponse } from '../models/SecretMetaResponse.ts';
import { SecretMetaType } from '../models/SecretMetaType.ts';
import { SecretResponse } from '../models/SecretResponse.ts';
import { UnauthorisedResponse } from '../models/UnauthorisedResponse.ts';

/**
 * no description
 */
export class SecretsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new project secret
     * Create project secret
     * @param project_id Project ID reference
     * @param SecretBody Create/Update any field
     */
    public async projectsSecretsCreate(project_id: string, SecretBody: SecretBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsCreate", "project_id");
        }


        // verify required parameter 'SecretBody' is not null or undefined
        if (SecretBody === null || SecretBody === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsCreate", "SecretBody");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/secrets'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(SecretBody, "SecretBody", ""),
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
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public async projectsSecretsDelete(project_id: string, secret_name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsDelete", "project_id");
        }


        // verify required parameter 'secret_name' is not null or undefined
        if (secret_name === null || secret_name === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsDelete", "secret_name");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/secrets/{secret_name}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)))
            .replace('{' + 'secret_name' + '}', encodeURIComponent(String(secret_name)));

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
     * Get a specific project
     * Get project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public async projectsSecretsGet(project_id: string, secret_name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsGet", "project_id");
        }


        // verify required parameter 'secret_name' is not null or undefined
        if (secret_name === null || secret_name === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsGet", "secret_name");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/secrets/{secret_name}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)))
            .replace('{' + 'secret_name' + '}', encodeURIComponent(String(secret_name)));

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
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     * @param secret_type Type of secret to filter on
     */
    public async projectsSecretsList(project_id: string, page?: OrganisationsListPageParameter, secret_type?: SecretMetaType, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsList", "project_id");
        }




        // Path Params
        const localVarPath = '/projects/{project_id}/secrets'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "OrganisationsListPageParameter", ""));
        }

        // Query Params
        if (secret_type !== undefined) {
            requestContext.setQueryParam("secret_type", ObjectSerializer.serialize(secret_type, "SecretMetaType", ""));
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
     * Update project
     * Update project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     * @param SecretBodyPatch Update any field
     */
    public async projectsSecretsUpdate(project_id: string, secret_name: string, SecretBodyPatch: SecretBodyPatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsUpdate", "project_id");
        }


        // verify required parameter 'secret_name' is not null or undefined
        if (secret_name === null || secret_name === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsUpdate", "secret_name");
        }


        // verify required parameter 'SecretBodyPatch' is not null or undefined
        if (SecretBodyPatch === null || SecretBodyPatch === undefined) {
            throw new RequiredError("SecretsApi", "projectsSecretsUpdate", "SecretBodyPatch");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/secrets/{secret_name}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)))
            .replace('{' + 'secret_name' + '}', encodeURIComponent(String(secret_name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(SecretBodyPatch, "SecretBodyPatch", ""),
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

export class SecretsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsSecretsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsSecretsCreate(response: ResponseContext): Promise<SecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: UnauthorisedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorisedResponse", ""
            ) as UnauthorisedResponse;
            throw new ApiException<UnauthorisedResponse>(response.httpStatusCode, "Unauthorised", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ConflictResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConflictResponse", ""
            ) as ConflictResponse;
            throw new ApiException<ConflictResponse>(response.httpStatusCode, "Resource Conflict", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsSecretsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsSecretsDelete(response: ResponseContext): Promise<DeletedResponse > {
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: UnauthorisedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorisedResponse", ""
            ) as UnauthorisedResponse;
            throw new ApiException<UnauthorisedResponse>(response.httpStatusCode, "Unauthorised", body, response.headers);
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
     * @params response Response returned by the server for a request to projectsSecretsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsSecretsGet(response: ResponseContext): Promise<SecretMetaResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecretMetaResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretMetaResponse", ""
            ) as SecretMetaResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: UnauthorisedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorisedResponse", ""
            ) as UnauthorisedResponse;
            throw new ApiException<UnauthorisedResponse>(response.httpStatusCode, "Unauthorised", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SecretMetaResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretMetaResponse", ""
            ) as SecretMetaResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsSecretsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsSecretsList(response: ResponseContext): Promise<ListSecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSecretResponse", ""
            ) as ListSecretResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundResponse", ""
            ) as NotFoundResponse;
            throw new ApiException<NotFoundResponse>(response.httpStatusCode, "Resource Not Found", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: UnauthorisedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorisedResponse", ""
            ) as UnauthorisedResponse;
            throw new ApiException<UnauthorisedResponse>(response.httpStatusCode, "Unauthorised", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListSecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSecretResponse", ""
            ) as ListSecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsSecretsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsSecretsUpdate(response: ResponseContext): Promise<SecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: UnauthorisedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorisedResponse", ""
            ) as UnauthorisedResponse;
            throw new ApiException<UnauthorisedResponse>(response.httpStatusCode, "Unauthorised", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

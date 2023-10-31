// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { Host } from '../models/Host.ts';
import { HostBody } from '../models/HostBody.ts';
import { HostBodyPatch } from '../models/HostBodyPatch.ts';
import { ListHosts } from '../models/ListHosts.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';

/**
 * no description
 */
export class HostsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param project_id Project ID reference
     * @param HostBody 
     */
    public async projectsHostsCreate(project_id: string, HostBody: HostBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsCreate", "project_id");
        }


        // verify required parameter 'HostBody' is not null or undefined
        if (HostBody === null || HostBody === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsCreate", "HostBody");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/hosts'
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
            ObjectSerializer.serialize(HostBody, "HostBody", ""),
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
     * Delete specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public async projectsHostsDelete(project_id: string, hostname: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsDelete", "project_id");
        }


        // verify required parameter 'hostname' is not null or undefined
        if (hostname === null || hostname === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsDelete", "hostname");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/hosts/{hostname}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)))
            .replace('{' + 'hostname' + '}', encodeURIComponent(String(hostname)));

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
     * Get specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public async projectsHostsGet(project_id: string, hostname: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsGet", "project_id");
        }


        // verify required parameter 'hostname' is not null or undefined
        if (hostname === null || hostname === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsGet", "hostname");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/hosts/{hostname}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)))
            .replace('{' + 'hostname' + '}', encodeURIComponent(String(hostname)));

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
     * List hosts for project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public async projectsHostsList(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsList", "project_id");
        }



        // Path Params
        const localVarPath = '/projects/{project_id}/hosts'
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

    /**
     * Update specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     * @param HostBodyPatch 
     */
    public async projectsHostsUpdate(project_id: string, hostname: string, HostBodyPatch: HostBodyPatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'project_id' is not null or undefined
        if (project_id === null || project_id === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsUpdate", "project_id");
        }


        // verify required parameter 'hostname' is not null or undefined
        if (hostname === null || hostname === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsUpdate", "hostname");
        }


        // verify required parameter 'HostBodyPatch' is not null or undefined
        if (HostBodyPatch === null || HostBodyPatch === undefined) {
            throw new RequiredError("HostsApi", "projectsHostsUpdate", "HostBodyPatch");
        }


        // Path Params
        const localVarPath = '/projects/{project_id}/hosts/{hostname}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(project_id)))
            .replace('{' + 'hostname' + '}', encodeURIComponent(String(hostname)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(HostBodyPatch, "HostBodyPatch", ""),
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

export class HostsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsHostsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsHostsCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Host >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Host = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Host", ""
            ) as Host;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ConflictResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConflictResponse", ""
            ) as ConflictResponse;
            throw new ApiException<ConflictResponse>(response.httpStatusCode, "Resource Conflict", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Host = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Host", ""
            ) as Host;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsHostsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsHostsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeletedResponse >> {
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
     * @params response Response returned by the server for a request to projectsHostsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsHostsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Host >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Host = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Host", ""
            ) as Host;
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
            const body: Host = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Host", ""
            ) as Host;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsHostsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsHostsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListHosts >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListHosts = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListHosts", ""
            ) as ListHosts;
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
            const body: ListHosts = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListHosts", ""
            ) as ListHosts;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to projectsHostsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async projectsHostsUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Host >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Host = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Host", ""
            ) as Host;
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
            const body: Host = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Host", ""
            ) as Host;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

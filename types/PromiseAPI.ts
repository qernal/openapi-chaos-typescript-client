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
import { Host } from '../models/Host.ts';
import { HostBody } from '../models/HostBody.ts';
import { HostBodyPatch } from '../models/HostBodyPatch.ts';
import { HostVerificationStatus } from '../models/HostVerificationStatus.ts';
import { ListAuthTokens } from '../models/ListAuthTokens.ts';
import { ListHosts } from '../models/ListHosts.ts';
import { ListOrganisationResponse } from '../models/ListOrganisationResponse.ts';
import { ListProjectResponse } from '../models/ListProjectResponse.ts';
import { ListSecretResponse } from '../models/ListSecretResponse.ts';
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
import { ObservableHostsApi } from './ObservableAPI.ts';

import { HostsApiRequestFactory, HostsApiResponseProcessor} from "../apis/HostsApi.ts";
export class PromiseHostsApi {
    private api: ObservableHostsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HostsApiRequestFactory,
        responseProcessor?: HostsApiResponseProcessor
    ) {
        this.api = new ObservableHostsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param project_id Project ID reference
     * @param HostBody 
     */
    public projectsHostsCreateWithHttpInfo(project_id: string, HostBody: HostBody, _options?: Configuration): Promise<HttpInfo<Host>> {
        const result = this.api.projectsHostsCreateWithHttpInfo(project_id, HostBody, _options);
        return result.toPromise();
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param project_id Project ID reference
     * @param HostBody 
     */
    public projectsHostsCreate(project_id: string, HostBody: HostBody, _options?: Configuration): Promise<Host> {
        const result = this.api.projectsHostsCreate(project_id, HostBody, _options);
        return result.toPromise();
    }

    /**
     * Delete specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsDeleteWithHttpInfo(project_id: string, hostname: string, _options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        const result = this.api.projectsHostsDeleteWithHttpInfo(project_id, hostname, _options);
        return result.toPromise();
    }

    /**
     * Delete specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsDelete(project_id: string, hostname: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.projectsHostsDelete(project_id, hostname, _options);
        return result.toPromise();
    }

    /**
     * Get specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsGetWithHttpInfo(project_id: string, hostname: string, _options?: Configuration): Promise<HttpInfo<Host>> {
        const result = this.api.projectsHostsGetWithHttpInfo(project_id, hostname, _options);
        return result.toPromise();
    }

    /**
     * Get specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsGet(project_id: string, hostname: string, _options?: Configuration): Promise<Host> {
        const result = this.api.projectsHostsGet(project_id, hostname, _options);
        return result.toPromise();
    }

    /**
     * List hosts for project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsHostsListWithHttpInfo(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<HttpInfo<ListHosts>> {
        const result = this.api.projectsHostsListWithHttpInfo(project_id, page, _options);
        return result.toPromise();
    }

    /**
     * List hosts for project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsHostsList(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<ListHosts> {
        const result = this.api.projectsHostsList(project_id, page, _options);
        return result.toPromise();
    }

    /**
     * Update specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     * @param HostBodyPatch 
     */
    public projectsHostsUpdateWithHttpInfo(project_id: string, hostname: string, HostBodyPatch: HostBodyPatch, _options?: Configuration): Promise<HttpInfo<Host>> {
        const result = this.api.projectsHostsUpdateWithHttpInfo(project_id, hostname, HostBodyPatch, _options);
        return result.toPromise();
    }

    /**
     * Update specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     * @param HostBodyPatch 
     */
    public projectsHostsUpdate(project_id: string, hostname: string, HostBodyPatch: HostBodyPatch, _options?: Configuration): Promise<Host> {
        const result = this.api.projectsHostsUpdate(project_id, hostname, HostBodyPatch, _options);
        return result.toPromise();
    }


}



import { ObservableOrganisationsApi } from './ObservableAPI.ts';

import { OrganisationsApiRequestFactory, OrganisationsApiResponseProcessor} from "../apis/OrganisationsApi.ts";
export class PromiseOrganisationsApi {
    private api: ObservableOrganisationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganisationsApiRequestFactory,
        responseProcessor?: OrganisationsApiResponseProcessor
    ) {
        this.api = new ObservableOrganisationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an organisation
     * Create organisations
     * @param OrganisationBody Create/Update any field
     */
    public organisationsCreateWithHttpInfo(OrganisationBody?: OrganisationBody, _options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        const result = this.api.organisationsCreateWithHttpInfo(OrganisationBody, _options);
        return result.toPromise();
    }

    /**
     * Create an organisation
     * Create organisations
     * @param OrganisationBody Create/Update any field
     */
    public organisationsCreate(OrganisationBody?: OrganisationBody, _options?: Configuration): Promise<OrganisationResponse> {
        const result = this.api.organisationsCreate(OrganisationBody, _options);
        return result.toPromise();
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsDeleteWithHttpInfo(organisation_id: string, _options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        const result = this.api.organisationsDeleteWithHttpInfo(organisation_id, _options);
        return result.toPromise();
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsDelete(organisation_id: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.organisationsDelete(organisation_id, _options);
        return result.toPromise();
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsGetWithHttpInfo(organisation_id: string, _options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        const result = this.api.organisationsGetWithHttpInfo(organisation_id, _options);
        return result.toPromise();
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsGet(organisation_id: string, _options?: Configuration): Promise<OrganisationResponse> {
        const result = this.api.organisationsGet(organisation_id, _options);
        return result.toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     */
    public organisationsListWithHttpInfo(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<HttpInfo<ListOrganisationResponse>> {
        const result = this.api.organisationsListWithHttpInfo(page, _options);
        return result.toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     */
    public organisationsList(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<ListOrganisationResponse> {
        const result = this.api.organisationsList(page, _options);
        return result.toPromise();
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisation_id Organisation ID reference
     * @param OrganisationBody Create/Update any field
     */
    public organisationsUpdateWithHttpInfo(organisation_id: string, OrganisationBody?: OrganisationBody, _options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        const result = this.api.organisationsUpdateWithHttpInfo(organisation_id, OrganisationBody, _options);
        return result.toPromise();
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisation_id Organisation ID reference
     * @param OrganisationBody Create/Update any field
     */
    public organisationsUpdate(organisation_id: string, OrganisationBody?: OrganisationBody, _options?: Configuration): Promise<OrganisationResponse> {
        const result = this.api.organisationsUpdate(organisation_id, OrganisationBody, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI.ts';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi.ts";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisation_id Organisation ID reference
     * @param page Query parameters for pagination
     */
    public organisationsProjectsListWithHttpInfo(organisation_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<HttpInfo<ListProjectResponse>> {
        const result = this.api.organisationsProjectsListWithHttpInfo(organisation_id, page, _options);
        return result.toPromise();
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisation_id Organisation ID reference
     * @param page Query parameters for pagination
     */
    public organisationsProjectsList(organisation_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Promise<ListProjectResponse> {
        const result = this.api.organisationsProjectsList(organisation_id, page, _options);
        return result.toPromise();
    }

    /**
     * Create a new project
     * Create project
     * @param ProjectBody Create/Update any field
     */
    public projectsCreateWithHttpInfo(ProjectBody?: ProjectBody, _options?: Configuration): Promise<HttpInfo<ProjectResponse>> {
        const result = this.api.projectsCreateWithHttpInfo(ProjectBody, _options);
        return result.toPromise();
    }

    /**
     * Create a new project
     * Create project
     * @param ProjectBody Create/Update any field
     */
    public projectsCreate(ProjectBody?: ProjectBody, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.projectsCreate(ProjectBody, _options);
        return result.toPromise();
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param project_id Project ID reference
     */
    public projectsDeleteWithHttpInfo(project_id: string, _options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        const result = this.api.projectsDeleteWithHttpInfo(project_id, _options);
        return result.toPromise();
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param project_id Project ID reference
     */
    public projectsDelete(project_id: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.projectsDelete(project_id, _options);
        return result.toPromise();
    }

    /**
     * Get a specific project
     * Get project
     * @param project_id Project ID reference
     */
    public projectsGetWithHttpInfo(project_id: string, _options?: Configuration): Promise<HttpInfo<ProjectResponse>> {
        const result = this.api.projectsGetWithHttpInfo(project_id, _options);
        return result.toPromise();
    }

    /**
     * Get a specific project
     * Get project
     * @param project_id Project ID reference
     */
    public projectsGet(project_id: string, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.projectsGet(project_id, _options);
        return result.toPromise();
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     */
    public projectsListWithHttpInfo(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<HttpInfo<ListProjectResponse>> {
        const result = this.api.projectsListWithHttpInfo(page, _options);
        return result.toPromise();
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     */
    public projectsList(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<ListProjectResponse> {
        const result = this.api.projectsList(page, _options);
        return result.toPromise();
    }

    /**
     * Update project
     * Update project
     * @param project_id Project ID reference
     * @param ProjectBodyPatch Update any field
     */
    public projectsUpdateWithHttpInfo(project_id: string, ProjectBodyPatch?: ProjectBodyPatch, _options?: Configuration): Promise<HttpInfo<ProjectResponse>> {
        const result = this.api.projectsUpdateWithHttpInfo(project_id, ProjectBodyPatch, _options);
        return result.toPromise();
    }

    /**
     * Update project
     * Update project
     * @param project_id Project ID reference
     * @param ProjectBodyPatch Update any field
     */
    public projectsUpdate(project_id: string, ProjectBodyPatch?: ProjectBodyPatch, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.projectsUpdate(project_id, ProjectBodyPatch, _options);
        return result.toPromise();
    }


}



import { ObservableSecretsApi } from './ObservableAPI.ts';

import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi.ts";
export class PromiseSecretsApi {
    private api: ObservableSecretsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsApiRequestFactory,
        responseProcessor?: SecretsApiResponseProcessor
    ) {
        this.api = new ObservableSecretsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param project_id Project ID reference
     * @param SecretBody Create/Update any field
     */
    public projectsSecretsCreateWithHttpInfo(project_id: string, SecretBody: SecretBody, _options?: Configuration): Promise<HttpInfo<SecretResponse>> {
        const result = this.api.projectsSecretsCreateWithHttpInfo(project_id, SecretBody, _options);
        return result.toPromise();
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param project_id Project ID reference
     * @param SecretBody Create/Update any field
     */
    public projectsSecretsCreate(project_id: string, SecretBody: SecretBody, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.projectsSecretsCreate(project_id, SecretBody, _options);
        return result.toPromise();
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsDeleteWithHttpInfo(project_id: string, secret_name: string, _options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        const result = this.api.projectsSecretsDeleteWithHttpInfo(project_id, secret_name, _options);
        return result.toPromise();
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsDelete(project_id: string, secret_name: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.projectsSecretsDelete(project_id, secret_name, _options);
        return result.toPromise();
    }

    /**
     * Get a specific project
     * Get project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsGetWithHttpInfo(project_id: string, secret_name: string, _options?: Configuration): Promise<HttpInfo<SecretMetaResponse>> {
        const result = this.api.projectsSecretsGetWithHttpInfo(project_id, secret_name, _options);
        return result.toPromise();
    }

    /**
     * Get a specific project
     * Get project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsGet(project_id: string, secret_name: string, _options?: Configuration): Promise<SecretMetaResponse> {
        const result = this.api.projectsSecretsGet(project_id, secret_name, _options);
        return result.toPromise();
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     * @param secret_type Type of secret to filter on
     */
    public projectsSecretsListWithHttpInfo(project_id: string, page?: OrganisationsListPageParameter, secret_type?: SecretMetaType, _options?: Configuration): Promise<HttpInfo<ListSecretResponse>> {
        const result = this.api.projectsSecretsListWithHttpInfo(project_id, page, secret_type, _options);
        return result.toPromise();
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     * @param secret_type Type of secret to filter on
     */
    public projectsSecretsList(project_id: string, page?: OrganisationsListPageParameter, secret_type?: SecretMetaType, _options?: Configuration): Promise<ListSecretResponse> {
        const result = this.api.projectsSecretsList(project_id, page, secret_type, _options);
        return result.toPromise();
    }

    /**
     * Update project
     * Update project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     * @param SecretBodyPatch Update any field
     */
    public projectsSecretsUpdateWithHttpInfo(project_id: string, secret_name: string, SecretBodyPatch: SecretBodyPatch, _options?: Configuration): Promise<HttpInfo<SecretResponse>> {
        const result = this.api.projectsSecretsUpdateWithHttpInfo(project_id, secret_name, SecretBodyPatch, _options);
        return result.toPromise();
    }

    /**
     * Update project
     * Update project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     * @param SecretBodyPatch Update any field
     */
    public projectsSecretsUpdate(project_id: string, secret_name: string, SecretBodyPatch: SecretBodyPatch, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.projectsSecretsUpdate(project_id, secret_name, SecretBodyPatch, _options);
        return result.toPromise();
    }


}



import { ObservableTokensApi } from './ObservableAPI.ts';

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi.ts";
export class PromiseTokensApi {
    private api: ObservableTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param AuthTokenBody 
     */
    public authTokensCreateWithHttpInfo(AuthTokenBody: AuthTokenBody, _options?: Configuration): Promise<HttpInfo<AuthToken>> {
        const result = this.api.authTokensCreateWithHttpInfo(AuthTokenBody, _options);
        return result.toPromise();
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param AuthTokenBody 
     */
    public authTokensCreate(AuthTokenBody: AuthTokenBody, _options?: Configuration): Promise<AuthToken> {
        const result = this.api.authTokensCreate(AuthTokenBody, _options);
        return result.toPromise();
    }

    /**
     * Delete token
     * @param token_id Token ID reference
     */
    public authTokensDeleteWithHttpInfo(token_id: string, _options?: Configuration): Promise<HttpInfo<DeletedResponse>> {
        const result = this.api.authTokensDeleteWithHttpInfo(token_id, _options);
        return result.toPromise();
    }

    /**
     * Delete token
     * @param token_id Token ID reference
     */
    public authTokensDelete(token_id: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.authTokensDelete(token_id, _options);
        return result.toPromise();
    }

    /**
     * Get token information
     * @param token_id Token ID reference
     */
    public authTokensGetWithHttpInfo(token_id: string, _options?: Configuration): Promise<HttpInfo<AuthTokenMeta>> {
        const result = this.api.authTokensGetWithHttpInfo(token_id, _options);
        return result.toPromise();
    }

    /**
     * Get token information
     * @param token_id Token ID reference
     */
    public authTokensGet(token_id: string, _options?: Configuration): Promise<AuthTokenMeta> {
        const result = this.api.authTokensGet(token_id, _options);
        return result.toPromise();
    }

    /**
     * List all user auth tokens
     * @param page Query parameters for pagination
     */
    public authTokensListWithHttpInfo(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<HttpInfo<ListAuthTokens>> {
        const result = this.api.authTokensListWithHttpInfo(page, _options);
        return result.toPromise();
    }

    /**
     * List all user auth tokens
     * @param page Query parameters for pagination
     */
    public authTokensList(page?: OrganisationsListPageParameter, _options?: Configuration): Promise<ListAuthTokens> {
        const result = this.api.authTokensList(page, _options);
        return result.toPromise();
    }

    /**
     * Update token
     * @param token_id Token ID reference
     * @param AuthTokenPatch 
     */
    public authTokensUpdateWithHttpInfo(token_id: string, AuthTokenPatch: AuthTokenPatch, _options?: Configuration): Promise<HttpInfo<AuthToken>> {
        const result = this.api.authTokensUpdateWithHttpInfo(token_id, AuthTokenPatch, _options);
        return result.toPromise();
    }

    /**
     * Update token
     * @param token_id Token ID reference
     * @param AuthTokenPatch 
     */
    public authTokensUpdate(token_id: string, AuthTokenPatch: AuthTokenPatch, _options?: Configuration): Promise<AuthToken> {
        const result = this.api.authTokensUpdate(token_id, AuthTokenPatch, _options);
        return result.toPromise();
    }


}




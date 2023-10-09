import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AuthToken } from '../models/AuthToken.ts';
import { AuthTokenBody } from '../models/AuthTokenBody.ts';
import { AuthTokenMeta } from '../models/AuthTokenMeta.ts';
import { AuthTokenPatch } from '../models/AuthTokenPatch.ts';
import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { BadRequestResponseFields } from '../models/BadRequestResponseFields.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { ListAuthTokens } from '../models/ListAuthTokens.ts';
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
    public organisationsCreate(param: OrganisationsApiOrganisationsCreateRequest = {}, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationsCreate(param.OrganisationBody,  options).toPromise();
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
    public organisationsGet(param: OrganisationsApiOrganisationsGetRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationsGet(param.organisation_id,  options).toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param param the request object
     */
    public organisationsList(param: OrganisationsApiOrganisationsListRequest = {}, options?: Configuration): Promise<ListOrganisationResponse> {
        return this.api.organisationsList(param.page,  options).toPromise();
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
    public organisationsProjectsList(param: ProjectsApiOrganisationsProjectsListRequest, options?: Configuration): Promise<ListProjectResponse> {
        return this.api.organisationsProjectsList(param.organisation_id, param.page,  options).toPromise();
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
    public projectsDelete(param: ProjectsApiProjectsDeleteRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.projectsDelete(param.project_id,  options).toPromise();
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
    public projectsList(param: ProjectsApiProjectsListRequest = {}, options?: Configuration): Promise<ListProjectResponse> {
        return this.api.projectsList(param.page,  options).toPromise();
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
     * Create/Update any field
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
    public projectsSecretsCreate(param: SecretsApiProjectsSecretsCreateRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.projectsSecretsCreate(param.project_id, param.SecretBody,  options).toPromise();
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
    public projectsSecretsGet(param: SecretsApiProjectsSecretsGetRequest, options?: Configuration): Promise<SecretMetaResponse> {
        return this.api.projectsSecretsGet(param.project_id, param.secret_name,  options).toPromise();
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
    public authTokensCreate(param: TokensApiAuthTokensCreateRequest, options?: Configuration): Promise<AuthToken> {
        return this.api.authTokensCreate(param.AuthTokenBody,  options).toPromise();
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
    public authTokensGet(param: TokensApiAuthTokensGetRequest, options?: Configuration): Promise<AuthTokenMeta> {
        return this.api.authTokensGet(param.token_id,  options).toPromise();
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
    public authTokensUpdate(param: TokensApiAuthTokensUpdateRequest, options?: Configuration): Promise<AuthToken> {
        return this.api.authTokensUpdate(param.token_id, param.AuthTokenPatch,  options).toPromise();
    }

}

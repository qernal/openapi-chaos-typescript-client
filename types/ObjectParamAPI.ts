import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { BadRequestResponseFields } from '../models/BadRequestResponseFields.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { ListOrganisationResponse } from '../models/ListOrganisationResponse.ts';
import { ListProjectResponse } from '../models/ListProjectResponse.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationBody } from '../models/OrganisationBody.ts';
import { OrganisationResponse } from '../models/OrganisationResponse.ts';
import { OrganisationsListPageParameter } from '../models/OrganisationsListPageParameter.ts';
import { PaginationLinks } from '../models/PaginationLinks.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { ProjectBody } from '../models/ProjectBody.ts';
import { ProjectBodyPatch } from '../models/ProjectBodyPatch.ts';
import { ProjectResponse } from '../models/ProjectResponse.ts';
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

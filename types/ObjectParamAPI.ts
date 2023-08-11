import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { BadRequestResponseFields } from '../models/BadRequestResponseFields.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { GetOrganisationsPageParameter } from '../models/GetOrganisationsPageParameter.ts';
import { ListOrganisationResponse } from '../models/ListOrganisationResponse.ts';
import { ListProjectResponse } from '../models/ListProjectResponse.ts';
import { NotFoundResponse } from '../models/NotFoundResponse.ts';
import { OrganisationBody } from '../models/OrganisationBody.ts';
import { OrganisationResponse } from '../models/OrganisationResponse.ts';
import { PaginationLinks } from '../models/PaginationLinks.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { ProjectBody } from '../models/ProjectBody.ts';
import { ProjectResponse } from '../models/ProjectResponse.ts';
import { UnauthorisedResponse } from '../models/UnauthorisedResponse.ts';

import { ObservableOrganisationsApi } from "./ObservableAPI.ts";
import { OrganisationsApiRequestFactory, OrganisationsApiResponseProcessor} from "../apis/OrganisationsApi.ts";

export interface OrganisationsApiDeleteOrganisationsOrgIdRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof OrganisationsApideleteOrganisationsOrgId
     */
    organisationId: string
}

export interface OrganisationsApiGetOrganisationsRequest {
    /**
     * Query parameters for pagination
     * @type GetOrganisationsPageParameter
     * @memberof OrganisationsApigetOrganisations
     */
    page?: GetOrganisationsPageParameter
}

export interface OrganisationsApiGetOrganisationsOrgIdRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof OrganisationsApigetOrganisationsOrgId
     */
    organisationId: string
}

export interface OrganisationsApiPostOrganisationsRequest {
    /**
     * Create/Update any field
     * @type OrganisationBody
     * @memberof OrganisationsApipostOrganisations
     */
    organisationBody?: OrganisationBody
}

export interface OrganisationsApiPutOrganisationsOrgIdRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof OrganisationsApiputOrganisationsOrgId
     */
    organisationId: string
    /**
     * Create/Update any field
     * @type OrganisationBody
     * @memberof OrganisationsApiputOrganisationsOrgId
     */
    organisationBody?: OrganisationBody
}

export class ObjectOrganisationsApi {
    private api: ObservableOrganisationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganisationsApiRequestFactory, responseProcessor?: OrganisationsApiResponseProcessor) {
        this.api = new ObservableOrganisationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param param the request object
     */
    public deleteOrganisationsOrgId(param: OrganisationsApiDeleteOrganisationsOrgIdRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.deleteOrganisationsOrgId(param.organisationId,  options).toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param param the request object
     */
    public getOrganisations(param: OrganisationsApiGetOrganisationsRequest = {}, options?: Configuration): Promise<ListOrganisationResponse> {
        return this.api.getOrganisations(param.page,  options).toPromise();
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param param the request object
     */
    public getOrganisationsOrgId(param: OrganisationsApiGetOrganisationsOrgIdRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.getOrganisationsOrgId(param.organisationId,  options).toPromise();
    }

    /**
     * Create an organisation
     * Create organisations
     * @param param the request object
     */
    public postOrganisations(param: OrganisationsApiPostOrganisationsRequest = {}, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.postOrganisations(param.organisationBody,  options).toPromise();
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param param the request object
     */
    public putOrganisationsOrgId(param: OrganisationsApiPutOrganisationsOrgIdRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.putOrganisationsOrgId(param.organisationId, param.organisationBody,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI.ts";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi.ts";

export interface ProjectsApiDeleteProjectsProjectIdRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof ProjectsApideleteProjectsProjectId
     */
    projectId: string
}

export interface ProjectsApiGetOrganisationsOrgIdProjectsRequest {
    /**
     * Organisation ID reference
     * @type string
     * @memberof ProjectsApigetOrganisationsOrgIdProjects
     */
    organisationId: string
    /**
     * Query parameters for pagination
     * @type GetOrganisationsPageParameter
     * @memberof ProjectsApigetOrganisationsOrgIdProjects
     */
    page?: GetOrganisationsPageParameter
}

export interface ProjectsApiGetProjectsRequest {
    /**
     * Query parameters for pagination
     * @type GetOrganisationsPageParameter
     * @memberof ProjectsApigetProjects
     */
    page?: GetOrganisationsPageParameter
}

export interface ProjectsApiGetProjectsProjectIdRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof ProjectsApigetProjectsProjectId
     */
    projectId: string
}

export interface ProjectsApiPostProjectsRequest {
    /**
     * Create/Update any field
     * @type ProjectBody
     * @memberof ProjectsApipostProjects
     */
    projectBody?: ProjectBody
}

export interface ProjectsApiPutProjectsProjectIdRequest {
    /**
     * Project ID reference
     * @type string
     * @memberof ProjectsApiputProjectsProjectId
     */
    projectId: string
    /**
     * Create/Update any field
     * @type ProjectBody
     * @memberof ProjectsApiputProjectsProjectId
     */
    projectBody?: ProjectBody
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param param the request object
     */
    public deleteProjectsProjectId(param: ProjectsApiDeleteProjectsProjectIdRequest, options?: Configuration): Promise<DeletedResponse> {
        return this.api.deleteProjectsProjectId(param.projectId,  options).toPromise();
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param param the request object
     */
    public getOrganisationsOrgIdProjects(param: ProjectsApiGetOrganisationsOrgIdProjectsRequest, options?: Configuration): Promise<ListProjectResponse> {
        return this.api.getOrganisationsOrgIdProjects(param.organisationId, param.page,  options).toPromise();
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param param the request object
     */
    public getProjects(param: ProjectsApiGetProjectsRequest = {}, options?: Configuration): Promise<ListProjectResponse> {
        return this.api.getProjects(param.page,  options).toPromise();
    }

    /**
     * Get a specific project
     * Get project
     * @param param the request object
     */
    public getProjectsProjectId(param: ProjectsApiGetProjectsProjectIdRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.getProjectsProjectId(param.projectId,  options).toPromise();
    }

    /**
     * Create a new project
     * Create project
     * @param param the request object
     */
    public postProjects(param: ProjectsApiPostProjectsRequest = {}, options?: Configuration): Promise<ProjectResponse> {
        return this.api.postProjects(param.projectBody,  options).toPromise();
    }

    /**
     * Update project
     * Update project
     * @param param the request object
     */
    public putProjectsProjectId(param: ProjectsApiPutProjectsProjectIdRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.putProjectsProjectId(param.projectId, param.projectBody,  options).toPromise();
    }

}
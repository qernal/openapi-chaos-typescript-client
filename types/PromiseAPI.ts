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
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisationId Organisation ID reference
     */
    public deleteOrganisationsOrgId(organisationId: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.deleteOrganisationsOrgId(organisationId, _options);
        return result.toPromise();
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     */
    public getOrganisations(page?: GetOrganisationsPageParameter, _options?: Configuration): Promise<ListOrganisationResponse> {
        const result = this.api.getOrganisations(page, _options);
        return result.toPromise();
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisationId Organisation ID reference
     */
    public getOrganisationsOrgId(organisationId: string, _options?: Configuration): Promise<OrganisationResponse> {
        const result = this.api.getOrganisationsOrgId(organisationId, _options);
        return result.toPromise();
    }

    /**
     * Create an organisation
     * Create organisations
     * @param organisationBody Create/Update any field
     */
    public postOrganisations(organisationBody?: OrganisationBody, _options?: Configuration): Promise<OrganisationResponse> {
        const result = this.api.postOrganisations(organisationBody, _options);
        return result.toPromise();
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisationId Organisation ID reference
     * @param organisationBody Create/Update any field
     */
    public putOrganisationsOrgId(organisationId: string, organisationBody?: OrganisationBody, _options?: Configuration): Promise<OrganisationResponse> {
        const result = this.api.putOrganisationsOrgId(organisationId, organisationBody, _options);
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
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param projectId Project ID reference
     */
    public deleteProjectsProjectId(projectId: string, _options?: Configuration): Promise<DeletedResponse> {
        const result = this.api.deleteProjectsProjectId(projectId, _options);
        return result.toPromise();
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisationId Organisation ID reference
     * @param page Query parameters for pagination
     */
    public getOrganisationsOrgIdProjects(organisationId: string, page?: GetOrganisationsPageParameter, _options?: Configuration): Promise<ListProjectResponse> {
        const result = this.api.getOrganisationsOrgIdProjects(organisationId, page, _options);
        return result.toPromise();
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     */
    public getProjects(page?: GetOrganisationsPageParameter, _options?: Configuration): Promise<ListProjectResponse> {
        const result = this.api.getProjects(page, _options);
        return result.toPromise();
    }

    /**
     * Get a specific project
     * Get project
     * @param projectId Project ID reference
     */
    public getProjectsProjectId(projectId: string, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.getProjectsProjectId(projectId, _options);
        return result.toPromise();
    }

    /**
     * Create a new project
     * Create project
     * @param projectBody Create/Update any field
     */
    public postProjects(projectBody?: ProjectBody, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.postProjects(projectBody, _options);
        return result.toPromise();
    }

    /**
     * Update project
     * Update project
     * @param projectId Project ID reference
     * @param projectBody Create/Update any field
     */
    public putProjectsProjectId(projectId: string, projectBody?: ProjectBody, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.putProjectsProjectId(projectId, projectBody, _options);
        return result.toPromise();
    }


}




import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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

import { OrganisationsApiRequestFactory, OrganisationsApiResponseProcessor} from "../apis/OrganisationsApi.ts";
export class ObservableOrganisationsApi {
    private requestFactory: OrganisationsApiRequestFactory;
    private responseProcessor: OrganisationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganisationsApiRequestFactory,
        responseProcessor?: OrganisationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganisationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganisationsApiResponseProcessor();
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisationId Organisation ID reference
     */
    public deleteOrganisationsOrgId(organisationId: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.deleteOrganisationsOrgId(organisationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganisationsOrgId(rsp)));
            }));
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     */
    public getOrganisations(page?: GetOrganisationsPageParameter, _options?: Configuration): Observable<ListOrganisationResponse> {
        const requestContextPromise = this.requestFactory.getOrganisations(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganisations(rsp)));
            }));
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisationId Organisation ID reference
     */
    public getOrganisationsOrgId(organisationId: string, _options?: Configuration): Observable<OrganisationResponse> {
        const requestContextPromise = this.requestFactory.getOrganisationsOrgId(organisationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganisationsOrgId(rsp)));
            }));
    }

    /**
     * Create an organisation
     * Create organisations
     * @param organisationBody Create/Update any field
     */
    public postOrganisations(organisationBody?: OrganisationBody, _options?: Configuration): Observable<OrganisationResponse> {
        const requestContextPromise = this.requestFactory.postOrganisations(organisationBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postOrganisations(rsp)));
            }));
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisationId Organisation ID reference
     * @param organisationBody Create/Update any field
     */
    public putOrganisationsOrgId(organisationId: string, organisationBody?: OrganisationBody, _options?: Configuration): Observable<OrganisationResponse> {
        const requestContextPromise = this.requestFactory.putOrganisationsOrgId(organisationId, organisationBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putOrganisationsOrgId(rsp)));
            }));
    }

}

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi.ts";
export class ObservableProjectsApi {
    private requestFactory: ProjectsApiRequestFactory;
    private responseProcessor: ProjectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectsApiResponseProcessor();
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param projectId Project ID reference
     */
    public deleteProjectsProjectId(projectId: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.deleteProjectsProjectId(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectsProjectId(rsp)));
            }));
    }

    /**
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisationId Organisation ID reference
     * @param page Query parameters for pagination
     */
    public getOrganisationsOrgIdProjects(organisationId: string, page?: GetOrganisationsPageParameter, _options?: Configuration): Observable<ListProjectResponse> {
        const requestContextPromise = this.requestFactory.getOrganisationsOrgIdProjects(organisationId, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganisationsOrgIdProjects(rsp)));
            }));
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     */
    public getProjects(page?: GetOrganisationsPageParameter, _options?: Configuration): Observable<ListProjectResponse> {
        const requestContextPromise = this.requestFactory.getProjects(page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjects(rsp)));
            }));
    }

    /**
     * Get a specific project
     * Get project
     * @param projectId Project ID reference
     */
    public getProjectsProjectId(projectId: string, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.getProjectsProjectId(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectsProjectId(rsp)));
            }));
    }

    /**
     * Create a new project
     * Create project
     * @param projectBody Create/Update any field
     */
    public postProjects(projectBody?: ProjectBody, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.postProjects(projectBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postProjects(rsp)));
            }));
    }

    /**
     * Update project
     * Update project
     * @param projectId Project ID reference
     * @param projectBody Create/Update any field
     */
    public putProjectsProjectId(projectId: string, projectBody?: ProjectBody, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.putProjectsProjectId(projectId, projectBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putProjectsProjectId(rsp)));
            }));
    }

}

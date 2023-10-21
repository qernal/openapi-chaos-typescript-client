import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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

import { HostsApiRequestFactory, HostsApiResponseProcessor} from "../apis/HostsApi.ts";
export class ObservableHostsApi {
    private requestFactory: HostsApiRequestFactory;
    private responseProcessor: HostsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HostsApiRequestFactory,
        responseProcessor?: HostsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HostsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HostsApiResponseProcessor();
    }

    /**
     * Assign a host/domain to a project - hosts are globally unique and require verification, so a host cannot be assigned to multiple projects.  A host can be a valid domain, either a root domain or a subdomain. 
     * Create host for project
     * @param project_id Project ID reference
     * @param HostBody 
     */
    public projectsHostsCreate(project_id: string, HostBody: HostBody, _options?: Configuration): Observable<Host> {
        const requestContextPromise = this.requestFactory.projectsHostsCreate(project_id, HostBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsCreate(rsp)));
            }));
    }

    /**
     * Delete specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsDelete(project_id: string, hostname: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.projectsHostsDelete(project_id, hostname, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsDelete(rsp)));
            }));
    }

    /**
     * Get specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     */
    public projectsHostsGet(project_id: string, hostname: string, _options?: Configuration): Observable<Host> {
        const requestContextPromise = this.requestFactory.projectsHostsGet(project_id, hostname, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsGet(rsp)));
            }));
    }

    /**
     * List hosts for project
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     */
    public projectsHostsList(project_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListHosts> {
        const requestContextPromise = this.requestFactory.projectsHostsList(project_id, page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsList(rsp)));
            }));
    }

    /**
     * Update specific host by hostname
     * @param project_id Project ID reference
     * @param hostname Hostname
     * @param HostBodyPatch 
     */
    public projectsHostsUpdate(project_id: string, hostname: string, HostBodyPatch: HostBodyPatch, _options?: Configuration): Observable<Host> {
        const requestContextPromise = this.requestFactory.projectsHostsUpdate(project_id, hostname, HostBodyPatch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsHostsUpdate(rsp)));
            }));
    }

}

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
     * Create an organisation
     * Create organisations
     * @param OrganisationBody Create/Update any field
     */
    public organisationsCreate(OrganisationBody?: OrganisationBody, _options?: Configuration): Observable<OrganisationResponse> {
        const requestContextPromise = this.requestFactory.organisationsCreate(OrganisationBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsCreate(rsp)));
            }));
    }

    /**
     * Delete organisation, this will also delete all the resources within the organisation
     * Delete an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsDelete(organisation_id: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.organisationsDelete(organisation_id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsDelete(rsp)));
            }));
    }

    /**
     * Get a single organisation
     * Get an organisation
     * @param organisation_id Organisation ID reference
     */
    public organisationsGet(organisation_id: string, _options?: Configuration): Observable<OrganisationResponse> {
        const requestContextPromise = this.requestFactory.organisationsGet(organisation_id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsGet(rsp)));
            }));
    }

    /**
     * List organisations
     * List organisations
     * @param page Query parameters for pagination
     */
    public organisationsList(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListOrganisationResponse> {
        const requestContextPromise = this.requestFactory.organisationsList(page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsList(rsp)));
            }));
    }

    /**
     * Update an organisation
     * Update an organisation
     * @param organisation_id Organisation ID reference
     * @param OrganisationBody Create/Update any field
     */
    public organisationsUpdate(organisation_id: string, OrganisationBody?: OrganisationBody, _options?: Configuration): Observable<OrganisationResponse> {
        const requestContextPromise = this.requestFactory.organisationsUpdate(organisation_id, OrganisationBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsUpdate(rsp)));
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
     * Get all the projects linked to a specific organisation
     * Get all projects within an organisation
     * @param organisation_id Organisation ID reference
     * @param page Query parameters for pagination
     */
    public organisationsProjectsList(organisation_id: string, page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListProjectResponse> {
        const requestContextPromise = this.requestFactory.organisationsProjectsList(organisation_id, page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organisationsProjectsList(rsp)));
            }));
    }

    /**
     * Create a new project
     * Create project
     * @param ProjectBody Create/Update any field
     */
    public projectsCreate(ProjectBody?: ProjectBody, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.projectsCreate(ProjectBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsCreate(rsp)));
            }));
    }

    /**
     * Delete project, this will also delete all the resources within the project
     * Delete project
     * @param project_id Project ID reference
     */
    public projectsDelete(project_id: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.projectsDelete(project_id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsDelete(rsp)));
            }));
    }

    /**
     * Get a specific project
     * Get project
     * @param project_id Project ID reference
     */
    public projectsGet(project_id: string, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.projectsGet(project_id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsGet(rsp)));
            }));
    }

    /**
     * Get all projects for this user, paginated
     * List projects
     * @param page Query parameters for pagination
     */
    public projectsList(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListProjectResponse> {
        const requestContextPromise = this.requestFactory.projectsList(page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsList(rsp)));
            }));
    }

    /**
     * Update project
     * Update project
     * @param project_id Project ID reference
     * @param ProjectBodyPatch Update any field
     */
    public projectsUpdate(project_id: string, ProjectBodyPatch?: ProjectBodyPatch, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.projectsUpdate(project_id, ProjectBodyPatch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsUpdate(rsp)));
            }));
    }

}

import { SecretsApiRequestFactory, SecretsApiResponseProcessor} from "../apis/SecretsApi.ts";
export class ObservableSecretsApi {
    private requestFactory: SecretsApiRequestFactory;
    private responseProcessor: SecretsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecretsApiRequestFactory,
        responseProcessor?: SecretsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecretsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecretsApiResponseProcessor();
    }

    /**
     * Create a new project secret
     * Create project secret
     * @param project_id Project ID reference
     * @param SecretBody Create/Update any field
     */
    public projectsSecretsCreate(project_id: string, SecretBody: SecretBody, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.projectsSecretsCreate(project_id, SecretBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsCreate(rsp)));
            }));
    }

    /**
     * Delete project secret, if the secret is still linked to an active/deployed function - it cannot be removed
     * Delete project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsDelete(project_id: string, secret_name: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.projectsSecretsDelete(project_id, secret_name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsDelete(rsp)));
            }));
    }

    /**
     * Get a specific project
     * Get project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     */
    public projectsSecretsGet(project_id: string, secret_name: string, _options?: Configuration): Observable<SecretMetaResponse> {
        const requestContextPromise = this.requestFactory.projectsSecretsGet(project_id, secret_name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsGet(rsp)));
            }));
    }

    /**
     * List project secrets of a specific type
     * List project secrets of a specific type
     * @param project_id Project ID reference
     * @param page Query parameters for pagination
     * @param secret_type Type of secret to filter on
     */
    public projectsSecretsList(project_id: string, page?: OrganisationsListPageParameter, secret_type?: SecretMetaType, _options?: Configuration): Observable<ListSecretResponse> {
        const requestContextPromise = this.requestFactory.projectsSecretsList(project_id, page, secret_type, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsList(rsp)));
            }));
    }

    /**
     * Update project
     * Update project secret
     * @param project_id Project ID reference
     * @param secret_name Unique secret name
     * @param SecretBodyPatch Update any field
     */
    public projectsSecretsUpdate(project_id: string, secret_name: string, SecretBodyPatch: SecretBodyPatch, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.projectsSecretsUpdate(project_id, secret_name, SecretBodyPatch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.projectsSecretsUpdate(rsp)));
            }));
    }

}

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi.ts";
export class ObservableTokensApi {
    private requestFactory: TokensApiRequestFactory;
    private responseProcessor: TokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokensApiResponseProcessor();
    }

    /**
     * Create new auth token for use with the CLI and TF Provider  ### Warning The `token` field is only shown once and can\'t be retrieved again without generating a new token. Securely save this once the response has been received. 
     * Create new auth token
     * @param AuthTokenBody 
     */
    public authTokensCreate(AuthTokenBody: AuthTokenBody, _options?: Configuration): Observable<AuthToken> {
        const requestContextPromise = this.requestFactory.authTokensCreate(AuthTokenBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensCreate(rsp)));
            }));
    }

    /**
     * Delete token
     * @param token_id Token ID reference
     */
    public authTokensDelete(token_id: string, _options?: Configuration): Observable<DeletedResponse> {
        const requestContextPromise = this.requestFactory.authTokensDelete(token_id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensDelete(rsp)));
            }));
    }

    /**
     * Get token information
     * @param token_id Token ID reference
     */
    public authTokensGet(token_id: string, _options?: Configuration): Observable<AuthTokenMeta> {
        const requestContextPromise = this.requestFactory.authTokensGet(token_id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensGet(rsp)));
            }));
    }

    /**
     * List all user auth tokens
     * @param page Query parameters for pagination
     */
    public authTokensList(page?: OrganisationsListPageParameter, _options?: Configuration): Observable<ListAuthTokens> {
        const requestContextPromise = this.requestFactory.authTokensList(page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensList(rsp)));
            }));
    }

    /**
     * Update token
     * @param token_id Token ID reference
     * @param AuthTokenPatch 
     */
    public authTokensUpdate(token_id: string, AuthTokenPatch: AuthTokenPatch, _options?: Configuration): Observable<AuthToken> {
        const requestContextPromise = this.requestFactory.authTokensUpdate(token_id, AuthTokenPatch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokensUpdate(rsp)));
            }));
    }

}

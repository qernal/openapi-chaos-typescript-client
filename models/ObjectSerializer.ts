export * from '../models/AuthToken.ts';
export * from '../models/AuthTokenBody.ts';
export * from '../models/AuthTokenMeta.ts';
export * from '../models/AuthTokenPatch.ts';
export * from '../models/BadRequestResponse.ts';
export * from '../models/BadRequestResponseFields.ts';
export * from '../models/ConflictResponse.ts';
export * from '../models/DeletedResponse.ts';
export * from '../models/Function.ts';
export * from '../models/FunctionBody.ts';
export * from '../models/FunctionCompliance.ts';
export * from '../models/FunctionDeployment.ts';
export * from '../models/FunctionDeploymentBody.ts';
export * from '../models/FunctionEnv.ts';
export * from '../models/FunctionReplicas.ts';
export * from '../models/FunctionReplicasAffinity.ts';
export * from '../models/FunctionRoute.ts';
export * from '../models/FunctionScaling.ts';
export * from '../models/FunctionSize.ts';
export * from '../models/FunctionType.ts';
export * from '../models/Host.ts';
export * from '../models/HostBody.ts';
export * from '../models/HostBodyPatch.ts';
export * from '../models/HostVerificationStatus.ts';
export * from '../models/ListAuthTokens.ts';
export * from '../models/ListFunction.ts';
export * from '../models/ListHosts.ts';
export * from '../models/ListLogResponse.ts';
export * from '../models/ListOrganisationResponse.ts';
export * from '../models/ListProjectResponse.ts';
export * from '../models/ListProviderResponse.ts';
export * from '../models/ListSecretResponse.ts';
export * from '../models/Location.ts';
export * from '../models/Log.ts';
export * from '../models/LogLog.ts';
export * from '../models/LogsListFTimestampsParameter.ts';
export * from '../models/MetricHttpAggregation.ts';
export * from '../models/MetricHttpAggregationHttpCodes.ts';
export * from '../models/MetricHttpAggregationHttpCodesBucketsInner.ts';
export * from '../models/MetricHttpAggregationHttpCodesBucketsInnerHistogram.ts';
export * from '../models/MetricResourceAggregation.ts';
export * from '../models/MetricResourceAggregationResources.ts';
export * from '../models/MetricResourceAggregationResourcesBucketsInner.ts';
export * from '../models/MetricResourceAggregationResourcesBucketsInnerHistogram.ts';
export * from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner.ts';
export * from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter.ts';
export * from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge.ts';
export * from '../models/MetricsAggregationsList200Response.ts';
export * from '../models/ModelDate.ts';
export * from '../models/NotFoundResponse.ts';
export * from '../models/OrganisationBody.ts';
export * from '../models/OrganisationResponse.ts';
export * from '../models/OrganisationsListPageParameter.ts';
export * from '../models/PaginationLinks.ts';
export * from '../models/PaginationMeta.ts';
export * from '../models/ProjectBody.ts';
export * from '../models/ProjectBodyPatch.ts';
export * from '../models/ProjectResponse.ts';
export * from '../models/Provider.ts';
export * from '../models/ProviderLocations.ts';
export * from '../models/Quota.ts';
export * from '../models/SecretBody.ts';
export * from '../models/SecretBodyPatch.ts';
export * from '../models/SecretCertificate.ts';
export * from '../models/SecretCreatePayload.ts';
export * from '../models/SecretCreateType.ts';
export * from '../models/SecretEnvironment.ts';
export * from '../models/SecretMetaResponse.ts';
export * from '../models/SecretMetaResponseCertificatePayload.ts';
export * from '../models/SecretMetaResponseDek.ts';
export * from '../models/SecretMetaResponsePayload.ts';
export * from '../models/SecretMetaResponseRegistryPayload.ts';
export * from '../models/SecretMetaType.ts';
export * from '../models/SecretRegistry.ts';
export * from '../models/SecretResponse.ts';
export * from '../models/SecretResponsePayload.ts';
export * from '../models/UnauthorisedResponse.ts';

import { AuthToken } from '../models/AuthToken.ts';
import { AuthTokenBody } from '../models/AuthTokenBody.ts';
import { AuthTokenMeta } from '../models/AuthTokenMeta.ts';
import { AuthTokenPatch } from '../models/AuthTokenPatch.ts';
import { BadRequestResponse } from '../models/BadRequestResponse.ts';
import { BadRequestResponseFields } from '../models/BadRequestResponseFields.ts';
import { ConflictResponse } from '../models/ConflictResponse.ts';
import { DeletedResponse } from '../models/DeletedResponse.ts';
import { Function  , FunctionVersionEnum               } from '../models/Function.ts';
import { FunctionBody , FunctionBodyVersionEnum              } from '../models/FunctionBody.ts';
import { FunctionCompliance } from '../models/FunctionCompliance.ts';
import { FunctionDeployment } from '../models/FunctionDeployment.ts';
import { FunctionDeploymentBody } from '../models/FunctionDeploymentBody.ts';
import { FunctionEnv } from '../models/FunctionEnv.ts';
import { FunctionReplicas } from '../models/FunctionReplicas.ts';
import { FunctionReplicasAffinity } from '../models/FunctionReplicasAffinity.ts';
import { FunctionRoute } from '../models/FunctionRoute.ts';
import { FunctionScaling, FunctionScalingTypeEnum     } from '../models/FunctionScaling.ts';
import { FunctionSize } from '../models/FunctionSize.ts';
import { FunctionType } from '../models/FunctionType.ts';
import { Host           } from '../models/Host.ts';
import { HostBody } from '../models/HostBody.ts';
import { HostBodyPatch } from '../models/HostBodyPatch.ts';
import { HostVerificationStatus } from '../models/HostVerificationStatus.ts';
import { ListAuthTokens } from '../models/ListAuthTokens.ts';
import { ListFunction } from '../models/ListFunction.ts';
import { ListHosts } from '../models/ListHosts.ts';
import { ListLogResponse } from '../models/ListLogResponse.ts';
import { ListOrganisationResponse } from '../models/ListOrganisationResponse.ts';
import { ListProjectResponse } from '../models/ListProjectResponse.ts';
import { ListProviderResponse } from '../models/ListProviderResponse.ts';
import { ListSecretResponse } from '../models/ListSecretResponse.ts';
import { Location } from '../models/Location.ts';
import { Log } from '../models/Log.ts';
import { LogLog, LogLogStreamEnum  , LogLogKindEnum   , LogLogTypeEnum     } from '../models/LogLog.ts';
import { LogsListFTimestampsParameter } from '../models/LogsListFTimestampsParameter.ts';
import { MetricHttpAggregation } from '../models/MetricHttpAggregation.ts';
import { MetricHttpAggregationHttpCodes } from '../models/MetricHttpAggregationHttpCodes.ts';
import { MetricHttpAggregationHttpCodesBucketsInner } from '../models/MetricHttpAggregationHttpCodesBucketsInner.ts';
import { MetricHttpAggregationHttpCodesBucketsInnerHistogram } from '../models/MetricHttpAggregationHttpCodesBucketsInnerHistogram.ts';
import { MetricResourceAggregation } from '../models/MetricResourceAggregation.ts';
import { MetricResourceAggregationResources } from '../models/MetricResourceAggregationResources.ts';
import { MetricResourceAggregationResourcesBucketsInner } from '../models/MetricResourceAggregationResourcesBucketsInner.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogram } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogram.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter.ts';
import { MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge.ts';
import { MetricsAggregationsList200Response } from '../models/MetricsAggregationsList200Response.ts';
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
import { Provider } from '../models/Provider.ts';
import { ProviderLocations } from '../models/ProviderLocations.ts';
import { Quota } from '../models/Quota.ts';
import { SecretBody     } from '../models/SecretBody.ts';
import { SecretBodyPatch    } from '../models/SecretBodyPatch.ts';
import { SecretCertificate } from '../models/SecretCertificate.ts';
import { SecretCreatePayload } from '../models/SecretCreatePayload.ts';
import { SecretCreateType } from '../models/SecretCreateType.ts';
import { SecretEnvironment } from '../models/SecretEnvironment.ts';
import { SecretMetaResponse      } from '../models/SecretMetaResponse.ts';
import { SecretMetaResponseCertificatePayload } from '../models/SecretMetaResponseCertificatePayload.ts';
import { SecretMetaResponseDek } from '../models/SecretMetaResponseDek.ts';
import { SecretMetaResponsePayload } from '../models/SecretMetaResponsePayload.ts';
import { SecretMetaResponseRegistryPayload } from '../models/SecretMetaResponseRegistryPayload.ts';
import { SecretMetaType } from '../models/SecretMetaType.ts';
import { SecretRegistry } from '../models/SecretRegistry.ts';
import { SecretResponse      } from '../models/SecretResponse.ts';
import { SecretResponsePayload } from '../models/SecretResponsePayload.ts';
import { UnauthorisedResponse } from '../models/UnauthorisedResponse.ts';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "FunctionVersionEnum",
    "FunctionBodyVersionEnum",
    "FunctionCompliance",
    "FunctionScalingTypeEnum",
    "FunctionType",
    "HostVerificationStatus",
    "LogLogStreamEnum",
    "LogLogKindEnum",
    "LogLogTypeEnum",
    "SecretCreateType",
    "SecretMetaType",
]);

let typeMap: {[index: string]: any} = {
    "AuthToken": AuthToken,
    "AuthTokenBody": AuthTokenBody,
    "AuthTokenMeta": AuthTokenMeta,
    "AuthTokenPatch": AuthTokenPatch,
    "BadRequestResponse": BadRequestResponse,
    "BadRequestResponseFields": BadRequestResponseFields,
    "ConflictResponse": ConflictResponse,
    "DeletedResponse": DeletedResponse,
    "Function": Function,
    "FunctionBody": FunctionBody,
    "FunctionDeployment": FunctionDeployment,
    "FunctionDeploymentBody": FunctionDeploymentBody,
    "FunctionEnv": FunctionEnv,
    "FunctionReplicas": FunctionReplicas,
    "FunctionReplicasAffinity": FunctionReplicasAffinity,
    "FunctionRoute": FunctionRoute,
    "FunctionScaling": FunctionScaling,
    "FunctionSize": FunctionSize,
    "Host": Host,
    "HostBody": HostBody,
    "HostBodyPatch": HostBodyPatch,
    "ListAuthTokens": ListAuthTokens,
    "ListFunction": ListFunction,
    "ListHosts": ListHosts,
    "ListLogResponse": ListLogResponse,
    "ListOrganisationResponse": ListOrganisationResponse,
    "ListProjectResponse": ListProjectResponse,
    "ListProviderResponse": ListProviderResponse,
    "ListSecretResponse": ListSecretResponse,
    "Location": Location,
    "Log": Log,
    "LogLog": LogLog,
    "LogsListFTimestampsParameter": LogsListFTimestampsParameter,
    "MetricHttpAggregation": MetricHttpAggregation,
    "MetricHttpAggregationHttpCodes": MetricHttpAggregationHttpCodes,
    "MetricHttpAggregationHttpCodesBucketsInner": MetricHttpAggregationHttpCodesBucketsInner,
    "MetricHttpAggregationHttpCodesBucketsInnerHistogram": MetricHttpAggregationHttpCodesBucketsInnerHistogram,
    "MetricResourceAggregation": MetricResourceAggregation,
    "MetricResourceAggregationResources": MetricResourceAggregationResources,
    "MetricResourceAggregationResourcesBucketsInner": MetricResourceAggregationResourcesBucketsInner,
    "MetricResourceAggregationResourcesBucketsInnerHistogram": MetricResourceAggregationResourcesBucketsInnerHistogram,
    "MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner": MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInner,
    "MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter": MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerCounter,
    "MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge": MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge,
    "MetricsAggregationsList200Response": MetricsAggregationsList200Response,
    "ModelDate": ModelDate,
    "NotFoundResponse": NotFoundResponse,
    "OrganisationBody": OrganisationBody,
    "OrganisationResponse": OrganisationResponse,
    "OrganisationsListPageParameter": OrganisationsListPageParameter,
    "PaginationLinks": PaginationLinks,
    "PaginationMeta": PaginationMeta,
    "ProjectBody": ProjectBody,
    "ProjectBodyPatch": ProjectBodyPatch,
    "ProjectResponse": ProjectResponse,
    "Provider": Provider,
    "ProviderLocations": ProviderLocations,
    "Quota": Quota,
    "SecretBody": SecretBody,
    "SecretBodyPatch": SecretBodyPatch,
    "SecretCertificate": SecretCertificate,
    "SecretCreatePayload": SecretCreatePayload,
    "SecretEnvironment": SecretEnvironment,
    "SecretMetaResponse": SecretMetaResponse,
    "SecretMetaResponseCertificatePayload": SecretMetaResponseCertificatePayload,
    "SecretMetaResponseDek": SecretMetaResponseDek,
    "SecretMetaResponsePayload": SecretMetaResponsePayload,
    "SecretMetaResponseRegistryPayload": SecretMetaResponseRegistryPayload,
    "SecretRegistry": SecretRegistry,
    "SecretResponse": SecretResponse,
    "SecretResponsePayload": SecretResponsePayload,
    "UnauthorisedResponse": UnauthorisedResponse,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}

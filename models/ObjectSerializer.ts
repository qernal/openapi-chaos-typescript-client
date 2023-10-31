export * from '../models/AuthToken.ts';
export * from '../models/AuthTokenBody.ts';
export * from '../models/AuthTokenMeta.ts';
export * from '../models/AuthTokenPatch.ts';
export * from '../models/BadRequestResponse.ts';
export * from '../models/BadRequestResponseFields.ts';
export * from '../models/ConflictResponse.ts';
export * from '../models/DeletedResponse.ts';
export * from '../models/Host.ts';
export * from '../models/HostBody.ts';
export * from '../models/HostBodyPatch.ts';
export * from '../models/HostVerificationStatus.ts';
export * from '../models/ListAuthTokens.ts';
export * from '../models/ListHosts.ts';
export * from '../models/ListOrganisationResponse.ts';
export * from '../models/ListProjectResponse.ts';
export * from '../models/ListSecretResponse.ts';
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
import { Host           } from '../models/Host.ts';
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

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/json-patch+json": 1,
  "application/merge-patch+json": 1,
  "application/strategic-merge-patch+json": 1,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "HostVerificationStatus",
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
    "Host": Host,
    "HostBody": HostBody,
    "HostBodyPatch": HostBodyPatch,
    "ListAuthTokens": ListAuthTokens,
    "ListHosts": ListHosts,
    "ListOrganisationResponse": ListOrganisationResponse,
    "ListProjectResponse": ListProjectResponse,
    "ListSecretResponse": ListSecretResponse,
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
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
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

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}

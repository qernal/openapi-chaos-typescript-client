/**
 * Chaos
 * Central Management API - publicly exposed set of APIs for managing deployments
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@qernal.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

/**
* Encrypted private container registry, `type: registry`
*/
export class SecretRegistry {
    /**
    * Url to private container repository (for docker registry use https://index.docker.io/v1/)
    */
    'registry': string;
    /**
    * Token used for auth to the registry
    */
    'registry_value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "registry",
            "baseName": "registry",
            "type": "string",
            "format": "url"
        },
        {
            "name": "registry_value",
            "baseName": "registry_value",
            "type": "string",
            "format": "base64"
        }    ];

    static getAttributeTypeMap() {
        return SecretRegistry.attributeTypeMap;
    }

    public constructor() {
    }
}


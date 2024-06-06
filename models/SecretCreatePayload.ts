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

import { SecretCertificate } from '../models/SecretCertificate.ts';
import { SecretEnvironment } from '../models/SecretEnvironment.ts';
import { SecretRegistry } from '../models/SecretRegistry.ts';
import { HttpFile } from '../http/http.ts';

/**
* Payload for secret
*/
export class SecretCreatePayload {
    /**
    * Private registry domain/location, when using the private docker hub registry sepcify `docker.io` > Without http scheme 
    */
    'registry': string;
    /**
    * Token used for auth to the registry
    */
    'registry_value': string;
    /**
    * Encrypted environment pairs (key - env key, value - env value)
    */
    'environment_value': string;
    /**
    * Public certificate
    */
    'certificate': string;
    /**
    * Encrypted certificate private key
    */
    'certificate_value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "registry",
            "baseName": "registry",
            "type": "string",
            "format": "hostname"
        },
        {
            "name": "registry_value",
            "baseName": "registry_value",
            "type": "string",
            "format": "base64"
        },
        {
            "name": "environment_value",
            "baseName": "environment_value",
            "type": "string",
            "format": "base64"
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificate_value",
            "baseName": "certificate_value",
            "type": "string",
            "format": "base64"
        }    ];

    static getAttributeTypeMap() {
        return SecretCreatePayload.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { SecretCreatePayload } from '../models/SecretCreatePayload.ts';
import { SecretCreateType } from '../models/SecretCreateType.ts';
import { HttpFile } from '../http/http.ts';

/**
* Secret body patch fields
*/
export class SecretBodyPatch {
    'type': SecretCreateType;
    'payload': SecretCreatePayload;
    /**
    * Encryption entity
    */
    'encryption': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SecretCreateType",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "SecretCreatePayload",
            "format": ""
        },
        {
            "name": "encryption",
            "baseName": "encryption",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecretBodyPatch.attributeTypeMap;
    }

    public constructor() {
    }
}




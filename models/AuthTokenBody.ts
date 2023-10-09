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
* API auth token create
*/
export class AuthTokenBody {
    /**
    * Name of token
    */
    'name': string;
    /**
    * Token expiration duration in days. 0 - token will never expire
    */
    'expiry_duration': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiry_duration",
            "baseName": "expiry_duration",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthTokenBody.attributeTypeMap;
    }

    public constructor() {
    }
}


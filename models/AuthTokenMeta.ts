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

import { ModelDate } from '../models/ModelDate.ts';
import { HttpFile } from '../http/http.ts';

/**
* API auth token meta
*/
export class AuthTokenMeta {
    'id': string;
    /**
    * User
    */
    'user_id': string;
    /**
    * Name of token
    */
    'name': string;
    'expiry_at'?: string;
    'date': ModelDate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "user_id",
            "baseName": "user_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiry_at",
            "baseName": "expiry_at",
            "type": "string",
            "format": "datetime"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "ModelDate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthTokenMeta.attributeTypeMap;
    }

    public constructor() {
    }
}


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
* Location of allowed clusters
*/
export class Location {
    /**
    * UUID of provider to deploy into
    */
    'provider_id': string;
    /**
    * Deployment continent
    */
    'continent'?: string;
    /**
    * Deployment country
    */
    'country'?: string;
    /**
    * Deployment city
    */
    'city'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider_id",
            "baseName": "provider_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "continent",
            "baseName": "continent",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Location.attributeTypeMap;
    }

    public constructor() {
    }
}


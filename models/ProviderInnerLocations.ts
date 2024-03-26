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
* Locations at varying levels this provider operates within
*/
export class ProviderInnerLocations {
    'continents'?: Array<string>;
    'countries'?: Array<string>;
    'cities'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "continents",
            "baseName": "continents",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cities",
            "baseName": "cities",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProviderInnerLocations.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { PaginationMeta } from '../models/PaginationMeta.ts';
import { Provider } from '../models/Provider.ts';
import { HttpFile } from '../http/http.ts';

/**
* List of providers
*/
export class ListProviderResponse {
    'meta': PaginationMeta;
    'data': Array<Provider>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PaginationMeta",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Provider>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListProviderResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


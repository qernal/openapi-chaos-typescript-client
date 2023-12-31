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

import { Host } from '../models/Host.ts';
import { PaginationMeta } from '../models/PaginationMeta.ts';
import { HttpFile } from '../http/http.ts';

/**
* List of projects hosts
*/
export class ListHosts {
    'meta': PaginationMeta;
    'data': Array<Host>;

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
            "type": "Array<Host>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListHosts.attributeTypeMap;
    }

    public constructor() {
    }
}


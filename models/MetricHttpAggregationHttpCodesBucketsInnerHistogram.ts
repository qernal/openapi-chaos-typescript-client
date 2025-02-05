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

import { MetricResourceAggregationResourcesBucketsInner } from '../models/MetricResourceAggregationResourcesBucketsInner.ts';
import { HttpFile } from '../http/http.ts';

/**
* Histogram of http status code usage
*/
export class MetricHttpAggregationHttpCodesBucketsInnerHistogram {
    /**
    * Array of unqiue resources
    */
    'buckets'?: Array<MetricResourceAggregationResourcesBucketsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "buckets",
            "baseName": "buckets",
            "type": "Array<MetricResourceAggregationResourcesBucketsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricHttpAggregationHttpCodesBucketsInnerHistogram.attributeTypeMap;
    }

    public constructor() {
    }
}


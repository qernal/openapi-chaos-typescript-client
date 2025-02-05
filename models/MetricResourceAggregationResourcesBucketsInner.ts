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

import { MetricResourceAggregationResourcesBucketsInnerHistogram } from '../models/MetricResourceAggregationResourcesBucketsInnerHistogram.ts';
import { HttpFile } from '../http/http.ts';

/**
* Histogram bucket
*/
export class MetricResourceAggregationResourcesBucketsInner {
    /**
    * Number of documents in the bucket
    */
    'doc_count'?: number;
    'histogram'?: MetricResourceAggregationResourcesBucketsInnerHistogram;
    /**
    * Metric key
    */
    'key'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "doc_count",
            "baseName": "doc_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "histogram",
            "baseName": "histogram",
            "type": "MetricResourceAggregationResourcesBucketsInnerHistogram",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricResourceAggregationResourcesBucketsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


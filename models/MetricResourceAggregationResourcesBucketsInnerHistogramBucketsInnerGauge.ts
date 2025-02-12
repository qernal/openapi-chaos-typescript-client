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
* Gauge (value at a point in time)
*/
export class MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge {
    /**
    * Average gauge value
    */
    'avg'?: number | null;
    /**
    * Number of gauge values
    */
    'count'?: number | null;
    /**
    * Maximum gauge value
    */
    'max'?: number | null;
    /**
    * Minimum gauge value
    */
    'min'?: number | null;
    /**
    * Sum of gauge values
    */
    'sum'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "avg",
            "baseName": "avg",
            "type": "number",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": ""
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": ""
        },
        {
            "name": "sum",
            "baseName": "sum",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricResourceAggregationResourcesBucketsInnerHistogramBucketsInnerGauge.attributeTypeMap;
    }

    public constructor() {
    }
}


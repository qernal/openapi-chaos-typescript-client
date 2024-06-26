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
* Tagged requirements for compliance; soc2 = SOC2 compliant data centers ipv6 = Function can work within an ipv6 *only* cluster 
*/
export enum FunctionCompliance {
    soc2 = 'soc2',
    ipv6 = 'ipv6'
}

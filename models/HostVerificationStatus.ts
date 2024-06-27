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
* Host verification status
*/
export enum HostVerificationStatus {
    pending = 'pending',
    already_verified = 'already_verified',
    completed = 'completed',
    failed = 'failed'
}

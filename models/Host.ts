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
* Host response
*/
export class Host {
    /**
    * Host id
    */
    'id': string;
    /**
    * Hostname, this can be a root or a subdomain
    */
    'host': string;
    /**
    * The secret reference to the certificate
    */
    'certificate'?: string;
    /**
    * Project ID this is attached to
    */
    'project_id': string;
    /**
    * If the host is read only and cannot be removed, primarily used for *.qrnl.app domains
    */
    'read_only': boolean;
    /**
    * If the host is disabled and so won\'t be routable
    */
    'disabled': boolean;
    /**
    * TXT record of host to verify ownership - if this record is removed, it may become unverified as this is checked periodically to continually verify ownership
    */
    'txt_verification': string;
    /**
    * UTC datetime when the host was verified (ISO 8601 date format).
    */
    'verified_at'?: string;
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
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "string",
            "format": ""
        },
        {
            "name": "project_id",
            "baseName": "project_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "read_only",
            "baseName": "read_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "txt_verification",
            "baseName": "txt_verification",
            "type": "string",
            "format": ""
        },
        {
            "name": "verified_at",
            "baseName": "verified_at",
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
        return Host.attributeTypeMap;
    }

    public constructor() {
    }
}


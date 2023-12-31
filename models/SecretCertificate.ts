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
* Encrypted SSL private key and plain certificate. Certificate expected in x509 pem format, key expected in pkcs8 or pkcs1 pem format. `type: certificate`
*/
export class SecretCertificate {
    /**
    * Public certificate
    */
    'certificate': string;
    /**
    * Encrypted certificate private key
    */
    'certificate_value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificate_value",
            "baseName": "certificate_value",
            "type": "string",
            "format": "base64"
        }    ];

    static getAttributeTypeMap() {
        return SecretCertificate.attributeTypeMap;
    }

    public constructor() {
    }
}


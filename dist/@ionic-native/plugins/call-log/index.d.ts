import { IonicNativePlugin } from '@ionic-native/core';
export interface CallLogObject {
    name: string;
    value: string | string[];
    operator: '==' | '!=' | '>' | '>=' | '<' | '<=' | 'like';
}
/**
 * @name Call Log
 * @description
 * This plugin access the call history on a device and that can be filtered
 *
 * @usage
 * ```typescript
 * import { CallLog } from '@ionic-native/call-log/ngx';
 *
 *
 * constructor(private callLog: CallLog) { }
 *
 * ````
 * @interfaces
 * CallLogObject
 *
 */
export declare class CallLogOriginal extends IonicNativePlugin {
    /**
     * This function return the call logs
     * @param {CallLogObject[]} filters array of object to filter the query
     * @return {Promise<any>}
     */
    getCallLog(filters: CallLogObject[]): Promise<any>;
    /**
     * Check permission
     * @returns {Promise<any>}
     */
    hasReadPermission(): Promise<any>;
    /**
     * Request permission
     * @returns {Promise<any>}
     */
    requestReadPermission(): Promise<any>;
}

export declare const CallLog: CallLogOriginal;
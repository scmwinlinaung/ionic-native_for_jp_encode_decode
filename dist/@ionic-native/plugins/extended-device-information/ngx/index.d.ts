import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Extended Device Information
 * @description
 * Retrieves additional device information from the Device Hardware
 *  - memory
 *  - cpumhz
 *  - totalstorage
 *  - freestorage
 *
 * @usage
 * ```typescript
 * import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information/ngx';
 *
 *
 * constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { }
 *
 * ...
 *
 * console.log('The Memory is: ' + this.extendedDeviceInformation.memory);
 * ```
 */
export declare class ExtendedDeviceInformation extends IonicNativePlugin {
    /**
     * Get the device's memory size
     */
    memory: number;
    /**
     * Get the device's CPU mhz
     */
    cpumhz: string;
    /**
     * Get the total storage
     */
    totalstorage: string;
    /**
     * Get the total storage
     */
    freestorage: number;
}

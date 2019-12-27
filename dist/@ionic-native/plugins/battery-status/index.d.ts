import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface BatteryStatusResponse {
    /**
     * The battery charge percentage
     */
    level: number;
    /**
     * A boolean that indicates whether the device is plugged in
     */
    isPlugged: boolean;
}
/**
 * @name Battery Status
 * @description
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * @usage
 * ```typescript
 * import { BatteryStatus } from '@ionic-native/battery-status/ngx';
 *
 * constructor(private batteryStatus: BatteryStatus) { }
 *
 * ...
 *
 *
 * // watch change in battery status
 * const subscription = this.batteryStatus.onChange().subscribe(status => {
 *    console.log(status.level, status.isPlugged);
 * });
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * BatteryStatusResponse
 */
export declare class BatteryStatusOriginal extends IonicNativePlugin {
    /**
     * Watch the change in battery level
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    onChange(): Observable<BatteryStatusResponse>;
    /**
     * Watch when the battery level goes low
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    onLow(): Observable<BatteryStatusResponse>;
    /**
     * Watch when the battery level goes to critical
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    onCritical(): Observable<BatteryStatusResponse>;
}

export declare const BatteryStatus: BatteryStatusOriginal;
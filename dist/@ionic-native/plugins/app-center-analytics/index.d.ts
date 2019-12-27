import { IonicNativePlugin } from '@ionic-native/core';
export interface StringMap {
    [s: string]: string;
}
/**
 * @name App Center Analytics
 * @description
 * App Center Analytics helps you understand user behavior and customer engagement to improve your app.
 * The SDK automatically captures session count and device properties like model, OS version, etc.
 * You can define your own custom events to measure things that matter to you.
 * All the information captured is available in the App Center portal for you to analyze the data.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterAnalytics } from '@ionic-native/app-center-analytics/ngx';
 *
 *
 * constructor(private appCenterAnalytics: AppCenterAnalytics) { }
 *
 * ...
 *
 * this.appCenterAnalytics.setEnabled(true).then(() => {
 *    this.appCenterAnalytics.trackEvent('My Event', { TEST: 'HELLO_WORLD' }).then(() => {
 *        console.log('Custom event tracked');
 *    });
 * });
 *
 * ```
 * @interfaces
 * StringMap
 */
export declare class AppCenterAnalyticsOriginal extends IonicNativePlugin {
    /**
     * Tracks an custom event.
     * You can send up to 200 distinct event names. Also, there is a maximum limit of 256 characters per event name
     * and 64 characters per event property name and event property value.
     * @param  {string} eventName Event name
     * @param  {StringMap} properties Event properties
     * @returns {Promise<void>}
     */
    trackEvent(eventName: string, properties: StringMap): Promise<void>;
    /**
     * Check if App Center Analytics is enabled
     * @returns {Promise<boolean>}
     */
    isEnabled(): Promise<boolean>;
    /**
     * Enable or disable App Center Analytics at runtime
     * @param  {boolean} shouldEnable Set value
     * @returns {Promise<void>}
     */
    setEnabled(shouldEnable: boolean): Promise<void>;
}

export declare const AppCenterAnalytics: AppCenterAnalyticsOriginal;
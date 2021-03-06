import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Webengage
 * @description
 * Ionic-Native wrapper that wraps Webengage Cordova plugin for Android and iOS
 *
 * @usage
 * ```typescript
 * import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@ionic-native/webengage/ngx';
 *
 *
 * constructor(private webengage: Webengage, private webengageUser: WebengageUser, private webengagePush: WebengagePush, private webengageNotification: WebengageNotification ) { }
 *
 * ...
 *
 * this.webengage.engage();
 * ```
 */
export declare class WebengageOriginal extends IonicNativePlugin {
    /**
     * Initializes WebEngage SDK
     * @param {any} [config]
     * @return {Promise<any>}
     */
    engage(config?: any): Promise<any>;
    /**
     * Sets WebEngage SDK configuration
     * @param {string} key
     * @param {any} value
     * @return {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
    /**
     * Tracks event
     * @param {string} eventName
     * @param {any} [attributes]
     * @return {Promise<any>}
     */
    track(eventName: string, attributes?: any): Promise<any>;
    /**
     * Tracks screen
     * @param {string} eventName
     * @param {any} [screenData]
     * @return {Promise<any>}
     */
    screen(screenName: string, screenData?: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengageUserOriginal extends IonicNativePlugin {
    /**
     * Logs user in
     * @param {string} userId
     * @return {Promise<any>}
     */
    login(userId: string): Promise<any>;
    /**
     * Logs user out
     * @return {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * Sets user attribute
     * @param {string} key
     * @param {any} value
     * @return {Promise<any>}
     */
    setAttribute(key: string, value: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengagePushOriginal extends IonicNativePlugin {
    /**
     * Callback function is invoked when a push notification is clicked
     * @param {any} callback
     * @return {Promise<any>}
     */
    onClick(callback: any): Promise<any>;
    /**
     * Sets push notification configuration
     * @param {string} key
     * @param {any} value
     * @return {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengageNotificationOriginal extends IonicNativePlugin {
    /**
     * Callback function is invoked when a in-app notification is shown
     * @param {any} callback
     * @return {Promise<any>}
     */
    onShown(callback: any): Promise<any>;
    /**
     * Callback function is invoked when a in-app notification is clicked
     * @param {any} callback
     * @return {Promise<any>}
     */
    onClick(callback: any): Promise<any>;
    /**
     * Callback function is invoked when a in-app notification is dismissed
     * @param {any} callback
     * @return {Promise<any>}
     */
    onDismiss(callback: any): Promise<any>;
    /**
     * Sets in-app notification configuration
     * @param {string} key
     * @param {any} value
     * @return {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
}

export declare const Webengage: WebengageOriginal;
export declare const WebengageUser: WebengageUserOriginal;
export declare const WebengagePush: WebengagePushOriginal;
export declare const WebengageNotification: WebengageNotificationOriginal;
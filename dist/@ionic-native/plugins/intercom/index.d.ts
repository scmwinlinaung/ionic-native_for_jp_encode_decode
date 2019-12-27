import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Intercom
 * @description
 * This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/docs/cordova-phonegap-configuration
 *
 * @usage
 * ```typescript
 * import { Intercom } from '@ionic-native/intercom/ngx';
 *
 *
 * constructor(private intercom: Intercom) { }
 *
 * ...
 *
 * this.intercom.registerUnidentifiedUser();
 * ...
 * this.intercom.registerForPush();
 *
 * ```
 */
export declare class IntercomOriginal extends IonicNativePlugin {
    /**
     * Register a identified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    registerIdentifiedUser(options: any): Promise<any>;
    /**
     * Register a unidentified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    registerUnidentifiedUser(options: any): Promise<any>;
    /**
     * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
     * @return {Promise<any>} Returns a promise
     */
    reset(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    logout(): Promise<any>;
    /**
     *
     * @param secureHash {string}
     * @param secureData {any}
     * @return {Promise<any>} Returns a promise
     * @deprecated Use setUserHash instead as of Intercom Cordova 4.0.0 and higher https://github.com/intercom/intercom-cordova/blob/master/CHANGELOG.md#400-2017-08-29
     */
    setSecureMode(secureHash: string, secureData: any): Promise<any>;
    /**
     *
     * @param secureHash {string}
     * @return {Promise<any>} Returns a promise
     */
    setUserHash(secureHash: string): Promise<any>;
    /**
     *
     * @param attributes {any}
     * @return {Promise<any>} Returns a promise
     */
    updateUser(attributes: any): Promise<any>;
    /**
     *
     * @param eventName {string}
     * @param metaData {any}
     * @return {Promise<any>} Returns a promise
     */
    logEvent(eventName: string, metaData: any): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayMessenger(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayMessageComposer(): Promise<any>;
    /**
     *
     * @param initialMessage {string}
     * @return {Promise<any>} Returns a promise
     */
    displayMessageComposerWithInitialMessage(initialMessage: string): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayConversationsList(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayHelpCenter(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    unreadConversationCount(): Promise<any>;
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    setLauncherVisibility(visibility: string): Promise<any>;
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    setInAppMessageVisibility(visibility: string): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    hideMessenger(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    registerForPush(): Promise<any>;
    /**
     *
     * @param token {string}
     * @return {Promise<any>} Returns a promise
     */
    sendPushTokenToIntercom(token: string): Promise<any>;
}

export declare const Intercom: IntercomOriginal;
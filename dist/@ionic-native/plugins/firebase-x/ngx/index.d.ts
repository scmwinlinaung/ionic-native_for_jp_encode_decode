import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface IChannelOptions {
    /**
     * Channel ID - must be unique per app package
     */
    id: string;
    /**
     * Channel name. Default: empty string
     */
    name?: string;
    /**
     * Channel description. Default: empty string
     */
    description?: string;
    /**
     * The sound to play once a push comes. Default value: 'default'
     * Values allowed:
     * 'default' - plays the default notification sound
     * 'ringtone' - plays the currently set ringtone
     * 'false' - silent; don't play any sound
     * filename - the filename of the sound file located in '/res/raw' without file extension (mysound.mp3 -> mysound)
     */
    sound?: string;
    /**
     * Vibrate on new notification. Default value: true
     * Possible values:
     * Boolean - vibrate or not
     * Array - vibration pattern - e.g. [500, 200, 500] - milliseconds vibrate, milliseconds pause, vibrate, pause, etc.
     */
    vibration?: boolean | number[];
    /**
     * Whether to blink the LED
     */
    light?: boolean;
    /**
     * LED color in ARGB format - this example BLUE color. If set to -1, light color will be default. Default value: -1.
     */
    lightColor?: string;
    /**
     * Importance - integer from 0 to 4. Default value: 4
     * 0 - none - no sound, does not show in the shade
     * 1 - min - no sound, only shows in the shade, below the fold
     * 2 - low - no sound, shows in the shade, and potentially in the status bar
     * 3 - default - shows everywhere, makes noise, but does not visually intrude
     * 4 - high - shows everywhere, makes noise and peeks
     */
    importance?: 0 | 1 | 2 | 3 | 4;
    /**
     * Show badge over app icon when non handled pushes are present. Default value: true
     */
    badge?: boolean;
    /**
     * Show message on locked screen. Default value: 1
     * Possible values (default 1):
     * -1 - secret - Do not reveal any part of the notification on a secure lockscreen.
     * 0 - private - Show the notification on all lockscreens, but conceal sensitive or private information on secure lockscreens.
     * 1 - public - Show the notification in its entirety on all lockscreens.
     */
    visibility?: -1 | 0 | 1;
}
/**
 * @name Firebase X
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported.
 * It is a maintained fork from unmaintained ionic-navite plugin called Firebase.
 *
 * @usage
 * ```typescript
 * import { FirebaseX } from '@ionic-native/firebase-x';
 *
 *
 * constructor(private firebaseX: FirebaseX) { }
 *
 * ...
 *
 *
 * this.firebaseX.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebaseX.onMessageReceived()
 *   .subscribe(data => console.log(`User opened a notification ${data}`));
 *
 * this.firebaseX.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 * ```
 * @interfaces
 * IChannelOptions
 *
 */
export declare class FirebaseX extends IonicNativePlugin {
    /**
     * Get the current FCM token.
     * @return {Promise<null | string>} Note that token will be null if it has not been established yet
     */
    getToken(): Promise<null | string>;
    /**
     * Get notified when a token is refreshed.
     * @return {Observable<any>}
     */
    onTokenRefresh(): Observable<any>;
    /**
     * iOS only.
     * Get the APNS token allocated for this app install.
     * @return {Promise<null | string>} Note that token will be null if it has not been established yet
     */
    getAPNSToken(): Promise<null | string>;
    /**
     * iOS only.
     * Registers a handler to call when the APNS token is allocated.
     * This will be called once when remote notifications permission has been granted by the user at runtime.
     * @return {Observable<any>}
     */
    onApnsTokenReceived(): Observable<any>;
    /**
     * Registers a callback function to invoke when:
     * - a notification or data message is received by the app
     * - a system notification is tapped by the user
     * @return {Observable<any>}
     */
    onMessageReceived(): Observable<any>;
    /**
     * Grant permission to receive push notifications (will trigger prompt) and return hasPermission: true. iOS only (Android will always return true).
     * @return {Promise<any>}
     */
    grantPermission(): Promise<any>;
    /**
     * Check permission to receive push notifications and return hasPermission: true. iOS only (Android will always return true).
     * @return {Promise<boolean>}
     */
    hasPermission(): Promise<boolean>;
    /**
     * Unregister from firebase, used to stop receiving push notifications. Call this when you logout user from your app.
     */
    unregister(): Promise<any>;
    /**
     * Set a number on the icon badge. Set 0 to clear the badge
     * @param {number} badgeNumber
     * @return {Promise<any>}
     */
    setBadgeNumber(badgeNumber: number): Promise<any>;
    /**
     * Get icon badge number.
     * @return {Promise<any>}
     */
    getBadgeNumber(): Promise<any>;
    /**
     * Clear all pending notifications from the drawer.
     * @return {Promise<any>}
     */
    clearAllNotifications(): Promise<any>;
    /**
     * Subscribe to a topic. Topic messaging allows you to send a message to multiple devices that have opted in to a particular topic.
     * @param {string} topic
     * @return {Promise<any>}
     */
    subscribe(topic: string): Promise<any>;
    /**
     * Unsubscribe from a topic. This will stop you receiving messages for that topic.
     * @param {string} topic
     * @return {Promise<any>}
     */
    unsubscribe(topic: string): Promise<any>;
    /**
     * Android 8+ only. Creates a custom channel to be used by notification messages which have the channel property set in the message payload to the id of the created channel:
     * - for background (system) notifications: android.notification.channel_id
     * - for foreground/data notifications: data.notification_android_channel_id
     *
     * Calling on Android 7 or below or another platform will have no effect.
     * @param {IChannelOptions} channelOptions
     * @return {Promise<any>}
     */
    createChannel(channelOptions: IChannelOptions): Promise<any>;
    /**
     * Android 8+ only. Overrides the properties for the default channel.
     * The default channel is used if no other channel exists or is specified in the notification.
     * Any options not specified will not be overridden. Should be called as soon as possible (on app start) so default notifications will work as expected.
     * Calling on Android 7 or below or another platform will have no effect.
     * @param {IChannelOptions} channelOptions
     * @return {Promise<any>}
     */
    setDefaultChannel(channelOptions: IChannelOptions): Promise<any>;
    /**
     * Android 8+ only. Removes a previously defined channel.
     * Calling on Android 7 or below or another platform will have no effect.
     * @param {string} channelID
     * @return {Promise<any>}
     */
    deleteChannel(channelID: string): Promise<any>;
    /**
     * Android 8+ only. Gets a list of all channels.
     * Calling on Android 7 or below or another platform will have no effect.
     * @return {Promise<any>}
     */
    listChannels(): Promise<any>;
    /**
     * Enable/disable analytics collection (useful for GDPR/privacy settings).
     * @param {boolean} enabled
     * @returns {Promise<any>}
     */
    setAnalyticsCollectionEnabled(enabled: boolean): Promise<any>;
    /**
     * Log an event using Analytics
     * @param {string} type
     * @param {Object} data
     * @return {Promise<any>}
     */
    logEvent(type: string, data: any): Promise<any>;
    /**
     * Set the name of the current screen in Analytics
     * @param {string} name Screen name
     * @return {Promise<any>}
     */
    setScreenName(name: string): Promise<any>;
    /**
     * Set a user id for use in Analytics
     * @param {string} userId
     * @return {Promise<any>}
     */
    setUserId(userId: string): Promise<any>;
    /**
     * Set a user property for use in Analytics
     * @param {string} name
     * @param {string} value
     * @return {Promise<any>}
     */
    setUserProperty(name: string, value: string): Promise<any>;
    /**
     * Set Crashlytics user identifier.
     * To diagnose an issue, it’s often helpful to know which of your users experienced a given crash.
     * Crashlytics includes a way to anonymously identify users in your crash reports.
     * To add user IDs to your reports, assign each user a unique identifier in the form of an ID number, token, or hashed value.
     *
     * More info https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
     * @param {string} userId
     * @returns {Promise<any>}
     */
    setCrashlyticsUserId(userId: string): Promise<any>;
    /**
     * Simulates (causes) a fatal native crash which causes a crash event to be sent to Crashlytics (useful for testing).
     * See the Firebase documentation regarding crash testing.
     * Crashes will appear under Event type = "Crashes" in the Crashlytics console.
     * @return {Promise<any>}
     */
    sendCrash(): Promise<any>;
    /**
     * Sends a crash-related log message that will appear in the Logs section of the next native crash event.
     * Note: if you don't then crash, the message won't be sent! Also logs the message to the native device console.
     * @param {string} message
     * @return {Promise<any>}
     */
    logMessage(message: string): Promise<any>;
    /**
     * Sends a non-fatal error event to Crashlytics. In a Cordova app, you may use this to log unhandled Javascript exceptions, for example.
     * The event will appear under Event type = "Non-fatals" in the Crashlytics console.
     * The error message will appear in the Logs section of the non-fatal error event.
     * Also logs the error message to the native device console.
     * @param {string} error
     * @return {Promise<any>}
     */
    logError(error: string): Promise<any>;
    /**
     * Requests verification of a phone number in order to authenticate a user and sign then into Firebase in your app.
     *
     * NOTE: This will only work on physical devices with a SIM card (not iOS Simulator or Android Emulator)
     *
     * In response to your request, you'll receive a verification ID which you can use in conjunction with the verification code
     * to sign the user in.
     *
     * On iOS and some Android devices, the user will receive and SMS containing the verification code which they must manually enter
     * into your app.
     *
     * Some Android devices support "instant verfication", in which case an SMS will not be send and you will be returned
     * the verification code along with the verification ID. In this case, the user doesn't need to do anything in order for you
     * to sign them in.
     *
     * @param {function} success - callback function to pass {object} credentials to as an argument
     * @param {function} error - callback function which will be passed a {string} error message as an argument
     * @param {string} phoneNumber - phone number to verify
     * @param {integer} timeOutDuration - (optional) time to wait in seconds before timing out
     * @param {string} fakeVerificationCode - (optional) to test instant verification on Android ,specify a fake verification code to return for whitelisted phone numbers.
     *
     * The success callback will be passed a credential object with the following properties:
     *   instantVerification {boolean} - true if the Android device supports instant verification, in which case the verification code will be included in the credential object. If this is false, the device will be sent an SMS containing the verification code for the user to manually enter into your app. Always false on iOS.
     *   verificationId {string} - the verification ID you'll need to pass along with the verification code to sign the user in. Always returned on both Android & iOS.
     *   code {string} - verification code. Will only be present if instantVerification is true. Always undefined on iOS.
     */
    verifyPhoneNumber(success: (value: string | object) => void, error: (err: string) => void, phoneNumber: string, timeoutDuration?: number): Promise<any>;
    /**
     * Signs the user into Firebase with credentials obtained using verifyPhoneNumber().
     * See the Android- and iOS-specific Firebase documentation for more info.
     * @param {string} verificationId - the verification ID returned in the credentials object to the verifyPhoneNumber() success callback.
     * @param {string} code - the activation code, either returned in the credentials object to the verifyPhoneNumber() success callback if using Instant Verification on Android, or the activation code as entered by the user from the received SMS message.
     * @param {function} success - callback function to call on successful sign-in using credentials
     * @param {function} error - callback function which will be passed a {string} error message as an argument
     */
    signInWithCredential(verificationId: string, code: string, success: () => void, error: (err: string) => void): Promise<any>;
    /**
     * Links the user account to an existing Firebase user account with credentials obtained using verifyPhoneNumber().
     * See the Android- and iOS-specific Firebase documentation for more info.
     * @param {string} verificationId - the verification ID returned in the credentials object to the verifyPhoneNumber() success callback.
     * @param {string} code - the activation code, either returned in the credentials object to the verifyPhoneNumber() success callback if using Instant Verification on Android, or the activation code as entered by the user from the received SMS message.
     * @param {function} success - callback function to call on successful sign-in using credentials
     * @param {function} error - callback function which will be passed a {string} error message as an argument
     */
    linkUserWithCredential(verificationId: string, code: string, success: () => void, error: (err: string) => void): Promise<any>;
    /**
     * Fetch Remote Config parameter values for your app.
     * @param {number} cacheExpirationSeconds specify the cacheExpirationSeconds
     * @return {Promise<any>}
     */
    fetch(cacheExpirationSeconds?: number): Promise<any>;
    /**
     * Activate the Remote Config fetched config.
     * @return {Promise<any>}
     */
    activateFetched(): Promise<any>;
    /**
     * Retrieve a Remote Config value.
     * @param {string} key
     * @return {Promise<any>}
     */
    getValue(key: string): Promise<any>;
    /**
     * Android only. Retrieve a Remote Config byte array.
     * @param {string} key
     * @return {Promise<any>}
     */
    getByteArray(key: string): Promise<any>;
    /**
     * Android only. Get the current state of the FirebaseRemoteConfig singleton object.
     * @return {Promise<any>}
     */
    getInfo(): Promise<any>;
    /**
     * Android only. Change the settings for the FirebaseRemoteConfig object's operations.
     * @param {Object} settings
     * @return {Promise<any>}
     */
    setConfigSettings(settings: any): Promise<any>;
    /**
     * Android only. Set defaults in the Remote Config.
     * @param {Object} settings
     * @return {Promise<any>}
     */
    setDefaults(settings: any): Promise<any>;
    /**
     * Start a trace.
     * @param {string} name
     * @return {Promise<any>}
     */
    startTrace(name: string): Promise<any>;
    /**
     * To count the performance-related events that occur in your app (such as cache hits or retries),
     * add a line of code similar to the following whenever the event occurs,
     * using a string other than retry to name that event if you are counting a different type of event.
     * @param {string} name
     * @return {Promise<any>}
     */
    incrementCounter(name: string): Promise<any>;
    /**
     * Stop the trace.
     * @param {string} name
     * @return {Promise<any>}
     */
    stopTrace(name: string): Promise<any>;
}

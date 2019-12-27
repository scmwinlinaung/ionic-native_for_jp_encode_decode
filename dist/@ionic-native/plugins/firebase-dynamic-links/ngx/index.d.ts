import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface IDynamicLink {
    matchType: 'Weak' | 'Strong';
    deepLink: string;
}
/**
 * @beta
 * @name Firebase Dynamic Links
 * @description
 * Cordova plugin for Firebase Dynamic Links
 *
 * Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
 * Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * Preferences:
 *
 * Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
 * You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).
 *
 * config.xml:
 * ```xml
 * <platform name="ios">
 *     <preference name="GoogleIOSClientId" value="..." />
 * </platform>
 * <platform name="android">
 *     <preference name="GoogleAndroidClientId" value="..." />
 * </platform>
 * ```
 * @usage
 * ```typescript
 * import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
 *
 *
 * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
 *
 * ...
 * // Handle the logic here after opening the app with the Dynamic link
 * this.firebaseDynamicLinks.onDynamicLink()
 *   .subscribe((res: any) => console.log(res), (error:any) => console.log(error));
 * ```
 *
 * @interfaces
 * DynamicLinksOptions
 */
export declare class FirebaseDynamicLinks extends IonicNativePlugin {
    /**
     * Registers callback that is triggered on each dynamic link click.
     * @return {Observable<IDynamicLink>} Returns an observable
     */
    onDynamicLink(): Observable<IDynamicLink>;
}

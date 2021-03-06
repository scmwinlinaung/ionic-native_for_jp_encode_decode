import { IonicNativePlugin } from '@ionic-native/core';
export interface AppLauncherOptions {
    uri?: string;
    packageName?: string;
}
/**
 * @name App Launcher
 * @description
 * Simple Cordova plugin to see if other apps are installed and launch them.
 *
 * @usage
 * ```typescript
 * import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
 * import { Platform } from '@ionic/angular';
 *
 * constructor(private appLauncher: AppLauncher, private platform: Platform) { }
 *
 * ...
 *
 * const options: AppLauncherOptions = {
 * }
 *
 * if(this.platform.is('ios')) {
 *   options.uri = 'fb://'
 * } else {
 *   options.packageName = 'com.facebook.katana'
 * }
 *
 * this.appLauncher.canLaunch(options)
 *   .then((canLaunch: boolean) => console.log('Facebook is available'))
 *   .catch((error: any) => console.error('Facebook is not available'));
 *
 * ```
 */
export declare class AppLauncher extends IonicNativePlugin {
    /**
     * Check if any apps are installed that can launch via a specified URI or Package Name.
     * @param options App Launcher options
     * @return {Promise<any>} Returns a promise that resolves if the app is installed
     */
    canLaunch(options: AppLauncherOptions): Promise<boolean>;
    /**
     * Launches the app via a specified URI or Package Name
     * @param options App Launcher options
     * @return {Promise<any>} Returns a promise that resolves the launched app
     */
    launch(options: AppLauncherOptions): Promise<any>;
}

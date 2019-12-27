import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Navigation Bar
 * @description
 * The NavigationBar plugin allows you to hide and auto hide the android navigation bar.
 *
 * @usage
 * ```typescript
 * import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
 *
 * constructor(private navigationBar: NavigationBar) { }
 *
 * ...
 *
 * let autoHide: boolean = true;
 * this.navigationBar.setUp(autoHide);
 * ```
 */
export declare class NavigationBar extends IonicNativePlugin {
    /**
     * hide automatically (or not) the navigation bar.
     * @param autohide {boolean}
     * @return {Promise<any>}
     */
    setUp(autohide?: boolean): Promise<any>;
    /**
     * Hide the navigation bar.
     * @return {Promise<any>}
     */
    hideNavigationBar(): Promise<any>;
}

import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface AdMobFreeBannerConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
    /**
     * Set to true, to put banner at top
     */
    bannerAtTop?: boolean;
    /**
     * Set to true, to allow banner overlap WebView
     */
    overlap?: boolean;
    /**
     * Set to true to avoid ios7 status bar overlap
     */
    offsetTopBar?: boolean;
    /**
     * Banner  size
     */
    size?: string;
}
export interface AdMobFreeInterstitialConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
}
export interface AdMobFreeRewardVideoConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
}
/**
 * @name AdMob Free
 * @description
 * A free, no ad-sharing version of Google AdMob plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-admob-free`. For more info, please see the [AdMob Free plugin docs](https://github.com/ratson/cordova-plugin-admob-free).
 *
 * @usage
 * ```typescript
 * import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
 *
 *
 * constructor(private admobFree: AdMobFree) { }
 *
 *
 * ...
 *
 *
 * const bannerConfig: AdMobFreeBannerConfig = {
 *  // add your config here
 *  // for the sake of this example we will just use the test config
 *  isTesting: true,
 *  autoShow: true
 * };
 * this.admobFree.banner.config(bannerConfig);
 *
 * this.admobFree.banner.prepare()
 *   .then(() => {
 *     // banner Ad is ready
 *     // if we set autoShow to false, then we will need to call the show method here
 *   })
 *   .catch(e => console.log(e));
 *
 *
 * ```
 * @interfaces
 * AdMobFreeBannerConfig
 * AdMobFreeInterstitialConfig
 * AdMobFreeRewardVideoConfig
 * @classes
 * AdMobFreeBanner
 * AdMobFreeInterstitial
 * AdMobFreeRewardVideo
 */
export declare class AdMobFree extends IonicNativePlugin {
    /**
     * Convenience object to get event names
     * @type {Object}
     */
    events: {
        BANNER_LOAD: string;
        BANNER_LOAD_FAIL: string;
        BANNER_OPEN: string;
        BANNER_CLOSE: string;
        BANNER_EXIT_APP: string;
        INTERSTITIAL_LOAD: string;
        INTERSTITIAL_LOAD_FAIL: string;
        INTERSTITIAL_OPEN: string;
        INTERSTITIAL_CLOSE: string;
        INTERSTITIAL_EXIT_APP: string;
        REWARD_VIDEO_LOAD: string;
        REWARD_VIDEO_LOAD_FAIL: string;
        REWARD_VIDEO_OPEN: string;
        REWARD_VIDEO_CLOSE: string;
        REWARD_VIDEO_EXIT_APP: string;
        REWARD_VIDEO_START: string;
        REWARD_VIDEO_REWARD: string;
    };
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    on(event: string): Observable<any>;
    /**
     * Returns the AdMobFreeBanner object
     * @type {AdMobFreeBanner}
     */
    banner: AdMobFreeBanner;
    /**
     * Returns the AdMobFreeInterstitial object
     * @type {AdMobFreeInterstitial}
     */
    interstitial: AdMobFreeInterstitial;
    /**
     * Returns the AdMobFreeRewardVideo object
     * @type {AdMobFreeRewardVideo}
     */
    rewardVideo: AdMobFreeRewardVideo;
}
/**
 * @hidden
 */
export declare class AdMobFreeBanner extends IonicNativePlugin {
    /**
     * Update config
     * @param options
     * @return {AdMobFreeBannerConfig}
     */
    config(options: AdMobFreeBannerConfig): AdMobFreeBannerConfig;
    /**
     * Hide the banner
     * @return {Promise<any>}
     */
    hide(): Promise<any>;
    /**
     * Create banner
     * @return {Promise<any>}
     */
    prepare(): Promise<any>;
    /**
     * Remove the banner
     * @return {Promise<any>}
     */
    remove(): Promise<any>;
    /**
     * Show the banner
     * @return {Promise<any>}
     */
    show(): Promise<any>;
}
/**
 * @hidden
 */
export declare class AdMobFreeInterstitial extends IonicNativePlugin {
    /**
     * Update config
     * @param options
     * @return {AdMobFreeInterstitialConfig}
     */
    config(options: AdMobFreeInterstitialConfig): AdMobFreeInterstitialConfig;
    /**
     * Check if interstitial is ready
     * @return {Promise<any>}
     */
    isReady(): Promise<any>;
    /**
     * Prepare interstitial
     * @return {Promise<any>}
     */
    prepare(): Promise<any>;
    /**
     * Show the interstitial
     * @return {Promise<any>}
     */
    show(): Promise<any>;
}
/**
 * @hidden
 */
export declare class AdMobFreeRewardVideo extends IonicNativePlugin {
    /**
     * Update config
     * @param {AdMobFreeRewardVideoConfig} options Admob reward config
     * @return {AdMobFreeRewardVideoConfig}
     */
    config(options: AdMobFreeRewardVideoConfig): AdMobFreeRewardVideoConfig;
    /**
     * Check if reward video is ready
     * @return {Promise<any>}
     */
    isReady(): Promise<any>;
    /**
     * Prepare reward video
     * @return {Promise<any>}
     */
    prepare(): Promise<any>;
    /**
     * Show the reward video
     * @return {Promise<any>}
     */
    show(): Promise<any>;
}

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MobileAccessibilityOriginal = /** @class */ (function (_super) {
    __extends(MobileAccessibilityOriginal, _super);
    function MobileAccessibilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileAccessibilityOriginal.prototype.isScreenReaderRunning = function () { return cordova(this, "isScreenReaderRunning", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isVoiceOverRunning = function () { return cordova(this, "isVoiceOverRunning", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isTalkBackRunning = function () { return cordova(this, "isTalkBackRunning", { "platforms": ["Amazon Fire OS", "Android"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isChromeVoxActive = function () { return cordova(this, "isChromeVoxActive", { "platforms": ["Amazon Fire OS", "Android"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isBoldTextEnabled = function () { return cordova(this, "isBoldTextEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isClosedCaptioningEnabled = function () { return cordova(this, "isClosedCaptioningEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isDarkerSystemColorsEnabled = function () { return cordova(this, "isDarkerSystemColorsEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isGrayscaleEnabled = function () { return cordova(this, "isGrayscaleEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isGuidedAccessEnabled = function () { return cordova(this, "isGuidedAccessEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isInvertColorsEnabled = function () { return cordova(this, "isInvertColorsEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isMonoAudioEnabled = function () { return cordova(this, "isMonoAudioEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isReduceMotionEnabled = function () { return cordova(this, "isReduceMotionEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isReduceTransparencyEnabled = function () { return cordova(this, "isReduceTransparencyEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isSpeakScreenEnabled = function () { return cordova(this, "isSpeakScreenEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isSpeakSelectionEnabled = function () { return cordova(this, "isSpeakSelectionEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isSwitchControlRunning = function () { return cordova(this, "isSwitchControlRunning", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.isTouchExplorationEnabled = function () { return cordova(this, "isTouchExplorationEnabled", { "platforms": ["Amazon Fire OS", "Android"] }, arguments); };
    MobileAccessibilityOriginal.prototype.getTextZoom = function () { return cordova(this, "getTextZoom", {}, arguments); };
    MobileAccessibilityOriginal.prototype.setTextZoom = function (textZoom) { return cordova(this, "setTextZoom", { "sync": true }, arguments); };
    MobileAccessibilityOriginal.prototype.updateTextZoom = function () { return cordova(this, "updateTextZoom", { "sync": true }, arguments); };
    MobileAccessibilityOriginal.prototype.usePreferredTextZoom = function (value) { return cordova(this, "usePreferredTextZoom", { "sync": true }, arguments); };
    MobileAccessibilityOriginal.prototype.postNotification = function (mobileAccessibilityNotification, value) { return cordova(this, "postNotification", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibilityOriginal.prototype.speak = function (value, queueMode, properties) { return cordova(this, "speak", { "sync": true }, arguments); };
    MobileAccessibilityOriginal.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    MobileAccessibilityOriginal.pluginName = "MobileAccessibility";
    MobileAccessibilityOriginal.plugin = "phonegap-plugin-mobile-accessibility";
    MobileAccessibilityOriginal.pluginRef = "window.MobileAccessibility";
    MobileAccessibilityOriginal.repo = "https://github.com/phonegap/phonegap-mobile-accessibility";
    MobileAccessibilityOriginal.platforms = ["Android Fire OS", "Android", "iOS", "Windows"];
    return MobileAccessibilityOriginal;
}(IonicNativePlugin));
var MobileAccessibility = new MobileAccessibilityOriginal();
export { MobileAccessibility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21vYmlsZS1hY2Nlc3NpYmlsaXR5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCL0IsdUNBQWlCOzs7O0lBNEJ4RCxtREFBcUI7SUFTckIsZ0RBQWtCO0lBU2xCLCtDQUFpQjtJQVVqQiwrQ0FBaUI7SUFTakIsK0NBQWlCO0lBU2pCLHVEQUF5QjtJQVN6Qix5REFBMkI7SUFTM0IsZ0RBQWtCO0lBU2xCLG1EQUFxQjtJQVNyQixtREFBcUI7SUFTckIsZ0RBQWtCO0lBU2xCLG1EQUFxQjtJQVNyQix5REFBMkI7SUFTM0Isa0RBQW9CO0lBU3BCLHFEQUF1QjtJQVN2QixvREFBc0I7SUFTdEIsdURBQXlCO0lBU3pCLHlDQUFXO0lBUVgseUNBQVcsYUFBQyxRQUFnQjtJQU81Qiw0Q0FBYztJQVFkLGtEQUFvQixhQUFDLEtBQWM7SUFVbkMsOENBQWdCLGFBQUMsK0JBQW9DLEVBQUUsS0FBYTtJQVdwRSxtQ0FBSyxhQUFDLEtBQWEsRUFBRSxTQUFrQixFQUFFLFVBQWdCO0lBT3pELGtDQUFJOzs7Ozs7OEJBdlFOO0VBOEJ5QyxpQkFBaUI7U0FBN0MsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTW9iaWxlIEFjY2Vzc2liaWxpdHlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZXhwb3NlcyBpbmZvcm1hdGlvbiBvbiB0aGUgc3RhdHVzIG9mIHZhcmlvdXMgYWNjZXNzaWJpbGl0eSBmZWF0dXJlcyBvZiBtb2JpbGUgb3BlcmF0aW5nIHN5c3RlbXMsIGluY2x1ZGluZywgZm9yIGV4YW1wbGUsIHdoZXRoZXIgYSBzY3JlZW4gcmVhZGVyIGlzIHJ1bm5pbmcsIGludmVydCBjb2xvcnMgaXMgZW5hYmxlZCwgYW5kIHRoZSBwcmVmZXJyZWQgc2NhbGluZyBmb3IgdGV4dC5cbiAqIEl0IGFsc28gYWxsb3dzIGFuIGFwcGxpY2F0aW9uIHRvIHNlbmQgYSBzdHJpbmcgdG8gYmUgc3Bva2VuIGJ5IHRoZSBzY3JlZW4gcmVhZGVyLCBvciBhIGNvbW1hbmQgdG8gc3RvcCB0aGUgc2NyZWVuIHJlYWRlciBmcm9tIHNwZWFraW5nLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTW9iaWxlQWNjZXNzaWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbW9iaWxlLWFjY2Vzc2liaWxpdHkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtb2JpbGVBY2Nlc3NpYmlsaXR5OiBNb2JpbGVBY2Nlc3NpYmlsaXR5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBpZih0aGlzLm1vYmlsZUFjY2Vzc2liaWxpdHkuaXNTY3JlZW5SZWFkZXJSdW5uaW5nQ2FsbGJhY2soKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNb2JpbGVBY2Nlc3NpYmlsaXR5JyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtcGx1Z2luLW1vYmlsZS1hY2Nlc3NpYmlsaXR5JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93Lk1vYmlsZUFjY2Vzc2liaWxpdHknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLW1vYmlsZS1hY2Nlc3NpYmlsaXR5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQgRmlyZSBPUycsICdBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9iaWxlQWNjZXNzaWJpbGl0eSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBNb2JpbGVBY2Nlc3NpYmlsaXR5Tm90aWZpY2F0aW9uczoge1xuICAgIEFOTk9VTkNFTUVOVDogJ0FOTk9VTkNFTUVOVCcsXG4gICAgQk9MRF9URVhUX1NUQVRVU19DSEFOR0VEOiAnQk9MRF9URVhUX1NUQVRVU19DSEFOR0VEJyxcbiAgICBDTE9TRURfQ0FQVElPTklOR19TVEFUVVNfQ0hBTkdFRDogJ0NMT1NFRF9DQVBUSU9OSU5HX1NUQVRVU19DSEFOR0VEJyxcbiAgICBEQVJLRVJfU1lTVEVNX0NPTE9SU19TVEFUVVNfQ0hBTkdFRDogJ0RBUktFUl9TWVNURU1fQ09MT1JTX1NUQVRVU19DSEFOR0VEJyxcbiAgICBHUkFZU0NBTEVfU1RBVFVTX0NIQU5HRUQ6ICdHUkFZU0NBTEVfU1RBVFVTX0NIQU5HRUQnLFxuICAgIEdVSURFRF9BQ0NFU1NfU1RBVFVTX0NIQU5HRUQ6ICdHVUlERURfQUNDRVNTX1NUQVRVU19DSEFOR0VEJyxcbiAgICBJTlZFUlRfQ09MT1JTX1NUQVRVU19DSEFOR0VEOiAnSU5WRVJUX0NPTE9SU19TVEFUVVNfQ0hBTkdFRCcsXG4gICAgTEFZT1VUX0NIQU5HRUQ6ICdMQVlPVVRfQ0hBTkdFRCcsXG4gICAgTU9OT19BVURJT19TVEFUVVNfQ0hBTkdFRDogJ01PTk9fQVVESU9fU1RBVFVTX0NIQU5HRUQnLFxuICAgIFBBR0VfU0NST0xMRUQ6ICdQQUdFX1NDUk9MTEVEJyxcbiAgICBSRURVQ0VfTU9USU9OX1NUQVRVU19DSEFOR0VEOiAnUkVEVUNFX01PVElPTl9TVEFUVVNfQ0hBTkdFRCcsXG4gICAgUkVEVUNFX1RSQU5TUEFSRU5DWV9TVEFUVVNfQ0hBTkdFRDogJ1JFRFVDRV9UUkFOU1BBUkVOQ1lfU1RBVFVTX0NIQU5HRUQnLFxuICAgIFNDUkVFTl9DSEFOR0VEOiAnU0NSRUVOX0NIQU5HRUQnLFxuICAgIFNDUkVFTl9SRUFERVJfU1RBVFVTX0NIQU5HRUQ6ICdTQ1JFRU5fUkVBREVSX1NUQVRVU19DSEFOR0VEJyxcbiAgICBTUEVBS19TQ1JFRU5fU1RBVFVTX0NIQU5HRUQ6ICdTUEVBS19TQ1JFRU5fU1RBVFVTX0NIQU5HRUQnLFxuICAgIFNQRUFLX1NFTEVDVElPTl9TVEFUVVNfQ0hBTkdFRDogJ1NQRUFLX1NFTEVDVElPTl9TVEFUVVNfQ0hBTkdFRCcsXG4gICAgU1dJVENIX0NPTlRST0xfU1RBVFVTX0NIQU5HRUQ6ICdTV0lUQ0hfQ09OVFJPTF9TVEFUVVNfQ0hBTkdFRCcsXG4gICAgVE9VQ0hfRVhQTE9SQVRJT05fU1RBVFVTX0NIQU5HRUQ6ICdUT1VDSF9FWFBMT1JBVElPTl9TVEFUVVNfQ0hBTkdFRCdcbiAgfTtcblxuICAvKipcbiAgICogTWFrZXMgYW4gYXN5bmNocm9ub3VzIGNhbGwgdG8gbmF0aXZlIE1vYmlsZUFjY2Vzc2liaWxpdHkgdG8gZGV0ZXJtaW5lIGlmIGEgc2NyZWVuIHJlYWRlciBpcyBydW5uaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gIEEgcmVzdWx0IG1ldGhvZCB0byByZWNlaXZlIHRoZSBib29sZWFuIHJlc3VsdCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBuYXRpdmUgTW9iaWxlQWNjZXNzaWJpbGl0eSBwbHVnaW4uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzU2NyZWVuUmVhZGVyUnVubmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW4gaU9TLXNwZWNpZmljIHByb3h5IGZvciB0aGUgTW9iaWxlQWNjZXNzaWJpbGl0eS5pc1NjcmVlblJlYWRlclJ1bm5pbmcgbWV0aG9kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBBIHJlc3VsdCBtZXRob2QgdG8gcmVjZWl2ZSB0aGUgYm9vbGVhbiByZXN1bHQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgbmF0aXZlIE1vYmlsZUFjY2Vzc2liaWxpdHkgcGx1Z2luLlxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNWb2ljZU92ZXJSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBBbmRyb2lkL0FtYXpvbiBGaXJlIE9TLXNwZWNpZmljIHByb3h5IGZvciB0aGUgTW9iaWxlQWNjZXNzaWJpbGl0eS5pc1NjcmVlblJlYWRlclJ1bm5pbmcgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gIEEgcmVzdWx0IG1ldGhvZCB0byByZWNlaXZlIHRoZSBib29sZWFuIHJlc3VsdCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBuYXRpdmUgTW9iaWxlQWNjZXNzaWJpbGl0eSBwbHVnaW4uXG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJ10gfSlcbiAgaXNUYWxrQmFja1J1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIEFuZHJvaWQsIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSBpZiBDaHJvbWVWb3ggaXMgYWN0aXZlIGFuZCBwcm9wZXJseSBpbml0aWFsaXplZCB3aXRoIGFjY2VzcyB0byB0aGUgdGV4dCB0byBzcGVlY2ggQVBJIGluIHRoZSBXZWJWaWV3LlxuICAgKiBJZiBUYWxrQmFjayBpcyBydW5uaW5nIGJ1dCBDaHJvbWVWb3ggaXMgbm90IGFjdGl2ZSwgdGhpcyBtZXRob2QgaXMgdXNlZnVsIHRvIGFsZXJ0IHRoZSB1c2VyIG9mIGEgcG90ZW50aWFsIHByb2JsZW0uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnXSB9KVxuICBpc0Nocm9tZVZveEFjdGl2ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNCb2xkVGV4dEVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNDbG9zZWRDYXB0aW9uaW5nRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNEYXJrZXJTeXN0ZW1Db2xvcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc0dyYXlzY2FsZUVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzR3VpZGVkQWNjZXNzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNJbnZlcnRDb2xvcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc01vbm9BdWRpb0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzUmVkdWNlTW90aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNSZWR1Y2VUcmFuc3BhcmVuY3lFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc1NwZWFrU2NyZWVuRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgaXNTcGVha1NlbGVjdGlvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzU3dpdGNoQ29udHJvbFJ1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnXSB9KVxuICBpc1RvdWNoRXhwbG9yYXRpb25FbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUZXh0Wm9vbSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gdGV4dFpvb20ge251bWJlcn0gQSBwZXJjZW50YWdlIHZhbHVlIGJ5IHdoaWNoIHRleHQgaW4gdGhlIFdlYlZpZXcgc2hvdWxkIGJlIHNjYWxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRUZXh0Wm9vbSh0ZXh0Wm9vbTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGVUZXh0Wm9vbSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIEJvb2xlYW4gdmFsdWUgd2hpY2ggc3BlY2lmaWVzIHdoZXRoZXIgdG8gdXNlIHRoZSBwcmVmZXJyZWQgdGV4dCB6b29tIG9mIGEgZGVmYXVsdCBwZXJjZW50IHZhbHVlIG9mIDEwMC5cbiAgICogQHBhcmFtIHZhbHVlIHtib29sZWFufSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1c2VQcmVmZXJyZWRUZXh0Wm9vbSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc3RzIGEgbm90aWZpY2F0aW9uIHdpdGggYSBzdHJpbmcgZm9yIHRoZSBzY3JlZW4gcmVhZGVyIHRvIGFubm91bmNlIGlmIGl0IGlzIHJ1bm5pbmcuXG4gICAqIEBwYXJhbSBtb2JpbGVBY2Nlc3NpYmlsaXR5Tm90aWZpY2F0aW9uIHthbnl9XG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBBIHN0cmluZyB0byBiZSBhbm5vdW5jZWQgYnkgYSBzY3JlZW4gcmVhZGVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBwb3N0Tm90aWZpY2F0aW9uKG1vYmlsZUFjY2Vzc2liaWxpdHlOb3RpZmljYXRpb246IGFueSwgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVha3MgYSBnaXZlbiBzdHJpbmcgdGhyb3VnaCB0aGUgc2NyZWVucmVhZGVyLiBPbiBBbmRyb2lkLCBpZiBDaHJvbWVWb3ggaXMgYWN0aXZlLCBpdCB3aWxsIHVzZSB0aGUgc3BlY2lmaWVkIHF1ZXVlTW9kZSBhbmQgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBxdWV1ZU1vZGUge211bWJlcn1cbiAgICogQHBhcmFtIHByb3BlcnRpZXMge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzcGVhayh2YWx1ZTogc3RyaW5nLCBxdWV1ZU1vZGU/OiBudW1iZXIsIHByb3BlcnRpZXM/OiBhbnkpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBzcGVlY2guXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=
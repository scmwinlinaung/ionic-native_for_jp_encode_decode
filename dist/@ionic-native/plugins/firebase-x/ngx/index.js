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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var FirebaseX = /** @class */ (function (_super) {
    __extends(FirebaseX, _super);
    function FirebaseX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseX.prototype.getToken = function () { return cordova(this, "getToken", {}, arguments); };
    FirebaseX.prototype.onTokenRefresh = function () { return cordova(this, "onTokenRefresh", { "observable": true }, arguments); };
    FirebaseX.prototype.getAPNSToken = function () { return cordova(this, "getAPNSToken", {}, arguments); };
    FirebaseX.prototype.onApnsTokenReceived = function () { return cordova(this, "onApnsTokenReceived", { "observable": true }, arguments); };
    FirebaseX.prototype.onMessageReceived = function () { return cordova(this, "onMessageReceived", { "observable": true }, arguments); };
    FirebaseX.prototype.grantPermission = function () { return cordova(this, "grantPermission", { "platforms": ["iOS"] }, arguments); };
    FirebaseX.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    FirebaseX.prototype.unregister = function () { return cordova(this, "unregister", {}, arguments); };
    FirebaseX.prototype.setBadgeNumber = function (badgeNumber) { return cordova(this, "setBadgeNumber", {}, arguments); };
    FirebaseX.prototype.getBadgeNumber = function () { return cordova(this, "getBadgeNumber", {}, arguments); };
    FirebaseX.prototype.clearAllNotifications = function () { return cordova(this, "clearAllNotifications", { "platforms": ["Android"] }, arguments); };
    FirebaseX.prototype.subscribe = function (topic) { return cordova(this, "subscribe", {}, arguments); };
    FirebaseX.prototype.unsubscribe = function (topic) { return cordova(this, "unsubscribe", {}, arguments); };
    FirebaseX.prototype.createChannel = function (channelOptions) { return cordova(this, "createChannel", {}, arguments); };
    FirebaseX.prototype.setDefaultChannel = function (channelOptions) { return cordova(this, "setDefaultChannel", {}, arguments); };
    FirebaseX.prototype.deleteChannel = function (channelID) { return cordova(this, "deleteChannel", {}, arguments); };
    FirebaseX.prototype.listChannels = function () { return cordova(this, "listChannels", {}, arguments); };
    FirebaseX.prototype.setAnalyticsCollectionEnabled = function (enabled) { return cordova(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    FirebaseX.prototype.logEvent = function (type, data) { return cordova(this, "logEvent", {}, arguments); };
    FirebaseX.prototype.setScreenName = function (name) { return cordova(this, "setScreenName", {}, arguments); };
    FirebaseX.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    FirebaseX.prototype.setUserProperty = function (name, value) { return cordova(this, "setUserProperty", {}, arguments); };
    FirebaseX.prototype.setCrashlyticsUserId = function (userId) { return cordova(this, "setCrashlyticsUserId", {}, arguments); };
    FirebaseX.prototype.sendCrash = function () { return cordova(this, "sendCrash", {}, arguments); };
    FirebaseX.prototype.logMessage = function (message) { return cordova(this, "logMessage", {}, arguments); };
    FirebaseX.prototype.logError = function (error) { return cordova(this, "logError", {}, arguments); };
    FirebaseX.prototype.verifyPhoneNumber = function (success, error, phoneNumber, timeoutDuration) {
        if (timeoutDuration === void 0) { timeoutDuration = 0; }
        return cordova(this, "verifyPhoneNumber", {}, arguments);
    };
    FirebaseX.prototype.signInWithCredential = function (verificationId, code, success, error) { return cordova(this, "signInWithCredential", {}, arguments); };
    FirebaseX.prototype.linkUserWithCredential = function (verificationId, code, success, error) { return cordova(this, "linkUserWithCredential", {}, arguments); };
    FirebaseX.prototype.fetch = function (cacheExpirationSeconds) { return cordova(this, "fetch", {}, arguments); };
    FirebaseX.prototype.activateFetched = function () { return cordova(this, "activateFetched", {}, arguments); };
    FirebaseX.prototype.getValue = function (key) { return cordova(this, "getValue", {}, arguments); };
    FirebaseX.prototype.getByteArray = function (key) { return cordova(this, "getByteArray", {}, arguments); };
    FirebaseX.prototype.getInfo = function () { return cordova(this, "getInfo", {}, arguments); };
    FirebaseX.prototype.setConfigSettings = function (settings) { return cordova(this, "setConfigSettings", {}, arguments); };
    FirebaseX.prototype.setDefaults = function (settings) { return cordova(this, "setDefaults", {}, arguments); };
    FirebaseX.prototype.startTrace = function (name) { return cordova(this, "startTrace", {}, arguments); };
    FirebaseX.prototype.incrementCounter = function (name) { return cordova(this, "incrementCounter", {}, arguments); };
    FirebaseX.prototype.stopTrace = function (name) { return cordova(this, "stopTrace", {}, arguments); };
    FirebaseX.pluginName = "FirebaseX";
    FirebaseX.plugin = "cordova-plugin-firebasex";
    FirebaseX.pluginRef = "FirebasePlugin";
    FirebaseX.repo = "https://github.com/dpa99c/cordova-plugin-firebasex";
    FirebaseX.platforms = ["Android", "iOS"];
    FirebaseX = __decorate([
        Injectable()
    ], FirebaseX);
    return FirebaseX;
}(IonicNativePlugin));
export { FirebaseX };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLXgvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE2R0gsNkJBQWlCOzs7O0lBTTlDLDRCQUFRO0lBV1Isa0NBQWM7SUFVZCxnQ0FBWTtJQWFaLHVDQUFtQjtJQWFuQixxQ0FBaUI7SUFXakIsbUNBQWU7SUFTZixpQ0FBYTtJQVFiLDhCQUFVO0lBVVYsa0NBQWMsYUFBQyxXQUFtQjtJQVNsQyxrQ0FBYztJQVdkLHlDQUFxQjtJQVVyQiw2QkFBUyxhQUFDLEtBQWE7SUFVdkIsK0JBQVcsYUFBQyxLQUFhO0lBY3pCLGlDQUFhLGFBQUMsY0FBK0I7SUFhN0MscUNBQWlCLGFBQUMsY0FBK0I7SUFXakQsaUNBQWEsYUFBQyxTQUFpQjtJQVUvQixnQ0FBWTtJQVVaLGlEQUE2QixhQUFDLE9BQWdCO0lBVzlDLDRCQUFRLGFBQUMsSUFBWSxFQUFFLElBQVM7SUFVaEMsaUNBQWEsYUFBQyxJQUFZO0lBVTFCLDZCQUFTLGFBQUMsTUFBYztJQVd4QixtQ0FBZSxhQUFDLElBQVksRUFBRSxLQUFhO0lBZTNDLHdDQUFvQixhQUFDLE1BQWM7SUFXbkMsNkJBQVM7SUFXVCw4QkFBVSxhQUFDLE9BQWU7SUFhMUIsNEJBQVEsYUFBQyxLQUFhO0lBK0J0QixxQ0FBaUIsYUFDZixPQUF5QyxFQUN6QyxLQUE0QixFQUM1QixXQUFtQixFQUNuQixlQUFtQjtRQUFuQixnQ0FBQSxFQUFBLG1CQUFtQjs7O0lBY3JCLHdDQUFvQixhQUNsQixjQUFzQixFQUN0QixJQUFZLEVBQ1osT0FBbUIsRUFDbkIsS0FBNEI7SUFjOUIsMENBQXNCLGFBQ3BCLGNBQXNCLEVBQ3RCLElBQVksRUFDWixPQUFtQixFQUNuQixLQUE0QjtJQVc5Qix5QkFBSyxhQUFDLHNCQUErQjtJQVNyQyxtQ0FBZTtJQVVmLDRCQUFRLGFBQUMsR0FBVztJQVVwQixnQ0FBWSxhQUFDLEdBQVc7SUFTeEIsMkJBQU87SUFVUCxxQ0FBaUIsYUFBQyxRQUFhO0lBVS9CLCtCQUFXLGFBQUMsUUFBYTtJQVV6Qiw4QkFBVSxhQUFDLElBQVk7SUFZdkIsb0NBQWdCLGFBQUMsSUFBWTtJQVU3Qiw2QkFBUyxhQUFDLElBQVk7Ozs7OztJQXJjWCxTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBL0d0QjtFQStHK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hhbm5lbE9wdGlvbnMge1xuICAvKipcbiAgICogQ2hhbm5lbCBJRCAtIG11c3QgYmUgdW5pcXVlIHBlciBhcHAgcGFja2FnZVxuICAgKi9cbiAgaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hhbm5lbCBuYW1lLiBEZWZhdWx0OiBlbXB0eSBzdHJpbmdcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoYW5uZWwgZGVzY3JpcHRpb24uIERlZmF1bHQ6IGVtcHR5IHN0cmluZ1xuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3VuZCB0byBwbGF5IG9uY2UgYSBwdXNoIGNvbWVzLiBEZWZhdWx0IHZhbHVlOiAnZGVmYXVsdCdcbiAgICogVmFsdWVzIGFsbG93ZWQ6XG4gICAqICdkZWZhdWx0JyAtIHBsYXlzIHRoZSBkZWZhdWx0IG5vdGlmaWNhdGlvbiBzb3VuZFxuICAgKiAncmluZ3RvbmUnIC0gcGxheXMgdGhlIGN1cnJlbnRseSBzZXQgcmluZ3RvbmVcbiAgICogJ2ZhbHNlJyAtIHNpbGVudDsgZG9uJ3QgcGxheSBhbnkgc291bmRcbiAgICogZmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgb2YgdGhlIHNvdW5kIGZpbGUgbG9jYXRlZCBpbiAnL3Jlcy9yYXcnIHdpdGhvdXQgZmlsZSBleHRlbnNpb24gKG15c291bmQubXAzIC0+IG15c291bmQpXG4gICAqL1xuICBzb3VuZD86IHN0cmluZztcblxuICAvKipcbiAgICogVmlicmF0ZSBvbiBuZXcgbm90aWZpY2F0aW9uLiBEZWZhdWx0IHZhbHVlOiB0cnVlXG4gICAqIFBvc3NpYmxlIHZhbHVlczpcbiAgICogQm9vbGVhbiAtIHZpYnJhdGUgb3Igbm90XG4gICAqIEFycmF5IC0gdmlicmF0aW9uIHBhdHRlcm4gLSBlLmcuIFs1MDAsIDIwMCwgNTAwXSAtIG1pbGxpc2Vjb25kcyB2aWJyYXRlLCBtaWxsaXNlY29uZHMgcGF1c2UsIHZpYnJhdGUsIHBhdXNlLCBldGMuXG4gICAqL1xuICB2aWJyYXRpb24/OiBib29sZWFuIHwgbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYmxpbmsgdGhlIExFRFxuICAgKi9cbiAgbGlnaHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBMRUQgY29sb3IgaW4gQVJHQiBmb3JtYXQgLSB0aGlzIGV4YW1wbGUgQkxVRSBjb2xvci4gSWYgc2V0IHRvIC0xLCBsaWdodCBjb2xvciB3aWxsIGJlIGRlZmF1bHQuIERlZmF1bHQgdmFsdWU6IC0xLlxuICAgKi9cbiAgbGlnaHRDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogSW1wb3J0YW5jZSAtIGludGVnZXIgZnJvbSAwIHRvIDQuIERlZmF1bHQgdmFsdWU6IDRcbiAgICogMCAtIG5vbmUgLSBubyBzb3VuZCwgZG9lcyBub3Qgc2hvdyBpbiB0aGUgc2hhZGVcbiAgICogMSAtIG1pbiAtIG5vIHNvdW5kLCBvbmx5IHNob3dzIGluIHRoZSBzaGFkZSwgYmVsb3cgdGhlIGZvbGRcbiAgICogMiAtIGxvdyAtIG5vIHNvdW5kLCBzaG93cyBpbiB0aGUgc2hhZGUsIGFuZCBwb3RlbnRpYWxseSBpbiB0aGUgc3RhdHVzIGJhclxuICAgKiAzIC0gZGVmYXVsdCAtIHNob3dzIGV2ZXJ5d2hlcmUsIG1ha2VzIG5vaXNlLCBidXQgZG9lcyBub3QgdmlzdWFsbHkgaW50cnVkZVxuICAgKiA0IC0gaGlnaCAtIHNob3dzIGV2ZXJ5d2hlcmUsIG1ha2VzIG5vaXNlIGFuZCBwZWVrc1xuICAgKi9cbiAgaW1wb3J0YW5jZT86IDAgfCAxIHwgMiB8IDMgfCA0O1xuXG4gIC8qKlxuICAgKiBTaG93IGJhZGdlIG92ZXIgYXBwIGljb24gd2hlbiBub24gaGFuZGxlZCBwdXNoZXMgYXJlIHByZXNlbnQuIERlZmF1bHQgdmFsdWU6IHRydWVcbiAgICovXG4gIGJhZGdlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBtZXNzYWdlIG9uIGxvY2tlZCBzY3JlZW4uIERlZmF1bHQgdmFsdWU6IDFcbiAgICogUG9zc2libGUgdmFsdWVzIChkZWZhdWx0IDEpOlxuICAgKiAtMSAtIHNlY3JldCAtIERvIG5vdCByZXZlYWwgYW55IHBhcnQgb2YgdGhlIG5vdGlmaWNhdGlvbiBvbiBhIHNlY3VyZSBsb2Nrc2NyZWVuLlxuICAgKiAwIC0gcHJpdmF0ZSAtIFNob3cgdGhlIG5vdGlmaWNhdGlvbiBvbiBhbGwgbG9ja3NjcmVlbnMsIGJ1dCBjb25jZWFsIHNlbnNpdGl2ZSBvciBwcml2YXRlIGluZm9ybWF0aW9uIG9uIHNlY3VyZSBsb2Nrc2NyZWVucy5cbiAgICogMSAtIHB1YmxpYyAtIFNob3cgdGhlIG5vdGlmaWNhdGlvbiBpbiBpdHMgZW50aXJldHkgb24gYWxsIGxvY2tzY3JlZW5zLlxuICAgKi9cbiAgdmlzaWJpbGl0eT86IC0xIHwgMCB8IDE7XG59XG5cbi8qKlxuICogQG5hbWUgRmlyZWJhc2UgWFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBicmluZ3MgcHVzaCBub3RpZmljYXRpb25zLCBhbmFseXRpY3MsIGV2ZW50IHRyYWNraW5nLCBjcmFzaCByZXBvcnRpbmcgYW5kIG1vcmUgZnJvbSBHb29nbGUgRmlyZWJhc2UgdG8geW91ciBDb3Jkb3ZhIHByb2plY3QhIEFuZHJvaWQgYW5kIGlPUyBzdXBwb3J0ZWQuXG4gKiBJdCBpcyBhIG1haW50YWluZWQgZm9yayBmcm9tIHVubWFpbnRhaW5lZCBpb25pYy1uYXZpdGUgcGx1Z2luIGNhbGxlZCBGaXJlYmFzZS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlWCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2UteCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VYOiBGaXJlYmFzZVgpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlWC5nZXRUb2tlbigpXG4gKiAgIC50aGVuKHRva2VuID0+IGNvbnNvbGUubG9nKGBUaGUgdG9rZW4gaXMgJHt0b2tlbn1gKSkgLy8gc2F2ZSB0aGUgdG9rZW4gc2VydmVyLXNpZGUgYW5kIHVzZSBpdCB0byBwdXNoIG5vdGlmaWNhdGlvbnMgdG8gdGhpcyBkZXZpY2VcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdG9rZW4nLCBlcnJvcikpO1xuICpcbiAqIHRoaXMuZmlyZWJhc2VYLm9uTWVzc2FnZVJlY2VpdmVkKClcbiAqICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGBVc2VyIG9wZW5lZCBhIG5vdGlmaWNhdGlvbiAke2RhdGF9YCkpO1xuICpcbiAqIHRoaXMuZmlyZWJhc2VYLm9uVG9rZW5SZWZyZXNoKClcbiAqICAgLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4gY29uc29sZS5sb2coYEdvdCBhIG5ldyB0b2tlbiAke3Rva2VufWApKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIElDaGFubmVsT3B0aW9uc1xuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZVgnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZXgnLFxuICBwbHVnaW5SZWY6ICdGaXJlYmFzZVBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNleCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlWCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBGQ00gdG9rZW4uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVsbCB8IHN0cmluZz59IE5vdGUgdGhhdCB0b2tlbiB3aWxsIGJlIG51bGwgaWYgaXQgaGFzIG5vdCBiZWVuIGVzdGFibGlzaGVkIHlldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUb2tlbigpOiBQcm9taXNlPG51bGwgfCBzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gYSB0b2tlbiBpcyByZWZyZXNoZWQuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uVG9rZW5SZWZyZXNoKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGlPUyBvbmx5LlxuICAgKiBHZXQgdGhlIEFQTlMgdG9rZW4gYWxsb2NhdGVkIGZvciB0aGlzIGFwcCBpbnN0YWxsLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bGwgfCBzdHJpbmc+fSBOb3RlIHRoYXQgdG9rZW4gd2lsbCBiZSBudWxsIGlmIGl0IGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZCB5ZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QVBOU1Rva2VuKCk6IFByb21pc2U8bnVsbCB8IHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpT1Mgb25seS5cbiAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciB0byBjYWxsIHdoZW4gdGhlIEFQTlMgdG9rZW4gaXMgYWxsb2NhdGVkLlxuICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uY2Ugd2hlbiByZW1vdGUgbm90aWZpY2F0aW9ucyBwZXJtaXNzaW9uIGhhcyBiZWVuIGdyYW50ZWQgYnkgdGhlIHVzZXIgYXQgcnVudGltZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25BcG5zVG9rZW5SZWNlaXZlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbjpcbiAgICogLSBhIG5vdGlmaWNhdGlvbiBvciBkYXRhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgYnkgdGhlIGFwcFxuICAgKiAtIGEgc3lzdGVtIG5vdGlmaWNhdGlvbiBpcyB0YXBwZWQgYnkgdGhlIHVzZXJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25NZXNzYWdlUmVjZWl2ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR3JhbnQgcGVybWlzc2lvbiB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucyAod2lsbCB0cmlnZ2VyIHByb21wdCkgYW5kIHJldHVybiBoYXNQZXJtaXNzaW9uOiB0cnVlLiBpT1Mgb25seSAoQW5kcm9pZCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZSkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgZ3JhbnRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb24gdG8gcmVjZWl2ZSBwdXNoIG5vdGlmaWNhdGlvbnMgYW5kIHJldHVybiBoYXNQZXJtaXNzaW9uOiB0cnVlLiBpT1Mgb25seSAoQW5kcm9pZCB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZSkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgZnJvbSBmaXJlYmFzZSwgdXNlZCB0byBzdG9wIHJlY2VpdmluZyBwdXNoIG5vdGlmaWNhdGlvbnMuIENhbGwgdGhpcyB3aGVuIHlvdSBsb2dvdXQgdXNlciBmcm9tIHlvdXIgYXBwLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bnJlZ2lzdGVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIG51bWJlciBvbiB0aGUgaWNvbiBiYWRnZS4gU2V0IDAgdG8gY2xlYXIgdGhlIGJhZGdlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYWRnZU51bWJlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEJhZGdlTnVtYmVyKGJhZGdlTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaWNvbiBiYWRnZSBudW1iZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QmFkZ2VOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIHBlbmRpbmcgbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBkcmF3ZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIGNsZWFyQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSB0b3BpYy4gVG9waWMgbWVzc2FnaW5nIGFsbG93cyB5b3UgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gbXVsdGlwbGUgZGV2aWNlcyB0aGF0IGhhdmUgb3B0ZWQgaW4gdG8gYSBwYXJ0aWN1bGFyIHRvcGljLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gYSB0b3BpYy4gVGhpcyB3aWxsIHN0b3AgeW91IHJlY2VpdmluZyBtZXNzYWdlcyBmb3IgdGhhdCB0b3BpYy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgOCsgb25seS4gQ3JlYXRlcyBhIGN1c3RvbSBjaGFubmVsIHRvIGJlIHVzZWQgYnkgbm90aWZpY2F0aW9uIG1lc3NhZ2VzIHdoaWNoIGhhdmUgdGhlIGNoYW5uZWwgcHJvcGVydHkgc2V0IGluIHRoZSBtZXNzYWdlIHBheWxvYWQgdG8gdGhlIGlkIG9mIHRoZSBjcmVhdGVkIGNoYW5uZWw6XG4gICAqIC0gZm9yIGJhY2tncm91bmQgKHN5c3RlbSkgbm90aWZpY2F0aW9uczogYW5kcm9pZC5ub3RpZmljYXRpb24uY2hhbm5lbF9pZFxuICAgKiAtIGZvciBmb3JlZ3JvdW5kL2RhdGEgbm90aWZpY2F0aW9uczogZGF0YS5ub3RpZmljYXRpb25fYW5kcm9pZF9jaGFubmVsX2lkXG4gICAqXG4gICAqIENhbGxpbmcgb24gQW5kcm9pZCA3IG9yIGJlbG93IG9yIGFub3RoZXIgcGxhdGZvcm0gd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAgICogQHBhcmFtIHtJQ2hhbm5lbE9wdGlvbnN9IGNoYW5uZWxPcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlQ2hhbm5lbChjaGFubmVsT3B0aW9uczogSUNoYW5uZWxPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW5kcm9pZCA4KyBvbmx5LiBPdmVycmlkZXMgdGhlIHByb3BlcnRpZXMgZm9yIHRoZSBkZWZhdWx0IGNoYW5uZWwuXG4gICAqIFRoZSBkZWZhdWx0IGNoYW5uZWwgaXMgdXNlZCBpZiBubyBvdGhlciBjaGFubmVsIGV4aXN0cyBvciBpcyBzcGVjaWZpZWQgaW4gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQW55IG9wdGlvbnMgbm90IHNwZWNpZmllZCB3aWxsIG5vdCBiZSBvdmVycmlkZGVuLiBTaG91bGQgYmUgY2FsbGVkIGFzIHNvb24gYXMgcG9zc2libGUgKG9uIGFwcCBzdGFydCkgc28gZGVmYXVsdCBub3RpZmljYXRpb25zIHdpbGwgd29yayBhcyBleHBlY3RlZC5cbiAgICogQ2FsbGluZyBvbiBBbmRyb2lkIDcgb3IgYmVsb3cgb3IgYW5vdGhlciBwbGF0Zm9ybSB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICAgKiBAcGFyYW0ge0lDaGFubmVsT3B0aW9uc30gY2hhbm5lbE9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXREZWZhdWx0Q2hhbm5lbChjaGFubmVsT3B0aW9uczogSUNoYW5uZWxPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW5kcm9pZCA4KyBvbmx5LiBSZW1vdmVzIGEgcHJldmlvdXNseSBkZWZpbmVkIGNoYW5uZWwuXG4gICAqIENhbGxpbmcgb24gQW5kcm9pZCA3IG9yIGJlbG93IG9yIGFub3RoZXIgcGxhdGZvcm0gd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxJRFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZUNoYW5uZWwoY2hhbm5lbElEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmRyb2lkIDgrIG9ubHkuIEdldHMgYSBsaXN0IG9mIGFsbCBjaGFubmVscy5cbiAgICogQ2FsbGluZyBvbiBBbmRyb2lkIDcgb3IgYmVsb3cgb3IgYW5vdGhlciBwbGF0Zm9ybSB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpc3RDaGFubmVscygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUvZGlzYWJsZSBhbmFseXRpY3MgY29sbGVjdGlvbiAodXNlZnVsIGZvciBHRFBSL3ByaXZhY3kgc2V0dGluZ3MpLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhbiBldmVudCB1c2luZyBBbmFseXRpY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dFdmVudCh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBzY3JlZW4gaW4gQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFNjcmVlbiBuYW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2NyZWVuTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB1c2VyIGlkIGZvciB1c2UgaW4gQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB1c2VyIHByb3BlcnR5IGZvciB1c2UgaW4gQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgQ3Jhc2hseXRpY3MgdXNlciBpZGVudGlmaWVyLlxuICAgKiBUbyBkaWFnbm9zZSBhbiBpc3N1ZSwgaXTigJlzIG9mdGVuIGhlbHBmdWwgdG8ga25vdyB3aGljaCBvZiB5b3VyIHVzZXJzIGV4cGVyaWVuY2VkIGEgZ2l2ZW4gY3Jhc2guXG4gICAqIENyYXNobHl0aWNzIGluY2x1ZGVzIGEgd2F5IHRvIGFub255bW91c2x5IGlkZW50aWZ5IHVzZXJzIGluIHlvdXIgY3Jhc2ggcmVwb3J0cy5cbiAgICogVG8gYWRkIHVzZXIgSURzIHRvIHlvdXIgcmVwb3J0cywgYXNzaWduIGVhY2ggdXNlciBhIHVuaXF1ZSBpZGVudGlmaWVyIGluIHRoZSBmb3JtIG9mIGFuIElEIG51bWJlciwgdG9rZW4sIG9yIGhhc2hlZCB2YWx1ZS5cbiAgICpcbiAgICogTW9yZSBpbmZvIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2NyYXNobHl0aWNzL2N1c3RvbWl6ZS1jcmFzaC1yZXBvcnRzP2F1dGh1c2VyPTAjc2V0X3VzZXJfaWRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q3Jhc2hseXRpY3NVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW11bGF0ZXMgKGNhdXNlcykgYSBmYXRhbCBuYXRpdmUgY3Jhc2ggd2hpY2ggY2F1c2VzIGEgY3Jhc2ggZXZlbnQgdG8gYmUgc2VudCB0byBDcmFzaGx5dGljcyAodXNlZnVsIGZvciB0ZXN0aW5nKS5cbiAgICogU2VlIHRoZSBGaXJlYmFzZSBkb2N1bWVudGF0aW9uIHJlZ2FyZGluZyBjcmFzaCB0ZXN0aW5nLlxuICAgKiBDcmFzaGVzIHdpbGwgYXBwZWFyIHVuZGVyIEV2ZW50IHR5cGUgPSBcIkNyYXNoZXNcIiBpbiB0aGUgQ3Jhc2hseXRpY3MgY29uc29sZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kQ3Jhc2goKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBjcmFzaC1yZWxhdGVkIGxvZyBtZXNzYWdlIHRoYXQgd2lsbCBhcHBlYXIgaW4gdGhlIExvZ3Mgc2VjdGlvbiBvZiB0aGUgbmV4dCBuYXRpdmUgY3Jhc2ggZXZlbnQuXG4gICAqIE5vdGU6IGlmIHlvdSBkb24ndCB0aGVuIGNyYXNoLCB0aGUgbWVzc2FnZSB3b24ndCBiZSBzZW50ISBBbHNvIGxvZ3MgdGhlIG1lc3NhZ2UgdG8gdGhlIG5hdGl2ZSBkZXZpY2UgY29uc29sZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbm9uLWZhdGFsIGVycm9yIGV2ZW50IHRvIENyYXNobHl0aWNzLiBJbiBhIENvcmRvdmEgYXBwLCB5b3UgbWF5IHVzZSB0aGlzIHRvIGxvZyB1bmhhbmRsZWQgSmF2YXNjcmlwdCBleGNlcHRpb25zLCBmb3IgZXhhbXBsZS5cbiAgICogVGhlIGV2ZW50IHdpbGwgYXBwZWFyIHVuZGVyIEV2ZW50IHR5cGUgPSBcIk5vbi1mYXRhbHNcIiBpbiB0aGUgQ3Jhc2hseXRpY3MgY29uc29sZS5cbiAgICogVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBhcHBlYXIgaW4gdGhlIExvZ3Mgc2VjdGlvbiBvZiB0aGUgbm9uLWZhdGFsIGVycm9yIGV2ZW50LlxuICAgKiBBbHNvIGxvZ3MgdGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhlIG5hdGl2ZSBkZXZpY2UgY29uc29sZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nRXJyb3IoZXJyb3I6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHZlcmlmaWNhdGlvbiBvZiBhIHBob25lIG51bWJlciBpbiBvcmRlciB0byBhdXRoZW50aWNhdGUgYSB1c2VyIGFuZCBzaWduIHRoZW4gaW50byBGaXJlYmFzZSBpbiB5b3VyIGFwcC5cbiAgICpcbiAgICogTk9URTogVGhpcyB3aWxsIG9ubHkgd29yayBvbiBwaHlzaWNhbCBkZXZpY2VzIHdpdGggYSBTSU0gY2FyZCAobm90IGlPUyBTaW11bGF0b3Igb3IgQW5kcm9pZCBFbXVsYXRvcilcbiAgICpcbiAgICogSW4gcmVzcG9uc2UgdG8geW91ciByZXF1ZXN0LCB5b3UnbGwgcmVjZWl2ZSBhIHZlcmlmaWNhdGlvbiBJRCB3aGljaCB5b3UgY2FuIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSB2ZXJpZmljYXRpb24gY29kZVxuICAgKiB0byBzaWduIHRoZSB1c2VyIGluLlxuICAgKlxuICAgKiBPbiBpT1MgYW5kIHNvbWUgQW5kcm9pZCBkZXZpY2VzLCB0aGUgdXNlciB3aWxsIHJlY2VpdmUgYW5kIFNNUyBjb250YWluaW5nIHRoZSB2ZXJpZmljYXRpb24gY29kZSB3aGljaCB0aGV5IG11c3QgbWFudWFsbHkgZW50ZXJcbiAgICogaW50byB5b3VyIGFwcC5cbiAgICpcbiAgICogU29tZSBBbmRyb2lkIGRldmljZXMgc3VwcG9ydCBcImluc3RhbnQgdmVyZmljYXRpb25cIiwgaW4gd2hpY2ggY2FzZSBhbiBTTVMgd2lsbCBub3QgYmUgc2VuZCBhbmQgeW91IHdpbGwgYmUgcmV0dXJuZWRcbiAgICogdGhlIHZlcmlmaWNhdGlvbiBjb2RlIGFsb25nIHdpdGggdGhlIHZlcmlmaWNhdGlvbiBJRC4gSW4gdGhpcyBjYXNlLCB0aGUgdXNlciBkb2Vzbid0IG5lZWQgdG8gZG8gYW55dGhpbmcgaW4gb3JkZXIgZm9yIHlvdVxuICAgKiB0byBzaWduIHRoZW0gaW4uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBwYXNzIHtvYmplY3R9IGNyZWRlbnRpYWxzIHRvIGFzIGFuIGFyZ3VtZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yIC0gY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBwYXNzZWQgYSB7c3RyaW5nfSBlcnJvciBtZXNzYWdlIGFzIGFuIGFyZ3VtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZU51bWJlciAtIHBob25lIG51bWJlciB0byB2ZXJpZnlcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lT3V0RHVyYXRpb24gLSAob3B0aW9uYWwpIHRpbWUgdG8gd2FpdCBpbiBzZWNvbmRzIGJlZm9yZSB0aW1pbmcgb3V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmYWtlVmVyaWZpY2F0aW9uQ29kZSAtIChvcHRpb25hbCkgdG8gdGVzdCBpbnN0YW50IHZlcmlmaWNhdGlvbiBvbiBBbmRyb2lkICxzcGVjaWZ5IGEgZmFrZSB2ZXJpZmljYXRpb24gY29kZSB0byByZXR1cm4gZm9yIHdoaXRlbGlzdGVkIHBob25lIG51bWJlcnMuXG4gICAqXG4gICAqIFRoZSBzdWNjZXNzIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIGEgY3JlZGVudGlhbCBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAqICAgaW5zdGFudFZlcmlmaWNhdGlvbiB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZSBBbmRyb2lkIGRldmljZSBzdXBwb3J0cyBpbnN0YW50IHZlcmlmaWNhdGlvbiwgaW4gd2hpY2ggY2FzZSB0aGUgdmVyaWZpY2F0aW9uIGNvZGUgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgY3JlZGVudGlhbCBvYmplY3QuIElmIHRoaXMgaXMgZmFsc2UsIHRoZSBkZXZpY2Ugd2lsbCBiZSBzZW50IGFuIFNNUyBjb250YWluaW5nIHRoZSB2ZXJpZmljYXRpb24gY29kZSBmb3IgdGhlIHVzZXIgdG8gbWFudWFsbHkgZW50ZXIgaW50byB5b3VyIGFwcC4gQWx3YXlzIGZhbHNlIG9uIGlPUy5cbiAgICogICB2ZXJpZmljYXRpb25JZCB7c3RyaW5nfSAtIHRoZSB2ZXJpZmljYXRpb24gSUQgeW91J2xsIG5lZWQgdG8gcGFzcyBhbG9uZyB3aXRoIHRoZSB2ZXJpZmljYXRpb24gY29kZSB0byBzaWduIHRoZSB1c2VyIGluLiBBbHdheXMgcmV0dXJuZWQgb24gYm90aCBBbmRyb2lkICYgaU9TLlxuICAgKiAgIGNvZGUge3N0cmluZ30gLSB2ZXJpZmljYXRpb24gY29kZS4gV2lsbCBvbmx5IGJlIHByZXNlbnQgaWYgaW5zdGFudFZlcmlmaWNhdGlvbiBpcyB0cnVlLiBBbHdheXMgdW5kZWZpbmVkIG9uIGlPUy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5UGhvbmVOdW1iZXIoXG4gICAgc3VjY2VzczogKHZhbHVlOiBzdHJpbmcgfCBvYmplY3QpID0+IHZvaWQsXG4gICAgZXJyb3I6IChlcnI6IHN0cmluZykgPT4gdm9pZCxcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nLFxuICAgIHRpbWVvdXREdXJhdGlvbiA9IDBcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2lnbnMgdGhlIHVzZXIgaW50byBGaXJlYmFzZSB3aXRoIGNyZWRlbnRpYWxzIG9idGFpbmVkIHVzaW5nIHZlcmlmeVBob25lTnVtYmVyKCkuXG4gICAqIFNlZSB0aGUgQW5kcm9pZC0gYW5kIGlPUy1zcGVjaWZpYyBGaXJlYmFzZSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJpZmljYXRpb25JZCAtIHRoZSB2ZXJpZmljYXRpb24gSUQgcmV0dXJuZWQgaW4gdGhlIGNyZWRlbnRpYWxzIG9iamVjdCB0byB0aGUgdmVyaWZ5UGhvbmVOdW1iZXIoKSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIHRoZSBhY3RpdmF0aW9uIGNvZGUsIGVpdGhlciByZXR1cm5lZCBpbiB0aGUgY3JlZGVudGlhbHMgb2JqZWN0IHRvIHRoZSB2ZXJpZnlQaG9uZU51bWJlcigpIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgdXNpbmcgSW5zdGFudCBWZXJpZmljYXRpb24gb24gQW5kcm9pZCwgb3IgdGhlIGFjdGl2YXRpb24gY29kZSBhcyBlbnRlcmVkIGJ5IHRoZSB1c2VyIGZyb20gdGhlIHJlY2VpdmVkIFNNUyBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCBvbiBzdWNjZXNzZnVsIHNpZ24taW4gdXNpbmcgY3JlZGVudGlhbHNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgLSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHBhc3NlZCBhIHtzdHJpbmd9IGVycm9yIG1lc3NhZ2UgYXMgYW4gYXJndW1lbnRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2lnbkluV2l0aENyZWRlbnRpYWwoXG4gICAgdmVyaWZpY2F0aW9uSWQ6IHN0cmluZyxcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcbiAgICBlcnJvcjogKGVycjogc3RyaW5nKSA9PiB2b2lkXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpbmtzIHRoZSB1c2VyIGFjY291bnQgdG8gYW4gZXhpc3RpbmcgRmlyZWJhc2UgdXNlciBhY2NvdW50IHdpdGggY3JlZGVudGlhbHMgb2J0YWluZWQgdXNpbmcgdmVyaWZ5UGhvbmVOdW1iZXIoKS5cbiAgICogU2VlIHRoZSBBbmRyb2lkLSBhbmQgaU9TLXNwZWNpZmljIEZpcmViYXNlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcmlmaWNhdGlvbklkIC0gdGhlIHZlcmlmaWNhdGlvbiBJRCByZXR1cm5lZCBpbiB0aGUgY3JlZGVudGlhbHMgb2JqZWN0IHRvIHRoZSB2ZXJpZnlQaG9uZU51bWJlcigpIHN1Y2Nlc3MgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gdGhlIGFjdGl2YXRpb24gY29kZSwgZWl0aGVyIHJldHVybmVkIGluIHRoZSBjcmVkZW50aWFscyBvYmplY3QgdG8gdGhlIHZlcmlmeVBob25lTnVtYmVyKCkgc3VjY2VzcyBjYWxsYmFjayBpZiB1c2luZyBJbnN0YW50IFZlcmlmaWNhdGlvbiBvbiBBbmRyb2lkLCBvciB0aGUgYWN0aXZhdGlvbiBjb2RlIGFzIGVudGVyZWQgYnkgdGhlIHVzZXIgZnJvbSB0aGUgcmVjZWl2ZWQgU01TIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIG9uIHN1Y2Nlc3NmdWwgc2lnbi1pbiB1c2luZyBjcmVkZW50aWFsc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciAtIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgcGFzc2VkIGEge3N0cmluZ30gZXJyb3IgbWVzc2FnZSBhcyBhbiBhcmd1bWVudFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsaW5rVXNlcldpdGhDcmVkZW50aWFsKFxuICAgIHZlcmlmaWNhdGlvbklkOiBzdHJpbmcsXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXG4gICAgZXJyb3I6IChlcnI6IHN0cmluZykgPT4gdm9pZFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBSZW1vdGUgQ29uZmlnIHBhcmFtZXRlciB2YWx1ZXMgZm9yIHlvdXIgYXBwLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY2FjaGVFeHBpcmF0aW9uU2Vjb25kcyBzcGVjaWZ5IHRoZSBjYWNoZUV4cGlyYXRpb25TZWNvbmRzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2goY2FjaGVFeHBpcmF0aW9uU2Vjb25kcz86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIHRoZSBSZW1vdGUgQ29uZmlnIGZldGNoZWQgY29uZmlnLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlRmV0Y2hlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIFJlbW90ZSBDb25maWcgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgb25seS4gUmV0cmlldmUgYSBSZW1vdGUgQ29uZmlnIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRCeXRlQXJyYXkoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmRyb2lkIG9ubHkuIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgRmlyZWJhc2VSZW1vdGVDb25maWcgc2luZ2xldG9uIG9iamVjdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgb25seS4gQ2hhbmdlIHRoZSBzZXR0aW5ncyBmb3IgdGhlIEZpcmViYXNlUmVtb3RlQ29uZmlnIG9iamVjdCdzIG9wZXJhdGlvbnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENvbmZpZ1NldHRpbmdzKHNldHRpbmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmRyb2lkIG9ubHkuIFNldCBkZWZhdWx0cyBpbiB0aGUgUmVtb3RlIENvbmZpZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RGVmYXVsdHMoc2V0dGluZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgdHJhY2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRUcmFjZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBjb3VudCB0aGUgcGVyZm9ybWFuY2UtcmVsYXRlZCBldmVudHMgdGhhdCBvY2N1ciBpbiB5b3VyIGFwcCAoc3VjaCBhcyBjYWNoZSBoaXRzIG9yIHJldHJpZXMpLFxuICAgKiBhZGQgYSBsaW5lIG9mIGNvZGUgc2ltaWxhciB0byB0aGUgZm9sbG93aW5nIHdoZW5ldmVyIHRoZSBldmVudCBvY2N1cnMsXG4gICAqIHVzaW5nIGEgc3RyaW5nIG90aGVyIHRoYW4gcmV0cnkgdG8gbmFtZSB0aGF0IGV2ZW50IGlmIHlvdSBhcmUgY291bnRpbmcgYSBkaWZmZXJlbnQgdHlwZSBvZiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbmNyZW1lbnRDb3VudGVyKG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHRyYWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BUcmFjZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
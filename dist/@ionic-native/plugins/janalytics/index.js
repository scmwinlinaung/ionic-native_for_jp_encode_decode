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
var JAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(JAnalyticsOriginal, _super);
    function JAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JAnalyticsOriginal.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    JAnalyticsOriginal.prototype.initCrashHandler = function () { return cordova(this, "initCrashHandler", {}, arguments); };
    JAnalyticsOriginal.prototype.stopCrashHandler = function () { return cordova(this, "stopCrashHandler", {}, arguments); };
    JAnalyticsOriginal.prototype.onPageStart = function (params) { return cordova(this, "onPageStart", {}, arguments); };
    JAnalyticsOriginal.prototype.onPageEnd = function (params) { return cordova(this, "onPageEnd", {}, arguments); };
    JAnalyticsOriginal.prototype.addCountEvent = function (params) { return cordova(this, "addCountEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addCalculateEvent = function (params) { return cordova(this, "addCalculateEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addLoginEvent = function (params) { return cordova(this, "addLoginEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addRegisterEvent = function (params) { return cordova(this, "addRegisterEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addBrowseEvent = function (params) { return cordova(this, "addBrowseEvent", {}, arguments); };
    JAnalyticsOriginal.prototype.addPurchaseEvent = function (params) { return cordova(this, "addPurchaseEvent", {}, arguments); };
    JAnalyticsOriginal.pluginName = "JAnalytics";
    JAnalyticsOriginal.plugin = "cordova-plugin-janalytics";
    JAnalyticsOriginal.pluginRef = "JAnalytics";
    JAnalyticsOriginal.repo = "https://github.com/jpush/cordova-plugin-janalytics";
    JAnalyticsOriginal.install = "ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY";
    JAnalyticsOriginal.installVariables = ["APP_KEY"];
    JAnalyticsOriginal.platforms = ["Android", "iOS"];
    return JAnalyticsOriginal;
}(IonicNativePlugin));
var JAnalytics = new JAnalyticsOriginal();
export { JAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2phbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0N4Qyw4QkFBaUI7Ozs7SUFNL0MseUJBQUk7SUFLSixxQ0FBZ0I7SUFLaEIscUNBQWdCO0lBS2hCLGdDQUFXLGFBQUMsTUFBVztJQUt2Qiw4QkFBUyxhQUFDLE1BQVc7SUFLckIsa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHNDQUFpQixhQUFDLE1BQVc7SUFLN0Isa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHFDQUFnQixhQUFDLE1BQVc7SUFLNUIsbUNBQWMsYUFBQyxNQUFXO0lBSzFCLHFDQUFnQixhQUFDLE1BQVc7Ozs7Ozs7O3FCQTNGOUI7RUFtQ2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgakFuYWx5dGljc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSkFuYWx5dGljcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvSkFuYWx5dGljcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGpBbmFseXRpY3M6IEpBbmFseXRpY3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmpBbmFseXRpY3MuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdKQW5hbHl0aWNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tamFuYWx5dGljcycsXG4gIHBsdWdpblJlZjogJ0pBbmFseXRpY3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2pwdXNoL2NvcmRvdmEtcGx1Z2luLWphbmFseXRpY3MnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tamFuYWx5dGljcyAtLXZhcmlhYmxlIEFQUF9LRVk9WU9VUl9BUFBfS0VZJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpBbmFseXRpY3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGluaXRDcmFzaEhhbmRsZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN0b3BDcmFzaEhhbmRsZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIG9uUGFnZVN0YXJ0KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIG9uUGFnZUVuZChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRDb3VudEV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFkZENhbGN1bGF0ZUV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFkZExvZ2luRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYWRkUmVnaXN0ZXJFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRCcm93c2VFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRQdXJjaGFzZUV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
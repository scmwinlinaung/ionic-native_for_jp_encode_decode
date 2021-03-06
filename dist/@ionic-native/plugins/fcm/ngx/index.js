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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var FCM = /** @class */ (function (_super) {
    __extends(FCM, _super);
    function FCM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FCM.prototype.getAPNSToken = function () { return cordova(this, "getAPNSToken", {}, arguments); };
    FCM.prototype.getToken = function () { return cordova(this, "getToken", {}, arguments); };
    FCM.prototype.onTokenRefresh = function () { return cordova(this, "onTokenRefresh", { "observable": true }, arguments); };
    FCM.prototype.subscribeToTopic = function (topic) { return cordova(this, "subscribeToTopic", {}, arguments); };
    FCM.prototype.unsubscribeFromTopic = function (topic) { return cordova(this, "unsubscribeFromTopic", {}, arguments); };
    FCM.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    FCM.prototype.onNotification = function () { return cordova(this, "onNotification", { "observable": true, "successIndex": 0, "errorIndex": 2 }, arguments); };
    FCM.pluginName = "FCM";
    FCM.plugin = "cordova-plugin-fcm-with-dependecy-updated";
    FCM.pluginRef = "FCMPlugin";
    FCM.repo = "https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated";
    FCM.platforms = ["Android", "iOS"];
    FCM = __decorate([
        Injectable()
    ], FCM);
    return FCM;
}(IonicNativePlugin));
export { FCM };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZjbS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQW1FVCx1QkFBaUI7Ozs7SUFPeEMsMEJBQVk7SUFVWixzQkFBUTtJQVlSLDRCQUFjO0lBWWQsOEJBQWdCLGFBQUMsS0FBYTtJQVk5QixrQ0FBb0IsYUFBQyxLQUFhO0lBYWxDLDJCQUFhO0lBY2IsNEJBQWM7Ozs7OztJQWhGSCxHQUFHO1FBRGYsVUFBVSxFQUFFO09BQ0EsR0FBRztjQXJFaEI7RUFxRXlCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vdGlmaWNhdGlvbiB3YXMgcHJlc3NlZCBvciBub3RcbiAgICovXG5cbiAgd2FzVGFwcGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBOb3RpZmljYXRpb24gZGF0YSBoYXNoIGl0ZW1cbiAgICovXG5cbiAgW25hbWU6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBAbmFtZSBGQ01cbiAqIEBkZXNjcmlwdGlvblxuICogUHJvdmlkZXMgYmFzaWMgZnVuY3Rpb25hbGl0eSBmb3IgRmlyZWJhc2UgQ2xvdWQgTWVzc2FnaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGQ00gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZjbS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmNtOiBGQ00pIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mY20uc3Vic2NyaWJlVG9Ub3BpYygnbWFya2V0aW5nJyk7XG4gKlxuICogdGhpcy5mY20uZ2V0VG9rZW4oKS50aGVuKHRva2VuID0+IHtcbiAqICAgYmFja2VuZC5yZWdpc3RlclRva2VuKHRva2VuKTtcbiAqIH0pO1xuICpcbiAqIHRoaXMuZmNtLm9uTm90aWZpY2F0aW9uKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICogICBpZihkYXRhLndhc1RhcHBlZCl7XG4gKiAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBpbiBiYWNrZ3JvdW5kXCIpO1xuICogICB9IGVsc2Uge1xuICogICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgaW4gZm9yZWdyb3VuZFwiKTtcbiAqICAgfTtcbiAqIH0pO1xuICpcbiAqIHRoaXMuZmNtLm9uVG9rZW5SZWZyZXNoKCkuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAqICAgYmFja2VuZC5yZWdpc3RlclRva2VuKHRva2VuKTtcbiAqIH0pO1xuICpcbiAqIHRoaXMuZmNtLmhhc1Blcm1pc3Npb24oKS50aGVuKGhhc1Blcm1pc3Npb24gPT4ge1xuICogICBpZiAoaGFzUGVybWlzc2lvbikge1xuICogICAgIGNvbnNvbGUubG9nKFwiSGFzIHBlcm1pc3Npb24hXCIpO1xuICogICB9XG4gKiB9KVxuICpcbiAqIHRoaXMuZmNtLnVuc3Vic2NyaWJlRnJvbVRvcGljKCdtYXJrZXRpbmcnKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBOb3RpZmljYXRpb25EYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRkNNJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmNtLXdpdGgtZGVwZW5kZWN5LXVwZGF0ZWQnLFxuICBwbHVnaW5SZWY6ICdGQ01QbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJlaHRpc3NvdC9jb3Jkb3ZhLXBsdWdpbi1mY20td2l0aC1kZXBlbmRlY3ktdXBkYXRlZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZDTSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldHMgaW9zIGRldmljZSdzIGN1cnJlbnQgQVBOUyB0b2tlblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIEFQTlMgdG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QVBOU1Rva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZGV2aWNlJ3MgY3VycmVudCByZWdpc3RyYXRpb24gaWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZWdpc3RyYXRpb24gaWQgdG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgZmlyaW5nIG9uIHRoZSB0b2tlbiByZWZyZXNoXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIGNoYW5nZSBvZiBkZXZpY2UncyByZWdpc3RyYXRpb24gaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uVG9rZW5SZWZyZXNoKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgeW91IHRvIGEgW3RvcGljXShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9ub3RpZmljYXRpb25zL2FuZHJvaWQvY29uc29sZS10b3BpY3MpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpYyBUb3BpYyB0byBiZSBzdWJzY3JpYmVkIHRvXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyBpbiByZXN1bHQgb2Ygc3Vic2NyaWJpbmcgdG8gYSB0b3BpY1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmVUb1RvcGljKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgeW91IGZyb20gYSBbdG9waWNdKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL25vdGlmaWNhdGlvbnMvYW5kcm9pZC9jb25zb2xlLXRvcGljcylcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljIFRvcGljIHRvIGJlIHVuc3Vic2NyaWJlZCBmcm9tXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyBpbiByZXN1bHQgb2YgdW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zdWJzY3JpYmVGcm9tVG9waWModG9waWM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNraW5nIGZvciBwZXJtaXNzaW9ucyBvbiBpT1MuIE9uIGFuZHJvaWQsIGl0IGFsd2F5cyByZXR1cm5zIGB0cnVlYC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbiB8IG51bGw+fSBSZXR1cm5zIGEgUHJvbWlzZTpcbiAgICogLSB0cnVlOiBwdXNoIHdhcyBhbGxvd2VkIChvciBwbGF0Zm9ybSBpcyBhbmRyb2lkKVxuICAgKiAtIGZhbHNlOiBwdXNoIHdpbGwgbm90IGJlIGF2YWlsYWJsZVxuICAgKiAtIG51bGw6IHN0aWxsIG5vdCBhbnN3ZXJlZCwgcmVjb21tZW5kZWQgY2hlY2tpbmcgYWdhaW4gbGF0ZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuIHwgbnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBmb3IgaW5jb21pbmcgbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGRhdGEgZnJvbSB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBvbk5vdGlmaWNhdGlvbigpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvbkRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
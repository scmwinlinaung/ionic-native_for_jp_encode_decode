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
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    Badge.prototype.set = function (badgeNumber) { return cordova(this, "set", {}, arguments); };
    Badge.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    Badge.prototype.increase = function (increaseBy) { return cordova(this, "increase", {}, arguments); };
    Badge.prototype.decrease = function (decreaseBy) { return cordova(this, "decrease", {}, arguments); };
    Badge.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    Badge.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    Badge.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    Badge.pluginName = "Badge";
    Badge.plugin = "cordova-plugin-badge";
    Badge.pluginRef = "cordova.plugins.notification.badge";
    Badge.repo = "https://github.com/katzer/cordova-plugin-badge";
    Badge.platforms = ["Android", "Browser", "iOS", "Windows"];
    Badge = __decorate([
        Injectable()
    ], Badge);
    return Badge;
}(IonicNativePlugin));
export { Badge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhZGdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCN0MseUJBQWlCOzs7O0lBTTFDLHFCQUFLO0lBVUwsbUJBQUcsYUFBQyxXQUFtQjtJQVN2QixtQkFBRztJQVVILHdCQUFRLGFBQUMsVUFBa0I7SUFVM0Isd0JBQVEsYUFBQyxVQUFrQjtJQVMzQiwyQkFBVztJQVNYLDZCQUFhO0lBU2IsaUNBQWlCOzs7Ozs7SUF4RU4sS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQS9CbEI7RUErQjJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmFkZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGVzc2VudGlhbCBwdXJwb3NlIG9mIGJhZGdlIG51bWJlcnMgaXMgdG8gZW5hYmxlIGFuIGFwcGxpY2F0aW9uIHRvIGluZm9ybSBpdHMgdXNlcnMgdGhhdCBpdCBoYXMgc29tZXRoaW5nIGZvciB0aGVtIOKAlCBmb3IgZXhhbXBsZSwgdW5yZWFkIG1lc3NhZ2VzIOKAlCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpc27igJl0IHJ1bm5pbmcgaW4gdGhlIGZvcmVncm91bmQuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhZGdlLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmFkZ2UgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFkZ2UpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhZGdlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWRnZTogQmFkZ2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYmFkZ2Uuc2V0KDEwKTtcbiAqIHRoaXMuYmFkZ2UuaW5jcmVhc2UoMSk7XG4gKiB0aGlzLmJhZGdlLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWRnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5iYWRnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhZGdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2xlYXIgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhZGdlTnVtYmVyICBUaGUgbmV3IGJhZGdlIG51bWJlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0KGJhZGdlTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIHRoZSBiYWRnZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZWFzZUJ5ICBDb3VudCB0byBhZGQgdG8gdGhlIGN1cnJlbnQgYmFkZ2UgbnVtYmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluY3JlYXNlKGluY3JlYXNlQnk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlIHRoZSBiYWRnZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWNyZWFzZUJ5ICBDb3VudCB0byBzdWJ0cmFjdCBmcm9tIHRoZSBjdXJyZW50IGJhZGdlIG51bWJlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWNyZWFzZShkZWNyZWFzZUJ5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBzdXBwb3J0IHRvIHNob3cgYmFkZ2VzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1N1cHBvcnRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGFwcCBoYXMgcGVybWlzc2lvbiB0byBzaG93IGJhZGdlcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBwZXJtaXNzaW9uIHRvIHNldCBiYWRnZSBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
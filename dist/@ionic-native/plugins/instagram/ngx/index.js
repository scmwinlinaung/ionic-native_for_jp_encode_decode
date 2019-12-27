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
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.isInstalled = function () { return cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.share = function (canvasIdOrDataUrl, caption) { return cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.shareAsset = function (assetLocalIdentifier) { return cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    Instagram.pluginName = "Instagram";
    Instagram.plugin = "cordova-instagram-plugin";
    Instagram.pluginRef = "Instagram";
    Instagram.repo = "https://github.com/vstirbu/InstagramPlugin";
    Instagram.platforms = ["Android", "iOS"];
    Instagram = __decorate([
        Injectable()
    ], Instagram);
    return Instagram;
}(IonicNativePlugin));
export { Instagram };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc3RhZ3JhbS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0QnpDLDZCQUFpQjs7OztJQVU5QywrQkFBVztJQWVYLHlCQUFLLGFBQUMsaUJBQXlCLEVBQUUsT0FBZ0I7SUFZakQsOEJBQVUsYUFBQyxvQkFBNEI7Ozs7OztJQXJDNUIsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQTdCdEI7RUE2QitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgSW5zdGFncmFtXG4gKiBAZGVzY3JpcHRpb24gU2hhcmUgYSBwaG90byB3aXRoIHRoZSBpbnN0YWdyYW0gYXBwXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luc3RhZ3JhbS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFncmFtOiBJbnN0YWdyYW0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW5zdGFncmFtLnNoYXJlKCdkYXRhOmltYWdlL3BuZzt1aGR1aGYzaGZpZjMzJywgJ0NhcHRpb24nKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU2hhcmVkIScpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbnN0YWdyYW0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWluc3RhZ3JhbS1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdJbnN0YWdyYW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZzdGlyYnUvSW5zdGFncmFtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBEZXRlY3QgaWYgdGhlIEluc3RhZ3JhbSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbnxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybnMgYSBib29sZWFuIHZhbHVlIGlmIGluc3RhbGxlZCwgb3IgdGhlIGFwcCB2ZXJzaW9uIG9uIGFuZHJvaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgaXNJbnN0YWxsZWQoKTogUHJvbWlzZTxib29sZWFuIHwgc3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGFuIGltYWdlIG9uIEluc3RhZ3JhbVxuICAgKiBOb3RlOiBJbnN0YWdyYW0gYXBwIHN0b3BwZWQgYWNjZXB0aW5nIHByZS1maWxsZWQgY2FwdGlvbnMgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQuIEFzIGEgd29yay1hcm91bmQsIHRoZSBjYXB0aW9uIGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBZb3UgaGF2ZSB0byBpbmZvcm0geW91ciB1c2VycyB0byBwYXN0ZSB0aGUgY2FwdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGNhbnZhc0lkT3JEYXRhVXJsIFRoZSBjYW52YXMgZWxlbWVudCBpZCBvciB0aGUgZGF0YVVSTCBvZiB0aGUgaW1hZ2UgdG8gc2hhcmVcbiAgICogQHBhcmFtIGNhcHRpb24gVGhlIGNhcHRpb24gb2YgdGhlIGltYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGltYWdlIHdhcyBzaGFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgc2hhcmUoY2FudmFzSWRPckRhdGFVcmw6IHN0cmluZywgY2FwdGlvbj86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGEgbGlicmFyeSBhc3NldCBvciB2aWRlb1xuICAgKiBAcGFyYW0gYXNzZXRMb2NhbElkZW50aWZpZXIgQSBsb2NhbCBmaWxlVVJJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGltYWdlIHdhcyBzaGFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgc2hhcmVBc3NldChhc3NldExvY2FsSWRlbnRpZmllcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19
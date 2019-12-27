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
var GeTuiSdkPluginOriginal = /** @class */ (function (_super) {
    __extends(GeTuiSdkPluginOriginal, _super);
    function GeTuiSdkPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPluginOriginal.prototype.callback_init = function (callback) { return cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.initialize = function () { return cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPluginOriginal.prototype.getClientId = function () { return cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPluginOriginal.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPluginOriginal.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPluginOriginal.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPluginOriginal.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPluginOriginal.platforms = ["Android", "iOS"];
    return GeTuiSdkPluginOriginal;
}(IonicNativePlugin));
var GeTuiSdkPlugin = new GeTuiSdkPluginOriginal();
export { GeTuiSdkPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlLXR1aS1zZGstcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDcEMsa0NBQWlCOzs7O0lBR25ELHNDQUFhLGFBQUMsUUFBa0I7SUFPaEMsbUNBQVU7SUFLVixvQ0FBVztJQUtYLG1DQUFVOzs7Ozs7Ozt5QkE1RFo7RUF3Q29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR2UgVHVpIFNkayBQbHVnaW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEdlVHVpU2RrUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nZS10dWktc2RrLXBsdWdpbic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2VUdWlTZGtQbHVnaW46IEdlVHVpU2RrUGx1Z2luKSB7IH1cbiAqXG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5jYWxsYmFja19pbml0KChyZXMpID0+IHsgY29uc29sZS5sb2cocmVzKX0pO1xuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uaW5pdGlhbGl6ZSgpO1xuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uZ2V0Q2xpZW50SWQoKTtcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmdldFZlcnNpb24oKTtcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHZVR1aVNka1BsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdldHVpc2RrJyxcbiAgcGx1Z2luUmVmOiAnR2VUdWlTZGtQbHVnaW4nLFxuICByZXBvOiAnZ2l0QGdpdGh1Yi5jb206R2V0dWlMYWJvcmF0b3J5L2NvcmRvdmEtcGx1Z2luLWdldHVpc2RrLmdpdCcsXG4gIGluc3RhbGw6ICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsgLS12YXJpYWJsZSBQVVNIX0FQUElEPXlvdXIgYXBwaWQgLS12YXJpYWJsZSBQVVNIX0FQUEtFWT15b3VyIGFwcGtleSAtLXZhcmlhYmxlIFBVU0hfQVBQU0VDUkVUPXlvdXIgYXBwc2VjcmV0JyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQVVNIX0FQUElEJywgJ1BVU0hfQVBQS0VZJywgJ1BVU0hfQVBQU0VDUkVUJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlVHVpU2RrUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgY2FsbGJhY2tfaW5pdChjYWxsYmFjazogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBpbml0aWFsaXplKCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q2xpZW50SWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
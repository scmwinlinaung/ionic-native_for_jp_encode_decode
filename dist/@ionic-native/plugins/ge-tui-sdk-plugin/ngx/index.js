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
var GeTuiSdkPlugin = /** @class */ (function (_super) {
    __extends(GeTuiSdkPlugin, _super);
    function GeTuiSdkPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPlugin.prototype.callback_init = function (callback) { return cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPlugin.prototype.initialize = function () { return cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPlugin.prototype.getClientId = function () { return cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPlugin.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPlugin.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPlugin.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPlugin.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPlugin.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPlugin.platforms = ["Android", "iOS"];
    GeTuiSdkPlugin = __decorate([
        Injectable()
    ], GeTuiSdkPlugin);
    return GeTuiSdkPlugin;
}(IonicNativePlugin));
export { GeTuiSdkPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlLXR1aS1zZGstcGx1Z2luL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDcEMsa0NBQWlCOzs7O0lBR25ELHNDQUFhLGFBQUMsUUFBa0I7SUFPaEMsbUNBQVU7SUFLVixvQ0FBVztJQUtYLG1DQUFVOzs7Ozs7OztJQXBCQyxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBeEMzQjtFQXdDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBHZSBUdWkgU2RrIFBsdWdpblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2VUdWlTZGtQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dlLXR1aS1zZGstcGx1Z2luJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnZVR1aVNka1BsdWdpbjogR2VUdWlTZGtQbHVnaW4pIHsgfVxuICpcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmNhbGxiYWNrX2luaXQoKHJlcykgPT4geyBjb25zb2xlLmxvZyhyZXMpfSk7XG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5pbml0aWFsaXplKCk7XG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5nZXRDbGllbnRJZCgpO1xuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uZ2V0VmVyc2lvbigpO1xuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dlVHVpU2RrUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsnLFxuICBwbHVnaW5SZWY6ICdHZVR1aVNka1BsdWdpbicsXG4gIHJlcG86ICdnaXRAZ2l0aHViLmNvbTpHZXR1aUxhYm9yYXRvcnkvY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsuZ2l0JyxcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkayAtLXZhcmlhYmxlIFBVU0hfQVBQSUQ9eW91ciBhcHBpZCAtLXZhcmlhYmxlIFBVU0hfQVBQS0VZPXlvdXIgYXBwa2V5IC0tdmFyaWFibGUgUFVTSF9BUFBTRUNSRVQ9eW91ciBhcHBzZWNyZXQnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BVU0hfQVBQSUQnLCAnUFVTSF9BUFBLRVknLCAnUFVTSF9BUFBTRUNSRVQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VUdWlTZGtQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBjYWxsYmFja19pbml0KGNhbGxiYWNrOiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDbGllbnRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
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
var AppUpdateOriginal = /** @class */ (function (_super) {
    __extends(AppUpdateOriginal, _super);
    function AppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdateOriginal.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdateOriginal.pluginName = "AppUpdate";
    AppUpdateOriginal.plugin = "cordova-plugin-app-update";
    AppUpdateOriginal.pluginRef = "AppUpdate";
    AppUpdateOriginal.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdateOriginal.platforms = ["Android"];
    return AppUpdateOriginal;
}(IonicNativePlugin));
var AppUpdate = new AppUpdateOriginal();
export { AppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUR6Qyw2QkFBaUI7Ozs7SUFVOUMsa0NBQWMsYUFBQyxTQUFpQixFQUFFLE9BQTBCOzs7Ozs7b0JBNUQ5RDtFQWtEK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBVcGRhdGVPcHRpb25zIHtcbiAgYXV0aFR5cGU6IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEFwcCBVcGRhdGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzZWxmLXVwZGF0ZSBmb3IgYW5kcm9pZFxuICpcbiAqIEB1c2FnZVxuICpcbiAqIFlvdSBzaG91bGQgZmlyc3QgaG9zdCBhbiBYTUwgZmlsZSBvbiB5b3VyIHNlcnZlciB3aXRoIHRoZSBmb2xsb3dpbmcgZGF0YSBpbiBpdDpcbiAqIGBgYHhtbFxuICogPHVwZGF0ZT5cbiAqICAgICA8dmVyc2lvbj4zMDIwNDg8L3ZlcnNpb24+XG4gKiAgICAgPG5hbWU+QVBLIE5hbWU8L25hbWU+XG4gKiAgICAgPHVybD5odHRwczovL3lvdXItcmVtb3RlLWFwaS5jb20vWW91ckFwcC5hcGs8L3VybD5cbiAqIDwvdXBkYXRlPlxuICogYGBgXG4gKlxuICogVGhlbiB1c2UgdGhlIGZvbGxvd2luZyBjb2RlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcFVwZGF0ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLXVwZGF0ZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVXBkYXRlOiBBcHBVcGRhdGUpIHtcbiAqXG4gKiAgICBjb25zdCB1cGRhdGVVcmwgPSAnaHR0cHM6Ly95b3VyLXJlbW90ZS1hcGkuY29tL3VwZGF0ZS54bWwnO1xuICogICAgdGhpcy5hcHBVcGRhdGUuY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ1VwZGF0ZSBhdmFpbGFibGUnKSB9KTtcbiAqXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBUaGUgcGx1Z2luIHdpbGwgY29tcGFyZSB0aGUgYXBwIHZlcnNpb24gYW5kIHVwZGF0ZSBpdCBhdXRvbWF0aWNhbGx5IGlmIHRoZSBBUEkgaGFzIGEgbmV3ZXIgdmVyc2lvbiB0byBpbnN0YWxsLlxuICogQGludGVyZmFjZXNcbiAqIEFwcFVwZGF0ZU9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJyxcbiAgcGx1Z2luUmVmOiAnQXBwVXBkYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YWVub3cvY29yZG92YS1wbHVnaW4tYXBwLXVwZGF0ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVXBkYXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgYW5kIHVwZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlVXJsIHVwZGF0ZSBhcGkgdXJsXG4gICAqIEBwYXJhbSB7QXBwVXBkYXRlT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBBcHBVcGRhdGVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
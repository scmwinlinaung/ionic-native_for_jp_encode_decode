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
var LineLoginOriginal = /** @class */ (function (_super) {
    __extends(LineLoginOriginal, _super);
    function LineLoginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLoginOriginal.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLoginOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLoginOriginal.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLoginOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLoginOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLoginOriginal.pluginName = "LineLogin";
    LineLoginOriginal.plugin = "cordova-line-login-plugin";
    LineLoginOriginal.pluginRef = "lineLogin";
    LineLoginOriginal.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLoginOriginal.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLoginOriginal.installVariables = ["LINE_CHANNEL_ID"];
    LineLoginOriginal.platforms = ["Android", "iOS"];
    return LineLoginOriginal;
}(IonicNativePlugin));
var LineLogin = new LineLoginOriginal();
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xpbmUtbG9naW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0Z6Qyw2QkFBaUI7Ozs7SUFPOUMsOEJBQVUsYUFBQyxLQUFzQjtJQVNqQyx5QkFBSztJQVVMLDRCQUFRO0lBU1IsMEJBQU07SUFTTixrQ0FBYztJQVNkLHFDQUFpQjtJQVNqQixzQ0FBa0I7Ozs7Ozs7O29CQWpKcEI7RUFtRitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luUGFyYW1zIHtcbiAgLyoqXG4gICAqIExpbmUgQ2hhbm5lbCBJRFxuICAgKi9cbiAgY2hhbm5lbF9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblByb2ZpbGUge1xuICAvKipcbiAgICogTGluZSBVc2VyIElEXG4gICAqL1xuICB1c2VySUQ6IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBQcm9maWxlIEltYWdlIFVSTFxuICAgKi9cbiAgcGljdHVyZVVSTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIFByb2ZpbGUgTmFtZVxuICAgKi9cbiAgZGlzcGxheU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWxcbiAgICovXG4gIGVtYWlsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpbkFjY2Vzc1Rva2VuIHtcbiAgLyoqXG4gICAqIExpbmUgQWNjZXNzIFRva2VuXG4gICAqL1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIEFjY2VzcyBUb2tlbiBFeHBpcmUgVGltZVxuICAgKi9cbiAgZXhwaXJlVGltZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIExpbmUgTG9naW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGxvZ2luLCBsb2dzIG91dCwgYWNxdWlyZXMsIHZlcmlmaWVzLCBhbmQgcmVmcmVzaGVzIHRoZSBhY2Nlc3MgdG9rZW4uIFRoZSB2ZXJzaW9uIG9mIExpbmVTREsgeW91IGFyZSB1c2luZyBpcyBhcyBmb2xsb3dzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTGluZUxvZ2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9saW5lLWxvZ2luL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbGluZUxvZ2luOiBMaW5lTG9naW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmxpbmVMb2dpbi5pbml0aWFsaXplKHsgY2hhbm5lbF9pZDogXCJ4eHh4eHh4eHh4XCIgfSlcbiAqXG4gKiB0aGlzLmxpbmVMb2dpbi5sb2dpbigpXG4gKiAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBMaW5lTG9naW5QYXJhbXNcbiAqIExpbmVMb2dpblByb2ZpbGVcbiAqIExpbmVMb2dpbkFjY2Vzc1Rva2VuXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xpbmVMb2dpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdsaW5lTG9naW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25yaWtpamkvY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL25yaWtpamkvY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbi5naXQgLS12YXJpYWJsZSBMSU5FX0NIQU5ORUxfSUQ9XCJ5b3VyX2xpbmVfY2hhbm5lbF9pZFwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydMSU5FX0NIQU5ORUxfSUQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGluZUxvZ2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKiBAcGFyYW0gcGFyYW0gTGluZUxvZ2luUGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZShwYXJhbTogTGluZUxvZ2luUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9naW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4oKTogUHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ2luIHdpdGggV2ViXG4gICAqIChpT1Mgb25seSlcbiAgICogQHJldHVybiB7UHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW5XZWIoKTogUHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQWNjZXNzIFRva2VuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGluZUxvZ2luQWNjZXNzVG9rZW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBY2Nlc3NUb2tlbigpOiBQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSBBY2Nlc3NUb2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeUFjY2Vzc1Rva2VuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggQWNjZXNzIFRva2VuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVmcmVzaEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
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
var WebengageOriginal = /** @class */ (function (_super) {
    __extends(WebengageOriginal, _super);
    function WebengageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageOriginal.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    WebengageOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageOriginal.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    WebengageOriginal.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    WebengageOriginal.pluginName = "Webengage";
    WebengageOriginal.plugin = "cordova-plugin-webengage";
    WebengageOriginal.pluginRef = "webengage";
    WebengageOriginal.repo = "https://github.com/WebEngage/cordova-plugin";
    WebengageOriginal.platforms = ["Android", "iOS"];
    return WebengageOriginal;
}(IonicNativePlugin));
var Webengage = new WebengageOriginal();
export { Webengage };
var WebengageUserOriginal = /** @class */ (function (_super) {
    __extends(WebengageUserOriginal, _super);
    function WebengageUserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUserOriginal.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUserOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUserOriginal.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUserOriginal.pluginName = "Webengage";
    WebengageUserOriginal.plugin = "cordova-plugin-webengage";
    WebengageUserOriginal.pluginRef = "webengage.user";
    return WebengageUserOriginal;
}(IonicNativePlugin));
var WebengageUser = new WebengageUserOriginal();
export { WebengageUser };
var WebengagePushOriginal = /** @class */ (function (_super) {
    __extends(WebengagePushOriginal, _super);
    function WebengagePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePushOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePushOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePushOriginal.pluginName = "Webengage";
    WebengagePushOriginal.plugin = "cordova-plugin-webengage";
    WebengagePushOriginal.pluginRef = "webengage.push";
    return WebengagePushOriginal;
}(IonicNativePlugin));
var WebengagePush = new WebengagePushOriginal();
export { WebengagePush };
var WebengageNotificationOriginal = /** @class */ (function (_super) {
    __extends(WebengageNotificationOriginal, _super);
    function WebengageNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotificationOriginal.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotificationOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotificationOriginal.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotificationOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotificationOriginal.pluginName = "Webengage";
    WebengageNotificationOriginal.plugin = "cordova-plugin-webengage";
    WebengageNotificationOriginal.pluginRef = "webengage.notification";
    return WebengageNotificationOriginal;
}(IonicNativePlugin));
var WebengageNotification = new WebengageNotificationOriginal();
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYmVuZ2FnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyQnpDLDZCQUFpQjs7OztJQU85QywwQkFBTSxhQUFDLE1BQVk7SUFXbkIsMkJBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTtJQVcvQix5QkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBZ0I7SUFXekMsMEJBQU0sYUFBQyxVQUFrQixFQUFFLFVBQWdCOzs7Ozs7b0JBcEU3QztFQTRCK0IsaUJBQWlCO1NBQW5DLFNBQVM7O0lBc0RhLGlDQUFpQjs7OztJQU9sRCw2QkFBSyxhQUFDLE1BQWM7SUFTcEIsOEJBQU07SUFXTixvQ0FBWSxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7O3dCQTdHdEM7RUFrRm1DLGlCQUFpQjtTQUF2QyxhQUFhOztJQXlDUyxpQ0FBaUI7Ozs7SUFPbEQsK0JBQU8sYUFBQyxRQUFhO0lBV3JCLCtCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7d0JBN0lqQztFQTJIbUMsaUJBQWlCO1NBQXZDLGFBQWE7O0lBZ0NpQix5Q0FBaUI7Ozs7SUFPMUQsdUNBQU8sYUFBQyxRQUFhO0lBVXJCLHVDQUFPLGFBQUMsUUFBYTtJQVVyQix5Q0FBUyxhQUFDLFFBQWE7SUFXdkIsdUNBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTs7OztnQ0FqTWpDO0VBMkoyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV2ViZW5nYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIElvbmljLU5hdGl2ZSB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYmVuZ2FnZSwgV2ViZW5nYWdlVXNlciwgV2ViZW5nYWdlUHVzaCwgV2ViZW5nYWdlTm90aWZpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWJlbmdhZ2Uvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJlbmdhZ2U6IFdlYmVuZ2FnZSwgcHJpdmF0ZSB3ZWJlbmdhZ2VVc2VyOiBXZWJlbmdhZ2VVc2VyLCBwcml2YXRlIHdlYmVuZ2FnZVB1c2g6IFdlYmVuZ2FnZVB1c2gsIHByaXZhdGUgd2ViZW5nYWdlTm90aWZpY2F0aW9uOiBXZWJlbmdhZ2VOb3RpZmljYXRpb24gKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLndlYmVuZ2FnZS5lbmdhZ2UoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vV2ViRW5nYWdlL2NvcmRvdmEtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgV2ViRW5nYWdlIFNES1xuICAgKiBAcGFyYW0ge2FueX0gW2NvbmZpZ11cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmdhZ2UoY29uZmlnPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBXZWJFbmdhZ2UgU0RLIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnl9IFthdHRyaWJ1dGVzXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHNjcmVlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbc2NyZWVuRGF0YV1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nLCBzY3JlZW5EYXRhPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnVzZXInXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVVzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgaW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9ncyB1c2VyIG91dFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYXR0cmlidXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXR0cmlidXRlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnB1c2gnXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBwdXNoIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2Uubm90aWZpY2F0aW9uJ1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIHNob3duXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uU2hvd24oY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkNsaWNrKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIGRpc21pc3NlZFxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkRpc21pc3MoY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgaW4tYXBwIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
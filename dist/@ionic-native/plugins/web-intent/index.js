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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var WebIntentOriginal = /** @class */ (function (_super) {
    __extends(WebIntentOriginal, _super);
    function WebIntentOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntentOriginal.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntentOriginal.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntentOriginal.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntentOriginal.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntentOriginal.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntentOriginal.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntentOriginal.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntentOriginal.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntentOriginal.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    WebIntentOriginal.pluginName = "WebIntent";
    WebIntentOriginal.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.pluginRef = "plugins.intentShim";
    WebIntentOriginal.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.platforms = ["Android"];
    return WebIntentOriginal;
}(IonicNativePlugin));
var WebIntent = new WebIntentOriginal();
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1pbnRlbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXdFSCw2QkFBaUI7Ozs7SUEyRjlDLGlDQUFhLGFBQUMsT0FBc0I7SUFVcEMsMENBQXNCLGFBQUMsT0FBc0I7SUFVN0MsNEJBQVEsYUFBQyxLQUFhO0lBVXRCLDRCQUFRLGFBQUMsS0FBYTtJQVN0QiwwQkFBTTtJQVdOLDRCQUFRO0lBVVIsaUNBQWEsYUFBQyxPQUFzQjtJQVVwQyxnQ0FBWSxhQUFDLE9BQXNCO0lBWW5DLDZDQUF5QixhQUFDLE9BQXlDO0lBUW5FLCtDQUEyQjtJQU0zQixvQ0FBZ0I7SUFNaEIsNkJBQVM7SUFVVCw4QkFBVSxhQUFDLEVBQWM7WUFBWixjQUFVOzs7MEJBck12QixrQ0FBVzs7Ozs7OzBCQU9YLGtDQUFXOzs7Ozs7MEJBT1gsaUNBQVU7Ozs7OzswQkFPVixvQ0FBYTs7Ozs7OzBCQU9iLG1DQUFZOzs7Ozs7MEJBT1osa0NBQVc7Ozs7OzswQkFPWCxrQ0FBVzs7Ozs7OzBCQU9YLG9DQUFhOzs7Ozs7MEJBT2IseUNBQWtCOzs7Ozs7MEJBT2xCLGtDQUFXOzs7Ozs7MEJBT1gsNkNBQXNCOzs7Ozs7MEJBT3RCLCtDQUF3Qjs7Ozs7Ozs7Ozs7b0JBbEsxQjtFQStFK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRDbGlwSXRlbSB7XG4gIHVyaTogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBleHRlbnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZW50IHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGNsaXBJdGVtczogSW50ZW50Q2xpcEl0ZW1bXTtcbiAgY29tcG9uZW50OiBzdHJpbmc7XG4gIGV4dHJhczogb2JqZWN0O1xuICBmbGFnczogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMge1xuICBmaWx0ZXJBY3Rpb25zPzogc3RyaW5nW107XG4gIGZpbHRlckNhdGVnb3JpZXM/OiBzdHJpbmdbXTtcbiAgZmlsdGVyRGF0YVNjaGVtZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRPcHRpb25zIHtcbiAgcmVxdWVzdENvZGU/OiBudW1iZXI7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHBhY2thZ2U/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgZXh0cmFzPzogb2JqZWN0O1xuICBhY3Rpb24/OiBzdHJpbmc7XG4gIGNvbXBvbmVudD86IHtcbiAgICBwYWNrYWdlOiBzdHJpbmc7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgfTtcbiAgZmxhZ3M/OiBudW1iZXJbXTtcbn1cblxuLyoqXG4gKiBAbmFtZSBXZWIgSW50ZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgUGx1Z2luIHByb3ZpZGVzIGEgZ2VuZXJhbCBwdXJwb3NlIHNoaW0gbGF5ZXIgZm9yIHRoZSBBbmRyb2lkIGludGVudCBtZWNoYW5pc20sIGV4cG9zaW5nIHZhcmlvdXMgd2F5cyB0byBoYW5kbGUgc2VuZGluZyBhbmQgcmVjZWl2aW5nIGludGVudHMuXG4gKiBAdXNhZ2VcbiAqIEZvciB1c2FnZSBpbmZvcm1hdGlvbiBwbGVhc2UgcmVmZXIgdG8gdGhlIHBsdWdpbidzIEdpdGh1YiByZXBvLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYkludGVudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvd2ViLWludGVudC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViSW50ZW50OiBXZWJJbnRlbnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG9wdGlvbnMgPSB7XG4gKiAgIGFjdGlvbjogdGhpcy53ZWJJbnRlbnQuQUNUSU9OX1ZJRVcsXG4gKiAgIHVybDogJ3BhdGgvdG8vZmlsZScsXG4gKiAgIHR5cGU6ICdhcHBsaWNhdGlvbi92bmQuYW5kcm9pZC5wYWNrYWdlLWFyY2hpdmUnXG4gKiB9XG4gKlxuICogdGhpcy53ZWJJbnRlbnQuc3RhcnRBY3Rpdml0eShvcHRpb25zKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSW50ZW50T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYkludGVudCcsXG4gIHBsdWdpbjogJ2NvbS1kYXJyeW5jYW1wYmVsbC1jb3Jkb3ZhLXBsdWdpbi1pbnRlbnQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmludGVudFNoaW0nLFxuICByZXBvOlxuICAgICdodHRwczovL2dpdGh1Yi5jb20vZGFycnluY2FtcGJlbGwvZGFycnluY2FtcGJlbGwtY29yZG92YS1wbHVnaW4taW50ZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJJbnRlbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9TRU5EOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1ZJRVc6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX1RFWFQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX1NVQkpFQ1Q6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX1NUUkVBTTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVhUUkFfRU1BSUw6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fQ0FMTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9TRU5EVE86IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fR0VUX0NPTlRFTlQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fUElDSzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fVU5JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoZXMgYW4gQW5kcm9pZCBpbnRlbnRcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0QWN0aXZpdHkob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIG5ldyBhY3Rpdml0eSBhbmQgcmV0dXJuIHRoZSByZXN1bHQgdG8gdGhlIGFwcGxpY2F0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEFjdGl2aXR5Rm9yUmVzdWx0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aCBzcGVjaWZpZWQgZXh0cmFcbiAgICogQHBhcmFtIGV4dHJhIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc0V4dHJhKGV4dHJhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBleHRyYSB0aGF0IHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGhcbiAgICogQHBhcmFtIGV4dHJhIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4dHJhKGV4dHJhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBVcmkgdGhlIGFwcCB3YXMgaW52b2tlZCB3aXRoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVyaSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSBpbnRlbnQgdXNlZCB3aGVuZXZlciB0aGUgYXBwbGljYXRpb24gYWN0aXZpdHkgaXMgbGF1bmNoZWRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW50ZW50Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uSW50ZW50KCk6IE9ic2VydmFibGU8SW50ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgY3VzdG9tIGludGVudCBwYXNzaW5nIG9wdGlvbmFsIGV4dHJhc1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZEJyb2FkY2FzdChvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCB0aGF0IGEgZ2l2ZW4gYXBwbGljYXRpb24gc2VydmljZSBiZSBzdGFydGVkXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFNlcnZpY2Uob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGJyb2FkY2FzdCByZWNlaXZlciBmb3IgdGhlIHNwZWNpZmllZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSBmaWx0ZXJzIHtSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9uc31cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXIoZmlsdGVyczogUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyBhIGJyb2FkY2FzdCByZWNlaXZlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVucmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlcigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25BY3Rpdml0eVJlc3VsdCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEludGVudCgpOiBQcm9taXNlPEludGVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcmVzdWx0IGJhY2sgdG8gdGhlIEludGVudCB0aGF0IHN0YXJ0ZWQgdGhpcyBBY3Rpdml0eS5cbiAgICogVGhlIGRhdGEgY2FuIGJlIHBhc3NlZCB1c2luZyAnZXh0cmFzJy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlc3VsdCh7IGV4dHJhczoge30gfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
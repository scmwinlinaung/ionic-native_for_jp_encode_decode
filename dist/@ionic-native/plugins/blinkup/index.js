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
import { Observable } from 'rxjs';
var BlinkUpOriginal = /** @class */ (function (_super) {
    __extends(BlinkUpOriginal, _super);
    function BlinkUpOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkUpOriginal.prototype.startBlinkUp = function (options) { return cordova(this, "startBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUpOriginal.prototype.flashWifiBlinkUp = function (options) { return cordova(this, "flashWifiBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUpOriginal.prototype.flashWPSBlinkUp = function (options) { return cordova(this, "flashWPSBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUpOriginal.prototype.abortBlinkUp = function () { return cordova(this, "abortBlinkUp", { "observable": true }, arguments); };
    BlinkUpOriginal.prototype.clearBlinkUpData = function () { return cordova(this, "clearBlinkUpData", { "observable": true }, arguments); };
    BlinkUpOriginal.pluginName = "BlinkUp";
    BlinkUpOriginal.plugin = "cordova-plugin-blinkup";
    BlinkUpOriginal.pluginRef = "blinkup";
    BlinkUpOriginal.repo = "https://github.com/SensorShare/cordova-plugin-blinkup";
    BlinkUpOriginal.platforms = ["Android", "iOS"];
    return BlinkUpOriginal;
}(IonicNativePlugin));
var BlinkUp = new BlinkUpOriginal();
export { BlinkUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5rdXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE2REwsMkJBQWlCOzs7O0lBVTVDLDhCQUFZLGFBQUMsT0FBdUI7SUFhcEMsa0NBQWdCLGFBQUMsT0FBMkI7SUFhNUMsaUNBQWUsYUFBQyxPQUEwQjtJQVcxQyw4QkFBWTtJQVdaLGtDQUFnQjs7Ozs7O2tCQXhIbEI7RUE4RDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIG9mIGEgYmxpbmsgdXAgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCbGlua1VwT3B0aW9ucyB7XG4gIGFwaUtleTogc3RyaW5nO1xuICBkZXZlbG9wbWVudFBsYW5JZD86IHN0cmluZztcbiAgaXNJbkRldmVsb3BtZW50PzogYm9vbGVhbjtcbiAgdGltZW91dE1zPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBvZiBhIGJsaW5rIHVwIHdpZmkgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCbGlua1VwV2lmaU9wdGlvbnMge1xuICBhcGlLZXk6IHN0cmluZztcbiAgdGltZW91dE1zPzogbnVtYmVyO1xuICBzc2lkOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIG9mIGEgYmxpbmsgdXAgd3BzIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtVcFdQU09wdGlvbnMge1xuICBhcGlLZXk6IHN0cmluZztcbiAgdGltZW91dE1zPzogbnVtYmVyO1xuICB3cHNQaW46IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBCbGlua1VwXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVsZWN0cmljIEltcCBCbGlua1VwIGlvbmljIHBsdWdpbi5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJsaW5rVXAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JsaW5rdXAvbmd4JztcbiAqXG4gKiBjb25zdCBvcHRpb25zID0gPEJsaW5rVXBXaWZpT3B0aW9ucz57XG4gKiAgICBhcGlLZXk6ICdBUElfS0VZJyxcbiAqICAgIHRpbWVvdXRNczogNjAwMDAsXG4gKiAgICBzc2lkOiAnTVlfU1NJRCcsXG4gKiAgICBwYXNzd29yZDogJ01ZX1BBU1NXT1JEJ1xuICogIH1cbiAqICBCbGlua1VwLmZsYXNoV2lmaUJsaW5rVXAob3B0aW9ucykuc3Vic2NyaWJlKFxuICogICAgIChyZXN1bHQpID0+IGNvbnNvbGUubG9nKCdEb25lJyksXG4gKiAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgKVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmxpbmtVcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJsaW5rdXAnLFxuICBwbHVnaW5SZWY6ICdibGlua3VwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TZW5zb3JTaGFyZS9jb3Jkb3ZhLXBsdWdpbi1ibGlua3VwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmxpbmtVcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIHN0YXJ0QmxpbmtVcCAtIHN0YXJ0cyB0aGUgYmxpbmt1cCBwcm9jZXNzXG4gICAqIEBwYXJhbSB7bW9kdWxlOmJsaW5rdXAuQmxpbmtVcE9wdGlvbnN9IG9wdGlvbnMgQmxpbmtVcCBPcHRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3RhcnRCbGlua1VwKG9wdGlvbnM6IEJsaW5rVXBPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZmxhc2hXaWZpQmxpbmtVcCAtIGludm9rZXMgdGhlIGZsYXNoIHdpZmkgcHJvY2Vzc1xuICAgKiBAcGFyYW0ge21vZHVsZTpibGlua3VwLkJsaW5rVXBXaWZpT3B0aW9uc30gb3B0aW9ucyBCbGlua1VwIFdpZmkgT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIGZsYXNoV2lmaUJsaW5rVXAob3B0aW9uczogQmxpbmtVcFdpZmlPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZmxhc2hXUFNCbGlua1VwIC0gaW52b2tlcyB0aGUgZmxhc2ggd3BzIHByb2Nlc3NcbiAgICogQHBhcmFtIHttb2R1bGU6Ymxpbmt1cC5CbGlua1VwV1BTT3B0aW9uc30gb3B0aW9ucyBCbGlua1VwIFdQUyBPcHRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgZmxhc2hXUFNCbGlua1VwKG9wdGlvbnM6IEJsaW5rVXBXUFNPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogYWJvcnRCbGlua1VwIC0gYWJvcnQgYmxpbmt1cCBwcm9jZXNzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBhYm9ydEJsaW5rVXAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogY2xlYXJCbGlua1VwRGF0YSAtIGNsZWFyIHdpZmkgZGF0YVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgY2xlYXJCbGlua1VwRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
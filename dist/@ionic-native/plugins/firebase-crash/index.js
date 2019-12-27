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
var FirebaseCrashOriginal = /** @class */ (function (_super) {
    __extends(FirebaseCrashOriginal, _super);
    function FirebaseCrashOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashOriginal.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.logError = function (message) { return cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrashOriginal.pluginName = "FirebaseCrash";
    FirebaseCrashOriginal.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrashOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.platforms = ["Android", "iOS"];
    return FirebaseCrashOriginal;
}(IonicNativePlugin));
var FirebaseCrash = new FirebaseCrashOriginal();
export { FirebaseCrash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWNyYXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCckMsaUNBQWlCOzs7O0lBUWxELDJCQUFHLGFBQUMsT0FBZTtJQVduQixnQ0FBUSxhQUFDLE9BQWU7SUFXeEIsaUNBQVMsYUFBQyxNQUFjOzs7Ozs7d0JBNUQxQjtFQThCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZUNyYXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGJyaW5ncyBjcmFzaCByZXBvcnRpbmcgZnJvbSBHb29nbGUgRmlyZWJhc2UgdG8geW91ciBDb3Jkb3ZhIHByb2plY3QhIEFuZHJvaWQgYW5kIGlPUyBzdXBwb3J0ZWQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZUNyYXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1jcmFzaCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZUNyYXNoOiBGaXJlYmFzZUNyYXNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2guc2V0VXNlcklkKCcxMjM0NTY3ODknKTtcbiAqIHRoaXMuZmlyZWJhc2VDcmFzaC5sb2coJ21lc3NhZ2UnKTtcbiAqIHRoaXMuZmlyZWJhc2VDcmFzaC5sb2dFcnJvcignbm9uIGZhdGFsIGV4Y2VwdGlvbicpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQ3Jhc2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jcmFzaCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5jcmFzaGx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jcmFzaCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQ3Jhc2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBBZGQgbG9nZ2luZyB0aGF0IHdpbGwgYmUgc2VudCB3aXRoIHlvdXIgY3Jhc2ggZGF0YSBpbiBjYXNlIG9mIGFwcCBjcmFzaC5cbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNhZGRfY3VzdG9tX2xvZ3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgbm9uLWZhdGFsIGV4Y2VwdGlvbnMgaW4gYWRkaXRpb24gdG8gYXV0b21hdGljYWxseSByZXBvcnRlZCBhcHAgY3Jhc2hlcy5cbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNsb2dfbm9uLWZhdGFsX2V4Y2VwdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZXIgaWRlbnRpZmllciBwcm9wZXJ0eSBmb3IgY3Jhc2hseXRpY3MgcmVwb3J0aW5nLlxuICAgKiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9jcmFzaGx5dGljcy9jdXN0b21pemUtY3Jhc2gtcmVwb3J0cz9hdXRodXNlcj0wI3NldF91c2VyX2lkc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIHZhbHVlIHRvIHNldCB0aGUgdXNlcklkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
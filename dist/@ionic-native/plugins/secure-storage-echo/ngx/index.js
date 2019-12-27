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
import { IonicNativePlugin, checkAvailability, cordovaInstance, getPromise } from '@ionic-native/core';
var SecureStorageEchoObject = /** @class */ (function () {
    function SecureStorageEchoObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageEchoObject.prototype.get = function (key) { return cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.set = function (key, value) { return cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.remove = function (key) { return cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.keys = function () { return cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.clear = function () { return cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.secureDevice = function () { return cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageEchoObject;
}());
export { SecureStorageEchoObject };
var SecureStorageEcho = /** @class */ (function (_super) {
    __extends(SecureStorageEcho, _super);
    function SecureStorageEcho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageEcho.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageEcho.getPlugin())(function () { return res(new SecureStorageEchoObject(instance)); }, rej, store);
                });
            }
        })();
    };
    SecureStorageEcho.pluginName = "SecureStorageEcho";
    SecureStorageEcho.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageEcho.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageEcho.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageEcho.platforms = ["Android", "Browser", "iOS", "Windows"];
    SecureStorageEcho = __decorate([
        Injectable()
    ], SecureStorageEcho);
    return SecureStorageEcho;
}(IonicNativePlugin));
export { SecureStorageEcho };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlY3VyZS1zdG9yYWdlLWVjaG8vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8seURBQTRELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU14RyxpQ0FBb0IsZUFBb0I7UUFBcEIsb0JBQWUsR0FBZixlQUFlLENBQUs7SUFBRyxDQUFDO0lBVTVDLHFDQUFHLGFBQUMsR0FBVztJQWFmLHFDQUFHLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFZOUIsd0NBQU0sYUFBQyxHQUFXO0lBV2xCLHNDQUFJO0lBV0osdUNBQUs7SUFTTCw4Q0FBWTtrQ0F6RWQ7Ozs7SUFvSXVDLHFDQUFpQjs7OztJQU90RCxrQ0FBTSxhQUFDLEtBQWE7OzttREFBb0M7Z0JBQ3RELE9BQU8sVUFBVSxDQUEwQixVQUFDLEdBQWEsRUFBRSxHQUFhO29CQUN0RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDbEQsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQ2hELEdBQUcsRUFDSCxLQUFLLENBQ04sQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7Ozs7OztJQWZVLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7T0FDQSxpQkFBaUI7NEJBcEk5QjtFQW9JdUMsaUJBQWlCO1NBQTNDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgQ29yZG92YUluc3RhbmNlLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWN1cmVTdG9yYWdlRWNob09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzdG9yZWQgaXRlbVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIGEgdmFsdWVcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXkgdGhhdCB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIHRoZSBzdG9yYWdlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhcnJheSBvZiBrZXlzIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcmluZ3MgdXAgdGhlIHNjcmVlbi1sb2NrIHNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2VjdXJlRGV2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQG5hbWUgU2VjdXJlIFN0b3JhZ2UgRWNob1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBnZXRzLCBzZXRzIGFuZCByZW1vdmVzIGtleSx2YWx1ZSBwYWlycyBmcm9tIGEgZGV2aWNlJ3Mgc2VjdXJlIHN0b3JhZ2UuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgU2VjdXJlIFN0b3JhZ2UgZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21pYnJpdG83MDcvY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNobykuXG4gKlxuICogVGhlIGJyb3dzZXIgcGxhdGZvcm0gaXMgc3VwcG9ydGVkIGFzIGEgbW9jayBvbmx5LiBLZXkvdmFsdWVzIGFyZSBzdG9yZWQgdW5lbmNyeXB0ZWQgaW4gbG9jYWxTdG9yYWdlLlxuICpcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNlY3VyZVN0b3JhZ2VFY2hvLCBTZWN1cmVTdG9yYWdlRWNob09iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2VjdXJlLXN0b3JhZ2UtZWNoby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VjdXJlU3RvcmFnZUVjaG86IFNlY3VyZVN0b3JhZ2VFY2hvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNlY3VyZVN0b3JhZ2VFY2hvLmNyZWF0ZSgnbXlfc3RvcmVfbmFtZScpXG4gKiAgIC50aGVuKChzdG9yYWdlOiBTZWN1cmVTdG9yYWdlRWNob09iamVjdCkgPT4ge1xuICpcbiAqICAgICAgc3RvcmFnZS5nZXQoJ2tleScpXG4gKiAgICAgICAgLnRoZW4oXG4gKiAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgICAgICk7XG4gKlxuICogICAgICBzdG9yYWdlLnNldCgna2V5JywgJ3ZhbHVlJylcbiAqICAgICAgICAudGhlbihcbiAqICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgICAgc3RvcmFnZS5yZW1vdmUoJ2tleScpXG4gKiAgICAgIC50aGVuKFxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgfSk7XG4gKlxuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIFNlY3VyZVN0b3JhZ2VFY2hvT2JqZWN0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2VjdXJlU3RvcmFnZUVjaG8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNlY3VyZVN0b3JhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21pYnJpdG83MDcvY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNobycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cmVTdG9yYWdlRWNobyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lc3BhY2VkIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSBzdG9yZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZWN1cmVTdG9yYWdlRWNob09iamVjdD59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlKHN0b3JlOiBzdHJpbmcpOiBQcm9taXNlPFNlY3VyZVN0b3JhZ2VFY2hvT2JqZWN0PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8U2VjdXJlU3RvcmFnZUVjaG9PYmplY3Q+KChyZXM6IEZ1bmN0aW9uLCByZWo6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoU2VjdXJlU3RvcmFnZUVjaG8uZ2V0UGx1Z2luKCkpKFxuICAgICAgICAoKSA9PiByZXMobmV3IFNlY3VyZVN0b3JhZ2VFY2hvT2JqZWN0KGluc3RhbmNlKSksXG4gICAgICAgIHJlaixcbiAgICAgICAgc3RvcmVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
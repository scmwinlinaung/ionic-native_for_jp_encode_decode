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
var SecureStorageObject = /** @class */ (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageObject.prototype.get = function (key) { return cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.set = function (key, value) { return cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.remove = function (key) { return cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.keys = function () { return cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.clear = function () { return cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.secureDevice = function () { return cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageObject;
}());
export { SecureStorageObject };
var SecureStorage = /** @class */ (function (_super) {
    __extends(SecureStorage, _super);
    function SecureStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorage.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorage.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, rej, store);
                });
            }
        })();
    };
    SecureStorage.pluginName = "SecureStorage";
    SecureStorage.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorage.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorage.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorage.platforms = ["Android", "Browser", "iOS", "Windows"];
    SecureStorage = __decorate([
        Injectable()
    ], SecureStorage);
    return SecureStorage;
}(IonicNativePlugin));
export { SecureStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlY3VyZS1zdG9yYWdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHlEQUE0RCxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNeEcsNkJBQW9CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVU1QyxpQ0FBRyxhQUFDLEdBQVc7SUFhZixpQ0FBRyxhQUFDLEdBQVcsRUFBRSxLQUFhO0lBWTlCLG9DQUFNLGFBQUMsR0FBVztJQVdsQixrQ0FBSTtJQVdKLG1DQUFLO0lBU0wsMENBQVk7OEJBekVkOzs7O0lBb0ltQyxpQ0FBaUI7Ozs7SUFPbEQsOEJBQU0sYUFBQyxLQUFhOzs7bURBQWdDO2dCQUNsRCxPQUFPLFVBQVUsQ0FBc0IsVUFBQyxHQUFhLEVBQUUsR0FBYTtvQkFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM5QyxjQUFNLE9BQUEsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsRUFDNUMsR0FBRyxFQUNILEtBQUssQ0FDTixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O0lBZlUsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQXBJMUI7RUFvSW1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUNoZWNrLCBDb3Jkb3ZhSW5zdGFuY2UsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlY3VyZVN0b3JhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc3RvcmVkIGl0ZW1cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNpbmdsZSBzdG9yZWQgaXRlbVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5IHRoYXQgd2FzIHJlbW92ZWRcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYXJyYXkgb2Yga2V5cyBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCByZWZlcmVuY2VzIGZyb20gdGhlIHN0b3JhZ2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQnJpbmdzIHVwIHRoZSBzY3JlZW4tbG9jayBzZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNlY3VyZURldmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFNlY3VyZSBTdG9yYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGdldHMsIHNldHMgYW5kIHJlbW92ZXMga2V5LHZhbHVlIHBhaXJzIGZyb20gYSBkZXZpY2UncyBzZWN1cmUgc3RvcmFnZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgU2VjdXJlIFN0b3JhZ2UgZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0NyeXBoby9jb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZSkuXG4gKlxuICogVGhlIGJyb3dzZXIgcGxhdGZvcm0gaXMgc3VwcG9ydGVkIGFzIGEgbW9jayBvbmx5LiBLZXkvdmFsdWVzIGFyZSBzdG9yZWQgdW5lbmNyeXB0ZWQgaW4gbG9jYWxTdG9yYWdlLlxuICpcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNlY3VyZVN0b3JhZ2UsIFNlY3VyZVN0b3JhZ2VPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NlY3VyZS1zdG9yYWdlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTdG9yYWdlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNlY3VyZVN0b3JhZ2UuY3JlYXRlKCdteV9zdG9yZV9uYW1lJylcbiAqICAgLnRoZW4oKHN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2VPYmplY3QpID0+IHtcbiAqXG4gKiAgICAgIHN0b3JhZ2UuZ2V0KCdrZXknKVxuICogICAgICAgIC50aGVuKFxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgICAgc3RvcmFnZS5zZXQoJ2tleScsICd2YWx1ZScpXG4gKiAgICAgICAgLnRoZW4oXG4gKiAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgICAgIHN0b3JhZ2UucmVtb3ZlKCdrZXknKVxuICogICAgICAudGhlbihcbiAqICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBTZWN1cmVTdG9yYWdlT2JqZWN0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2VjdXJlU3RvcmFnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlLWVjaG8nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuU2VjdXJlU3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWlicml0bzcwNy9jb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3VyZVN0b3JhZ2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZXNwYWNlZCBzdG9yYWdlLlxuICAgKiBAcGFyYW0gc3RvcmUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8U2VjdXJlU3RvcmFnZU9iamVjdD59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlKHN0b3JlOiBzdHJpbmcpOiBQcm9taXNlPFNlY3VyZVN0b3JhZ2VPYmplY3Q+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0PigocmVzOiBGdW5jdGlvbiwgcmVqOiBGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgKFNlY3VyZVN0b3JhZ2UuZ2V0UGx1Z2luKCkpKFxuICAgICAgICAoKSA9PiByZXMobmV3IFNlY3VyZVN0b3JhZ2VPYmplY3QoaW5zdGFuY2UpKSxcbiAgICAgICAgcmVqLFxuICAgICAgICBzdG9yZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
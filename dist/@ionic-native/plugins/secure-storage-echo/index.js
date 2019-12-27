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
var SecureStorageEchoOriginal = /** @class */ (function (_super) {
    __extends(SecureStorageEchoOriginal, _super);
    function SecureStorageEchoOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageEchoOriginal.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageEchoOriginal.getPlugin())(function () { return res(new SecureStorageEchoObject(instance)); }, rej, store);
                });
            }
        })();
    };
    SecureStorageEchoOriginal.pluginName = "SecureStorageEcho";
    SecureStorageEchoOriginal.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageEchoOriginal.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageEchoOriginal.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageEchoOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return SecureStorageEchoOriginal;
}(IonicNativePlugin));
var SecureStorageEcho = new SecureStorageEchoOriginal();
export { SecureStorageEcho };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlY3VyZS1zdG9yYWdlLWVjaG8vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8seURBQTRELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU14RyxpQ0FBb0IsZUFBb0I7UUFBcEIsb0JBQWUsR0FBZixlQUFlLENBQUs7SUFBRyxDQUFDO0lBVTVDLHFDQUFHLGFBQUMsR0FBVztJQWFmLHFDQUFHLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFZOUIsd0NBQU0sYUFBQyxHQUFXO0lBV2xCLHNDQUFJO0lBV0osdUNBQUs7SUFTTCw4Q0FBWTtrQ0F6RWQ7Ozs7SUFvSXVDLHFDQUFpQjs7OztJQU90RCxrQ0FBTSxhQUFDLEtBQWE7OzttREFBb0M7Z0JBQ3RELE9BQU8sVUFBVSxDQUEwQixVQUFDLEdBQWEsRUFBRSxHQUFhO29CQUN0RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDbEQsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQ2hELEdBQUcsRUFDSCxLQUFLLENBQ04sQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozs0QkFuSkg7RUFvSXVDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhQ2hlY2ssIENvcmRvdmFJbnN0YW5jZSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZUVjaG9PYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc3RvcmVkIGl0ZW1cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNpbmdsZSBzdG9yZWQgaXRlbVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5IHRoYXQgd2FzIHJlbW92ZWRcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYXJyYXkgb2Yga2V5cyBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCByZWZlcmVuY2VzIGZyb20gdGhlIHN0b3JhZ2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQnJpbmdzIHVwIHRoZSBzY3JlZW4tbG9jayBzZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNlY3VyZURldmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFNlY3VyZSBTdG9yYWdlIEVjaG9cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZ2V0cywgc2V0cyBhbmQgcmVtb3ZlcyBrZXksdmFsdWUgcGFpcnMgZnJvbSBhIGRldmljZSdzIHNlY3VyZSBzdG9yYWdlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNob2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIFNlY3VyZSBTdG9yYWdlIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9taWJyaXRvNzA3L2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlLWVjaG8pLlxuICpcbiAqIFRoZSBicm93c2VyIHBsYXRmb3JtIGlzIHN1cHBvcnRlZCBhcyBhIG1vY2sgb25seS4gS2V5L3ZhbHVlcyBhcmUgc3RvcmVkIHVuZW5jcnlwdGVkIGluIGxvY2FsU3RvcmFnZS5cbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTZWN1cmVTdG9yYWdlRWNobywgU2VjdXJlU3RvcmFnZUVjaG9PYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NlY3VyZS1zdG9yYWdlLWVjaG8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlY3VyZVN0b3JhZ2VFY2hvOiBTZWN1cmVTdG9yYWdlRWNobykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zZWN1cmVTdG9yYWdlRWNoby5jcmVhdGUoJ215X3N0b3JlX25hbWUnKVxuICogICAudGhlbigoc3RvcmFnZTogU2VjdXJlU3RvcmFnZUVjaG9PYmplY3QpID0+IHtcbiAqXG4gKiAgICAgIHN0b3JhZ2UuZ2V0KCdrZXknKVxuICogICAgICAgIC50aGVuKFxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgICAgc3RvcmFnZS5zZXQoJ2tleScsICd2YWx1ZScpXG4gKiAgICAgICAgLnRoZW4oXG4gKiAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgICAgIHN0b3JhZ2UucmVtb3ZlKCdrZXknKVxuICogICAgICAudGhlbihcbiAqICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBTZWN1cmVTdG9yYWdlRWNob09iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NlY3VyZVN0b3JhZ2VFY2hvJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNobycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5TZWN1cmVTdG9yYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWJyaXRvNzA3L2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlLWVjaG8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZUVjaG8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZXNwYWNlZCBzdG9yYWdlLlxuICAgKiBAcGFyYW0gc3RvcmUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8U2VjdXJlU3RvcmFnZUVjaG9PYmplY3Q+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShzdG9yZTogc3RyaW5nKTogUHJvbWlzZTxTZWN1cmVTdG9yYWdlRWNob09iamVjdD4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFNlY3VyZVN0b3JhZ2VFY2hvT2JqZWN0PigocmVzOiBGdW5jdGlvbiwgcmVqOiBGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgKFNlY3VyZVN0b3JhZ2VFY2hvLmdldFBsdWdpbigpKShcbiAgICAgICAgKCkgPT4gcmVzKG5ldyBTZWN1cmVTdG9yYWdlRWNob09iamVjdChpbnN0YW5jZSkpLFxuICAgICAgICByZWosXG4gICAgICAgIHN0b3JlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
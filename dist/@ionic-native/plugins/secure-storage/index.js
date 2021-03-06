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
var SecureStorageOriginal = /** @class */ (function (_super) {
    __extends(SecureStorageOriginal, _super);
    function SecureStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageOriginal.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageOriginal.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, rej, store);
                });
            }
        })();
    };
    SecureStorageOriginal.pluginName = "SecureStorage";
    SecureStorageOriginal.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageOriginal.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return SecureStorageOriginal;
}(IonicNativePlugin));
var SecureStorage = new SecureStorageOriginal();
export { SecureStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlY3VyZS1zdG9yYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHlEQUE0RCxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNeEcsNkJBQW9CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVU1QyxpQ0FBRyxhQUFDLEdBQVc7SUFhZixpQ0FBRyxhQUFDLEdBQVcsRUFBRSxLQUFhO0lBWTlCLG9DQUFNLGFBQUMsR0FBVztJQVdsQixrQ0FBSTtJQVdKLG1DQUFLO0lBU0wsMENBQVk7OEJBekVkOzs7O0lBb0ltQyxpQ0FBaUI7Ozs7SUFPbEQsOEJBQU0sYUFBQyxLQUFhOzs7bURBQWdDO2dCQUNsRCxPQUFPLFVBQVUsQ0FBc0IsVUFBQyxHQUFhLEVBQUUsR0FBYTtvQkFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM5QyxjQUFNLE9BQUEsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsRUFDNUMsR0FBRyxFQUNILEtBQUssQ0FDTixDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O3dCQW5KSDtFQW9JbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhQ2hlY2ssIENvcmRvdmFJbnN0YW5jZSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzdG9yZWQgaXRlbVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIGEgdmFsdWVcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXkgdGhhdCB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIHRoZSBzdG9yYWdlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhcnJheSBvZiBrZXlzIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcmluZ3MgdXAgdGhlIHNjcmVlbi1sb2NrIHNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2VjdXJlRGV2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQG5hbWUgU2VjdXJlIFN0b3JhZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZ2V0cywgc2V0cyBhbmQgcmVtb3ZlcyBrZXksdmFsdWUgcGFpcnMgZnJvbSBhIGRldmljZSdzIHNlY3VyZSBzdG9yYWdlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2VgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBTZWN1cmUgU3RvcmFnZSBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vQ3J5cGhvL2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlKS5cbiAqXG4gKiBUaGUgYnJvd3NlciBwbGF0Zm9ybSBpcyBzdXBwb3J0ZWQgYXMgYSBtb2NrIG9ubHkuIEtleS92YWx1ZXMgYXJlIHN0b3JlZCB1bmVuY3J5cHRlZCBpbiBsb2NhbFN0b3JhZ2UuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2VjdXJlU3RvcmFnZSwgU2VjdXJlU3RvcmFnZU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2VjdXJlLXN0b3JhZ2Uvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlY3VyZVN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc2VjdXJlU3RvcmFnZS5jcmVhdGUoJ215X3N0b3JlX25hbWUnKVxuICogICAudGhlbigoc3RvcmFnZTogU2VjdXJlU3RvcmFnZU9iamVjdCkgPT4ge1xuICpcbiAqICAgICAgc3RvcmFnZS5nZXQoJ2tleScpXG4gKiAgICAgICAgLnRoZW4oXG4gKiAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgICAgICk7XG4gKlxuICogICAgICBzdG9yYWdlLnNldCgna2V5JywgJ3ZhbHVlJylcbiAqICAgICAgICAudGhlbihcbiAqICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgICAgc3RvcmFnZS5yZW1vdmUoJ2tleScpXG4gKiAgICAgIC50aGVuKFxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICAgICApO1xuICpcbiAqICAgfSk7XG4gKlxuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIFNlY3VyZVN0b3JhZ2VPYmplY3RcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTZWN1cmVTdG9yYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNobycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5TZWN1cmVTdG9yYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWJyaXRvNzA3L2NvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlLWVjaG8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lc3BhY2VkIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSBzdG9yZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjcmVhdGUoc3RvcmU6IHN0cmluZyk6IFByb21pc2U8U2VjdXJlU3RvcmFnZU9iamVjdD4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFNlY3VyZVN0b3JhZ2VPYmplY3Q+KChyZXM6IEZ1bmN0aW9uLCByZWo6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoU2VjdXJlU3RvcmFnZS5nZXRQbHVnaW4oKSkoXG4gICAgICAgICgpID0+IHJlcyhuZXcgU2VjdXJlU3RvcmFnZU9iamVjdChpbnN0YW5jZSkpLFxuICAgICAgICByZWosXG4gICAgICAgIHN0b3JlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
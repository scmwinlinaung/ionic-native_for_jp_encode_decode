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
var FileEncryptionOriginal = /** @class */ (function (_super) {
    __extends(FileEncryptionOriginal, _super);
    function FileEncryptionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileEncryptionOriginal.prototype.encrypt = function (file, key) { return cordova(this, "encrypt", {}, arguments); };
    FileEncryptionOriginal.prototype.decrypt = function (file, key) { return cordova(this, "decrypt", {}, arguments); };
    FileEncryptionOriginal.pluginName = "FileEncryption";
    FileEncryptionOriginal.plugin = "cordova-safe";
    FileEncryptionOriginal.pluginRef = "cordova.plugins.disusered";
    FileEncryptionOriginal.repo = "https://github.com/disusered/cordova-safe";
    FileEncryptionOriginal.platforms = ["Android", "iOS"];
    return FileEncryptionOriginal;
}(IonicNativePlugin));
var FileEncryption = new FileEncryptionOriginal();
export { FileEncryption };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtZW5jcnlwdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4QnBDLGtDQUFpQjs7OztJQVFuRCxnQ0FBTyxhQUFDLElBQVksRUFBRSxHQUFXO0lBV2pDLGdDQUFPLGFBQUMsSUFBWSxFQUFFLEdBQVc7Ozs7Ozt5QkFsRG5DO0VBK0JvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZpbGUgRW5jcnlwdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBTaW1wbGUgZmlsZSBlbmNyeXB0aW9uIGZvciBDb3Jkb3ZhLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZUVuY3J5cHRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUtZW5jcnlwdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVFbmNyeXB0aW9uOiBGaWxlRW5jcnlwdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlRW5jcnlwdGlvbi5kZWNyeXB0KCdhc3NldHMvanNvbi90b3BTZWNyZXQuanNvbicsICdzZWNyZXRLZXknKTtcbiAqXG4gKiB0aGlzLmZpbGVFbmNyeXB0aW9uLmVuY3J5cHQoJ2Fzc2V0cy9qc29uL3RvcFNlY3JldC5qc29uJywgJ3NlY3JldEtleScpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVFbmNyeXB0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zYWZlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmRpc3VzZXJlZCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGlzdXNlcmVkL2NvcmRvdmEtc2FmZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVFbmNyeXB0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRW5jcnlwdCBhIGZpbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgbG9jYWwgVVJJXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSBrZXkgZm9yIHRoZSBjcnlwdG8gb3BlcmF0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmNyeXB0KGZpbGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyeXB0IGEgZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBBIHN0cmluZyByZXByZXNlbnRpbmcgYSBsb2NhbCBVUklcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIGtleSBmb3IgdGhlIGNyeXB0byBvcGVyYXRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlY3J5cHQoZmlsZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
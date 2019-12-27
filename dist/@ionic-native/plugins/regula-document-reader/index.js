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
var RegulaDocumentReaderOriginal = /** @class */ (function (_super) {
    __extends(RegulaDocumentReaderOriginal, _super);
    function RegulaDocumentReaderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegulaDocumentReaderOriginal.prototype.initReader = function (license) { return cordova(this, "initReader", {}, arguments); };
    RegulaDocumentReaderOriginal.prototype.scanDocument = function () { return cordova(this, "scanDocument", {}, arguments); };
    RegulaDocumentReaderOriginal.pluginName = "Regula Document Reader";
    RegulaDocumentReaderOriginal.plugin = "cordova-plugin-documentreader";
    RegulaDocumentReaderOriginal.pluginRef = "DocumentReader";
    RegulaDocumentReaderOriginal.repo = "https://github.com/regulaforensics/cordova-plugin-documentreader.git";
    RegulaDocumentReaderOriginal.platforms = ["iOS", "Android"];
    RegulaDocumentReaderOriginal.install = "ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION=\"To take photo\"";
    return RegulaDocumentReaderOriginal;
}(IonicNativePlugin));
var RegulaDocumentReader = new RegulaDocumentReaderOriginal();
export { RegulaDocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JlZ3VsYS1kb2N1bWVudC1yZWFkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkI5Qix3Q0FBaUI7Ozs7SUFPekQseUNBQVUsYUFBQyxPQUFZO0lBUXZCLDJDQUFZOzs7Ozs7OytCQTdDZDtFQThCMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBwYWlkXG4gKiBAYmV0YVxuICogQG5hbWUgUmVndWxhIERvY3VtZW50IFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBQbHVnaW4gZm9yIHJlYWRpbmcgYW5kIHZhbGlkYXRpb24gb2YgaWRlbnRpZmljYXRpb24gZG9jdW1lbnRzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUmVndWxhRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JlZ3VsYS1kb2N1bWVudC1yZWFkZXIvbmd4JztcbiAqXG4gKiBsZXQgbGljZW5zZTsgLy8gcmVhZCByZWd1bGEubGljZW5zZSBmaWxlXG4gKiBSZWd1bGFEb2N1bWVudFJlYWRlci5pbml0UmVhZGVyKGxpY2Vuc2UpOyAvLyBpbml0aWFsaXplIHJlYWRlclxuICogUmVndWxhRG9jdW1lbnRSZWFkZXIuc2NhbkRvY3VtZW50KCkudGhlbigocmVzdWx0KSA9PiB7XG4gKiBcdFx0Ly8gcmVhZCByZXN1bHRcbiAqIH0pXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdSZWd1bGEgRG9jdW1lbnQgUmVhZGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnRyZWFkZXInLFxuICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50cmVhZGVyLmdpdCcsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICBpbnN0YWxsOiAnaW9uaWMgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudHJlYWRlciAtLXZhcmlhYmxlIENBTUVSQV9VU0FHRV9ERVNDUklQVElPTj1cIlRvIHRha2UgcGhvdG9cIicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlZ3VsYURvY3VtZW50UmVhZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBzY2FubmVyXG4gICAqIEBwYXJhbSBsaWNlbnNlIHthbnl9IExpY2Vuc2UgZGF0YVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0UmVhZGVyKGxpY2Vuc2U6IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZ1tdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHJlc3VsdHMgd2FzIGdvdCwgYW5kIGZhaWxzIHdoZW4gbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjYW5Eb2N1bWVudCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
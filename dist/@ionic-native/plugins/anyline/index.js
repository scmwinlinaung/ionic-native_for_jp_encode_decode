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
var AnylineOriginal = /** @class */ (function (_super) {
    __extends(AnylineOriginal, _super);
    function AnylineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnylineOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    AnylineOriginal.pluginName = "Anyline";
    AnylineOriginal.plugin = "io-anyline-cordova";
    AnylineOriginal.pluginRef = "Anyline";
    AnylineOriginal.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    AnylineOriginal.platforms = ["Android", "iOS"];
    return AnylineOriginal;
}(IonicNativePlugin));
var Anyline = new AnylineOriginal();
export { Anyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FueWxpbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBdUMzQywyQkFBaUI7Ozs7SUFPNUMsc0JBQUksYUFBQyxPQUF1Qjs7Ozs7O2tCQS9DOUI7RUF3QzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW55bGluZU9wdGlvbnMge1xuICAvLyBWYWxpZCBMaWNlbnNlIEtleVxuICBsaWNlbnNlS2V5OiBzdHJpbmc7XG5cbiAgLy8gU2Nhbm5pbmcgb3B0aW9uc1xuICBjb25maWc6IGFueTtcbn1cblxuLyoqXG4gKiBAbmFtZSBBbnlsaW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFueWxpbmUgcHJvdmlkZXMgYW4gZWFzeS10by11c2UgU0RLIGZvciBhcHBsaWNhdGlvbnMgdG8gZW5hYmxlIE9wdGljYWwgQ2hhcmFjdGVyIFJlY29nbml0aW9uIChPQ1IpIG9uIG1vYmlsZSBkZXZpY2VzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW55bGluZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW55bGluZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFueWxpbmU6IEFueWxpbmUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFueWxpbmUuc2NhbihvcHRpb25zKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FueWxpbmUnLFxuICBwbHVnaW46ICdpby1hbnlsaW5lLWNvcmRvdmEnLFxuICBwbHVnaW5SZWY6ICdBbnlsaW5lJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbnlsaW5lL2FueWxpbmUtb2NyLWNvcmRvdmEtbW9kdWxlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW55bGluZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNjYW5cbiAgICogQHBhcmFtIG9wdGlvbnMge0FueWxpbmVPcHRpb25zfSBTY2FubmluZyBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIENvZGUgaXMgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NhbihvcHRpb25zOiBBbnlsaW5lT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
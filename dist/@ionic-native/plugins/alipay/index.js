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
var AlipayOriginal = /** @class */ (function (_super) {
    __extends(AlipayOriginal, _super);
    function AlipayOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlipayOriginal.prototype.pay = function (order, success, error) { return cordova(this, "pay", {}, arguments); };
    AlipayOriginal.pluginName = "Alipay";
    AlipayOriginal.plugin = "cordova-plugin-gubnoi-alipay";
    AlipayOriginal.pluginRef = "cordova.plugins.alipay";
    AlipayOriginal.repo = "https://github.com/jing-zhou/cordova-plugin-alipay";
    AlipayOriginal.install = "ionic cordova plugin add cordova-plugin-gubnoi-alipay --variable APP_ID=your_app_id";
    AlipayOriginal.installVariables = ["APP_ID"];
    AlipayOriginal.platforms = ["Android", "iOS"];
    return AlipayOriginal;
}(IonicNativePlugin));
var Alipay = new AlipayOriginal();
export { Alipay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXBheS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQzVDLDBCQUFpQjs7OztJQU8zQyxvQkFBRyxhQUFDLEtBQWEsRUFBRSxPQUE2QixFQUFFLEtBQTJCOzs7Ozs7OztpQkE5Qy9FO0VBdUM0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFsaXBheVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBmYWNpbGl0YXRlcyB0aGUgdXNhZ2Ugb2YgQWxpcGF5IOaUr+S7mOWunSBpbiBhbiBJb25pYyBhcHBzIHdpdGggdGhlIGludGVncmF0ZWQgQWxpcGF5U0RLIGRhdGVkIG9uIDIwMTgwNjAxLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZ3Vibm9pLWFsaXBheWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ppbmctemhvdS9jb3Jkb3ZhLXBsdWdpbi1hbGlwYXkgLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQWxpcGF5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbGlwYXkvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsaXBheTogQWxpcGF5KSB7XG4gKlxuICogLy9hbGlwYXlPcmRlciBpcyBhIHN0cmluZyB0aGF0IGhhcyBiZWVuIGdlbmVyYXRlZCBhbmQgc2lnbmVkIGJ5IHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIHRoaXMuYWxpcGF5LnBheShhbGlwYXlPcmRlciwgc3VjY2VzcywgZXJyb3IpXG4gKiAgICAudGhlbihyZXN1bHQgPT4ge1xuICogICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gU3VjY2Vzc1xuICogICAgfSlcbiAqICAgIC5jYXRjaChlcnJvciA9PiB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vIEZhaWxlZFxuICogICAgfSk7XG4gKlxuICogfVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FsaXBheScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWd1Ym5vaS1hbGlwYXknLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYWxpcGF5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qaW5nLXpob3UvY29yZG92YS1wbHVnaW4tYWxpcGF5JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1ndWJub2ktYWxpcGF5IC0tdmFyaWFibGUgQVBQX0lEPXlvdXJfYXBwX2lkJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfSUQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxpcGF5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBBbGlwYXkgdG8gcGVyZm9ybSBBcHAgcGF5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcmRlciBhbGlwYXkgb3JkZXIgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc3VjY2VzcyByZXR1cm4sIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF5KG9yZGVyOiBzdHJpbmcsIHN1Y2Nlc3M/OiAocmVzPzogYW55KSA9PiB2b2lkLCBlcnJvcj86IChlcnI/OiBhbnkpID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
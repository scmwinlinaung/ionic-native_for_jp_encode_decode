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
var SensorsOriginal = /** @class */ (function (_super) {
    __extends(SensorsOriginal, _super);
    function SensorsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorsOriginal.prototype.enableSensor = function (TYPE_SENSOR) { return cordova(this, "enableSensor", {}, arguments); };
    SensorsOriginal.prototype.disableSensor = function () { return cordova(this, "disableSensor", {}, arguments); };
    SensorsOriginal.prototype.getState = function () { return cordova(this, "getState", {}, arguments); };
    SensorsOriginal.pluginName = "Sensors";
    SensorsOriginal.plugin = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    SensorsOriginal.pluginRef = "sensors";
    SensorsOriginal.repo = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    SensorsOriginal.platforms = ["Android"];
    return SensorsOriginal;
}(IonicNativePlugin));
var Sensors = new SensorsOriginal();
export { Sensors };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlbnNvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0QzQywyQkFBaUI7Ozs7SUFRNUMsOEJBQVksYUFBQyxXQUFtQjtJQVNoQywrQkFBYTtJQVNiLDBCQUFROzs7Ozs7a0JBN0VWO0VBbUQ2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZW51bSBUWVBFX1NFTlNPUiB7XG4gIFBST1hJTUlUWSA9ICdQUk9YSU1JVFknLFxuICBBQ0NFTEVST01FVEVSID0gJ0FDQ0VMRVJPTUVURVInLFxuICBHUkFWSVRZID0gJ0dSQVZJVFknLFxuICBHWVJPU0NPUEUgPSAnR1lST1NDT1BFJyxcbiAgR1lST1NDT1BFX1VOQ0FMSUJSQVRFRCA9ICdHWVJPU0NPUEVfVU5DQUxJQlJBVEVEJyxcbiAgTElORUFSX0FDQ0VMRVJBVElPTiA9ICdMSU5FQVJfQUNDRUxFUkFUSU9OJyxcbiAgUk9UQVRJT05fVkVDVE9SID0gJ1JPVEFUSU9OX1ZFQ1RPUicsXG4gIFNURVBfQ09VTlRFUiA9ICdTVEVQX0NPVU5URVInLFxuICBHQU1FX1JPVEFUSU9OX1ZFQ1RPUiA9ICdHQU1FX1JPVEFUSU9OX1ZFQ1RPUicsXG4gIEdFT01BR05FVElDX1JPVEFUSU9OX1ZFQ1RPUiA9ICdHRU9NQUdORVRJQ19ST1RBVElPTl9WRUNUT1InLFxuICBNQUdORVRJQ19GSUVMRCA9ICdNQUdORVRJQ19GSUVMRCcsXG4gIE1BR05FVElDX0ZJRUxEX1VOQ0FMSUJSQVRFRCA9ICdNQUdORVRJQ19GSUVMRF9VTkNBTElCUkFURUQnLFxuICBPUklFTlRBVElPTiA9ICdPUklFTlRBVElPTicsXG4gIEFNQklFTlRfVEVNUEVSQVRVUkUgPSAnQU1CSUVOVF9URU1QRVJBVFVSRScsXG4gIExJR0hUID0gJ0xJR0hUJyxcbiAgUFJFU1NVUkUgPSAnUFJFU1NVUkUnLFxuICBSRUxBVElWRV9IVU1JRElUWSA9ICdSRUxBVElWRV9IVU1JRElUWScsXG4gIFRFTVBFUkFUVVJFID0gJ1RFTVBFUkFUVVJFJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBTZW5zb3JzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGVuYWJsZXMgc2Vuc29ycyBvbiBBbmRyb2lkIGRldmljZXNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNlbnNvcnMsIFRZUEVfU0VOU09SIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zZW5zb3JzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vuc29yczogU2Vuc29ycykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc2Vuc29ycy5lbmFibGVTZW5zb3IoVFlQRV9TRU5TT1IuTElHSFQpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NlbnNvcnMnLFxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vZmFiaW9yb2dlcmlvc2ovY29yZG92YS1wbHVnaW4tc2Vuc29ycy5naXQnLFxuICBwbHVnaW5SZWY6ICdzZW5zb3JzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWJpb3JvZ2VyaW9zai9jb3Jkb3ZhLXBsdWdpbi1zZW5zb3JzLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbnNvcnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZW5hYmxlcyB0aGUgc2Vuc29yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBUWVBFX1NFTlNPUiBTcGVjaWZ5IHRoZSBzZW5zb3IgdG8gZW5hYmxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZVNlbnNvcihUWVBFX1NFTlNPUjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkaXNhYmxlcyB0aGUgc2Vuc29yXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2FibGVTZW5zb3IoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgc3VjY2VzcyBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgc2Vuc29yIHN0YXRlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==
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
var DeviceFeedbackOriginal = /** @class */ (function (_super) {
    __extends(DeviceFeedbackOriginal, _super);
    function DeviceFeedbackOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceFeedbackOriginal.prototype.acoustic = function () { return cordova(this, "acoustic", { "sync": true }, arguments); };
    DeviceFeedbackOriginal.prototype.haptic = function (type) { return cordova(this, "haptic", { "sync": true }, arguments); };
    DeviceFeedbackOriginal.prototype.isFeedbackEnabled = function () { return cordova(this, "isFeedbackEnabled", {}, arguments); };
    DeviceFeedbackOriginal.pluginName = "DeviceFeedback";
    DeviceFeedbackOriginal.plugin = "cordova-plugin-velda-devicefeedback";
    DeviceFeedbackOriginal.pluginRef = "plugins.deviceFeedback";
    DeviceFeedbackOriginal.repo = "https://github.com/VVelda/device-feedback";
    DeviceFeedbackOriginal.platforms = ["Android"];
    return DeviceFeedbackOriginal;
}(IonicNativePlugin));
var DeviceFeedback = new DeviceFeedbackOriginal();
export { DeviceFeedback };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1mZWVkYmFjay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRHBDLGtDQUFpQjs7OztJQUtuRCxpQ0FBUTtJQU9SLCtCQUFNLGFBQUMsSUFBWTtJQU9uQiwwQ0FBaUI7Ozs7Ozt5QkFyRW5CO0VBa0RvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUZlZWRiYWNrU3RhdHVzIHtcbiAgLyoqIEhhcHRpYyBGZWVkYmFjayAqL1xuICBoYXB0aWM6IGJvb2xlYW47XG5cbiAgLyoqIEFjb3VzdGljIEZlZWRiYWNrICovXG4gIGFjb3VzdGljOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBGZWVkYmFja1xuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUGx1Z2luIHRoYXQgbGV0cyB5b3UgcHJvdmlkZSBoYXB0aWMgb3IgYWNvdXN0aWMgZmVlZGJhY2sgb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGV2aWNlRmVlZGJhY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS1mZWVkYmFjay9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlRmVlZGJhY2s6IERldmljZUZlZWRiYWNrKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kZXZpY2VGZWVkYmFjay5hY291c3RpYygpO1xuICpcbiAqIHRoaXMuZGV2aWNlRmVlZGJhY2suaGFwdGljKDApO1xuICpcbiAqIHRoaXMuZGV2aWNlRmVlZGJhY2suaXNGZWVkYmFja0VuYWJsZWQoKS50aGVuKGZlZWRiYWNrID0+IHtcbiAqICAgICBjb25zb2xlLmxvZyhmZWVkYmFjayk7XG4gKiAgICAgLy8ge1xuICogICAgIC8vICAgYWNvdXN0aWM6IHRydWUsXG4gKiAgICAgLy8gICBoYXB0aWM6IHRydWVcbiAqICAgICAvLyB9XG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICogQGlubnRlcmZhY2VzXG4gKiBEZXZpY2VGZWVkYmFja0VuYWJsZWRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXZpY2VGZWVkYmFjaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXZlbGRhLWRldmljZWZlZWRiYWNrJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5kZXZpY2VGZWVkYmFjaycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVlZlbGRhL2RldmljZS1mZWVkYmFjaycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlRmVlZGJhY2sgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQcm92aWRlIHNvdW5kIGZlZWRiYWNrIHRvIHVzZXIsIG5ldmVydGhlbGVzcyByZXNwZWN0IHVzZXIncyBzZXR0aW5ncyBhbmQgY3VycmVudCBhY3RpdmUgZGV2aWNlIHByb2ZpbGUgYXMgbmF0aXZlIGZlZWRiYWNrIGRvLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFjb3VzdGljKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvdmlkZSB2aWJyYXRlIGZlZWRiYWNrIHRvIHVzZXIsIG5ldmVydGhlbGVzcyByZXNwZWN0IHVzZXIncyB0YWN0aWxlIGZlZWRiYWNrIHNldHRpbmcgYXMgbmF0aXZlIGZlZWRiYWNrIGRvLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSBTcGVjaWZ5IHR5cGUgb2YgdmlicmF0aW9uIGZlZWRiYWNrLiAwIGZvciBsb25nIHByZXNzLCAxIGZvciB2aXJ0dWFsIGtleSwgb3IgMyBmb3Iga2V5Ym9hcmQgdGFwLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhhcHRpYyh0eXBlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGhhcHRpYyBhbmQgYWNvdXN0aWMgZmVlZGJhY2sgaXMgZW5hYmxlZCBieSB1c2VyIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VGZWVkYmFja0VuYWJsZWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0ZlZWRiYWNrRW5hYmxlZCgpOiBQcm9taXNlPERldmljZUZlZWRiYWNrU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
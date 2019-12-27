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
import { Observable } from 'rxjs';
var AppCenterPushOriginal = /** @class */ (function (_super) {
    __extends(AppCenterPushOriginal, _super);
    function AppCenterPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPushOriginal.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPushOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterPushOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterPushOriginal.pluginName = "AppCenterPush";
    AppCenterPushOriginal.plugin = "cordova-plugin-appcenter-push";
    AppCenterPushOriginal.pluginRef = "AppCenter.Push";
    AppCenterPushOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPushOriginal.platforms = ["Android", "iOS"];
    return AppCenterPushOriginal;
}(IonicNativePlugin));
var AppCenterPush = new AppCenterPushOriginal();
export { AppCenterPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItcHVzaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtDQyxpQ0FBaUI7Ozs7SUFVbEQsd0NBQWdCLGFBQUMsU0FBaUI7SUFRbEMsaUNBQVM7SUFVVCxrQ0FBVSxhQUFDLFlBQXFCOzs7Ozs7d0JBaEVsQztFQW9DbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIFB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9wdXNoL2NvcmRvdmFcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcENlbnRlclB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1jZW50ZXItcHVzaC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlclB1c2g6IEFwcENlbnRlclB1c2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYXBwQ2VudGVyUHVzaC5zZXRFbmFibGVkKHRydWUpLnRoZW4oKCkgPT4ge1xuICogICAgdGhpcy5hcHBDZW50ZXJQdXNoLmFkZEV2ZW50TGlzdGVuZXIoJ015IEV2ZW50Jykuc3Vic2NyaWJlKHB1c2hOb3RpZmljYXRpb24gPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKCdSZWNpdmVkIHB1c2ggbm90aWZpY2F0aW9uJywgcHVzaE5vdGlmaWNhdGlvbik7XG4gKiAgICB9KTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcENlbnRlclB1c2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItcHVzaCcsXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlci5QdXNoJyxcbiAgcmVwbzpcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXB1c2gnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXJQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50XG4gICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICB9KVxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIEFwcCBDZW50ZXIgUHVzaCBpcyBlbmFibGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIEFwcCBDZW50ZXIgUHVzaCBhdCBydW50aW1lXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IHNob3VsZEVuYWJsZSBTZXQgdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
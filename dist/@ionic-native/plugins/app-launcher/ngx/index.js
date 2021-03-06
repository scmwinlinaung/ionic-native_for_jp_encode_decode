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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppLauncher = /** @class */ (function (_super) {
    __extends(AppLauncher, _super);
    function AppLauncher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLauncher.prototype.canLaunch = function (options) { return cordova(this, "canLaunch", {}, arguments); };
    AppLauncher.prototype.launch = function (options) { return cordova(this, "launch", {}, arguments); };
    AppLauncher.pluginName = "AppLauncher";
    AppLauncher.plugin = "cordova-plugin-app-launcher";
    AppLauncher.pluginRef = "window.plugins.launcher";
    AppLauncher.repo = "https://github.com/nchutchind/cordova-plugin-app-launcher";
    AppLauncher.platforms = ["Android", "iOS"];
    AppLauncher = __decorate([
        Injectable()
    ], AppLauncher);
    return AppLauncher;
}(IonicNativePlugin));
export { AppLauncher };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1sYXVuY2hlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0Q3ZDLCtCQUFpQjs7OztJQU9oRCwrQkFBUyxhQUFDLE9BQTJCO0lBVXJDLDRCQUFNLGFBQUMsT0FBMkI7Ozs7OztJQWpCdkIsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXO3NCQTdDeEI7RUE2Q2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwTGF1bmNoZXJPcHRpb25zIHtcbiAgdXJpPzogc3RyaW5nO1xuICBwYWNrYWdlTmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgTGF1bmNoZXJcbiAqIEBkZXNjcmlwdGlvblxuICogU2ltcGxlIENvcmRvdmEgcGx1Z2luIHRvIHNlZSBpZiBvdGhlciBhcHBzIGFyZSBpbnN0YWxsZWQgYW5kIGxhdW5jaCB0aGVtLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwTGF1bmNoZXIsIEFwcExhdW5jaGVyT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLWxhdW5jaGVyL25neCc7XG4gKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcExhdW5jaGVyOiBBcHBMYXVuY2hlciwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG9wdGlvbnM6IEFwcExhdW5jaGVyT3B0aW9ucyA9IHtcbiAqIH1cbiAqXG4gKiBpZih0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xuICogICBvcHRpb25zLnVyaSA9ICdmYjovLydcbiAqIH0gZWxzZSB7XG4gKiAgIG9wdGlvbnMucGFja2FnZU5hbWUgPSAnY29tLmZhY2Vib29rLmthdGFuYSdcbiAqIH1cbiAqXG4gKiB0aGlzLmFwcExhdW5jaGVyLmNhbkxhdW5jaChvcHRpb25zKVxuICogICAudGhlbigoY2FuTGF1bmNoOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZygnRmFjZWJvb2sgaXMgYXZhaWxhYmxlJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignRmFjZWJvb2sgaXMgbm90IGF2YWlsYWJsZScpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBMYXVuY2hlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcC1sYXVuY2hlcicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmxhdW5jaGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uY2h1dGNoaW5kL2NvcmRvdmEtcGx1Z2luLWFwcC1sYXVuY2hlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcExhdW5jaGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgaWYgYW55IGFwcHMgYXJlIGluc3RhbGxlZCB0aGF0IGNhbiBsYXVuY2ggdmlhIGEgc3BlY2lmaWVkIFVSSSBvciBQYWNrYWdlIE5hbWUuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFwcCBMYXVuY2hlciBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgYXBwIGlzIGluc3RhbGxlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5MYXVuY2gob3B0aW9uczogQXBwTGF1bmNoZXJPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIHRoZSBhcHAgdmlhIGEgc3BlY2lmaWVkIFVSSSBvciBQYWNrYWdlIE5hbWVcbiAgICogQHBhcmFtIG9wdGlvbnMgQXBwIExhdW5jaGVyIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSBsYXVuY2hlZCBhcHBcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbGF1bmNoKG9wdGlvbnM6IEFwcExhdW5jaGVyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
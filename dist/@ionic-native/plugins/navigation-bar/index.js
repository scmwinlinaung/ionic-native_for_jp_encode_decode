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
var NavigationBarOriginal = /** @class */ (function (_super) {
    __extends(NavigationBarOriginal, _super);
    function NavigationBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBarOriginal.prototype.setUp = function (autohide) { return cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBarOriginal.prototype.hideNavigationBar = function () { return cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBarOriginal.pluginName = "NavigationBar";
    NavigationBarOriginal.plugin = "cordova-plugin-navigationbar";
    NavigationBarOriginal.pluginRef = "navigationbar";
    NavigationBarOriginal.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBarOriginal.platforms = ["Android"];
    return NavigationBarOriginal;
}(IonicNativePlugin));
var NavigationBar = new NavigationBarOriginal();
export { NavigationBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdmlnYXRpb24tYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCckMsaUNBQWlCOzs7O0lBWWxELDZCQUFLLGFBQUMsUUFBa0I7SUFheEIseUNBQWlCOzs7Ozs7d0JBdkRuQjtFQThCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBOYXZpZ2F0aW9uIEJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgTmF2aWdhdGlvbkJhciBwbHVnaW4gYWxsb3dzIHlvdSB0byBoaWRlIGFuZCBhdXRvIGhpZGUgdGhlIGFuZHJvaWQgbmF2aWdhdGlvbiBiYXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXZpZ2F0aW9uQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXZpZ2F0aW9uLWJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvbkJhcjogTmF2aWdhdGlvbkJhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGF1dG9IaWRlOiBib29sZWFuID0gdHJ1ZTtcbiAqIHRoaXMubmF2aWdhdGlvbkJhci5zZXRVcChhdXRvSGlkZSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXZpZ2F0aW9uQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF2aWdhdGlvbmJhcicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRpb25iYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NyYW5iZXJyeWdhbWUvY29yZG92YS1wbHVnaW4tbmF2aWdhdGlvbmJhcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogaGlkZSBhdXRvbWF0aWNhbGx5IChvciBub3QpIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQHBhcmFtIGF1dG9oaWRlIHtib29sZWFufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJ1xuICB9KVxuICBzZXRVcChhdXRvaGlkZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZSdcbiAgfSlcbiAgaGlkZU5hdmlnYXRpb25CYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19
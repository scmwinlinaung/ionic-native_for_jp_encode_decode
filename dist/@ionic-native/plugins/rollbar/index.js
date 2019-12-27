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
var RollbarOriginal = /** @class */ (function (_super) {
    __extends(RollbarOriginal, _super);
    function RollbarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollbarOriginal.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    RollbarOriginal.pluginName = "Rollbar";
    RollbarOriginal.plugin = "resgrid-cordova-plugins-rollbar";
    RollbarOriginal.pluginRef = "cordova.plugins.Rollbar";
    RollbarOriginal.repo = "https://github.com/Resgrid/cordova-plugins-rollbar";
    RollbarOriginal.install = "ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=\"YOUR_ROLLBAR_ACCEESS_TOKEN\" --variable ROLLBAR_ENVIRONMENT=\"ROLLBAR_ENVIRONMENT\"";
    RollbarOriginal.installVariables = ["ROLLBAR_ACCESS_TOKEN", "ROLLBAR_ENVIRONMENT"];
    RollbarOriginal.platforms = ["Android", "iOS"];
    return RollbarOriginal;
}(IonicNativePlugin));
var Rollbar = new RollbarOriginal();
export { Rollbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvbGxiYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEIzQywyQkFBaUI7Ozs7SUFPNUMsc0JBQUk7Ozs7Ozs7O2tCQXRDTjtFQStCNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgUm9sbGJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhZGRzIFtSb2xsYmFyXShodHRwczovL3JvbGxiYXIuY29tLykgQXBwIG1vbml0b3JpbmcgdG8geW91ciBhcHBsaWNhdGlvblxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUm9sbGJhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcm9sbGJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9sbGJhcjogUm9sbGJhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5yb2xsYmFyLmluaXQoKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdSb2xsYmFyJyxcbiAgcGx1Z2luOiAncmVzZ3JpZC1jb3Jkb3ZhLXBsdWdpbnMtcm9sbGJhcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Sb2xsYmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9SZXNncmlkL2NvcmRvdmEtcGx1Z2lucy1yb2xsYmFyJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCByZXNncmlkLWNvcmRvdmEtcGx1Z2lucy1yb2xsYmFyIC0tdmFyaWFibGUgUk9MTEJBUl9BQ0NFU1NfVE9LRU49XCJZT1VSX1JPTExCQVJfQUNDRUVTU19UT0tFTlwiIC0tdmFyaWFibGUgUk9MTEJBUl9FTlZJUk9OTUVOVD1cIlJPTExCQVJfRU5WSVJPTk1FTlRcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUk9MTEJBUl9BQ0NFU1NfVE9LRU4nLCAnUk9MTEJBUl9FTlZJUk9OTUVOVCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb2xsYmFyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBtb25pdG9yaW5nIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBsdWdpbiBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=
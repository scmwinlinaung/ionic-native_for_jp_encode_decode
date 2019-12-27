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
var UserAgentOriginal = /** @class */ (function (_super) {
    __extends(UserAgentOriginal, _super);
    function UserAgentOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserAgentOriginal.prototype.set = function (userAgent) { return cordova(this, "set", {}, arguments); };
    UserAgentOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    UserAgentOriginal.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    UserAgentOriginal.pluginName = "UserAgent";
    UserAgentOriginal.plugin = "cordova-plugin-useragent";
    UserAgentOriginal.pluginRef = "UserAgent";
    UserAgentOriginal.repo = "https://github.com/danielsogl/cordova-plugin-useragent";
    UserAgentOriginal.platforms = ["Android", "iOS"];
    return UserAgentOriginal;
}(IonicNativePlugin));
var UserAgent = new UserAgentOriginal();
export { UserAgent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VzZXItYWdlbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUN6Qyw2QkFBaUI7Ozs7SUFROUMsdUJBQUcsYUFBQyxTQUFpQjtJQVNyQix1QkFBRztJQVNILHlCQUFLOzs7Ozs7b0JBcEVQO0VBMEMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFVzZXIgQWdlbnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFVzZXJBZ2VudCBwbHVnaW4gcHJvdmlkZXMgZnVuY3Rpb25zIHRvIHNldCB0aGUgSFRUUCAgdXNlci1hZ2VudCBoZWFkZXIuIEZvciBtb3JlIGluZm8gYWJvdXQgVXNlci1BZ2VudHMsIHBsZWFzZSBbc2VlIHRoZSBIVFRQIFVzZXItQWdlbnQgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL1VzZXItQWdlbnQpLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS11c2VyYWdlbnRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbVXNlci1BZ2VudCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0xvdWlzVC9jb3Jkb3ZhLXVzZXJhZ2VudCkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBVc2VyQWdlbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3VzZXItYWdlbnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQWdlbnQ6IFVzZXJBZ2VudCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMudXNlckFnZW50LnNldCgnTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNTEuMC4yNzA0LjEwMyBTYWZhcmkvNTM3LjM2JylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiAqIHRoaXMudXNlckFnZW50LmdldCgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogKiB0aGlzLnVzZXJBZ2VudC5yZXNldCgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVXNlckFnZW50JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdXNlcmFnZW50JyxcbiAgcGx1Z2luUmVmOiAnVXNlckFnZW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxzb2dsL2NvcmRvdmEtcGx1Z2luLXVzZXJhZ2VudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBZ2VudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY3VycmVudCB1c2VyLWFnZW50IHRvIHRoZSBvbmUgc2VudCBieSBhcmd1bWVudC5cbiAgICogQHBhcmFtIHVzZXJBZ2VudCB7c3RyaW5nfSBVc2VyLUFnZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB1c2VyLWFnZW50IGNoYW5nZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0KHVzZXJBZ2VudDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB1c2VyLWFnZW50IHN0cmluZy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXItYWdlbnQgaXMgcmV0dXJuZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZXItYWdlbnQgYmFjayB0byBkZWZhdWx0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB1c2VyLWFnZW50IHJlc2V0c1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=
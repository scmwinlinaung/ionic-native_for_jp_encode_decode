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
var TwitterConnectOriginal = /** @class */ (function (_super) {
    __extends(TwitterConnectOriginal, _super);
    function TwitterConnectOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwitterConnectOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    TwitterConnectOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    TwitterConnectOriginal.prototype.showUser = function () { return cordova(this, "showUser", {}, arguments); };
    TwitterConnectOriginal.pluginName = "TwitterConnect";
    TwitterConnectOriginal.plugin = "twitter-connect-plugin";
    TwitterConnectOriginal.pluginRef = "TwitterConnect";
    TwitterConnectOriginal.repo = "https://github.com/chroa/twitter-connect-plugin";
    TwitterConnectOriginal.install = "ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>";
    TwitterConnectOriginal.installVariables = ["FABRIC_KEY", "TWITTER_KEY", "TWITTER_SECRET"];
    TwitterConnectOriginal.platforms = ["Android", "iOS"];
    return TwitterConnectOriginal;
}(IonicNativePlugin));
var TwitterConnect = new TwitterConnectOriginal();
export { TwitterConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3R3aXR0ZXItY29ubmVjdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4RHBDLGtDQUFpQjs7OztJQU1uRCw4QkFBSztJQVNMLCtCQUFNO0lBU04saUNBQVE7Ozs7Ozs7O3lCQXZGVjtFQStEb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUd2l0dGVyQ29ubmVjdFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFR3aXR0ZXIgVXNlcm5hbWVcbiAgICovXG4gIHVzZXJOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUd2l0dGVyIFVzZXIgSURcbiAgICovXG4gIHVzZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogVHdpdHRlciBPQXV0aCBTZWNyZXRcbiAgICovXG4gIHNlY3JldDogc3RyaW5nO1xuICAvKipcbiAgICogVHdpdHRlciBPQXV0aCBUb2tlblxuICAgKi9cbiAgdG9rZW46IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBUd2l0dGVyIENvbm5lY3RcbiAqIEBkZXNjcmlwdGlvblxuICogUGx1Z2luIHRvIHVzZSBUd2l0dGVyIFNpbmdsZSBTaWduIE9uXG4gKiBVc2VzIFR3aXR0ZXIncyBGYWJyaWMgU0RLXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUd2l0dGVyQ29ubmVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdHdpdHRlci1jb25uZWN0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0d2l0dGVyOiBUd2l0dGVyQ29ubmVjdCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogZnVuY3Rpb24gb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAqXG4gKiAgIC8vIFdpbGwgY29uc29sZSBsb2cgc29tZXRoaW5nIGxpa2U6XG4gKiAgIC8vIHtcbiAqICAgLy8gICB1c2VyTmFtZTogJ215dXNlcicsXG4gKiAgIC8vICAgdXNlcklkOiAnMTIzNTgxMDInLFxuICogICAvLyAgIHNlY3JldDogJ3Rva2VuU2VjcmV0J1xuICogICAvLyAgIHRva2VuOiAnYWNjZXNzVG9rZW5IZXJlJ1xuICogICAvLyB9XG4gKiB9XG4gKlxuICogdGhpcy50d2l0dGVyLmxvZ2luKCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMudHdpdHRlci5sb2dvdXQoKS50aGVuKG9uTG9nb3V0U3VjY2Vzcywgb25Mb2dvdXRFcnJvcik7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBUd2l0dGVyQ29ubmVjdFJlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVHdpdHRlckNvbm5lY3QnLFxuICBwbHVnaW46ICd0d2l0dGVyLWNvbm5lY3QtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnVHdpdHRlckNvbm5lY3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nocm9hL3R3aXR0ZXItY29ubmVjdC1wbHVnaW4nLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJvYS90d2l0dGVyLWNvbm5lY3QtcGx1Z2luIC0tdmFyaWFibGUgRkFCUklDX0tFWT08RmFicmljIEFQSSBLZXk+IC0tdmFyaWFibGUgVFdJVFRFUl9LRVk9PFR3aXR0ZXIgQ29uc3VtZXIgS2V5PiAtLXZhcmlhYmxlIFRXSVRURVJfU0VDUkVUPTxUd2l0dGVyIENvbnN1bWVyIFNlY3JldD4nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0ZBQlJJQ19LRVknLCAnVFdJVFRFUl9LRVknLCAnVFdJVFRFUl9TRUNSRVQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHdpdHRlckNvbm5lY3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dzIGluXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFR3aXR0ZXJDb25uZWN0UmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIGxvZ2dlZCBpbiBhbmQgcmVqZWN0cyBpZiBmYWlsZWQgdG8gbG9naW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4oKTogUHJvbWlzZTxUd2l0dGVyQ29ubmVjdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ3Mgb3V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgbG9nZ2VkIG91dCBhbmQgcmVqZWN0cyBpZiBmYWlsZWQgdG8gbG9nb3V0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVzZXIncyBwcm9maWxlIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdXNlciBwcm9maWxlIGlzIHN1Y2Nlc3NmdWxseSByZXRyaWV2ZWQgYW5kIHJlamVjdHMgaWYgcmVxdWVzdCBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93VXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
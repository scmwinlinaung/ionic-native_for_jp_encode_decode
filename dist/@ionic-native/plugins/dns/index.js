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
var DNSOriginal = /** @class */ (function (_super) {
    __extends(DNSOriginal, _super);
    function DNSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNSOriginal.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNSOriginal.pluginName = "DNS";
    DNSOriginal.plugin = "cordova-plugin-dns";
    DNSOriginal.pluginRef = "cordova.plugins.dns";
    DNSOriginal.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNSOriginal.platforms = ["Android"];
    return DNSOriginal;
}(IonicNativePlugin));
var DNS = new DNSOriginal();
export { DNS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Rucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9DLHVCQUFpQjs7OztJQU94QyxxQkFBTyxhQUFDLFFBQWdCOzs7Ozs7Y0F0QzFCO0VBK0J5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEROU1xuICogQGRlc2NyaXB0aW9uIEEgcGx1Z2luIGZvciBBcGFjaGUgQ29yZG92YSB0aGF0IGVuYWJsZXMgYXBwbGljYXRpb25zIHRvIG1hbnVhbGx5IHJlc29sdmUgaG9zdG5hbWVzIGludG8gYW4gdW5kZXJseWluZyBuZXR3b3JrIGFkZHJlc3MuIFRoaXMgaXMgbW9zdGx5IHVzZWZ1bCBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgZGV2aWNlJ3MgRE5TIHNlcnZlciBjb25maWd1cmF0aW9uLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRE5TIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kbnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkbnM6IEROUykgeyB9XG4gKlxuICogLi4uXG4gKiB0aGlzLmRucy5yZXNvbHZlKGhvc3RuYW1lKVxuICogICAudGhlbihcbiAqICAgICBhZGRyZXNzID0+IGNvbnNvbGUubG9nKCdSZXNvbHZlZCAnICsgaG9zdG5hbWUgKyAnIHRvICcgKyBhZGRyZXNzKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHJlc29sdmUgJyArIGhvc3RuYW1lICsgJzogJyArIGVycm9yKVxuICogICApO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ROUycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRucycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5kbnMnLFxuICByZXBvOiAnaHR0cHM6Ly9iaXRidWNrZXQub3JnL3plZ2ViYS9jb3Jkb3ZhLXBsdWdpbi1kbnMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEROUyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlc29sdmUgaG9zdG5hbWVzIGludG8gYW4gdW5kZXJseWluZyBuZXR3b3JrIGFkZHJlc3MuXG4gICAqIEBwYXJhbSBob3N0bmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc29sdXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc29sdmUoaG9zdG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
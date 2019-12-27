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
var UptimeOriginal = /** @class */ (function (_super) {
    __extends(UptimeOriginal, _super);
    function UptimeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UptimeOriginal.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    UptimeOriginal.pluginName = "Uptime";
    UptimeOriginal.plugin = "cordova-plugin-uptime";
    UptimeOriginal.pluginRef = "Uptime";
    UptimeOriginal.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    UptimeOriginal.platforms = ["Android", "iOS"];
    return UptimeOriginal;
}(IonicNativePlugin));
var Uptime = new UptimeOriginal();
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VwdGltZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QjVDLDBCQUFpQjs7OztJQU8zQywwQkFBUyxhQUFDLGdCQUF5Qjs7Ozs7O2lCQXJDckM7RUE4QjRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVXB0aW1lXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSB0aW1lIHNwZW50IGluIG1pbGxpc2Vjb25kcyBzaW5jZSBib290ICh1cHRpbWUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVXB0aW1lIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS91cHRpbWUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwdGltZTogVXB0aW1lKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnVwdGltZS5nZXRVcHRpbWUoaW5jbHVkZURlZXBTbGVlcClcbiAqICAgLnRoZW4odXB0aW1lID0+IGNvbnNvbGUubG9nKHVwdGltZSkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1VwdGltZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVwdGltZScsXG4gIHBsdWdpblJlZjogJ1VwdGltZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vczFsdml1L2NvcmRvdmEtcGx1Z2luLXVwdGltZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwdGltZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJuIHN5c3RlbSB1cHRpbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlRGVlcFNsZWVwIFNldCB0byB0cnVlIHRvIGluY2x1ZGUgc3lzdGVtIGRlZXAgc2xlZXBcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybiB0aGUgdXB0aW1lIGluIG1pbGxpc2Vjb25kc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRVcHRpbWUoaW5jbHVkZURlZXBTbGVlcDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
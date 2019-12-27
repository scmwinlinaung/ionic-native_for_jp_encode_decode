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
var SimOriginal = /** @class */ (function (_super) {
    __extends(SimOriginal, _super);
    function SimOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimOriginal.prototype.getSimInfo = function () { return cordova(this, "getSimInfo", {}, arguments); };
    SimOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    SimOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    SimOriginal.pluginName = "Sim";
    SimOriginal.plugin = "cordova-plugin-sim";
    SimOriginal.pluginRef = "plugins.sim";
    SimOriginal.repo = "https://github.com/pbakondy/cordova-plugin-sim";
    SimOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
    return SimOriginal;
}(IonicNativePlugin));
var Sim = new SimOriginal();
export { Sim };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NpbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQy9DLHVCQUFpQjs7OztJQU14Qyx3QkFBVTtJQVdWLCtCQUFpQjtJQVdqQixtQ0FBcUI7Ozs7OztjQXZFdkI7RUEyQ3lCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAbmFtZSBTaW1cbiAqIEBkZXNjcmlwdGlvblxuICogR2V0cyBpbmZvIGZyb20gdGhlIFNpbSBjYXJkIGxpa2UgdGhlIGNhcnJpZXIgbmFtZSwgbWNjLCBtbmMgYW5kIGNvdW50cnkgY29kZSBhbmQgb3RoZXIgc3lzdGVtIGRlcGVuZGVudCBpbmZvLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc2ltYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgU2ltIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9wYmFrb25keS9jb3Jkb3ZhLXBsdWdpbi1zaW0pLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2ltIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zaW0vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzaW06IFNpbSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zaW0uZ2V0U2ltSW5mbygpLnRoZW4oXG4gKiAgIChpbmZvKSA9PiBjb25zb2xlLmxvZygnU2ltIGluZm86ICcsIGluZm8pLFxuICogICAoZXJyKSA9PiBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGdldCBzaW0gaW5mbzogJywgZXJyKVxuICogKTtcbiAqXG4gKiB0aGlzLnNpbS5oYXNSZWFkUGVybWlzc2lvbigpLnRoZW4oXG4gKiAgIChpbmZvKSA9PiBjb25zb2xlLmxvZygnSGFzIHBlcm1pc3Npb246ICcsIGluZm8pXG4gKiApO1xuICpcbiAqIHRoaXMuc2ltLnJlcXVlc3RSZWFkUGVybWlzc2lvbigpLnRoZW4oXG4gKiAgICgpID0+IGNvbnNvbGUubG9nKCdQZXJtaXNzaW9uIGdyYW50ZWQnKSxcbiAqICAgKCkgPT4gY29uc29sZS5sb2coJ1Blcm1pc3Npb24gZGVuaWVkJylcbiAqICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTaW0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaW0nLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnNpbScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGJha29uZHkvY29yZG92YS1wbHVnaW4tc2ltJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgaW5mbyBmcm9tIHRoZSBTSU0gY2FyZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2ltSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIHJlcXVlc3RSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
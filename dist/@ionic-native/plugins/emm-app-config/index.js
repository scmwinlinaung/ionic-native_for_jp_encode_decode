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
var EmmAppConfigOriginal = /** @class */ (function (_super) {
    __extends(EmmAppConfigOriginal, _super);
    function EmmAppConfigOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmmAppConfigOriginal.prototype.getValue = function (configKey) { return cordova(this, "getValue", { "sync": true }, arguments); };
    EmmAppConfigOriginal.prototype.registerChangedListener = function () { return cordova(this, "registerChangedListener", { "observable": true }, arguments); };
    EmmAppConfigOriginal.platforms = ["Android", "iOS"];
    EmmAppConfigOriginal.plugin = "cordova-plugin-emm-app-config";
    EmmAppConfigOriginal.pluginName = "EmmAppConfig";
    EmmAppConfigOriginal.pluginRef = "cordova.plugins.EmmAppConfig";
    EmmAppConfigOriginal.repo = "https://github.com/oracle/cordova-plugin-emm-app-config";
    return EmmAppConfigOriginal;
}(IonicNativePlugin));
var EmmAppConfig = new EmmAppConfigOriginal();
export { EmmAppConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtbS1hcHAtY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdUNBLGdDQUFpQjs7OztJQU94QiwrQkFBUSxhQUFDLFNBQWtCO0lBUXJCLDhDQUF1Qjs7Ozs7O3VCQXhEeEQ7RUF5Q2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgRW1tIEFwcCBDb25maWdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgaW5mb3JtYXRpb24gb24gRU1NIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1lbW0tYXBwLWNvbmZpZ2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIEVNTSBBcHAgQ29uZmlnIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vb3JhY2xlL2NvcmRvdmEtcGx1Z2luLWVtbS1hcHAtY29uZmlnKS5cbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFbW1BcHBDb25maWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2VtbS1hcHAtY29uZmlnL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZW1tQXBwQ29uZmlnOiBFbW1BcHBDb25maWcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIEdldCBhbGwgdGhlIHZhbHVlcyBvZiB0aGUgZW1tIGFwcCBjb25maWd1cmF0aW9uXG4gKiBjb25zdCB2YWx1ZXMgPSB0aGlzLmVtbUFwcENvbmZpZy5nZXRWYWx1ZSgpO1xuICpcbiAqIC8vIEdldCBzcGVjaWZpYyB2YWx1ZSBvZiB0aGUgZW1tIGFwcCBjb25maWd1cmF0aW9uXG4gKiBjb25zdCB2YWx1ZSA9IHRoaXMuZW1tQXBwQ29uZmlnLmdldFZhbHVlKCdzZXJ2ZXJVcmwnKTtcbiAqXG4gKiAvLyBHZXQgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgZW1tIGFwcCBjb25maWcgY2hhbmdlc1xuICogdGhpcy5lbW1BcHBDb25maWcucmVnaXN0ZXJDaGFuZ2VkTGlzdGVuZXIoKVxuICogICAuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdBcHAgY29uZmlnIGNoYW5nZXMnKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZW1tLWFwcC1jb25maWcnLFxuICBwbHVnaW5OYW1lOiAnRW1tQXBwQ29uZmlnJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkVtbUFwcENvbmZpZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb3JhY2xlL2NvcmRvdmEtcGx1Z2luLWVtbS1hcHAtY29uZmlnJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1tQXBwQ29uZmlnIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUgZnJvbSB0aGUgRW1tIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSBjb25maWdLZXkge3N0cmluZ30gIEtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LCBvciBudWxsIHRvIGdldCBhbGwgdGhlIHZhbHVlcyBhcyBhbiBvYmplY3QuXG4gICAqIEByZXR1cm4ge2FueX0gUmV0dXJucyBjb25maWd1cmF0aW9uIG9uIGFuIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pIGdldFZhbHVlKGNvbmZpZ0tleT86IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBpcyBjaGFuZ2VkLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pIHJlZ2lzdGVyQ2hhbmdlZExpc3RlbmVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=
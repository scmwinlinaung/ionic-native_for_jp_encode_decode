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
var HttpdOriginal = /** @class */ (function (_super) {
    __extends(HttpdOriginal, _super);
    function HttpdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HttpdOriginal.prototype.startServer = function (options) { return cordova(this, "startServer", { "observable": true, "clearFunction": "stopServer" }, arguments); };
    HttpdOriginal.prototype.getUrl = function () { return cordova(this, "getUrl", {}, arguments); };
    HttpdOriginal.prototype.getLocalPath = function () { return cordova(this, "getLocalPath", {}, arguments); };
    HttpdOriginal.pluginName = "Httpd";
    HttpdOriginal.plugin = "cordova-plugin-httpd";
    HttpdOriginal.pluginRef = "cordova.plugins.CorHttpd";
    HttpdOriginal.repo = "https://github.com/floatinghotpot/cordova-httpd";
    HttpdOriginal.platforms = ["Android", "iOS", "macOS"];
    return HttpdOriginal;
}(IonicNativePlugin));
var Httpd = new HttpdOriginal();
export { Httpd };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h0dHBkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdURQLHlCQUFpQjs7OztJQVUxQywyQkFBVyxhQUFDLE9BQXNCO0lBU2xDLHNCQUFNO0lBU04sNEJBQVk7Ozs7OztnQkFyRmQ7RUF5RDJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cGRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgcm9vdCBkaXJlY3RvcnkgZm9yIHlvdXIgd2ViIHNlcnZlci4gVGhpcyBwYXRoIGlzIHJlbGF0aXZlIHRvIHlvdXIgYXBwJ3Mgd3d3IGRpcmVjdG9yeS5cbiAgICogRGVmYXVsdCBpcyBjdXJyZW50IGRpcmVjdG9yeS5cbiAgICovXG4gIHd3d19yb290Pzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHBvcnQgbnVtYmVyIHRvIHVzZS5cbiAgICogRGVmYXVsdCBpcyA4ODg4XG4gICAqL1xuICBwb3J0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0dGluZyB0aGlzIG9wdGlvbiB0byBmYWxzZSB3aWxsIGFsbG93IHJlbW90ZSBhY2Nlc3MgdG8geW91ciB3ZWIgc2VydmVyIChvdmVyIGFueSBJUCkuXG4gICAqIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqL1xuICBsb2NhbGhvc3Rfb25seT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSHR0cGRcbiAqIEBkZXNjcmlwdGlvblxuICogRW1iZWRkZWQgaHR0cGQgZm9yIENvcmRvdmEgYXBwcy4gTGlnaHQgd2VpZ2h0IEhUVFAgc2VydmVyLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIdHRwZCwgSHR0cGRPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cGQ6IEh0dHBkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IG9wdGlvbnM6IEh0dHBkT3B0aW9ucyA9IHtcbiAqICAgICAgd3d3X3Jvb3Q6ICdodHRwZF9yb290JywgLy8gcmVsYXRpdmUgcGF0aCB0byBhcHAncyB3d3cgZGlyZWN0b3J5XG4gKiAgICAgIHBvcnQ6IDgwLFxuICogICAgICBsb2NhbGhvc3Rfb25seTogZmFsc2VcbiAqICB9XG4gKlxuICogdGhpcy5odHRwZC5zdGFydFNlcnZlcihvcHRpb25zKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAqICBjb25zb2xlLmxvZygnU2VydmVyIGlzIGxpdmUnKTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEh0dHBkT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0h0dHBkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taHR0cGQnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQ29ySHR0cGQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtaHR0cGQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHdlYiBzZXJ2ZXIuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtIdHRwZE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59IFJldHVybnMgYW4gT2JzZXJ2YWJsZS4gU3Vic2NyaWJlIHRvIHJlY2VpdmUgdGhlIFVSTCBmb3IgeW91ciB3ZWIgc2VydmVyIChpZiBzdWNjZWVkZWQpLiBVbnN1YnNjcmliZSB0byBzdG9wIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcFNlcnZlcidcbiAgfSlcbiAgc3RhcnRTZXJ2ZXIob3B0aW9ucz86IEh0dHBkT3B0aW9ucyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIFVSTCBvZiB0aGUgcnVubmluZyBzZXJ2ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBVUkwgb2YgdGhlIHdlYiBzZXJ2ZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxvY2FsIHBhdGggb2YgdGhlIHJ1bm5pbmcgd2Vic2VydmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9jYWwgcGF0aCBvZiB0aGUgd2ViIHNlcnZlci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TG9jYWxQYXRoKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
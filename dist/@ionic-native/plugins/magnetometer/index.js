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
var MagnetometerOriginal = /** @class */ (function (_super) {
    __extends(MagnetometerOriginal, _super);
    function MagnetometerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagnetometerOriginal.prototype.getReading = function () { return cordova(this, "getReading", {}, arguments); };
    MagnetometerOriginal.prototype.watchReadings = function () { return cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    MagnetometerOriginal.pluginName = "Magnetometer";
    MagnetometerOriginal.plugin = "cordova-plugin-magnetometer";
    MagnetometerOriginal.pluginRef = "cordova.plugins.magnetometer";
    MagnetometerOriginal.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    MagnetometerOriginal.platforms = ["Android", "iOS"];
    return MagnetometerOriginal;
}(IonicNativePlugin));
var Magnetometer = new MagnetometerOriginal();
export { Magnetometer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hZ25ldG9tZXRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQW1FQSxnQ0FBaUI7Ozs7SUFNakQsaUNBQVU7SUFnQlYsb0NBQWE7Ozs7Ozt1QkEzRmY7RUFxRWtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnbmV0b21ldGVyUmVhZGluZyB7XG4gIC8qKlxuICAgKiBYIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgeDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBZIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBaIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgejogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVkIHRvdGFsIC0gYWx3YXlzIHBvc2l0aXZlIG9mIG1hZ25ldG9tZXRlci4gKE51bWJlcilcbiAgICovXG4gIG1hZ25pdHVkZTogbnVtYmVyO1xuXG59XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlIGVNYWduZXRvbWV0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1tYWduZXRvbWV0ZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRGV2aWNlIE9yaWVudGF0aW9uIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9zZGVzYWxhcy9jb3Jkb3ZhLXBsdWdpbi1tYWduZXRvbWV0ZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gRGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZyBpcyBhbiBpbnRlcmZhY2UgZm9yIGNvbXBhc3NcbiAqIGltcG9ydCB7IE1hZ25ldG9tZXRlciwgTWFnbmV0b21ldGVyUmVhZGluZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlLW9yaWVudGF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtYWduZXRvbWV0ZXI6IE1hZ25ldG9tZXRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gR2V0IHRoZSBkZXZpY2UgY3VycmVudCBjb21wYXNzIGhlYWRpbmdcbiAqIHRoaXMuZGV2aWNlT3JpZW50YXRpb24uZ2V0UmVhZGluZygpLnRoZW4oXG4gKiAgIChkYXRhOiBNYWduZXRvbWV0ZXJSZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogKTtcbiAqXG4gKiAvLyBXYXRjaCB0aGUgZGV2aWNlIGNvbXBhc3MgaGVhZGluZyBjaGFuZ2VcbiAqIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLmRldmljZU9yaWVudGF0aW9uLndhdGNoUmVhZGluZ3MoKS5zdWJzY3JpYmUoXG4gKiAgIChkYXRhOiBNYWduZXRvbWV0ZXJSZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICogKTtcbiAqXG4gKiAvLyBTdG9wIHdhdGNoaW5nIGhlYWRpbmcgY2hhbmdlXG4gKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE1hZ25ldG9tZXRlclJlYWRpbmdcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNYWduZXRvbWV0ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tYWduZXRvbWV0ZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubWFnbmV0b21ldGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZGVzYWxhcy9jb3Jkb3ZhLXBsdWdpbi1tYWduZXRvbWV0ZXInLFxuICBwbGF0Zm9ybXM6IFtcbiAgICAnQW5kcm9pZCcsXG4gICAgJ2lPUycsXG4gIF1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFnbmV0b21ldGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNvbXBhc3MgcmVhZGluZy5cbiAgICogQHJldHVybnMge1Byb21pc2U8TWFnbmV0b21ldGVyUmVhZGluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFJlYWRpbmcoKTogUHJvbWlzZTxNYWduZXRvbWV0ZXJSZWFkaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGV2aWNlIGN1cnJlbnQgaGVhZGluZyBhdCBhIHJlZ3VsYXIgaW50ZXJ2YWxcbiAgICpcbiAgICogU3RvcCB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSB7RGV2aWNlT3JpZW50YXRpb25Db21wYXNzT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIGNvbXBhc3MuIEZyZXF1ZW5jeSBhbmQgRmlsdGVyLiBPcHRpb25hbFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIGNvbXBhc3MgaGVhZGluZ1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJ1xuICB9KVxuICB3YXRjaFJlYWRpbmdzKFxuICApOiBPYnNlcnZhYmxlPE1hZ25ldG9tZXRlclJlYWRpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
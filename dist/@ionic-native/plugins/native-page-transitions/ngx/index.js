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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NativePageTransitions = /** @class */ (function (_super) {
    __extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativePageTransitions.prototype.slide = function (options) { return cordova(this, "slide", {}, arguments); };
    NativePageTransitions.prototype.flip = function (options) { return cordova(this, "flip", {}, arguments); };
    NativePageTransitions.prototype.fade = function (options) { return cordova(this, "fade", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.drawer = function (options) { return cordova(this, "drawer", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.curl = function (options) { return cordova(this, "curl", { "platforms": ["iOS"] }, arguments); };
    NativePageTransitions.prototype.executePendingTransition = function () { return cordova(this, "executePendingTransition", {}, arguments); };
    NativePageTransitions.prototype.cancelPendingTransition = function () { return cordova(this, "cancelPendingTransition", {}, arguments); };
    NativePageTransitions.pluginName = "NativePageTransitions";
    NativePageTransitions.plugin = "com.telerik.plugins.nativepagetransitions";
    NativePageTransitions.pluginRef = "plugins.nativepagetransitions";
    NativePageTransitions.repo = "https://github.com/Telerik-Verified-Plugins/NativePageTransitions";
    NativePageTransitions.platforms = ["Android", "iOS", "Windows Phone 8"];
    NativePageTransitions = __decorate([
        Injectable()
    ], NativePageTransitions);
    return NativePageTransitions;
}(IonicNativePlugin));
export { NativePageTransitions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1wYWdlLXRyYW5zaXRpb25zL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNFN0IseUNBQWlCOzs7O0lBTzFELHFDQUFLLGFBQUMsT0FBZ0M7SUFVdEMsb0NBQUksYUFBQyxPQUFnQztJQVVyQyxvQ0FBSSxhQUFDLE9BQWdDO0lBV3JDLHNDQUFNLGFBQUMsT0FBZ0M7SUFXdkMsb0NBQUksYUFBQyxPQUFnQztJQVNyQyx3REFBd0I7SUFTeEIsdURBQXVCOzs7Ozs7SUFuRVoscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0F2RWxDO0VBdUUyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMge1xuICBkaXJlY3Rpb24/OiBzdHJpbmc7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBzbG93ZG93bmZhY3Rvcj86IG51bWJlcjtcbiAgc2xpZGVQaXhlbHM/OiBudW1iZXI7XG4gIGlvc2RlbGF5PzogbnVtYmVyO1xuICBhbmRyb2lkZGVsYXk/OiBudW1iZXI7XG4gIHdpbnBob25lZGVsYXk/OiBudW1iZXI7XG4gIGZpeGVkUGl4ZWxzVG9wPzogbnVtYmVyO1xuICBmaXhlZFBpeGVsc0JvdHRvbT86IG51bWJlcjtcbiAgYWN0aW9uPzogc3RyaW5nO1xuICBvcmlnaW4/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgTmF0aXZlIFBhZ2UgVHJhbnNpdGlvbnNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIE5hdGl2ZSBQYWdlIFRyYW5zaXRpb25zIHBsdWdpbiB1c2VzIG5hdGl2ZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gdG8gYW5pbWF0ZSB5b3VyIHRyYW5zaXRpb25zIGJldHdlZW4gdmlld3MuIFlvdSBoYXZlIGNvbXBsZXRlIGNvbnRyb2wgb3ZlciB0aGUgdHlwZSBvZiB0cmFuc2l0aW9uLCB0aGUgZHVyYXRpb24sIGFuZCBkaXJlY3Rpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXRpdmVQYWdlVHJhbnNpdGlvbnMsIE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtcGFnZS10cmFuc2l0aW9ucy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlUGFnZVRyYW5zaXRpb25zOiBOYXRpdmVQYWdlVHJhbnNpdGlvbnMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyBleGFtcGxlIG9mIGFkZGluZyBhIHRyYW5zaXRpb24gd2hlbiBhIHBhZ2UvbW9kYWwgY2xvc2VzXG4gKiBpb25WaWV3V2lsbExlYXZlKCkge1xuICpcbiAqICBsZXQgb3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMgPSB7XG4gKiAgICAgZGlyZWN0aW9uOiAndXAnLFxuICogICAgIGR1cmF0aW9uOiA1MDAsXG4gKiAgICAgc2xvd2Rvd25mYWN0b3I6IDMsXG4gKiAgICAgc2xpZGVQaXhlbHM6IDIwLFxuICogICAgIGlvc2RlbGF5OiAxMDAsXG4gKiAgICAgYW5kcm9pZGRlbGF5OiAxNTAsXG4gKiAgICAgZml4ZWRQaXhlbHNUb3A6IDAsXG4gKiAgICAgZml4ZWRQaXhlbHNCb3R0b206IDYwXG4gKiAgICB9XG4gKlxuICogIHRoaXMubmF0aXZlUGFnZVRyYW5zaXRpb25zLnNsaWRlKG9wdGlvbnMpXG4gKiAgICAudGhlbihvblN1Y2Nlc3MpXG4gKiAgICAuY2F0Y2gob25FcnJvcik7XG4gKlxuICogfVxuICpcbiAqXG4gKiAvLyBleGFtcGxlIG9mIGFkZGluZyBhIHRyYW5zaXRpb24gd2hlbiBwdXNoaW5nIGEgbmV3IHBhZ2VcbiAqIG9wZW5QYWdlKHBhZ2U6IGFueSkge1xuICpcbiAqICAgdGhpcy5uYXRpdmVQYWdlVHJhbnNpdGlvbnMuc2xpZGUob3B0aW9ucyk7XG4gKiAgIHRoaXMubmF2Q3RybC5wdXNoKHBhZ2UpO1xuICpcbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVQYWdlVHJhbnNpdGlvbnMnLFxuICBwbHVnaW46ICdjb20udGVsZXJpay5wbHVnaW5zLm5hdGl2ZXBhZ2V0cmFuc2l0aW9ucycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMubmF0aXZlcGFnZXRyYW5zaXRpb25zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvTmF0aXZlUGFnZVRyYW5zaXRpb25zJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVBhZ2VUcmFuc2l0aW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBzbGlkZSBhbmltYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzbGlkZShvcHRpb25zOiBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBmbGlwIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlVHJhbnNpdGlvbk9wdGlvbnN9IE9wdGlvbnMgZm9yIHRoZSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZsaXAob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgZmFkZSBhbmltYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSB9KVxuICBmYWRlKG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgc2xpZGUgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10gfSlcbiAgZHJhd2VyKG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgc2xpZGUgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGN1cmwob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIHBlbmRpbmcgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGVjdXRlUGVuZGluZ1RyYW5zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHBlbmRpbmcgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=
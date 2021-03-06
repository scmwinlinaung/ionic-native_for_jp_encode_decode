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
var ImageResizerOriginal = /** @class */ (function (_super) {
    __extends(ImageResizerOriginal, _super);
    function ImageResizerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizerOriginal.prototype.resize = function (options) { return cordova(this, "resize", {}, arguments); };
    ImageResizerOriginal.pluginName = "ImageResizer";
    ImageResizerOriginal.plugin = "info.protonet.imageresizer";
    ImageResizerOriginal.pluginRef = "ImageResizer";
    ImageResizerOriginal.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizerOriginal.platforms = ["Android", "iOS", "Windows"];
    return ImageResizerOriginal;
}(IonicNativePlugin));
var ImageResizer = new ImageResizerOriginal();
export { ImageResizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXJlc2l6ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUZ0QyxnQ0FBaUI7Ozs7SUFLakQsNkJBQU0sYUFBQyxPQUE0Qjs7Ozs7O3VCQXZGckM7RUFrRmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VSZXNpemVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgVVJJIGZvciB0aGUgaW1hZ2Ugb24gdGhlIGRldmljZSB0byBnZXQgc2NhbGVkXG4gICAqL1xuICB1cmk6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZvbGRlciB0aGUgaW1hZ2Ugc2hvdWxkIGJlIHB1dFxuICAgKiAoQW5kcm9pZCBvbmx5KVxuICAgKi9cbiAgZm9sZGVyTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBjdXN0b20gbmFtZSBmb3IgdGhlIGZpbGUuIERlZmF1bHQgbmFtZSBpcyBhIHRpbWVzdGFtcC4gWW91IGhhdmUgdG8gc2V0IHRoaXMgdmFsdWUgb24gaU9TXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICogUXVhbGl0eSBnaXZlbiBhcyBOdW1iZXIgZm9yIHRoZSBxdWFsaXR5IG9mIHRoZSBuZXcgaW1hZ2VcbiAgICogKEFuZHJvaWQgYW5kIGlPUyBvbmx5KVxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBuZXcgaW1hZ2VcbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIG5ldyBpbWFnZVxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHJldHVybiBhIGJhc2U2NCBlbmNvZGVkIGltYWdlIHN0cmluZyBpbnN0ZWFkIG9mIHRoZSBwYXRoIHRvIHRoZSByZXNpemVkIGltYWdlLlxuICAgKiBpT1Mgb25seVxuICAgKi9cbiAgYmFzZTY0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBJbWFnZSBSZXNpemVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgUGx1Z2luIEZvciBJbWFnZSBSZXNpemVcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEltYWdlUmVzaXplciwgSW1hZ2VSZXNpemVyT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2UtcmVzaXplci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VSZXNpemVyOiBJbWFnZVJlc2l6ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBvcHRpb25zID0ge1xuICogIHVyaTogdXJpLFxuICogIGZvbGRlck5hbWU6ICdQcm90b25ldCcsXG4gKiAgcXVhbGl0eTogOTAsXG4gKiAgd2lkdGg6IDEyODAsXG4gKiAgaGVpZ2h0OiAxMjgwXG4gKiB9IGFzIEltYWdlUmVzaXplck9wdGlvbnM7XG4gKlxuICogdGhpcy5pbWFnZVJlc2l6ZXJcbiAqICAgLnJlc2l6ZShvcHRpb25zKVxuICogICAudGhlbigoZmlsZVBhdGg6IHN0cmluZykgPT4gY29uc29sZS5sb2coJ0ZpbGVQYXRoJywgZmlsZVBhdGgpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSW1hZ2VSZXNpemVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ltYWdlUmVzaXplcicsXG4gIHBsdWdpbjogJ2luZm8ucHJvdG9uZXQuaW1hZ2VyZXNpemVyJyxcbiAgcGx1Z2luUmVmOiAnSW1hZ2VSZXNpemVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3NjaGthU2NodWx6L2NvcmRvdmEtcGx1Z2luLWltYWdlLXJlc2l6ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlUmVzaXplciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2l6ZShvcHRpb25zOiBJbWFnZVJlc2l6ZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
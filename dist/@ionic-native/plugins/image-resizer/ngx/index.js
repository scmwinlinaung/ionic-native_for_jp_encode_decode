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
var ImageResizer = /** @class */ (function (_super) {
    __extends(ImageResizer, _super);
    function ImageResizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizer.prototype.resize = function (options) { return cordova(this, "resize", {}, arguments); };
    ImageResizer.pluginName = "ImageResizer";
    ImageResizer.plugin = "info.protonet.imageresizer";
    ImageResizer.pluginRef = "ImageResizer";
    ImageResizer.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizer.platforms = ["Android", "iOS", "Windows"];
    ImageResizer = __decorate([
        Injectable()
    ], ImageResizer);
    return ImageResizer;
}(IonicNativePlugin));
export { ImageResizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXJlc2l6ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUZ0QyxnQ0FBaUI7Ozs7SUFLakQsNkJBQU0sYUFBQyxPQUE0Qjs7Ozs7O0lBTHhCLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkFsRnpCO0VBa0ZrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlUmVzaXplck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIFVSSSBmb3IgdGhlIGltYWdlIG9uIHRoZSBkZXZpY2UgdG8gZ2V0IHNjYWxlZFxuICAgKi9cbiAgdXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBmb2xkZXIgdGhlIGltYWdlIHNob3VsZCBiZSBwdXRcbiAgICogKEFuZHJvaWQgb25seSlcbiAgICovXG4gIGZvbGRlck5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIG5hbWUgZm9yIHRoZSBmaWxlLiBEZWZhdWx0IG5hbWUgaXMgYSB0aW1lc3RhbXAuIFlvdSBoYXZlIHRvIHNldCB0aGlzIHZhbHVlIG9uIGlPU1xuICAgKi9cbiAgZmlsZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqIFF1YWxpdHkgZ2l2ZW4gYXMgTnVtYmVyIGZvciB0aGUgcXVhbGl0eSBvZiB0aGUgbmV3IGltYWdlXG4gICAqIChBbmRyb2lkIGFuZCBpT1Mgb25seSlcbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbmV3IGltYWdlXG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBuZXcgaW1hZ2VcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byByZXR1cm4gYSBiYXNlNjQgZW5jb2RlZCBpbWFnZSBzdHJpbmcgaW5zdGVhZCBvZiB0aGUgcGF0aCB0byB0aGUgcmVzaXplZCBpbWFnZS5cbiAgICogaU9TIG9ubHlcbiAgICovXG4gIGJhc2U2ND86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSW1hZ2UgUmVzaXplclxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIFBsdWdpbiBGb3IgSW1hZ2UgUmVzaXplXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbWFnZVJlc2l6ZXIsIEltYWdlUmVzaXplck9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ltYWdlLXJlc2l6ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlUmVzaXplcjogSW1hZ2VSZXNpemVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgb3B0aW9ucyA9IHtcbiAqICB1cmk6IHVyaSxcbiAqICBmb2xkZXJOYW1lOiAnUHJvdG9uZXQnLFxuICogIHF1YWxpdHk6IDkwLFxuICogIHdpZHRoOiAxMjgwLFxuICogIGhlaWdodDogMTI4MFxuICogfSBhcyBJbWFnZVJlc2l6ZXJPcHRpb25zO1xuICpcbiAqIHRoaXMuaW1hZ2VSZXNpemVyXG4gKiAgIC5yZXNpemUob3B0aW9ucylcbiAqICAgLnRoZW4oKGZpbGVQYXRoOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKCdGaWxlUGF0aCcsIGZpbGVQYXRoKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEltYWdlUmVzaXplck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbWFnZVJlc2l6ZXInLFxuICBwbHVnaW46ICdpbmZvLnByb3RvbmV0LmltYWdlcmVzaXplcicsXG4gIHBsdWdpblJlZjogJ0ltYWdlUmVzaXplcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSm9zY2hrYVNjaHVsei9jb3Jkb3ZhLXBsdWdpbi1pbWFnZS1yZXNpemVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZVJlc2l6ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNpemUob3B0aW9uczogSW1hZ2VSZXNpemVyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
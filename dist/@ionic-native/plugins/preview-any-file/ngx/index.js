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
var PreviewAnyFile = /** @class */ (function (_super) {
    __extends(PreviewAnyFile, _super);
    function PreviewAnyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFile.prototype.preview = function (url) { return cordova(this, "preview", {}, arguments); };
    PreviewAnyFile.pluginName = "PreviewAnyFile";
    PreviewAnyFile.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFile.pluginRef = "PreviewAnyFile";
    PreviewAnyFile.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFile.install = "";
    PreviewAnyFile.installVariables = [];
    PreviewAnyFile.platforms = ["Android", "iOS"];
    PreviewAnyFile = __decorate([
        Injectable()
    ], PreviewAnyFile);
    return PreviewAnyFile;
}(IonicNativePlugin));
export { PreviewAnyFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ByZXZpZXctYW55LWZpbGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NwQyxrQ0FBaUI7Ozs7SUFPbkQsZ0NBQU8sYUFBQyxHQUFXOzs7Ozs7OztJQVBSLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFuQzNCO0VBbUNvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBQcmV2aWV3QW55RmlsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGF0ZXZlciB0aGUgZmlsZSBpcyBQREYgZG9jdW1lbnQsIFdvcmQgZG9jdW1lbnQsIEV4Y2VsLCBvZmZpY2UgZG9jdW1lbnQsemlwIGFyY2hpdmUgZmlsZSwgaW1hZ2UsIHRleHQsIGh0bWwgb3IgYW55dGhpbmcgZWxzZSwgeW91IGNhbiBwZXJmb3JtIGEgcHJldmlldyBieSB0aGlzIGNvcmRvdmEgUGx1Z2luIHRvIHByZXZpZXcgYW55IGZpbGUgaW4gbmF0aXZlIG1vZGUgYnkgcHJvdmlkaW5nIHRoZSBsb2NhbCBvciBleHRlcm5hbCBVUkwuXG4gKlxuICogIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tcHJldmlldy1hbnktZmlsZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtwcmV2aWV3QW55RmlsZSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21vc3RhZmEtbWFuc291cjEvcHJldmlld0FueUZpbGUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUHJldmlld0FueUZpbGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ByZXZpZXctYW55LWZpbGUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwcmV2aWV3QW55RmlsZTogUHJldmlld0FueUZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnByZXZpZXdBbnlGaWxlLnByZXZpZXcoJ2ZpbGU6Ly9maWxlcGF0aC5leHQnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ByZXZpZXdBbnlGaWxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcHJldmlldy1hbnktZmlsZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdQcmV2aWV3QW55RmlsZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3N0YWZhLW1hbnNvdXIxL3ByZXZpZXdBbnlGaWxlJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJldmlld0FueUZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiB0aGlzIGZ1bmN0aW9uIHJldHVybiBTVUNDRVNTIGluIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgdGhlIGZpbGUgc3VjY2Vzc2Z1bGx5IG9wZW5lZCwgaWYgdGhlIGNvbnRlbnQgaXMgYmFzZTY0IHlvdSBoYXZlIHRvIHdyaXRlIGl0IGludG8gZmlsZSBieSBjb3Jkb3ZhLXBsdWdpbi1maWxlXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gZnVsbCBhYnNvbHV0ZSBVUkwgZm9yIHRoZSBmaWxlLCBpZiB0aGUgcGF0aCBpcyBjb250ZW50Oi8vIHlvdSBuZWVkIHRvIHJlc29sdmUgdGhlIG5hdGl2ZSB1cmwsIGlmIHRoZSBwYXRoIGlzIGh0dHBzOi8vIGl0IG1heSBub3Qgd29yayBpbiBhbmRyb2lkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgZmlsZSBvcGVuZWQgcmVqZWN0IGlmIG5vdDtcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJldmlldyh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
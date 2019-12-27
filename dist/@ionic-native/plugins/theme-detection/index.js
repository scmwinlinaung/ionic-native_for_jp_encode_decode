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
var ThemeDetectionOriginal = /** @class */ (function (_super) {
    __extends(ThemeDetectionOriginal, _super);
    function ThemeDetectionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetectionOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetectionOriginal.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetectionOriginal.pluginName = "ThemeDetection";
    ThemeDetectionOriginal.plugin = "cordova-plugin-theme-detection";
    ThemeDetectionOriginal.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetectionOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetectionOriginal.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetectionOriginal.installVariables = [];
    ThemeDetectionOriginal.platforms = ["iOS", "Android"];
    return ThemeDetectionOriginal;
}(IonicNativePlugin));
var ThemeDetection = new ThemeDetectionOriginal();
export { ThemeDetection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lLWRldGVjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRHBDLGtDQUFpQjs7OztJQVFuRCxvQ0FBVztJQVVYLDBDQUFpQjs7Ozs7Ozs7eUJBbkVuQjtFQWlEb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZURldGVjdGlvblJlc3BvbnNlIHtcbiAgLy8gQm9vbGVhbiB2YWx1ZSBhYm91dCB0aGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0XG4gIHZhbHVlOiBib29sZWFuO1xuXG4gIC8vIE1lc3NhZ2UgZm9yIHJlYWRhYmxlIHVzYWdlXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgVGhlbWUgRGV0ZWN0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIGRldGVjdCB3aGV0aGVyIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVGhlbWVEZXRlY3Rpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RoZW1lLWRldGVjdGlvbic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWVEZXRlY3Rpb246IFRoZW1lRGV0ZWN0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnRoZW1lRGV0ZWN0aW9uLmlzQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xuICogICAgICBpZihyZXMudmFsdWUpIHtcbiAqICAgICAgICB0aGlzLnRoZW1lRGV0ZWN0aW9uLmlzRGFya01vZGVFbmFibGVkKCkudGhlbigocmVzOiBUaGVtZURldGVjdGlvblJlc3BvbnNlKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICogICAgICAgIH0pXG4gKiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiAgICAgIH1cbiAqICAgfSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGhlbWVEZXRlY3Rpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVGhlbWVEZXRlY3Rpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcml1c2JhY2tlcy9jb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXRoZW1lLWRldGVjdGlvbicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaGVtZURldGVjdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPn1cbiAgICogIFJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gb2JqZWN0IHRoYXQgaGFzIGEgYm9vbGVhbiBwcm9wZXJ0eSB3aGljaCBnaXZlcyBpbmZvcm1hdGlvbiBpZiB0aGUgZGV0ZWN0aW9uIGlzIGF2YWlsYWJsZSBvciBub3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT59XG4gICAqICBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCB0aGF0IGhhcyBhIGJvb2xlYW4gcHJvcGVydHkgd2hpY2ggZ2l2ZXMgaW5mb3JtYXRpb24gaWYgZGFyayBtb2RlIGlzIGVuYWJsZWQgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRGFya01vZGVFbmFibGVkKCk6IFByb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=
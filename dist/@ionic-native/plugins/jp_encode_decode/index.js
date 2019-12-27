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
var jp_encode_decodeOriginal = /** @class */ (function (_super) {
    __extends(jp_encode_decodeOriginal, _super);
    function jp_encode_decodeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jp_encode_decodeOriginal.prototype.createCSVWithSJIS = function (Data) { return cordova(this, "createCSVWithSJIS", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    jp_encode_decodeOriginal.prototype.readCsvAndEncodeWithUTF8 = function () { return cordova(this, "readCsvAndEncodeWithUTF8", {}, arguments); };
    jp_encode_decodeOriginal.pluginName = "jp_encode_decode";
    jp_encode_decodeOriginal.plugin = "cordova-plugin-jp_encode_decode";
    jp_encode_decodeOriginal.pluginRef = "jp_encode_decode";
    jp_encode_decodeOriginal.repo = "https://github.com/scmwinlinaung/cordova-plugin-jp_encode_decode.git";
    jp_encode_decodeOriginal.platforms = ["iOS"];
    return jp_encode_decodeOriginal;
}(IonicNativePlugin));
var jp_encode_decode = new jp_encode_decodeOriginal();
export { jp_encode_decode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2pwX2VuY29kZV9kZWNvZGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZWxDLG9DQUFpQjs7OztJQVdyRCw0Q0FBaUIsYUFBQyxJQUFzQjtJQVF4QyxtREFBd0I7Ozs7OzsyQkFuQzFCO0VBZ0JzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIEVuY29kZURlY29kZURhdGEge1xuICB0ZXh0PzogYW55O1xuICBjc3ZGaWxlTmFtZT86IGFueTtcbn1cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnanBfZW5jb2RlX2RlY29kZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWpwX2VuY29kZV9kZWNvZGUnLFxuICBwbHVnaW5SZWY6ICdqcF9lbmNvZGVfZGVjb2RlJyxcbiAgcmVwbzpcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL3NjbXdpbmxpbmF1bmcvY29yZG92YS1wbHVnaW4tanBfZW5jb2RlX2RlY29kZS5naXQnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBqcF9lbmNvZGVfZGVjb2RlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG5cdC8qKlxuXHQgKiBjcmVhdGVDU1ZXaXRoU0pJU1xuXHQgKiBAcGFyYW0ge0VuY29kZURlY29kZURhdGF9IERhdGFcblx0ICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuXHQgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIGNyZWF0ZUNTVldpdGhTSklTKERhdGE6IEVuY29kZURlY29kZURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAqIHJlYWRDc3ZBbmRFbmNvZGVXaXRoVVRGOFxuICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVhZENzdkFuZEVuY29kZVdpdGhVVEY4KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59Il19
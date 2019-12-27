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
var QuikklyPluginOriginal = /** @class */ (function (_super) {
    __extends(QuikklyPluginOriginal, _super);
    function QuikklyPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuikklyPluginOriginal.prototype.openScanner = function () { return cordova(this, "openScanner", {}, arguments); };
    QuikklyPluginOriginal.pluginName = "QuikklyPlugin";
    QuikklyPluginOriginal.plugin = "cordova-plugin-quikkly";
    QuikklyPluginOriginal.pluginRef = "cordova.plugins.quikkly";
    QuikklyPluginOriginal.repo = "https://github.com/quikkly/cordova-plugin-quikkly.git";
    QuikklyPluginOriginal.platforms = ["Android", "iOS"];
    return QuikklyPluginOriginal;
}(IonicNativePlugin));
var QuikklyPlugin = new QuikklyPluginOriginal();
export { QuikklyPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3F1aWtrbHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZXJDLGlDQUFpQjs7OztJQUVsRCxtQ0FBVzs7Ozs7O3dCQWxCYjtFQWdCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBRdWlra2x5UGx1Z2luXG4gKiBAZGVzY3JpcHRpb24gaW9uaWMgd3JhcHBlciBmb3IgY29yZG92YS1wbHVnaW4tcXVpa2tseVxuICogVXNlIHRoZSBxdWlra2x5IHNjYW5uZXIgaW4geW91ciBpb25pYyBhcHBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRdWlra2x5UGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVpa2tseScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5xdWlra2x5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9xdWlra2x5L2NvcmRvdmEtcGx1Z2luLXF1aWtrbHkuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVpa2tseVBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBvcGVuU2Nhbm5lcigpOiBQcm9taXNlPHN0cmluZ1tdPiB7IHJldHVybiA7IH1cbn1cblxuIl19
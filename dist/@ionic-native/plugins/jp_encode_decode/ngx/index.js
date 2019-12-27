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
var jp_encode_decode = /** @class */ (function (_super) {
    __extends(jp_encode_decode, _super);
    function jp_encode_decode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jp_encode_decode.prototype.createCSVWithSJIS = function (Data) { return cordova(this, "createCSVWithSJIS", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    jp_encode_decode.prototype.readCsvAndEncodeWithUTF8 = function () { return cordova(this, "readCsvAndEncodeWithUTF8", {}, arguments); };
    jp_encode_decode.pluginName = "jp_encode_decode";
    jp_encode_decode.plugin = "cordova-plugin-jp_encode_decode";
    jp_encode_decode.pluginRef = "jp_encode_decode";
    jp_encode_decode.repo = "https://github.com/scmwinlinaung/cordova-plugin-jp_encode_decode.git";
    jp_encode_decode.platforms = ["iOS"];
    jp_encode_decode = __decorate([
        Injectable()
    ], jp_encode_decode);
    return jp_encode_decode;
}(IonicNativePlugin));
export { jp_encode_decode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2pwX2VuY29kZV9kZWNvZGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZWxDLG9DQUFpQjs7OztJQVdyRCw0Q0FBaUIsYUFBQyxJQUFzQjtJQVF4QyxtREFBd0I7Ozs7OztJQW5CYixnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCOzJCQWhCN0I7RUFnQnNDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmV4cG9ydCBpbnRlcmZhY2UgRW5jb2RlRGVjb2RlRGF0YSB7XG4gIHRleHQ/OiBhbnk7XG4gIGNzdkZpbGVOYW1lPzogYW55O1xufVxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdqcF9lbmNvZGVfZGVjb2RlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tanBfZW5jb2RlX2RlY29kZScsXG4gIHBsdWdpblJlZjogJ2pwX2VuY29kZV9kZWNvZGUnLFxuICByZXBvOlxuICAgICdodHRwczovL2dpdGh1Yi5jb20vc2Ntd2lubGluYXVuZy9jb3Jkb3ZhLXBsdWdpbi1qcF9lbmNvZGVfZGVjb2RlLmdpdCcsXG4gIHBsYXRmb3JtczogWydpT1MnXVxufSlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIGpwX2VuY29kZV9kZWNvZGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cblx0LyoqXG5cdCAqIGNyZWF0ZUNTVldpdGhTSklTXG5cdCAqIEBwYXJhbSB7RW5jb2RlRGVjb2RlRGF0YX0gRGF0YVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG5cdCAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgY3JlYXRlQ1NWV2l0aFNKSVMoRGF0YTogRW5jb2RlRGVjb2RlRGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICogcmVhZENzdkFuZEVuY29kZVdpdGhVVEY4XG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gKi9cbiAgQENvcmRvdmEoKVxuICByZWFkQ3N2QW5kRW5jb2RlV2l0aFVURjgoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn0iXX0=
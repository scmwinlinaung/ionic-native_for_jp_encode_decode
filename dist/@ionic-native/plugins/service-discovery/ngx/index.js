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
var ServiceDiscovery = /** @class */ (function (_super) {
    __extends(ServiceDiscovery, _super);
    function ServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscovery.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscovery.pluginName = "ServiceDiscovery";
    ServiceDiscovery.plugin = "cordova-plugin-discovery";
    ServiceDiscovery.pluginRef = "serviceDiscovery";
    ServiceDiscovery.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscovery.platforms = ["Android", "iOS"];
    ServiceDiscovery = __decorate([
        Injectable()
    ], ServiceDiscovery);
    return ServiceDiscovery;
}(IonicNativePlugin));
export { ServiceDiscovery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlcnZpY2UtZGlzY292ZXJ5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCbEMsb0NBQWlCOzs7O0lBUXJELDZDQUFrQixhQUFDLE9BQWU7Ozs7OztJQVJ2QixnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCOzJCQWhDN0I7RUFnQ3NDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTZXJ2aWNlRGlzY292ZXJ5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpbXBsZSBwbHVnaW4gdG8gZ2V0IGFueSBTU0RQIC8gVVBuUCAvIERMTkEgc2VydmljZSBvbiBhIGxvY2FsIG5ldHdvcmtcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNlcnZpY2VEaXNjb3ZlcnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NlcnZpY2UtZGlzY292ZXJ5JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlRGlzY292ZXJ5OiBTZXJ2aWNlRGlzY292ZXJ5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zZXJ2aWNlRGlzY292ZXJ5LmdldE5ldHdvcmtTZXJ2aWNlcygnc3NkcDphbGwnKVxuICogICAudGhlbihkZXZpY2VzID0+IGNvbnNvbGUubG9nKGRldmljZXMpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NlcnZpY2VEaXNjb3ZlcnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kaXNjb3ZlcnknLFxuICBwbHVnaW5SZWY6ICdzZXJ2aWNlRGlzY292ZXJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zY290dGRlcm1vdHQvY29yZG92YS1wbHVnaW4tZGlzY292ZXJ5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZURpc2NvdmVyeSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogRmluZHMgYW5kIHJldHVybnMgbWV0YWRhdGEgYWJvdXQgZGV2aWNlcyBkaXNjb3ZlcmVkIG9uIHRoZSBuZXR3b3JrIHZpYSBTU0RQIC8gVVBuUCAvIERMTkFcbiAgICogQHBhcmFtIHNlcnZpY2Uge3N0cmluZ30gVGhlIHNlcnZpY2UgbmFtZSB0byBkaXNjb3ZlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXROZXR3b3JrU2VydmljZXMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19
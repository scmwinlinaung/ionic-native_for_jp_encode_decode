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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var Uid = /** @class */ (function (_super) {
    __extends(Uid, _super);
    function Uid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Uid.prototype, "UUID", {
        get: function () { return cordovaPropertyGet(this, "UUID"); },
        set: function (value) { cordovaPropertySet(this, "UUID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMEI", {
        get: function () { return cordovaPropertyGet(this, "IMEI"); },
        set: function (value) { cordovaPropertySet(this, "IMEI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMSI", {
        get: function () { return cordovaPropertyGet(this, "IMSI"); },
        set: function (value) { cordovaPropertySet(this, "IMSI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "ICCID", {
        get: function () { return cordovaPropertyGet(this, "ICCID"); },
        set: function (value) { cordovaPropertySet(this, "ICCID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "MAC", {
        get: function () { return cordovaPropertyGet(this, "MAC"); },
        set: function (value) { cordovaPropertySet(this, "MAC", value); },
        enumerable: true,
        configurable: true
    });
    Uid.pluginName = "Uid";
    Uid.plugin = "cordova-plugin-uid";
    Uid.pluginRef = "cordova.plugins.uid";
    Uid.repo = "https://github.com/lionelhe/cordova-plugin-uid";
    Uid.platforms = ["Android"];
    Uid = __decorate([
        Injectable()
    ], Uid);
    return Uid;
}(IonicNativePlugin));
export { Uid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VpZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2Q3ZELHVCQUFpQjs7OzswQkFHeEMscUJBQUk7Ozs7OzswQkFJSixxQkFBSTs7Ozs7OzBCQUlKLHFCQUFJOzs7Ozs7MEJBSUosc0JBQUs7Ozs7OzswQkFJTCxvQkFBRzs7Ozs7Ozs7Ozs7SUFuQlEsR0FBRztRQURmLFVBQVUsRUFBRTtPQUNBLEdBQUc7Y0E5Q2hCO0VBOEN5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVWlkXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB1bmlxdWUgaWRlbnRpZmllcnM6IFVVSUQsIElNRUksIElNU0ksIElDQ0lEIGFuZCBNQUMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBVaWQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3VpZC9uZ3gnO1xuICogaW1wb3J0IHsgQW5kcm9pZFBlcm1pc3Npb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbmRyb2lkLXBlcm1pc3Npb25zL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1aWQ6IFVpZCwgcHJpdmF0ZSBhbmRyb2lkUGVybWlzc2lvbnM6IEFuZHJvaWRQZXJtaXNzaW9ucykgeyB9XG4gKlxuICpcbiAqIGFzeW5jIGdldEltZWkoKSB7XG4gKiAgY29uc3QgeyBoYXNQZXJtaXNzaW9uIH0gPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24oXG4gKiAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLlJFQURfUEhPTkVfU1RBVEVcbiAqICApO1xuICpcbiAqICBpZiAoIWhhc1Blcm1pc3Npb24pIHtcbiAqICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKFxuICogICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLlJFQURfUEhPTkVfU1RBVEVcbiAqICAgICk7XG4gKlxuICogICAgaWYgKCFyZXN1bHQuaGFzUGVybWlzc2lvbikge1xuICogICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Blcm1pc3Npb25zIHJlcXVpcmVkJyk7XG4gKiAgICB9XG4gKlxuICogICAgLy8gb2ssIGEgdXNlciBnYXZlIHVzIHBlcm1pc3Npb24sIHdlIGNhbiBnZXQgaGltIGlkZW50aWZpZXJzIGFmdGVyIHJlc3RhcnQgYXBwXG4gKiAgICByZXR1cm47XG4gKiAgfVxuICpcbiAqICAgcmV0dXJuIHRoaXMudWlkLklNRUlcbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1VpZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVpZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy51aWQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xpb25lbGhlL2NvcmRvdmEtcGx1Z2luLXVpZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVWlkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKiogR2V0IHRoZSBkZXZpY2UgVW5pdmVyc2FsbHkgVW5pcXVlIElkZW50aWZpZXIgKFVVSUQpLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVVVJRDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSBJbnRlcm5hdGlvbmFsIE1vYmlsZSBTdGF0aW9uIEVxdWlwbWVudCBJZGVudGl0eSAoSU1FSSkuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTUVJOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlIEludGVybmF0aW9uYWwgbW9iaWxlIFN1YnNjcmliZXIgSWRlbnRpdHkgKElNU0kpLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU1TSTogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIHNpbSBJbnRlZ3JhdGVkIENpcmN1aXQgQ2FyZCBJZGVudGlmaWVyIChJQ0NJRCkuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJQ0NJRDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIE1lZGlhIEFjY2VzcyBDb250cm9sIGFkZHJlc3MgKE1BQykuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQUM6IHN0cmluZztcblxufVxuIl19
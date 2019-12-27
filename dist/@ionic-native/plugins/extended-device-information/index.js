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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var ExtendedDeviceInformationOriginal = /** @class */ (function (_super) {
    __extends(ExtendedDeviceInformationOriginal, _super);
    function ExtendedDeviceInformationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendedDeviceInformationOriginal.prototype, "memory", {
        get: function () { return cordovaPropertyGet(this, "memory"); },
        set: function (value) { cordovaPropertySet(this, "memory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformationOriginal.prototype, "cpumhz", {
        get: function () { return cordovaPropertyGet(this, "cpumhz"); },
        set: function (value) { cordovaPropertySet(this, "cpumhz", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformationOriginal.prototype, "totalstorage", {
        get: function () { return cordovaPropertyGet(this, "totalstorage"); },
        set: function (value) { cordovaPropertySet(this, "totalstorage", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformationOriginal.prototype, "freestorage", {
        get: function () { return cordovaPropertyGet(this, "freestorage"); },
        set: function (value) { cordovaPropertySet(this, "freestorage", value); },
        enumerable: true,
        configurable: true
    });
    ExtendedDeviceInformationOriginal.pluginName = "ExtendedDeviceInformation";
    ExtendedDeviceInformationOriginal.plugin = "cordova-plugin-extended-device-information";
    ExtendedDeviceInformationOriginal.pluginRef = "extended-device-information";
    ExtendedDeviceInformationOriginal.repo = "https://github.com/danielehrhardt/cordova-plugin-extended-device-information";
    ExtendedDeviceInformationOriginal.platforms = ["Android"];
    return ExtendedDeviceInformationOriginal;
}(IonicNativePlugin));
var ExtendedDeviceInformation = new ExtendedDeviceInformationOriginal();
export { ExtendedDeviceInformation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ2pDLDZDQUFpQjs7OzswQkFLOUQsNkNBQU07Ozs7OzswQkFNTiw2Q0FBTTs7Ozs7OzBCQU1OLG1EQUFZOzs7Ozs7MEJBTVosa0RBQVc7Ozs7Ozs7Ozs7O29DQXhEYjtFQWlDK0MsaUJBQWlCO1NBQW5ELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRXh0ZW5kZWQgRGV2aWNlIEluZm9ybWF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHJpZXZlcyBhZGRpdGlvbmFsIGRldmljZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBEZXZpY2UgSGFyZHdhcmVcbiAqICAtIG1lbW9yeVxuICogIC0gY3B1bWh6XG4gKiAgLSB0b3RhbHN0b3JhZ2VcbiAqICAtIGZyZWVzdG9yYWdlXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFeHRlbmRlZERldmljZUluZm9ybWF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbmRlZERldmljZUluZm9ybWF0aW9uOiBFeHRlbmRlZERldmljZUluZm9ybWF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zb2xlLmxvZygnVGhlIE1lbW9yeSBpczogJyArIHRoaXMuZXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbi5tZW1vcnkpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWV4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbicsXG4gIHBsdWdpblJlZjogJ2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbicsXG4gIHJlcG86XG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxlaHJoYXJkdC9jb3Jkb3ZhLXBsdWdpbi1leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRGV2aWNlSW5mb3JtYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIG1lbW9yeSBzaXplXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbWVtb3J5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGV2aWNlJ3MgQ1BVIG1oelxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGNwdW1oejogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvdGFsIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0b3RhbHN0b3JhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSB0b3RhbCBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZnJlZXN0b3JhZ2U6IG51bWJlcjtcbn1cbiJdfQ==
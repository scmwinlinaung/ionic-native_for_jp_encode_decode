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
var HeaderColor = /** @class */ (function (_super) {
    __extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColor.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColor.pluginName = "HeaderColor";
    HeaderColor.plugin = "cordova-plugin-headercolor";
    HeaderColor.pluginRef = "plugins.headerColor";
    HeaderColor.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColor.platforms = ["Android"];
    HeaderColor = __decorate([
        Injectable()
    ], HeaderColor);
    return HeaderColor;
}(IonicNativePlugin));
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hlYWRlci1jb2xvci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQnZDLCtCQUFpQjs7OztJQVloRCwwQkFBSSxhQUFDLEtBQWE7Ozs7OztJQVpQLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkEzQnhCO0VBMkJpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEhlYWRlciBDb2xvclxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBjaGFuZ2UgY29sb3Igb2YgaGVhZGVyIGluIEFuZHJvaWQgTXVsdGl0YXNrIFZpZXdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhlYWRlckNvbG9yIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9oZWFkZXItY29sb3Ivbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckNvbG9yOiBIZWFkZXJDb2xvcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5oZWFkZXJDb2xvci50aW50KCcjYmVjYjI5Jyk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdIZWFkZXJDb2xvcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhlYWRlcmNvbG9yJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5oZWFkZXJDb2xvcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdG9tbG9wcm9kL2NvcmRvdmEtcGx1Z2luLWhlYWRlcmNvbG9yJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb2xvciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU2V0IGEgY29sb3IgdG8gdGhlIHRhc2sgaGVhZGVyXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfSBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZSdcbiAgfSlcbiAgdGludChjb2xvcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19
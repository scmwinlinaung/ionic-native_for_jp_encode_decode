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
var PinCheckOriginal = /** @class */ (function (_super) {
    __extends(PinCheckOriginal, _super);
    function PinCheckOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinCheckOriginal.prototype.isPinSetup = function () { return cordova(this, "isPinSetup", {}, arguments); };
    PinCheckOriginal.pluginName = "PinCheck";
    PinCheckOriginal.plugin = "cordova-plugin-pincheck";
    PinCheckOriginal.pluginRef = "cordova.plugins.PinCheck";
    PinCheckOriginal.repo = "https://github.com/shangyilim/cordova-plugin-pincheck";
    PinCheckOriginal.platforms = ["Android", "iOS"];
    return PinCheckOriginal;
}(IonicNativePlugin));
var PinCheck = new PinCheckOriginal();
export { PinCheck };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bpbi1jaGVjay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrQzFDLDRCQUFpQjs7OztJQU03Qyw2QkFBVTs7Ozs7O21CQXhDWjtFQWtDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBQaW4gQ2hlY2tcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaXMgZm9yIHVzZSB3aXRoIEFwYWNoZSBDb3Jkb3ZhIGFuZCBhbGxvd3MgeW91ciBhcHBsaWNhdGlvbiB0byBjaGVjayB3aGV0aGVyIHBpbi9rZXlndWFyZCBvciBwYXNzY29kZSBpcyBzZXR1cCBvbiBpT1MgYW5kIEFuZHJvaWQgcGhvbmVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1waW5jaGVjay4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1BpbkNoZWNrIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHkpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGluQ2hlY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bpbi1jaGVjay9uZ3gnO1xuICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpbkNoZWNrOiBQaW5DaGVjaywgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucGluQ2hlY2suaXNQaW5TZXR1cCgpXG4gKiAgIC50aGVuKFxuICogICAgIChzdWNjZXNzOiBzdHJpbmcpID0+ICBjb25zb2xlLmxvZyhcInBpbiBpcyBzZXR1cC5cIik7LFxuICogICAgIChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhcInBpbiBub3Qgc2V0dXAuXCIpO1xuICogICApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGluQ2hlY2snLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1waW5jaGVjaycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5QaW5DaGVjaycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2hhbmd5aWxpbS9jb3Jkb3ZhLXBsdWdpbi1waW5jaGVjaycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpbkNoZWNrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIGNoZWNrIHdoZXRoZXIgcGluL2tleWd1YXJkIG9yIHBhc3Njb2RlIGlzIHNldHVwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1BpblNldHVwKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
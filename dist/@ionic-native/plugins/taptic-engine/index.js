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
var TapticEngineOriginal = /** @class */ (function (_super) {
    __extends(TapticEngineOriginal, _super);
    function TapticEngineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngineOriginal.prototype.selection = function () { return cordova(this, "selection", {}, arguments); };
    TapticEngineOriginal.prototype.notification = function (options) { return cordova(this, "notification", {}, arguments); };
    TapticEngineOriginal.prototype.impact = function (options) { return cordova(this, "impact", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionStart = function () { return cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionChanged = function () { return cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionEnd = function () { return cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngineOriginal.pluginName = "TapticEngine";
    TapticEngineOriginal.plugin = "cordova-plugin-taptic-engine";
    TapticEngineOriginal.pluginRef = "TapticEngine";
    TapticEngineOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngineOriginal.platforms = ["iOS"];
    return TapticEngineOriginal;
}(IonicNativePlugin));
var TapticEngine = new TapticEngineOriginal();
export { TapticEngine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RhcHRpYy1lbmdpbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0N0QyxnQ0FBaUI7Ozs7SUFNakQsZ0NBQVM7SUFXVCxtQ0FBWSxhQUFDLE9BRVo7SUFXRCw2QkFBTSxhQUFDLE9BQWdEO0lBU3ZELDRDQUFxQjtJQVNyQiw4Q0FBdUI7SUFTdkIsMENBQW1COzs7Ozs7dUJBM0ZyQjtFQWtDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBUYXB0aWMgRW5naW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIElvbmljIHBsdWdpbiB0byB1c2UgVGFwdGljIEVuZ2luZSBBUEkgb24gaVBob25lIDcsIDcgUGx1cyBvciBuZXdlci5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRhcHRpY0VuZ2luZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGFwdGljLWVuZ2luZS9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFwdGljOiBUYXB0aWNFbmdpbmUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudGFwdGljLnNlbGVjdGlvbigpO1xuICpcbiAqIHRoaXMudGFwdGljLm5vdGlmaWNhdGlvbigpO1xuICpcbiAqIHRoaXMudGFwdGljLmltcGFjdCgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RhcHRpY0VuZ2luZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRhcHRpYy1lbmdpbmUnLFxuICBwbHVnaW5SZWY6ICdUYXB0aWNFbmdpbmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLXRhcHRpYy1lbmdpbmUnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFwdGljRW5naW5lIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXNlIHNlbGVjdGlvbiBmZWVkYmFjayBnZW5lcmF0b3JzIHRvIGluZGljYXRlIGEgY2hhbmdlIGluIHNlbGVjdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIGFuZCByZWplY3RzIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbGVjdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gc2hvdWxkIGJlIG9mIHRoZSB0eXBlIHsgdHlwZTogJ3N1Y2Nlc3MnIH0gKG9yICd3YXJuaW5nJy8nZXJyb3InKVxuICAgKiBAcGFyYW0geydzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcid9IG9wdGlvbnMudHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbm90aWZpY2F0aW9uKG9wdGlvbnM6IHtcbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InO1xuICB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IHNob3VsZCBiZSBvZiB0aGUgdHlwZSB7IHN0eWxlOiAnbGlnaHQnIH0gKG9yICdtZWRpdW0nLydoZWF2eScpXG4gICAqIEBwYXJhbSB7J2xpZ2h0JyB8ICdtZWRpdW0nIHwgJ2hlYXZ5J30gb3B0aW9ucy50eXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBvbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbXBhY3Qob3B0aW9uczogeyBzdHlsZTogJ2xpZ2h0JyB8ICdtZWRpdW0nIHwgJ2hlYXZ5JyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXN0dXJlU2VsZWN0aW9uU3RhcnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB0aGF0IGEgc2VsZWN0aW9uIGNoYW5nZWQgZHVyaW5nIGEgZ2VzdHVyZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VzdHVyZVNlbGVjdGlvbkVuZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
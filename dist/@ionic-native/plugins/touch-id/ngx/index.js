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
var TouchID = /** @class */ (function (_super) {
    __extends(TouchID, _super);
    function TouchID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchID.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    TouchID.prototype.verifyFingerprint = function (message) { return cordova(this, "verifyFingerprint", {}, arguments); };
    TouchID.prototype.verifyFingerprintWithCustomPasswordFallback = function (message) { return cordova(this, "verifyFingerprintWithCustomPasswordFallback", {}, arguments); };
    TouchID.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { return cordova(this, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", {}, arguments); };
    TouchID.prototype.didFingerprintDatabaseChange = function () { return cordova(this, "didFingerprintDatabaseChange", {}, arguments); };
    TouchID.pluginName = "TouchID";
    TouchID.plugin = "cordova-plugin-touch-id";
    TouchID.pluginRef = "plugins.touchid";
    TouchID.repo = "https://github.com/EddyVerbruggen/cordova-plugin-touch-id";
    TouchID.platforms = ["iOS"];
    TouchID = __decorate([
        Injectable()
    ], TouchID);
    return TouchID;
}(IonicNativePlugin));
export { TouchID };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RvdWNoLWlkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9EM0MsMkJBQWlCOzs7O0lBUTVDLDZCQUFXO0lBV1gsbUNBQWlCLGFBQUMsT0FBZTtJQVdqQyw2REFBMkMsYUFBQyxPQUFlO0lBWTNELGtGQUFnRSxhQUFDLE9BQWUsRUFBRSxrQkFBMEI7SUFVNUcsOENBQTRCOzs7Ozs7SUFwRGpCLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFyRHBCO0VBcUQ2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbi8qKlxuICogQG5hbWUgVG91Y2ggSURcbiAqIEBkZXNjcmlwdGlvblxuICogU2NhbiB0aGUgZmluZ2VycHJpbnQgb2YgYSB1c2VyIHdpdGggdGhlIFRvdWNoSUQgc2Vuc29yLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tdG91Y2gtaWRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbVG91Y2hJRCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLXRvdWNoLWlkKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRvdWNoSUQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvdWNoLWlkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0b3VjaElkOiBUb3VjaElEKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnRvdWNoSWQuaXNBdmFpbGFibGUoKVxuICogICAudGhlbihcbiAqICAgICByZXMgPT4gY29uc29sZS5sb2coJ1RvdWNoSUQgaXMgYXZhaWxhYmxlIScpLFxuICogICAgIGVyciA9PiBjb25zb2xlLmVycm9yKCdUb3VjaElEIGlzIG5vdCBhdmFpbGFibGUnLCBlcnIpXG4gKiAgICk7XG4gKlxuICogdGhpcy50b3VjaElkLnZlcmlmeUZpbmdlcnByaW50KCdTY2FuIHlvdXIgZmluZ2VycHJpbnQgcGxlYXNlJylcbiAqICAgLnRoZW4oXG4gKiAgICAgcmVzID0+IGNvbnNvbGUubG9nKCdPaycsIHJlcyksXG4gKiAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyKVxuICogICApO1xuICogYGBgXG4gKlxuICogIyMjIEVycm9yIENvZGVzXG4gKlxuICogVGhlIHBsdWdpbiB3aWxsIHJlamVjdCBmb3IgdmFyaW91cyByZWFzb25zLiBZb3VyIGFwcCB3aWxsIG1vc3QgbGlrZWx5IG5lZWQgdG8gcmVzcG9uZCB0byB0aGUgY2FzZXMgZGlmZmVyZW50bHkuXG4gKlxuICogSGVyZSBpcyBhIGxpc3Qgb2Ygc29tZSBvZiB0aGUgZXJyb3IgY29kZXM6XG4gKlxuICogIC0gIGAtMWAgLSBGaW5nZXJwcmludCBzY2FuIGZhaWxlZCBtb3JlIHRoYW4gMyB0aW1lc1xuICogIC0gIGAtMmAgb3IgYC0xMjhgIC0gVXNlciB0YXBwZWQgdGhlICdDYW5jZWwnIGJ1dHRvblxuICogIC0gIGAtM2AgLSBVc2VyIHRhcHBlZCB0aGUgJ0VudGVyIFBhc3Njb2RlJyBvciAnRW50ZXIgUGFzc3dvcmQnIGJ1dHRvblxuICogIC0gIGAtNGAgLSBUaGUgc2NhbiB3YXMgY2FuY2VsbGVkIGJ5IHRoZSBzeXN0ZW0gKEhvbWUgYnV0dG9uIGZvciBleGFtcGxlKVxuICogIC0gIGAtNmAgLSBUb3VjaElEIGlzIG5vdCBBdmFpbGFibGVcbiAqICAtICBgLThgIC0gVG91Y2hJRCBpcyBsb2NrZWQgb3V0IGZyb20gdG9vIG1hbnkgdHJpZXNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUb3VjaElEJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdG91Y2gtaWQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnRvdWNoaWQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLXRvdWNoLWlkJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdWNoSUQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBXaGV0aGVyIFRvdWNoSUQgaXMgYXZhaWxhYmxlIG9yIG5vdC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB5ZXMsIHJlamVjdHMgaWYgbm8uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgVG91Y2hJRCBkaWFsb2cgYW5kIHdhaXQgZm9yIGEgZmluZ2VycHJpbnQgc2Nhbi4gSWYgdXNlciB0YXBzICdFbnRlciBQYXNzd29yZCcgYnV0dG9uLCBicmluZ3MgdXAgc3RhbmRhcmQgc3lzdGVtIHBhc3Njb2RlIHNjcmVlbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhlIHJlc29sdmVzIGlmIHRoZSBmaW5nZXJwcmludCBzY2FuIHdhcyBzdWNjZXNzZnVsLCByZWplY3RzIHdpdGggYW4gZXJyb3IgY29kZSAoc2VlIGFib3ZlKS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5RmluZ2VycHJpbnQobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBUb3VjaElEIGRpYWxvZyBhbmQgd2FpdCBmb3IgYSBmaW5nZXJwcmludCBzY2FuLiBJZiB1c2VyIHRhcHMgJ0VudGVyIFBhc3N3b3JkJyBidXR0b24sIHJlamVjdHMgd2l0aCBjb2RlICctMycgKHNlZSBhYm92ZSkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBkaXNwbGF5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoZSByZXNvbHZlcyBpZiB0aGUgZmluZ2VycHJpbnQgc2NhbiB3YXMgc3VjY2Vzc2Z1bCwgcmVqZWN0cyB3aXRoIGFuIGVycm9yIGNvZGUgKHNlZSBhYm92ZSkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeUZpbmdlcnByaW50V2l0aEN1c3RvbVBhc3N3b3JkRmFsbGJhY2sobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBUb3VjaElEIGRpYWxvZyB3aXRoIGN1c3RvbSAnRW50ZXIgUGFzc3dvcmQnIG1lc3NhZ2UgYW5kIHdhaXQgZm9yIGEgZmluZ2VycHJpbnQgc2Nhbi4gSWYgdXNlciB0YXBzICdFbnRlciBQYXNzd29yZCcgYnV0dG9uLCByZWplY3RzIHdpdGggY29kZSAnLTMnIChzZWUgYWJvdmUpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW50ZXJQYXNzd29yZExhYmVsICBDdXN0b20gdGV4dCBmb3IgdGhlICdFbnRlciBQYXNzd29yZCcgYnV0dG9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoZSByZXNvbHZlcyBpZiB0aGUgZmluZ2VycHJpbnQgc2NhbiB3YXMgc3VjY2Vzc2Z1bCwgcmVqZWN0cyB3aXRoIGFuIGVycm9yIGNvZGUgKHNlZSBhYm92ZSkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeUZpbmdlcnByaW50V2l0aEN1c3RvbVBhc3N3b3JkRmFsbGJhY2tBbmRFbnRlclBhc3N3b3JkTGFiZWwobWVzc2FnZTogc3RyaW5nLCBlbnRlclBhc3N3b3JkTGFiZWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZmluZ2VycHJpbnQgZGF0YWJhc2UgY2hhbmdlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB5ZXMsIHJlamVjdHMgaWYgbm8uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpZEZpbmdlcnByaW50RGF0YWJhc2VDaGFuZ2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19
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
var BioCatchOriginal = /** @class */ (function (_super) {
    __extends(BioCatchOriginal, _super);
    function BioCatchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatchOriginal.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatchOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatchOriginal.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatchOriginal.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatchOriginal.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatchOriginal.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatchOriginal.pluginName = "BioCatch";
    BioCatchOriginal.plugin = "cordova-plugin-biocatch";
    BioCatchOriginal.pluginRef = "BioCatch";
    BioCatchOriginal.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatchOriginal.platforms = ["iOS", "Android"];
    return BioCatchOriginal;
}(IonicNativePlugin));
var BioCatch = new BioCatchOriginal();
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb2NhdGNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCMUMsNEJBQWlCOzs7O0lBVTdDLHdCQUFLLGFBQUMsaUJBQWdDLEVBQUUsTUFBYyxFQUFFLFNBQXdCO0lBU2hGLHdCQUFLO0lBU0wseUJBQU07SUFTTix1QkFBSTtJQVNKLCtCQUFZO0lBVVosZ0NBQWEsYUFBQyxXQUFtQjtJQVVqQywwQ0FBdUIsYUFBQyxpQkFBZ0M7Ozs7OzttQkFsRzFEO0VBZ0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJpb0NhdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJpb0NhdGNoIFNESyBDb3Jkb3ZhIHN1cHBvcnRcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJpb0NhdGNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iaW9jYXRjaCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmlvY2F0Y2g6IEJpb0NhdGNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iaW9jYXRjaC5zdGFydCgnY3VzdG9tZXItc2Vzc2lvbi0xJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScsICdzb21lLXB1YmxpYy1rZXknKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jpb0NhdGNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmlvY2F0Y2gnLFxuICBwbHVnaW5SZWY6ICdCaW9DYXRjaCcsXG4gIHJlcG86ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvY2FybG9zX29yZWxsYW5hL2lvbmljLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCaW9DYXRjaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU3RhcnQgYSBzZXNzaW9uXG4gICAqIEBwYXJhbSBjdXN0b21lclNlc3Npb25JRCB7U3RyaW5nfSBDdXN0b21lciBzZXNzaW9uIGlkXG4gICAqIEBwYXJhbSB3dXBVcmwge1N0cmluZ30gV1VQIHNlcnZlciBVUkxcbiAgICogQHBhcmFtIHB1YmxpY0tleSB7U3RyaW5nfSBQdWJsaWMgS2V5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0KGN1c3RvbWVyU2Vzc2lvbklEOiBzdHJpbmcgfCBudWxsLCB3dXBVcmw6IHN0cmluZywgcHVibGljS2V5OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlIHRoZSBzZXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGhlIHNlc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzZXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzZXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2V0U2Vzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBzZXNzaW9uIGNvbnRleHRcbiAgICogQHBhcmFtIGNvbnRleHROYW1lIHtTdHJpbmd9IENvbnRleHQgbmFtZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGFuZ2VDb250ZXh0KGNvbnRleHROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjdXN0b21lciBzZXNzaW9uIElEXG4gICAqIEBwYXJhbSBjdXN0b21lclNlc3Npb25JRCB7U3RyaW5nfVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVDdXN0b21lclNlc3Npb25JRChjdXN0b21lclNlc3Npb25JRDogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
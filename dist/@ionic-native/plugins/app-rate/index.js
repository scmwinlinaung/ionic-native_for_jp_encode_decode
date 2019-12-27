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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var AppRateOriginal = /** @class */ (function (_super) {
    __extends(AppRateOriginal, _super);
    function AppRateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppRateOriginal.prototype.promptForRating = function (immediately) { return cordova(this, "promptForRating", {}, arguments); };
    AppRateOriginal.prototype.navigateToAppStore = function () { return cordova(this, "navigateToAppStore", {}, arguments); };
    Object.defineProperty(AppRateOriginal.prototype, "preferences", {
        get: function () { return cordovaPropertyGet(this, "preferences"); },
        set: function (value) { cordovaPropertySet(this, "preferences", value); },
        enumerable: true,
        configurable: true
    });
    AppRateOriginal.pluginName = "AppRate";
    AppRateOriginal.plugin = "cordova-plugin-apprate";
    AppRateOriginal.pluginRef = "AppRate";
    AppRateOriginal.repo = "https://github.com/pushandplay/cordova-plugin-apprate";
    AppRateOriginal.platforms = ["Android", "BlackBerry 10", "iOS", "Windows"];
    return AppRateOriginal;
}(IonicNativePlugin));
var AppRate = new AppRateOriginal();
export { AppRate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1yYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOztJQXVMNUQsMkJBQWlCOzs7O0lBYTVDLGlDQUFlLGFBQUMsV0FBb0I7SUFNcEMsb0NBQWtCOzBCQWJsQixnQ0FBVzs7Ozs7Ozs7Ozs7a0JBOUxiO0VBd0w2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0ZVByZWZlcmVuY2VzIHtcbiAgLyoqXG4gICAqIEN1c3RvbSBCQ1AgNDcgbGFuZ3VhZ2UgdGFnXG4gICAqL1xuICB1c2VMYW5ndWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIGFwcGxpY2F0aW9uIHRpdGxlXG4gICAqL1xuICBkaXNwbGF5QXBwTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyBkaWFsb2cgYWdhaW4gd2hlbiBhcHBsaWNhdGlvbiB2ZXJzaW9uIHdpbGwgYmUgdXBkYXRlZC4gRGVmYXVsdHMgdG8gYHRydWVgXG4gICAqL1xuICBwcm9tcHRBZ2FpbkZvckVhY2hOZXdWZXJzaW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogY291bnQgb2YgcnVucyBvZiBhcHBsaWNhdGlvbiBiZWZvcmUgZGlhbG9nIHdpbGwgYmUgZGlzcGxheWVkLiBEZWZhdWx0cyB0byBgM2BcbiAgICovXG4gIHVzZXNVbnRpbFByb21wdD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2ltcGxlIE1vZGUgdG8gZGlzcGxheSB0aGUgcmF0ZSBkaWFsb2cgZGlyZWN0bHkgYW5kIGJ5cGFzcyBuZWdhdGl2ZSBmZWVkYmFjayBmaWx0ZXJpbmcgZmxvd1xuICAgKi9cbiAgc2ltcGxlTW9kZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGxlYXZlIGFwcCBvciBubyB3aGVuIGFwcGxpY2F0aW9uIHBhZ2Ugb3BlbmVkIGluIGFwcCBzdG9yZSAobm93IHN1cHBvcnRlZCBvbmx5IGZvciBpT1MpLiBEZWZhdWx0cyB0byBgZmFsc2VgXG4gICAqL1xuICBpbkFwcFJldmlldz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHVzZSBjdXN0b20gdmlldyBmb3IgcmF0ZSBkaWFsb2cuIERlZmF1bHRzIHRvIGBmYWxzZWBcbiAgICovXG4gIHVzZUN1c3RvbVJhdGVEaWFsb2c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gbG9jYWxlIG9iamVjdFxuICAgKi9cbiAgY3VzdG9tTG9jYWxlPzogQXBwUmF0ZUN1c3RvbUxvY2FsZTtcblxuICAvKipcbiAgICogQ2FsbGJhY2tzIGZvciBldmVudHNcbiAgICovXG4gIGNhbGxiYWNrcz86IEFwcFJhdGVDYWxsYmFja3M7XG5cbiAgLyoqXG4gICAqIEFwcCBTdG9yZSBVUkxTXG4gICAqL1xuICBzdG9yZUFwcFVSTD86IEFwcFVybHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0ZUN1c3RvbUxvY2FsZSB7XG4gIC8qKiBUaXRsZSAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKiogTWVzc2FnZSAqL1xuICBtZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKiBDYW5jZWwgYnV0dG9uIGxhYmVsICovXG4gIGNhbmNlbEJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBMYXRlciBidXR0b24gbGFiZWwgKi9cbiAgbGF0ZXJCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKiogUmF0ZSBidXR0b24gbGFiZWwgKi9cbiAgcmF0ZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBZZXMgYnV0dG9uIGxhYmVsICovXG4gIHllc0J1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBObyBidXR0b24gbGFiZWwgKi9cbiAgbm9CdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKiogQXBwIHJhdGUgcHJvbXB0IHRpdGxlICovXG4gIGFwcFJhdGVQcm9tcHRUaXRsZT86IHN0cmluZztcblxuICAvKiogRmVlZGJhY2sgcHJvbXB0IHRpdGxlICovXG4gIGZlZWRiYWNrUHJvbXB0VGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqIEZlZWRiYWNrIHByb21wdCBtZXNzYWdlICovXG4gIGFwcFJhdGVQcm9tcHRNZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKiBGZWVkYmFjayBwcm9tcHQgbWVzc2FnZSAqL1xuICBmZWVkYmFja1Byb21wdE1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0ZUNhbGxiYWNrcyB7XG4gIC8qKlxuICAgKiBjYWxsIGJhY2sgZnVuY3Rpb24uIGNhbGxlZCB3aGVuIHVzZXIgY2xpY2tlZCBvbiByYXRlLWRpYWxvZyBidXR0b25zXG4gICAqL1xuICBvbkJ1dHRvbkNsaWNrZWQ/OiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogY2FsbCBiYWNrIGZ1bmN0aW9uLiBjYWxsZWQgd2hlbiByYXRlLWRpYWxvZyBzaG93aW5nXG4gICAqL1xuICBvblJhdGVEaWFsb2dTaG93PzogRnVuY3Rpb247XG4gIC8qKlxuICAgKiBjYWxsIGJhY2sgZnVuY3Rpb24uIGNhbGxlZCB3aGVuIHVzZXIgY2xpY2tlZCBvbiBuZWdhdGl2ZSBmZWVkYmFja1xuICAgKi9cbiAgaGFuZGxlTmVnYXRpdmVGZWVkYmFjaz86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFVybHMge1xuICAvKipcbiAgICogYXBwbGljYXRpb24gaWQgaW4gQXBwU3RvcmVcbiAgICovXG4gIGlvcz86IHN0cmluZztcblxuICAvKipcbiAgICogYXBwbGljYXRpb24gVVJMIGluIEdvb2dsZVBsYXlcbiAgICovXG4gIGFuZHJvaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFwcGxpY2F0aW9uIFVSTCBpbiBXaW5kb3dzIFN0b3JlXG4gICAqL1xuICB3aW5kb3dzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhcHBsaWNhdGlvbiBVUkwgaW4gQXBwV29ybGRcbiAgICovXG4gIGJsYWNrYmVycnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFwcGxpY2F0aW9uIFVSTCBpbiBXaW5kb3dzU3RvcmVcbiAgICovXG4gIHdpbmRvd3M4Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEFwcCBSYXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBBcHBSYXRlIHBsdWdpbiBtYWtlcyBpdCBlYXN5IHRvIHByb21wdCB0aGUgdXNlciB0byByYXRlIHlvdXIgYXBwLCBlaXRoZXIgbm93LCBsYXRlciwgb3IgbmV2ZXIuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWFwcHJhdGUuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBcHBSYXRlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcHVzaGFuZHBsYXkvY29yZG92YS1wbHVnaW4tYXBwcmF0ZSkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBSYXRlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtcmF0ZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwUmF0ZTogQXBwUmF0ZSkgeyB9XG4gKlxuICogLi4uXG4gKiAvLyBzZXQgY2VydGFpbiBwcmVmZXJlbmNlc1xuICogdGhpcy5hcHBSYXRlLnByZWZlcmVuY2VzLnN0b3JlQXBwVVJMID0ge1xuICogICBpb3M6ICc8YXBwX2lkPicsXG4gKiAgIGFuZHJvaWQ6ICdtYXJrZXQ6Ly9kZXRhaWxzP2lkPTxwYWNrYWdlX25hbWU+JyxcbiAqICAgd2luZG93czogJ21zLXdpbmRvd3Mtc3RvcmU6Ly9yZXZpZXcvP1Byb2R1Y3RJZD08c3RvcmVfaWQ+J1xuICogfVxuICpcbiAqIHRoaXMuYXBwUmF0ZS5wcm9tcHRGb3JSYXRpbmcodHJ1ZSk7XG4gKlxuICogLy8gb3IsIG92ZXJyaWRlIHRoZSB3aG9sZSBwcmVmZXJlbmNlcyBvYmplY3RcbiAqIHRoaXMuYXBwUmF0ZS5wcmVmZXJlbmNlcyA9IHtcbiAqICAgdXNlc1VudGlsUHJvbXB0OiAzLFxuICogICBzdG9yZUFwcFVSTDoge1xuICogICAgaW9zOiAnPGFwcF9pZD4nLFxuICogICAgYW5kcm9pZDogJ21hcmtldDovL2RldGFpbHM/aWQ9PHBhY2thZ2VfbmFtZT4nLFxuICogICAgd2luZG93czogJ21zLXdpbmRvd3Mtc3RvcmU6Ly9yZXZpZXcvP1Byb2R1Y3RJZD08c3RvcmVfaWQ+J1xuICogICB9XG4gKiB9XG4gKlxuICogdGhpcy5hcHBSYXRlLnByb21wdEZvclJhdGluZyhmYWxzZSk7XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQXBwUmF0ZVByZWZlcmVuY2VzXG4gKiBBcHBVcmxzXG4gKiBBcHBSYXRlQ2FsbGJhY2tzXG4gKiBBcHBSYXRlQ3VzdG9tTG9jYWxcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwUmF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcHJhdGUnLFxuICBwbHVnaW5SZWY6ICdBcHBSYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdXNoYW5kcGxheS9jb3Jkb3ZhLXBsdWdpbi1hcHByYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFJhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25maWd1cmUgdmFyaW91cyBzZXR0aW5ncyBmb3IgdGhlIFJhdGluZyBWaWV3LlxuICAgKiBTZWUgdGFibGUgYmVsb3cgZm9yIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBwcmVmZXJlbmNlczogQXBwUmF0ZVByZWZlcmVuY2VzO1xuXG4gIC8qKlxuICAgKiBQcm9tcHRzIHRoZSB1c2VyIGZvciByYXRpbmdcbiAgICogQHBhcmFtIHtib29sZWFufSBpbW1lZGlhdGVseSAgU2hvdyB0aGUgcmF0aW5nIHByb21wdCBpbW1lZGlhdGVseS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJvbXB0Rm9yUmF0aW5nKGltbWVkaWF0ZWx5OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbW1lZGlhdGVseSBzZW5kIHRoZSB1c2VyIHRvIHRoZSBhcHAgc3RvcmUgcmF0aW5nIHBhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbmF2aWdhdGVUb0FwcFN0b3JlKCk6IHZvaWQge31cbn1cbiJdfQ==
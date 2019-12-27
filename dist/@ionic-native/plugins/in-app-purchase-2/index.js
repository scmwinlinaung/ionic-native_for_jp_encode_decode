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
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2Original = /** @class */ (function (_super) {
    __extends(InAppPurchase2Original, _super);
    function InAppPurchase2Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2Original.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2Original.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2Original.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: true,
        configurable: true
    });
    InAppPurchase2Original.pluginName = "InAppPurchase2";
    InAppPurchase2Original.plugin = "cc.fovea.cordova.purchase";
    InAppPurchase2Original.pluginRef = "store";
    InAppPurchase2Original.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2Original.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2Original.install = "ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    return InAppPurchase2Original;
}(IonicNativePlugin));
var InAppPurchase2 = new InAppPurchase2Original();
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1wdXJjaGFzZS0yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOzs7O21CQUF6Rjs7OztJQXlpQm9DLGtDQUFpQjs7OztJQWlNbkQsNEJBQUcsYUFBQyxTQUFpQjtJQVNyQiw4QkFBSyxhQUFDLE9BQWlCO0lBUXZCLGlDQUFRLGFBQUMsT0FBZ0Q7SUFVekQsNkJBQUksYUFBQyxLQUEwQixFQUFFLEtBQWMsRUFBRSxRQUEyQjtJQVk1RSw2QkFBSSxhQUFDLEtBQTBCLEVBQUUsS0FBYyxFQUFFLFFBQTJCO0lBUzVFLDRCQUFHLGFBQUMsUUFBa0I7SUEyQnRCLDhCQUFLLGFBQUMsT0FBNEIsRUFBRSxjQUFvQjtJQUt4RCw4QkFBSyxhQUFDLFFBQWtCO0lBd0N4QixnQ0FBTztJQUtQLDRDQUFtQjswQkEzVG5CLGlDQUFLOzs7Ozs7MEJBR0wsaUNBQUs7Ozs7OzswQkFHTCxtQ0FBTzs7Ozs7OzBCQUdQLGdDQUFJOzs7Ozs7MEJBR0osaUNBQUs7Ozs7OzswQkFNTCxxQ0FBUzs7Ozs7OzBCQU9ULGtEQUFzQjs7Ozs7OzBCQU10QixtQ0FBTzs7Ozs7OzBCQU9QLGdEQUFvQjs7Ozs7OzBCQUdwQiw2Q0FBaUI7Ozs7OzswQkFHakIsNkNBQWlCOzs7Ozs7MEJBR2pCLHFEQUF5Qjs7Ozs7OzBCQUd6QixzQ0FBVTs7Ozs7OzBCQUdWLDBDQUFjOzs7Ozs7MEJBSWQscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLHdDQUFZOzs7Ozs7MEJBR1osNkNBQWlCOzs7Ozs7MEJBR2pCLDhDQUFrQjs7Ozs7OzBCQUdsQixpREFBcUI7Ozs7OzswQkFHckIsK0NBQW1COzs7Ozs7MEJBR25CLG1EQUF1Qjs7Ozs7OzBCQUd2Qix1Q0FBVzs7Ozs7OzBCQUdYLGdEQUFvQjs7Ozs7OzBCQUdwQixrREFBc0I7Ozs7OzswQkFHdEIsc0NBQVU7Ozs7OzswQkFHViw2Q0FBaUI7Ozs7OzswQkFHakIsMkRBQStCOzs7Ozs7MEJBRy9CLDZDQUFpQjs7Ozs7OzBCQUdqQixtREFBdUI7Ozs7OzswQkFHdkIsNENBQWdCOzs7Ozs7MEJBR2hCLHVDQUFXOzs7Ozs7MEJBR1gsK0NBQW1COzs7Ozs7MEJBR25CLHdDQUFZOzs7Ozs7MEJBR1osaUVBQXFDOzs7Ozs7MEJBSXJDLHNDQUFVOzs7Ozs7MEJBR1YsbUNBQU87Ozs7OzswQkFHUCxpQ0FBSzs7Ozs7OzBCQUdMLHFDQUFTOzs7Ozs7MEJBR1QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLG9DQUFROzs7Ozs7MEJBR1IsaUNBQUs7Ozs7OzswQkFHTCx1Q0FBVzs7Ozs7OzBCQUdYLHNDQUFVOzs7Ozs7MEJBTVYsMkNBQWU7Ozs7OzswQkFHZiw2Q0FBaUI7Ozs7OzswQkFHakIsNENBQWdCOzs7Ozs7MEJBR2hCLDZDQUFpQjs7Ozs7OzBCQUdqQiwwQ0FBYzs7Ozs7OzBCQUdkLDBDQUFjOzs7Ozs7MEJBR2Qsb0NBQVE7Ozs7OzswQkFHUixxQ0FBUzs7Ozs7OzBCQUdULCtCQUFHOzs7Ozs7Ozs7Ozs7eUJBOXRCTDtFQXlpQm9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RPcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgYWxpYXM/OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgSUFQUHJvZHVjdHMgPSBJQVBQcm9kdWN0W10gJiB7XG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBJRFxuICAgKi9cbiAgYnlJZDogeyBbaWQ6IHN0cmluZ106IElBUFByb2R1Y3Q7IH1cbiAgLyoqXG4gICAqIEdldCBwcm9kdWN0IGJ5IGFsaWFzXG4gICAqL1xuICBieUFsaWFzOiB7IFthbGlhczogc3RyaW5nXTogSUFQUHJvZHVjdDsgfVxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwcm9kdWN0cyAoZm9yIHRlc3Rpbmcgb25seSkuXG4gICAqL1xuICByZXNldDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCB0eXBlIElBUFF1ZXJ5Q2FsbGJhY2sgPSAoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHZvaWQpIHwgKChlcnJvcjogSUFQRXJyb3IpID0+IHZvaWQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3Qge1xuXG4gIGlkOiBzdHJpbmc7XG5cbiAgYWxpYXM/OiBzdHJpbmc7XG5cbiAgdHlwZTogc3RyaW5nO1xuXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgdGl0bGU6IHN0cmluZztcblxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIHByaWNlTWljcm9zOiBzdHJpbmc7XG5cbiAgcHJpY2U6IHN0cmluZztcblxuICBjdXJyZW5jeTogc3RyaW5nO1xuXG4gIGxvYWRlZDogYm9vbGVhbjtcblxuICB2YWxpZDogYm9vbGVhbjtcblxuICBjYW5QdXJjaGFzZTogYm9vbGVhbjtcblxuICBvd25lZDogYm9vbGVhbjtcblxuICBkb3dubG9hZGluZz86IGJvb2xlYW47XG5cbiAgZG93bmxvYWRlZD86IGJvb2xlYW47XG5cbiAgbGFzdFJlbmV3YWxEYXRlPzogRGF0ZTtcblxuICBleHBpcnlEYXRlPzogRGF0ZTtcblxuICBpbnRyb1ByaWNlPzogc3RyaW5nO1xuXG4gIGludHJvUHJpY2VNaWNyb3M/OiBudW1iZXI7XG5cbiAgaW50cm9QcmljZU51bWJlck9mUGVyaW9kcz86IG51bWJlcjtcblxuICBpbnRyb1ByaWNlU3Vic2NyaXB0aW9uUGVyaW9kPzogc3RyaW5nO1xuXG4gIGludHJvUHJpY2VQYXltZW50TW9kZT86IHN0cmluZztcblxuICBpbmVsaWdpYmxlRm9ySW50cm9QcmljZT86IGJvb2xlYW47XG5cbiAgYmlsbGluZ1BlcmlvZD86IG51bWJlcjtcblxuICBiaWxsaW5nUGVyaW9kVW5pdD86IHN0cmluZztcblxuICB0cmlhbFBlcmlvZD86IG51bWJlcjtcblxuICB0cmlhbFBlcmlvZFVuaXQ/OiBzdHJpbmc7XG5cbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG5cbiAgdHJhbnNhY3Rpb24/OiBhbnk7XG5cbiAgLyoqXG4gICAqIENhbGwgYHByb2R1Y3QuZmluaXNoKClgIHRvIGNvbmZpcm0gdG8gdGhlIHN0b3JlIHRoYXQgYW4gYXBwcm92ZWQgb3JkZXIgaGFzIGJlZW4gZGVsaXZlcmVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgY2hhbmdlIHRoZSBwcm9kdWN0IHN0YXRlIGZyb20gYEFQUFJPVkVEYCB0byBgRklOSVNIRURgIChzZWUgcHJvZHVjdCBsaWZlLWN5Y2xlKS5cbiAgICpcbiAgICogQXMgbG9uZyBhcyB5b3Uga2VlcCB0aGUgcHJvZHVjdCBpbiBzdGF0ZSBgQVBQUk9WRURgOlxuICAgKlxuICAgKiAgLSB0aGUgbW9uZXkgbWF5IG5vdCBiZSBpbiB5b3VyIGFjY291bnQgKGkuZS4gdXNlciBpc24ndCBjaGFyZ2VkKVxuICAgKiAgLSB5b3Ugd2lsbCByZWNlaXZlIHRoZSBgYXBwcm92ZWRgIGV2ZW50IGVhY2ggdGltZSB0aGUgYXBwbGljYXRpb24gc3RhcnRzLFxuICAgKiAgICB3aGVyZSB5b3Ugc2hvdWxkIHRyeSBhZ2FpbiB0byBmaW5pc2ggdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqICoqZXhhbXBsZSB1c2UqKlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcbiAgICogICAgIC8vIHN5bmNocm9ub3VzXG4gICAqICAgICBhcHAudW5sb2NrRmVhdHVyZSgpO1xuICAgKiAgICAgcHJvZHVjdC5maW5pc2goKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcbiAgICogICAgIC8vIGFzeW5jaHJvbm91c1xuICAgKiAgICAgYXBwLmRvd25sb2FkRmVhdHVyZShmdW5jdGlvbigpIHtcbiAgICogICAgICAgICBwcm9kdWN0LmZpbmlzaCgpO1xuICAgKiAgICAgfSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGZpbmlzaCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSBwdXJjaGFzZSB2YWxpZGF0aW9uIGFzIGRlZmluZWQgYnkgdGhlIGBzdG9yZS52YWxpZGF0b3JgIGF0dHJpYnV0ZS5cbiAgICpcbiAgICogKipyZXR1cm4gdmFsdWUqKlxuICAgKlxuICAgKiBBIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gICAqXG4gICAqICAtIGBkb25lKGZ1bmN0aW9uKHByb2R1Y3Qpe30pYFxuICAgKiAgICAtIGNhbGxlZCB3aGV0aGVyIHZlcmlmaWNhdGlvbiBmYWlsZWQgb3Igc3VjY2VlZGVkLlxuICAgKiAgLSBgZXhwaXJlZChmdW5jdGlvbihwcm9kdWN0KXt9KWBcbiAgICogICAgLSBjYWxsZWQgaWYgdGhlIHB1cmNoYXNlIGV4cGlyZWQuXG4gICAqICAtIGBzdWNjZXNzKGZ1bmN0aW9uKHByb2R1Y3QsIHB1cmNoYXNlRGF0YSl7fSlgXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBpcyB2YWxpZCBhbmQgdmVyaWZpZWQuXG4gICAqICAgIC0gYHB1cmNoYXNlRGF0YWAgaXMgdGhlIGRldmljZSBkZXBlbmRlbnQgdHJhbnNhY3Rpb24gZGV0YWlsc1xuICAgKiAgICAgIHJldHVybmVkIGJ5IHRoZSB2YWxpZGF0b3IsIHdoaWNoIHlvdSBjYW4gbW9zdCBwcm9iYWJseSBpZ25vcmUuXG4gICAqICAtIGBlcnJvcihmdW5jdGlvbihlcnIpe30pYFxuICAgKiAgICAtIHZhbGlkYXRpb24gZmFpbGVkLCBlaXRoZXIgYmVjYXVzZSBvZiBleHBpcnkgb3IgY29tbXVuaWNhdGlvblxuICAgKiAgICAgIGZhaWx1cmUuXG4gICAqICAgIC0gYGVycmAgaXMgYSBzdG9yZS5FcnJvciBvYmplY3QsIHdpdGggYSBjb2RlIGV4cGVjdGVkIHRvIGJlXG4gICAqICAgICAgYHN0b3JlLkVSUl9QQVlNRU5UX0VYUElSRURgIG9yIGBzdG9yZS5FUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRGAuXG4gICAqL1xuICB2ZXJpZnkoKTogYW55O1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cbiAgc3RhdGVDaGFuZ2VkKCk6IHZvaWQ7XG5cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcblxuICBvbmNlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgb2ZmKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgdHJpZ2dlcihhY3Rpb246IHN0cmluZywgYXJnczogYW55KTogdm9pZDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RFdmVudHMge1xuICAvKiogQ2FsbGVkIHdoZW4gcHJvZHVjdCBkYXRhIGlzIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cbiAgbG9hZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IHZvaWQ7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LiAqL1xuICB1cGRhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IHZvaWQ7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuIFRoZSBgZXJyYCBwYXJhbWV0ZXIgaXMgYW4gSUFQRXJyb3Igb2JqZWN0LiAqL1xuICBlcnJvcjogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiB2b2lkO1xuICAvKiogQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGFwcHJvdmVkLiAqL1xuICBhcHByb3ZlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiB2b2lkO1xuICAvKiogQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC4gKi9cbiAgb3duZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gdm9pZDtcbiAgLyoqIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBjYW5jZWxsZWQgYnkgdGhlIHVzZXIuICovXG4gIGNhbmNlbGxlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiB2b2lkO1xuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaXMgcmVmdW5kZWQgYnkgdGhlIHVzZXIuICovXG4gIHJlZnVuZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IHZvaWQ7XG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGhhcyBqdXN0IGJlZW4gcmVnaXN0ZXJlZC4gKi9cbiAgcmVnaXN0ZXJlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiB2b2lkO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgZGV0YWlscyBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvYWRlZC4gKi9cbiAgdmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gdm9pZDtcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwcm9kdWN0IGNhbm5vdCBiZSBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuICovXG4gIGludmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gdm9pZDtcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGhhcyBqdXN0IGJlZW4gcmVxdWVzdGVkLiAqL1xuICByZXF1ZXN0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gdm9pZDtcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBiZWVuIGluaXRpYXRlZC4gKi9cbiAgaW5pdGlhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IHZvaWQ7XG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyBoYXMgY29tcGxldGVkLiAqL1xuICBmaW5pc2hlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiB2b2lkO1xuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWwuICovXG4gIHZlcmlmaWVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IHZvaWQ7XG4gIC8qKiBDYWxsZWQgd2hlbiByZWNlaXB0IHZlcmlmaWNhdGlvbiBmYWlsZWQuICovXG4gIHVudmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gdm9pZDtcbiAgLyoqIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkLiAqL1xuICBleHBpcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IHZvaWQ7XG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGlzIHN0YXJ0ZWQuICovXG4gIGRvd25sb2FkaW5nOiAocHJvZHVjdDogSUFQUHJvZHVjdCwgcHJvZ3Jlc3M6IGFueSwgdGltZV9yZW1haW5pbmc6IGFueSkgPT4gdm9pZDtcbiAgLyoqIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQuICovXG4gIGRvd25sb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJQVBFcnJvciB7XG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBQdXJjaGFzZSAyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEluLUFwcCBQdXJjaGFzZSBvbiBpT1MsIEFuZHJvaWQsIFdpbmRvd3MsIG1hY09TIGFuZCBYQm94LlxuICpcbiAqICMjIEZlYXR1cmVzXG4gKlxuICogfCAgfCBpb3MgfCBhbmRyb2lkIHwgd2luLTggfCB3aW4tMTAvdXdwIHwgbWFjIHxcbiAqIHwtLXwtLXwtLXwtLXwtLXwtLXxcbiAqIHwgY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCBub24gY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCBzdWJzY3JpcHRpb25zIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgcmVzdG9yZSBwdXJjaGFzZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCByZWNlaXB0IHZhbGlkYXRpb25zIHwg4pyFIHwg4pyFIHwgIHwg4pyFIHwg4pyFIHxcbiAqIHwgZG93bmxvYWRhYmxlIGNvbnRlbnQgfCDinIUgfCAgIHwgICB8ICAgfCDinIUgfFxuICogfCBpbnRyb2R1Y3RvcnkgcHJpY2VzIHwg4pyFIHwg4pyFIHwgICB8IOKchSB8IOKchSB8XG4gKlxuICogU3VwcG9ydHM6XG4gKlxuICogIC0gKippT1MqKiB2ZXJzaW9uIDcuMCBvciBoaWdoZXIuXG4gKiAgLSAqKkFuZHJvaWQqKiB2ZXJzaW9uIDIuMiAoQVBJIGxldmVsIDgpIG9yIGhpZ2hlclxuICogICAgLSB3aXRoIEdvb2dsZSBQbGF5IGNsaWVudCB2ZXJzaW9uIDMuOS4xNiBvciBoaWdoZXJcbiAqICAtICoqV2luZG93cyoqIFN0b3JlL1Bob25lIDguMSBvciBoaWdoZXJcbiAqICAtICoqV2luZG93cyAxMCBNb2JpbGUqKlxuICogIC0gKiptYWNPUyoqIHZlcnNpb24gMTBcbiAqICAtICoqWGJveCBPbmUqKlxuICogICAgLSAoYW5kIGFueSBwbGF0Zm9ybSBzdXBwb3J0aW5nIE1pY3Jvc29mdCdzIFVXUClcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwUHVyY2hhc2UyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtcHVyY2hhc2UtMi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgc3RvcmU6IEluQXBwUHVyY2hhc2UyKSB7XG4gKiAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gKiAgICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcbiAqICAgICAgaWQ6IFwibXlfcHJvZHVjdF9pZFwiLFxuICogICAgICB0eXBlOiB0aGlzLnN0b3JlLk5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT04sXG4gKiAgICB9KTtcbiAqICAgIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIilcbiAqICAgICAgLmFwcHJvdmVkKHAgPT4gcC52ZXJpZnkoKSlcbiAqICAgICAgLnZlcmlmaWVkKHAgPT4gcC5maW5pc2goKSk7XG4gKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zdG9yZS5vcmRlcihcIm15X3Byb2R1Y3RfaWRcIik7XG4gKlxuICogYGBgXG4gKlxuICogIyMgRnVsbCBleGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogIC8vIEFmdGVyIHBsYXRmb3JtIHJlYWR5XG4gKiAgdGhpcy5zdG9yZS52ZXJib3NpdHkgPSB0aGlzLnN0b3JlLkRFQlVHO1xuICogIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xuICogICAgaWQ6IFwibXlfcHJvZHVjdF9pZFwiLFxuICogICAgdHlwZTogdGhpcy5zdG9yZS5QQUlEX1NVQlNDUklQVElPTixcbiAqICB9KTtcbiAqXG4gKiAgLy8gUmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBzcGVjaWZpYyBwcm9kdWN0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS5yZWdpc3RlcmVkKCAocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFVwZGF0ZWRcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnVwZGF0ZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgICBjb25zb2xlLmxvZygnVXBkYXRlZCcgKyBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFVzZXIgY2xvc2VkIHRoZSBuYXRpdmUgcHVyY2hhc2UgZGlhbG9nXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS5jYW5jZWxsZWQoIChwcm9kdWN0KSA9PiB7XG4gKiAgICAgIGNvbnNvbGUuZXJyb3IoJ1B1cmNoYXNlIHdhcyBDYW5jZWxsZWQnKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gVHJhY2sgYWxsIHN0b3JlIGVycm9yc1xuICogIHRoaXMuc3RvcmUuZXJyb3IoIChlcnIpID0+IHtcbiAqICAgIGNvbnNvbGUuZXJyb3IoJ1N0b3JlIEVycm9yICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gUnVuIHNvbWUgY29kZSBvbmx5IHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5IHRvIGJlIHVzZWRcbiAqICB0aGlzLnN0b3JlLnJlYWR5KCgpID0+ICB7XG4gKiAgICBjb25zb2xlLmxvZygnU3RvcmUgaXMgcmVhZHknKTtcbiAqICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0czogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUucHJvZHVjdHMpKTtcbiAqICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUuZ2V0KFwibXlfcHJvZHVjdF9pZFwiKSkpO1xuICogIH0pO1xuICpcbiAqICAvLyBSZWZyZXNoIHRoZSBzdGF0dXMgb2YgaW4tYXBwIHByb2R1Y3RzXG4gKiAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XG4gKlxuICogIC4uLlxuICpcbiAqICAvLyBUbyBtYWtlIGEgcHVyY2hhc2VcbiAqICB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiAjIyBQaGlsb3NvcGh5XG4gKlxuICogVGhlIEFQSSBpcyBtb3N0bHkgZXZlbnRzIGJhc2VkLiBBcyBhIHVzZXIgb2YgdGhpcyBwbHVnaW4sXG4gKiB5b3Ugd2lsbCBoYXZlIHRvIHJlZ2lzdGVyIGxpc3RlbmVycyB0byBjaGFuZ2VzIGhhcHBlbmluZyB0byB0aGUgcHJvZHVjdHNcbiAqIHlvdSByZWdpc3Rlci5cbiAqXG4gKiBUaGUgY29yZSBvZiB0aGUgbGlzdGVuaW5nIG1lY2hhbmlzbSBpcyB0aGUgYHdoZW4oKWAgbWV0aG9kLiBJdCBhbGxvd3MgeW91IHRvXG4gKiBiZSBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIG9uZSBvciBhIHNldCBvZiBwcm9kdWN0cyB1c2luZyBhIHF1ZXJ5IG1lY2hhbmlzbTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJwcm9kdWN0XCIpLnVwZGF0ZWQocmVmcmVzaFNjcmVlbik7IC8vIG1hdGNoIGFueSBwcm9kdWN0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwiZnVsbF92ZXJzaW9uXCIpLm93bmVkKHVubG9ja0FwcCk7IC8vIG1hdGNoIGEgc3BlY2lmaWMgcHJvZHVjdFxuICogIHRoaXMuc3RvcmUud2hlbihcInN1YnNjcmlwdGlvblwiKS5hcHByb3ZlZChzZXJ2ZXJDaGVjayk7IC8vIG1hdGNoIGFsbCBzdWJzY3JpcHRpb25zXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwiZG93bmxvYWRhYmxlIGNvbnRlbnRcIikuZG93bmxvYWRlZChzaG93Q29udGVudCk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYHVwZGF0ZWRgIGV2ZW50IGlzIGZpcmVkIHdoZW5ldmVyIG9uZSBvZiB0aGUgZmllbGRzIG9mIGEgcHJvZHVjdCBpc1xuICogY2hhbmdlZCAoaXRzIGBvd25lZGAgc3RhdHVzIGZvciBpbnN0YW5jZSkuXG4gKlxuICogVGhpcyBldmVudCBwcm92aWRlcyBhIGdlbmVyaWMgd2F5IHRvIHRyYWNrIHRoZSBzdGF0dXNlcyBvZiB5b3VyIHB1cmNoYXNlcyxcbiAqIHRvIHVubG9jayBmZWF0dXJlcyB3aGVuIG5lZWRlZCBhbmQgdG8gcmVmcmVzaCB5b3VyIHZpZXdzIGFjY29yZGluZ2x5LlxuICpcbiAqICMjIFJlZ2lzdGVyaW5nIHByb2R1Y3RzXG4gKlxuICogVGhlIHN0b3JlIG5lZWRzIHRvIGtub3cgdGhlIHR5cGUgYW5kIGlkZW50aWZpZXJzIG9mIHlvdXIgcHJvZHVjdHMgYmVmb3JlIHlvdVxuICogY2FuIHVzZSB0aGVtIGluIHlvdXIgY29kZS5cbiAqXG4gKiBVc2UgYHN0b3JlLnJlZ2lzdGVyKClgIHRvIGRlZmluZSB0aGVtIGJlZm9yZSB5b3VyIGZpcnN0IGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAuXG4gKlxuICogT25jZSByZWdpc3RlcmVkLCB5b3UgY2FuIHVzZSBgc3RvcmUuZ2V0KClgIHRvIHJldHJpZXZlIGFuIGBJQVBQcm9kdWN0YCBvYmplY3QuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xuICogICAgaWQ6IFwibXlfY29uc3VtYWJsZTFcIixcbiAqICAgIHR5cGU6IHRoaXMuc3RvcmUuQ09OU1VNQUJMRVxuICogIH0pO1xuICogIC4uLlxuICogIGNvbnN0IHAgPSB0aGlzLnN0b3JlLmdldChcIm15X2NvbnN1bWFibGUxXCIpO1xuICogYGBgXG4gKlxuICogVGhlIHByb2R1Y3QgYGlkYCBhbmQgYHR5cGVgIGhhdmUgdG8gbWF0Y2ggcHJvZHVjdHMgZGVmaW5lZCBpbiB5b3VyXG4gKiBBcHBsZSwgR29vZ2xlIG9yIE1pY3Jvc29mdCBkZXZlbG9wZXIgY29uc29sZXMuXG4gKlxuICogTGVhcm4gbW9yZSBhYm91dCBpdCBbZnJvbSB0aGUgd2lraV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2Uvd2lraSkuXG4gKlxuICogIyMgRGlzcGxheWluZyBwcm9kdWN0c1xuICpcbiAqIFJpZ2h0IGFmdGVyIHlvdSByZWdpc3RlcmVkIHlvdXIgcHJvZHVjdHMsIG5vdGhpbmcgbXVjaCBpcyBrbm93biBhYm91dCB0aGVtXG4gKiBleGNlcHQgdGhlaXIgYGlkYCwgYHR5cGVgIGFuZCBhbiBvcHRpb25hbCBgYWxpYXNgLlxuICpcbiAqIFdoZW4geW91IHBlcmZvcm0gdGhlIGluaXRpYWwgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYCwgdGhlIHBsYXRmb3Jtcycgc2VydmVyIHdpbGxcbiAqIGJlIGNvbnRhY3RlZCB0byBsb2FkIGluZm9ybWF0aW9ucyBhYm91dCB0aGUgcmVnaXN0ZXJlZCBwcm9kdWN0czogaHVtYW5cbiAqIHJlYWRhYmxlIGB0aXRsZWAgYW5kIGBkZXNjcmlwdGlvbmAsIGBwcmljZWAsIGV0Yy5cbiAqXG4gKiBUaGlzIGlzbid0IGFuIG9wdGlvbmFsIHN0ZXAsIHN0b3JlIG93bmVycyByZXF1aXJlIHlvdVxuICogdG8gZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBhIHByb2R1Y3QgZXhhY3RseSBhcyByZXRyaWV2ZWQgZnJvbSB0aGVpciBzZXJ2ZXI6IG5vXG4gKiBoYXJkLWNvZGluZyBvZiBwcmljZSBhbmQgdGl0bGUgYWxsb3dlZCEgVGhpcyBpcyBhbHNvIGNvbnZlbmllbnQgZm9yIHlvdVxuICogYXMgeW91IGNhbiBjaGFuZ2UgdGhlIHByaWNlIG9mIHlvdXIgaXRlbXMga25vd2luZyB0aGF0IGl0J2xsIGJlIHJlZmxlY3RlZCBpbnN0YW50bHlcbiAqIG9uIHlvdXIgY2xpZW50cycgZGV2aWNlcy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGluZm9ybWF0aW9uIG1heSBub3QgYmUgYXZhaWxhYmxlIHdoZW4gdGhlIGZpcnN0IHZpZXcgdGhhdCBuZWVkc1xuICogdGhlbSBhcHBlYXJzIG9uIHNjcmVlbi4gRm9yIHlvdSwgdGhlIGJlc3Qgb3B0aW9uIGlzIHRvIGhhdmUgeW91ciB2aWV3IG1vbml0b3JcbiAqIGNoYW5nZXMgbWFkZSB0byB0aGUgcHJvZHVjdC5cbiAqXG4gKiAjIyBQdXJjaGFzaW5nXG4gKlxuICogIyMjIyBpbml0aWF0ZSBhIHB1cmNoYXNlXG4gKlxuICogUHVyY2hhc2VzIGFyZSBpbml0aWF0ZWQgdXNpbmcgdGhlIGBzdG9yZS5vcmRlcihcInNvbWVfcHJvZHVjdF9pZFwiKWAgbWV0aG9kLlxuICpcbiAqIFRoZSBzdG9yZSB3aWxsIG1hbmFnZSB0aGUgaW50ZXJuYWwgcHVyY2hhc2UgZmxvdy4gSXQnbGwgZW5kOlxuICpcbiAqICAtIHdpdGggYW4gYGFwcHJvdmVkYCBldmVudC4gVGhlIHByb2R1Y3QgZW50ZXJzIHRoZSBgQVBQUk9WRURgIHN0YXRlLlxuICogIC0gd2l0aCBhIGBjYW5jZWxsZWRgIGV2ZW50LiBUaGUgcHJvZHVjdCBnZXRzIGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXG4gKiAgLSB3aXRoIGFuIGBlcnJvcmAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cbiAqXG4gKiBTZWUgdGhlIHByb2R1Y3QgbGlmZS1jeWNsZSBzZWN0aW9uIGZvciBkZXRhaWxzIGFib3V0IHByb2R1Y3Qgc3RhdGVzLlxuICpcbiAqICMjIyMgZmluaXNoIGEgcHVyY2hhc2VcbiAqXG4gKiBPbmNlIHRoZSB0cmFuc2FjdGlvbiBpcyBhcHByb3ZlZCwgdGhlIHByb2R1Y3Qgc3RpbGwgaXNuJ3Qgb3duZWQ6IHRoZSBzdG9yZSBuZWVkc1xuICogY29uZmlybWF0aW9uIHRoYXQgdGhlIHB1cmNoYXNlIHdhcyBkZWxpdmVyZWQgYmVmb3JlIGNsb3NpbmcgdGhlIHRyYW5zYWN0aW9uLlxuICpcbiAqIFRvIGNvbmZpcm0gZGVsaXZlcnksIHlvdSdsbCB1c2UgdGhlIGBwcm9kdWN0LmZpbmlzaCgpYCBtZXRob2QuXG4gKlxuICogIyMjIyBleGFtcGxlIHVzYWdlXG4gKlxuICogRHVyaW5nIGluaXRpYWxpemF0aW9uOlxuICogYGBgdHlwZXNjcmlwdFxuICogdGhpcy5zdG9yZS53aGVuKFwiZXh0cmFfY2hhcHRlclwiKS5hcHByb3ZlZCgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICAvLyBkb3dubG9hZCB0aGUgZmVhdHVyZVxuICogICBhcHAuZG93bmxvYWRFeHRyYUNoYXB0ZXIoKVxuICogICAudGhlbigoKSA9PiBwcm9kdWN0LmZpbmlzaCgpKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogV2hlbiB0aGUgcHVyY2hhc2UgYnV0dG9uIGlzIGNsaWNrZWQ6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwiZXh0cmFfY2hhcHRlclwiKTtcbiAqIGBgYFxuICpcbiAqICMjIyMgdW4tZmluaXNoZWQgcHVyY2hhc2VzXG4gKlxuICogSWYgeW91ciBhcHAgd2Fzbid0IGFibGUgdG8gZGVsaXZlciB0aGUgY29udGVudCwgYHByb2R1Y3QuZmluaXNoKClgIHdvbid0IGJlIGNhbGxlZC5cbiAqXG4gKiBEb24ndCB3b3JyeTogdGhlIGBhcHByb3ZlZGAgZXZlbnQgd2lsbCBiZSByZS10cmlnZ2VyZWQgdGhlIG5leHQgdGltZSB5b3VcbiAqIGNhbGwgYHN0b3JlLnJlZnJlc2goKWAsIHdoaWNoIGNhbiB2ZXJ5IHdlbGwgYmUgdGhlIG5leHQgdGltZVxuICogdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cy4gUGVuZGluZyB0cmFuc2FjdGlvbnMgYXJlIHBlcnNpc3RhbnQuXG4gKlxuICogIyMjIyBzaW1wbGUgY2FzZVxuICpcbiAqIEluIHRoZSBtb3N0IHNpbXBsZSBjYXNlLCB3aGVyZTpcbiAqXG4gKiAgLSBkZWxpdmVyeSBvZiBwdXJjaGFzZXMgaXMgb25seSBsb2NhbCA7XG4gKiAgLSB5b3UgZG9uJ3Qgd2FudCAob3IgbmVlZCkgdG8gaW1wbGVtZW50IHJlY2VpcHQgdmFsaWRhdGlvbiA7XG4gKlxuICogWW91IG1heSBqdXN0IHdhbnQgdG8gZmluaXNoIGFsbCBwdXJjaGFzZXMgYXV0b21hdGljYWxseS4gWW91IGNhbiBkbyBpdCB0aGlzIHdheTpcbiAqIGBgYGpzXG4gKiB0aGlzLnN0b3JlLndoZW4oXCJwcm9kdWN0XCIpLmFwcHJvdmVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcbiAqIGBgYFxuICpcbiAqIE5PVEU6IHRoZSBcInByb2R1Y3RcIiBxdWVyeSB3aWxsIG1hdGNoIGFueSBwdXJjaGFzZXMgKHNlZSBcInF1ZXJpZXNcIiB0byBsZWFybiBtb3JlIGRldGFpbHMgYWJvdXQgcXVlcmllcykuXG4gKlxuICogIyMgUmVjZWlwdCB2YWxpZGF0aW9uXG4gKlxuICogVG8gZ2V0IHRoZSBtb3N0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24gYWJvdXQgcHVyY2hhc2VzIChpbiBjYXNlIGEgcHVyY2hhc2UgaGF2ZSBiZWVuIGNhbmNlbGVkLCBvciBhIHN1YnNjcmlwdGlvbiByZW5ld2VkKSxcbiAqIHlvdSBzaG91bGQgaW1wbGVtZW50IHNlcnZlciBzaWRlIHJlY2VpcHQgdmFsaWRhdGlvbi5cbiAqXG4gKiBUaGlzIGFsc28gcHJvdGVjdHMgeW91IGFnYWluc3QgZmFrZSBcInB1cmNoYXNlc1wiLCBtYWRlIGJ5IHNvbWUgdXNlcnMgdXNpbmdcbiAqIFwiZnJlZSBpbi1hcHAgcHVyY2hhc2VcIiBhcHBzIG9uIHRoZWlyIGRldmljZXMuXG4gKlxuICogV2hlbiBhIHB1cmNoYXNlIGhhcyBiZWVuIGFwcHJvdmVkIGJ5IHRoZSBzdG9yZSwgaXQncyBlbnJpY2hlZCB3aXRoXG4gKiB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiAoc2VlIGBwcm9kdWN0LnRyYW5zYWN0aW9uYCBhdHRyaWJ1dGUpLlxuICpcbiAqIFRvIHZlcmlmeSBhIHB1cmNoYXNlIHlvdSdsbCBoYXZlIHRvIGRvIHRocmVlIHRoaW5nczpcbiAqXG4gKiAgLSBjb25maWd1cmUgdGhlIHZhbGlkYXRvci5cbiAqICAtIGNhbGwgYHByb2R1Y3QudmVyaWZ5KClgIGZyb20gdGhlIGBhcHByb3ZlZGAgZXZlbnQsIGJlZm9yZSBmaW5pc2hpbmcgdGhlIHRyYW5zYWN0aW9uLlxuICogIC0gZmluaXNoIHRoZSB0cmFuc2FjdGlvbiB3aGVuIHRyYW5zYWN0aW9uIGlzIGB2ZXJpZmllZGAuXG4gKlxuICogKipTaGFtZWxlc3MgUGx1ZyoqOiB0aGlzIGlzIGEgZmVhdHVyZSBtYW55IHVzZXJzIHN0cnVnZ2xlIHdpdGgsIHNvIGFzIHRoZSBhdXRob3Igb2YgdGhpcyBwbHVnaW4sIHdlIGNhbiBwcm92aWRlIGl0IHRvIHlvdSBhcy1hLXNlcnZpY2U6IGh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cbiAqICh3aGljaCBpcyBmcmVlIHVudGlsIHlvdSBzdGFydCBtYWtpbmcgc2VyaW91cyBtb25leSlcbiAqXG4gKiAjIyMjIGV4YW1wbGUgdXNpbmcgYSB2YWxpZGF0aW9uIFVSTFxuICpcbiAqIGBgYGpzXG4gKiB0aGlzLnN0b3JlLnZhbGlkYXRvciA9IFwiaHR0cHM6Ly9iaWxsaW5nLmZvdmVhLmNjL1wiO1xuICpcbiAqIHRoaXMuc3RvcmUud2hlbihcIm15IHN0dWZmXCIpXG4gKiAgIC5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC52ZXJpZnkoKSlcbiAqICAgLnZlcmlmaWVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcbiAqIGBgYFxuICpcbiAqICMjIFN1YnNjcmlwdGlvbnNcbiAqXG4gKiBGb3Igc3Vic2NyaXB0aW9uLCB5b3UgTVVTVCBpbXBsZW1lbnQgcmVtb3RlIHJlY2VpcHQgdmFsaWRhdGlvbi5cbiAqXG4gKiBXaGVuIHRoZSByZWNlaXB0IHZhbGlkYXRvciByZXR1cm5zIGEgYHN0b3JlLlBVUkNIQVNFX0VYUElSRURgIGVycm9yIGNvZGUsIHRoZSBzdWJzY3JpcHRpb24gd2lsbFxuICogYXV0b21hdGljYWxseSBsb29zZSBpdHMgYG93bmVkYCBzdGF0dXMuXG4gKlxuICogVHlwaWNhbGx5LCB5b3UnbGwgZW5hYmxlIGFuZCBkaXNhYmxlIGFjY2VzcyB0byB5b3VyIGNvbnRlbnQgdGhpcyB3YXkuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteV9zdWJjcmlwdGlvblwiKS51cGRhdGVkKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgIGlmIChwcm9kdWN0Lm93bmVkKVxuICogICAgIGFwcC5zdWJzY3JpYmVyTW9kZSgpO1xuICogICBlbHNlXG4gKiAgICAgYXBwLmd1ZXN0TW9kZSgpO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyBQcm9kdWN0IGxpZmUtY3ljbGVcbiAqXG4gKiBBIHByb2R1Y3Qgd2lsbCBjaGFuZ2Ugc3RhdGUgZHVyaW5nIHRoZSBhcHBsaWNhdGlvbiBleGVjdXRpb24uXG4gKlxuICogRmluZCBiZWxvdyBhIGRpYWdyYW0gb2YgdGhlIGRpZmZlcmVudCBzdGF0ZXMgYSBwcm9kdWN0IGNhbiBwYXNzIGJ5LlxuICpcbiAqIGBgYFxuICogUkVHSVNURVJFRCArLS0+IElOVkFMSURcbiAqICAgICAgICAgICAgfFxuICogICAgICAgICAgICArLS0+IFZBTElEICstLT4gUkVRVUVTVEVEICstLT4gSU5JVElBVEVEICstK1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgIF4gICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogICAgICAgICAgICAgICAgIHwgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgKy0tPiBET1dOTE9BRElORyArLS0+IERPV05MT0FERUQgK1xuICogICAgICAgICAgICAgICAgIHwgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgKy0tPiBBUFBST1ZFRCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+IEZJTklTSEVEICstLT4gT1dORURcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqXG4gKiAjIyMjIE5vdGVzXG4gKlxuICogIC0gV2hlbiBmaW5pc2hlZCwgYSBjb25zdW1hYmxlIHByb2R1Y3Qgd2lsbCBnZXQgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZSwgd2hpbGUgb3RoZXIgd2lsbCBlbnRlciB0aGUgYE9XTkVEYCBzdGF0ZS5cbiAqICAtIEFueSBlcnJvciBpbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyB3aWxsIGJyaW5nIGEgcHJvZHVjdCBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxuICogIC0gRHVyaW5nIGFwcGxpY2F0aW9uIHN0YXJ0dXAsIHByb2R1Y3RzIG1heSBnbyBpbnN0YW50bHkgZnJvbSBgUkVHSVNURVJFRGAgdG8gYEFQUFJPVkVEYCBvciBgT1dORURgLCBmb3IgZXhhbXBsZSBpZiB0aGV5IGFyZSBwdXJjaGFzZWQgbm9uLWNvbnN1bWFibGVzIG9yIG5vbi1leHBpcmVkIHN1YnNjcmlwdGlvbnMuXG4gKiAgLSBOb24tUmVuZXdpbmcgU3Vic2NyaXB0aW9ucyBhcmUgaU9TIHByb2R1Y3RzIG9ubHkuIFBsZWFzZSBzZWUgdGhlIFtpT1MgTm9uIFJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2lvcy5tZCNub24tcmVuZXdpbmcpIGZvciBhIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxuICpcbiAqICMjIGV2ZW50c1xuICpcbiAqICAtIGBsb2FkZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHByb2R1Y3QgZGF0YSBpcyBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuXG4gKiAgLSBgdXBkYXRlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW55IGNoYW5nZSBvY2N1cmVkIHRvIGEgcHJvZHVjdC5cbiAqICAtIGBlcnJvcihlcnIpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuXG4gKiAgICAtIFRoZSBgZXJyYCBwYXJhbWV0ZXIgaXMgYW4gZXJyb3Igb2JqZWN0XG4gKiAgLSBgYXBwcm92ZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBhcHByb3ZlZC5cbiAqICAtIGBvd25lZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC5cbiAqICAtIGBjYW5jZWxsZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBjYW5jZWxsZWQgYnkgdGhlIHVzZXIuXG4gKiAgLSBgcmVmdW5kZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGFuIG9yZGVyIGlzIHJlZnVuZGVkIGJ5IHRoZSB1c2VyLlxuICogIC0gQWN0dWFsbHksIGFsbCBvdGhlciBwcm9kdWN0IHN0YXRlcyBoYXZlIHRoZWlyIHByb21pc2VcbiAqICAgIC0gYHJlZ2lzdGVyZWRgLCBgdmFsaWRgLCBgaW52YWxpZGAsIGByZXF1ZXN0ZWRgLFxuICogICAgICBgaW5pdGlhdGVkYCBhbmQgYGZpbmlzaGVkYFxuICogIC0gYHZlcmlmaWVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiByZWNlaXB0IHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFxuICogIC0gYHVudmVyaWZpZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHJlY2VpcHQgdmVyaWZpY2F0aW9uIGZhaWxlZFxuICogIC0gYGV4cGlyZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkXG4gKiAgLSBgZG93bmxvYWRpbmcoSUFQUHJvZHVjdCwgcHJvZ3Jlc3MsIHRpbWVfcmVtYWluaW5nKWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBpcyBzdGFydGVkXG4gKiAgLSBgZG93bmxvYWRlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFxuICpcbiAqICMjIExlYXJuIE1vcmVcbiAqXG4gKiAgLSBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZSlcbiAqICAtIFtHaXRCb29rXShodHRwczovL3B1cmNoYXNlLmNvcmRvdmEuZm92ZWEuY2MvKVxuICogIC0gW1dpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpXG4gKiAgLSBbQVBJIHJlZmVyZW5jZV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZClcbiAqXG4gKiAjIyBUZWNobmljYWwgU3VwcG9ydCBvciBRdWVzdGlvbnNcbiAqXG4gKiBJZiB5b3UgaGF2ZSBxdWVzdGlvbnMgb3IgbmVlZCBoZWxwIGludGVncmF0aW5nIEluLUFwcCBQdXJjaGFzZSwgW09wZW4gYW4gSXNzdWUgb24gR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9pc3N1ZXMpIG9yIGVtYWlsIHVzIGF0IF9zdXBwb3J0QGZvdmVhLmNjXy5cbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogSUFQUHJvZHVjdFxuICogSUFQUHJvZHVjdE9wdGlvbnNcbiAqIElBUFByb2R1Y3RFdmVudHNcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luQXBwUHVyY2hhc2UyJyxcbiAgcGx1Z2luOiAnY2MuZm92ZWEuY29yZG92YS5wdXJjaGFzZScsXG4gIHBsdWdpblJlZjogJ3N0b3JlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnXSxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjYy5mb3ZlYS5jb3Jkb3ZhLnB1cmNoYXNlIC0tdmFyaWFibGUgQklMTElOR19LRVk9XCI8QU5EUk9JRF9CSUxMSU5HX0tFWT5cIidcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBQdXJjaGFzZTIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFFVSUVUOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUk9SOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFdBUk5JTkc6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5GTzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBERUJVRzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEZWJ1ZyBsZXZlbC4gVXNlIFFVSUVULCBFUlJPUiwgV0FSTklORywgSU5GTyBvciBERUJVRyBjb25zdGFudHNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2ZXJib3NpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gY2xlYXIgdGhlIHRyYW5zYWN0aW9uIHF1ZXVlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24uXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQjcmFuZG9tLXRpcHNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBhdXRvRmluaXNoVHJhbnNhY3Rpb25zOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBpbnZva2UgdGhlIHBsYXRmb3JtIHB1cmNoYXNlIHNhbmRib3guIChXaW5kb3dzIG9ubHkpXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc2FuZGJveDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBkb3dubG9hZGluZyBvZiBob3N0ZWQgY29udGVudC4gKEFwcGxlIG9ubHkpLlxuICAgKiBVc2VmdWwgaW4gZGV2ZWxvcG1lbnQgb3Igd2hlbiBtaWdyYXRpbmcgeW91ciBhcHAgYXdheSBmcm9tIEFwcGxlIEhvc3RlZCBDb250ZW50LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGRpc2FibGVIb3N0ZWRDb250ZW50OiBib29sZWFuO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGUkVFX1NVQlNDUklQVElPTjogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQQUlEX1NVQlNDUklQVElPTjogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBOT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENPTlNVTUFCTEU6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTk9OX0NPTlNVTUFCTEU6IHN0cmluZztcblxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfU0VUVVA6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0xPQUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BVUkNIQVNFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9MT0FEX1JFQ0VJUFRTOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9DTElFTlRfSU5WQUxJRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9DQU5DRUxMRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BBWU1FTlRfSU5WQUxJRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9OT1RfQUxMT1dFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfVU5LTk9XTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUkVGUkVTSF9SRUNFSVBUUzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfSU5WQUxJRF9QUk9EVUNUX0lEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9GSU5JU0g6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0NPTU1VTklDQVRJT046IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1NVQlNDUklQVElPTlNfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfTUlTU0lOR19UT0tFTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfQkFEX1JFU1BPTlNFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9SRUZSRVNIOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QQVlNRU5UX0VYUElSRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0RPV05MT0FEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9TVUJTQ1JJUFRJT05fVVBEQVRFX05PVF9BVkFJTEFCTEU6IG51bWJlcjtcblxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBSRUdJU1RFUkVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOVkFMSUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVkFMSUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUkVRVUVTVEVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOSVRJQVRFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBUFBST1ZFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGSU5JU0hFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBPV05FRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBET1dOTE9BRElORzogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBET1dOTE9BREVEOiBzdHJpbmc7XG5cblxuICAvKiB2YWxpZGF0aW9uIGVycm9yIGNvZGVzICovXG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOVkFMSURfUEFZTE9BRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBDT05ORUNUSU9OX0ZBSUxFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQVVJDSEFTRV9FWFBJUkVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBVUkNIQVNFX0NPTlNVTUVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOVEVSTkFMX0VSUk9SOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE5FRURfTU9SRV9EQVRBOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHByb2R1Y3RzOiBJQVBQcm9kdWN0cztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdmFsaWRhdG9yOiBzdHJpbmcgfCAoKHVybDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB2b2lkKTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbG9nOiB7XG4gICAgZXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgd2FybjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgICBpbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGRlYnVnOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBpZCBvciBhbGlhc1xuICAgKiBAcGFyYW0gaWRPckFsaWFzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0KGlkT3JBbGlhczogc3RyaW5nKTogSUFQUHJvZHVjdCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGVycm9yIGhhbmRsZXJcbiAgICogQHBhcmFtIG9uRXJyb3Ige0Z1bmN0aW9ufSBmdW5jdGlvbiB0byBjYWxsIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZXJyb3Iob25FcnJvcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgcmVnaXN0ZXIgYSBwcm9kdWN0XG4gICAqIEBwYXJhbSBwcm9kdWN0IHtJQVBQcm9kdWN0T3B0aW9uc31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWdpc3Rlcihwcm9kdWN0OiBJQVBQcm9kdWN0T3B0aW9ucyB8IElBUFByb2R1Y3RPcHRpb25zW10pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgd2hlbihxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGljYWwgdG8gYHdoZW5gLCBidXQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZS4gQWZ0ZXIgYmVpbmcgY2FsbGVkLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSB1bnJlZ2lzdGVyZWQuXG4gICAqIEBwYXJhbSBxdWVyeSB7c3RyaW5nIHwgSUFQUHJvZHVjdH1cbiAgICogQHBhcmFtIFtldmVudF0ge2V2ZW50fVxuICAgKiBAcGFyYW0gW2NhbGxiYWNrXSB7SUFQUXVlcnlDYWxsYmFja31cbiAgICogQHJldHVybiB7SUFQUHJvZHVjdEV2ZW50c31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvbmNlKHF1ZXJ5OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBldmVudD86IHN0cmluZywgY2FsbGJhY2s/OiBJQVBRdWVyeUNhbGxiYWNrKTogSUFQUHJvZHVjdEV2ZW50cyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgYSBjYWxsYmFjay4gV29ya3MgZm9yIGNhbGxiYWNrcyByZWdpc3RlcmVkIHdpdGggcmVhZHksIHdoZW4sIG9uY2UgYW5kIGVycm9yLlxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgcHVyY2hhc2Ugb2YgYSBwcm9kdWN0LlxuICAgKlxuICAgKiBUaGUgYHByb2R1Y3RgIGFyZ3VtZW50IGNhbiBiZSBlaXRoZXI6XG4gICAqXG4gICAqICAtIHRoZSBgSUFQUHJvZHVjdGAgb2JqZWN0XG4gICAqICAtIHRoZSBwcm9kdWN0IGBpZGBcbiAgICogIC0gdGhlIHByb2R1Y3QgYGFsaWFzYFxuICAgKlxuICAgKiBUaGUgYGFkZGl0aW9uYWxEYXRhYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBvYmplY3Qgd2l0aCBhdHRyaWJ1dGVzOlxuICAgKiAgLSBgb2xkUHVyY2hhc2VkU2t1c2A6IGEgc3RyaW5nIGFycmF5IHdpdGggdGhlIG9sZCBzdWJzY3JpcHRpb24gdG8gdXBncmFkZS9kb3duZ3JhZGUgb24gQW5kcm9pZC4gU2VlOiBbYW5kcm9pZCBkZXZlbG9wZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19yZWZlcmVuY2UuaHRtbCN1cGdyYWRlLWdldEJ1eUludGVudFRvUmVwbGFjZVNrdXMpIGZvciBtb3JlIGluZm9cbiAgICogIC0gYGRldmVsb3BlclBheWxvYWRgOiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZXZlbG9wZXIgcGF5bG9hZCBhcyBkZXNjcmliZWQgaW4gW2JpbGxpbmcgYmVzdCBwcmFjdGljZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19iZXN0X3ByYWN0aWNlcy5odG1sKVxuICAgKiAgLSBgYXBwbGljYXRpb25Vc2VybmFtZWA6IHRoZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIFNlZSB0aGUgXCJQdXJjaGFzaW5nIHNlY3Rpb25cIiB0byBsZWFybiBtb3JlIGFib3V0IHRoZSBwdXJjaGFzZSBwcm9jZXNzLlxuICAgKlxuICAgKiAqKnJldHVybiB2YWx1ZSoqXG4gICAqXG4gICAqIGBzdG9yZS5vcmRlcigpYCByZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcbiAgICpcbiAgICogIC0gYHRoZW5gIC0gY2FsbGVkIHdoZW4gdGhlIG9yZGVyIHdhcyBzdWNjZXNzZnVsbHkgaW5pdGlhdGVkLlxuICAgKiAgLSBgZXJyb3JgIC0gY2FsbGVkIGlmIHRoZSBvcmRlciBjb3VsZG4ndCBiZSBpbml0aWF0ZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb3JkZXIocHJvZHVjdDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgYWRkaXRpb25hbERhdGE/OiBhbnkpOiB7IHRoZW46IEZ1bmN0aW9uOyBlcnJvcjogRnVuY3Rpb247IH0ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVhZHkoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7IHJldHVybjsgfVxuICAvKipcbiAgICogQWZ0ZXIgeW91J3JlIGRvbmUgcmVnaXN0ZXJpbmcgeW91ciBzdG9yZSdzIHByb2R1Y3QgYW5kIGV2ZW50cyBoYW5kbGVycyxcbiAgICogdGltZSB0byBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgaW5pdGlhdGUgYWxsIHRoZSBjb21wbGV4IGJlaGluZC10aGUtc2NlbmUgd29yaywgdG8gbG9hZCBwcm9kdWN0XG4gICAqIGRhdGEgZnJvbSB0aGUgc2VydmVycyBhbmQgcmVzdG9yZSB3aGF0ZXZlciBhbHJlYWR5IGhhdmUgYmVlblxuICAgKiBwdXJjaGFzZWQgYnkgdGhlIHVzZXIuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYWdhaW4gbGF0ZXIgZHVyaW5nIHRoZSBhcHBsaWNhdGlvblxuICAgKiBleGVjdXRpb24gdG8gcmUtdHJpZ2dlciBhbGwgdGhhdCBoYXJkLXdvcmsuIEl0J3Mga2luZCBvZiBleHBlbnNpdmUgaW4gdGVybSBvZlxuICAgKiBwcm9jZXNzaW5nLCBzbyB5b3UnZCBiZXR0ZXIgY29uc2lkZXIgaXQgdHdpY2UuXG4gICAqXG4gICAqIE9uZSBnb29kIHdheSBvZiBkb2luZyBpdCBpcyB0byBhZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIGluIHlvdXJcbiAgICogYXBwbGljYXRpb25zIHNldHRpbmdzLiBUaGlzIHdheSwgaWYgZGVsaXZlcnkgb2YgYSBwdXJjaGFzZSBmYWlsZWQgb3JcbiAgICogaWYgYSB1c2VyIHdhbnRzIHRvIHJlc3RvcmUgcHVyY2hhc2VzIGhlIG1hZGUgZnJvbSBhbm90aGVyIGRldmljZSwgaGUnbGxcbiAgICogaGF2ZSBhIHdheSB0byBkbyBqdXN0IHRoYXQuXG4gICAqXG4gICAqICoqZXhhbXBsZSB1c2FnZSoqXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogICAgLy8gLi4uXG4gICAqICAgIC8vIHJlZ2lzdGVyIHByb2R1Y3RzIGFuZCBldmVudHMgaGFuZGxlcnMgaGVyZVxuICAgKiAgICAvLyAuLi5cbiAgICogICAgLy9cbiAgICogICAgLy8gdGhlbiBhbmQgb25seSB0aGVuLCBjYWxsIHJlZnJlc2guXG4gICAqICAgIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogKipyZXN0b3JlIHB1cmNoYXNlcyoqXG4gICAqXG4gICAqIEFkZCBhIFwiUmVmcmVzaCBQdXJjaGFzZXNcIiBidXR0b24gdG8gY2FsbCB0aGUgYHN0b3JlLnJlZnJlc2goKWAgbWV0aG9kLCBsaWtlOlxuICAgKlxuICAgKiBgPGJ1dHRvbiBvbmNsaWNrPVwiPHBzZXVkb19jb2RlPnRoaXMuc3RvcmUucmVmcmVzaCgpPC9wc2V1ZG9fY29kZT5cIj5SZXN0b3JlIFB1cmNoYXNlczwvYnV0dG9uPmBcbiAgICpcbiAgICogVG8gbWFrZSB0aGUgcmVzdG9yZSBwdXJjaGFzZXMgd29yayBhcyBleHBlY3RlZCwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0XG4gICAqIHRoZSBcImFwcHJvdmVkXCIgZXZlbnQgbGlzdGVuZXIgaGFkIGJlIHJlZ2lzdGVyZWQgcHJvcGVybHksXG4gICAqIGFuZCBpbiB0aGUgY2FsbGJhY2sgYHByb2R1Y3QuZmluaXNoKClgIHNob3VsZCBiZSBjYWxsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKiBPcGVucyB0aGUgTWFuYWdlIFN1YnNjcmlwdGlvbiBwYWdlIChBcHBTdG9yZSwgUGxheSwgTWljcm9zb2Z0LCAuLi4pLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWFuYWdlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHt9XG5cbn1cbiJdfQ==
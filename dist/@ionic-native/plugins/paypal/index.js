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
var PayPalOriginal = /** @class */ (function (_super) {
    __extends(PayPalOriginal, _super);
    function PayPalOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPalOriginal.prototype.version = function () { return cordova(this, "version", {}, arguments); };
    PayPalOriginal.prototype.init = function (clientIdsForEnvironments) { return cordova(this, "init", {}, arguments); };
    PayPalOriginal.prototype.prepareToRender = function (environment, configuration) { return cordova(this, "prepareToRender", {}, arguments); };
    PayPalOriginal.prototype.renderSinglePaymentUI = function (payment) { return cordova(this, "renderSinglePaymentUI", {}, arguments); };
    PayPalOriginal.prototype.clientMetadataID = function () { return cordova(this, "clientMetadataID", {}, arguments); };
    PayPalOriginal.prototype.renderFuturePaymentUI = function () { return cordova(this, "renderFuturePaymentUI", {}, arguments); };
    PayPalOriginal.prototype.renderProfileSharingUI = function (scopes) { return cordova(this, "renderProfileSharingUI", {}, arguments); };
    PayPalOriginal.pluginName = "PayPal";
    PayPalOriginal.plugin = "com.paypal.cordova.mobilesdk";
    PayPalOriginal.pluginRef = "PayPalMobile";
    PayPalOriginal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
    PayPalOriginal.platforms = ["Android", "iOS"];
    return PayPalOriginal;
}(IonicNativePlugin));
var PayPal = new PayPalOriginal();
export { PayPal };
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());
export { PayPalPayment };
var PayPalItem = /** @class */ (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());
export { PayPalItem };
var PayPalPaymentDetails = /** @class */ (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());
export { PayPalPaymentDetails };
var PayPalConfiguration = /** @class */ (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());
export { PayPalConfiguration };
var PayPalShippingAddress = /** @class */ (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());
export { PayPalShippingAddress };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXBhbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5RTVDLDBCQUFpQjs7OztJQU0zQyx3QkFBTztJQWNQLHFCQUFJLGFBQUMsd0JBQTJDO0lBY2hELGdDQUFlLGFBQ2IsV0FBbUIsRUFDbkIsYUFBa0M7SUFjcEMsc0NBQXFCLGFBQUMsT0FBc0I7SUFlNUMsaUNBQWdCO0lBU2hCLHNDQUFxQjtJQVlyQix1Q0FBc0IsYUFBQyxNQUFnQjs7Ozs7O2lCQWhLekM7RUEwRTRCLGlCQUFpQjtTQUFoQyxNQUFNOztJQW9HakIsdUJBQ0UsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLGdCQUF3QixFQUN4QixNQUFjLEVBQ2QsT0FBOEI7UUF5QmhDOzs7V0FHRztRQUNILFdBQU0sR0FBRyxhQUFhLENBQUM7UUEzQnJCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO3dCQTFMSDs7OztJQXFQRTs7Ozs7Ozs7O09BU0c7SUFDSCxvQkFDRSxJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLEdBQVk7UUFFWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO3FCQTNRSDs7OztJQW1URTs7Ozs7T0FLRztJQUNILDhCQUFZLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxHQUFXO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7K0JBN1RIOzs7O0lBNGFFOzs7T0FHRztJQUNILDZCQUFZLE9BQW9DO1FBQzlDLElBQU0sUUFBUSxHQUErQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDJCQUEyQixFQUFFLElBQUk7WUFDakMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLHdCQUF3QixFQUFFLElBQUk7WUFDOUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QiwyQkFBMkIsRUFBRSxDQUFDO1lBQzlCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsNEJBQTRCLEVBQUUsS0FBSztZQUNuQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBRUYsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzFDLEtBQUssSUFBTSxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUN2QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OEJBNWNIOzs7O0lBbWRFOzs7Ozs7Ozs7T0FTRztJQUNILCtCQUNFLGFBQXFCLEVBQ3JCLEtBQWEsRUFDYixLQUFhLEVBQ2IsSUFBWSxFQUNaLEtBQWEsRUFDYixVQUFrQixFQUNsQixXQUFtQjtRQUVuQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO2dDQTdlSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFBheVBhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXlQYWwgcGx1Z2luIGZvciBDb3Jkb3ZhL0lvbmljIEFwcGxpY2F0aW9uc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGF5UGFsLCBQYXlQYWxQYXltZW50LCBQYXlQYWxDb25maWd1cmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wYXlwYWwvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBheVBhbDogUGF5UGFsKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5wYXlQYWwuaW5pdCh7XG4gKiAgIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvbjogJ1lPVVJfUFJPRFVDVElPTl9DTElFTlRfSUQnLFxuICogICBQYXlQYWxFbnZpcm9ubWVudFNhbmRib3g6ICdZT1VSX1NBTkRCT1hfQ0xJRU5UX0lEJ1xuICogfSkudGhlbigoKSA9PiB7XG4gKiAgIC8vIEVudmlyb25tZW50czogUGF5UGFsRW52aXJvbm1lbnROb05ldHdvcmssIFBheVBhbEVudmlyb25tZW50U2FuZGJveCwgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uXG4gKiAgIHRoaXMucGF5UGFsLnByZXBhcmVUb1JlbmRlcignUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94JywgbmV3IFBheVBhbENvbmZpZ3VyYXRpb24oe1xuICogICAgIC8vIE9ubHkgbmVlZGVkIGlmIHlvdSBnZXQgYW4gXCJJbnRlcm5hbCBTZXJ2aWNlIEVycm9yXCIgYWZ0ZXIgUGF5UGFsIGxvZ2luIVxuICogICAgIC8vcGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uOiAyIC8vIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvblBheVBhbFxuICogICB9KSkudGhlbigoKSA9PiB7XG4gKiAgICAgbGV0IHBheW1lbnQgPSBuZXcgUGF5UGFsUGF5bWVudCgnMy4zMycsICdVU0QnLCAnRGVzY3JpcHRpb24nLCAnc2FsZScpO1xuICogICAgIHRoaXMucGF5UGFsLnJlbmRlclNpbmdsZVBheW1lbnRVSShwYXltZW50KS50aGVuKCgpID0+IHtcbiAqICAgICAgIC8vIFN1Y2Nlc3NmdWxseSBwYWlkXG4gKlxuICogICAgICAgLy8gRXhhbXBsZSBzYW5kYm94IHJlc3BvbnNlXG4gKiAgICAgICAvL1xuICogICAgICAgLy8ge1xuICogICAgICAgLy8gICBcImNsaWVudFwiOiB7XG4gKiAgICAgICAvLyAgICAgXCJlbnZpcm9ubWVudFwiOiBcInNhbmRib3hcIixcbiAqICAgICAgIC8vICAgICBcInByb2R1Y3RfbmFtZVwiOiBcIlBheVBhbCBpT1MgU0RLXCIsXG4gKiAgICAgICAvLyAgICAgXCJwYXlwYWxfc2RrX3ZlcnNpb25cIjogXCIyLjE2LjBcIixcbiAqICAgICAgIC8vICAgICBcInBsYXRmb3JtXCI6IFwiaU9TXCJcbiAqICAgICAgIC8vICAgfSxcbiAqICAgICAgIC8vICAgXCJyZXNwb25zZV90eXBlXCI6IFwicGF5bWVudFwiLFxuICogICAgICAgLy8gICBcInJlc3BvbnNlXCI6IHtcbiAqICAgICAgIC8vICAgICBcImlkXCI6IFwiUEFZLTFBQjIzNDU2Q0Q3ODkwMTJFRjM0R0hJSlwiLFxuICogICAgICAgLy8gICAgIFwic3RhdGVcIjogXCJhcHByb3ZlZFwiLFxuICogICAgICAgLy8gICAgIFwiY3JlYXRlX3RpbWVcIjogXCIyMDE2LTEwLTAzVDEzOjMzOjMzWlwiLFxuICogICAgICAgLy8gICAgIFwiaW50ZW50XCI6IFwic2FsZVwiXG4gKiAgICAgICAvLyAgIH1cbiAqICAgICAgIC8vIH1cbiAqICAgICB9LCAoKSA9PiB7XG4gKiAgICAgICAvLyBFcnJvciBvciByZW5kZXIgZGlhbG9nIGNsb3NlZCB3aXRob3V0IGJlaW5nIHN1Y2Nlc3NmdWxcbiAqICAgICB9KTtcbiAqICAgfSwgKCkgPT4ge1xuICogICAgIC8vIEVycm9yIGluIGNvbmZpZ3VyYXRpb25cbiAqICAgfSk7XG4gKiB9LCAoKSA9PiB7XG4gKiAgIC8vIEVycm9yIGluIGluaXRpYWxpemF0aW9uLCBtYXliZSBQYXlQYWwgaXNuJ3Qgc3VwcG9ydGVkIG9yIHNvbWV0aGluZyBlbHNlXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFBheVBhbEVudmlyb25tZW50XG4gKiBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9uc1xuICogQGNsYXNzZXNcbiAqIFBheVBhbFBheW1lbnRcbiAqIFBheVBhbEl0ZW1cbiAqIFBheVBhbFBheW1lbnREZXRhaWxzXG4gKiBQYXlQYWxTaGlwcGluZ0FkZHJlc3NcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQYXlQYWwnLFxuICBwbHVnaW46ICdjb20ucGF5cGFsLmNvcmRvdmEubW9iaWxlc2RrJyxcbiAgcGx1Z2luUmVmOiAnUGF5UGFsTW9iaWxlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF5UGFsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0cmlldmUgdGhlIHZlcnNpb24gb2YgdGhlIFBheVBhbCBpT1MgU0RLIGxpYnJhcnkuIFVzZWZ1bCB3aGVuIGNvbnRhY3Rpbmcgc3VwcG9ydC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgbXVzdCBwcmVjb25uZWN0IHRvIFBheVBhbCB0byBwcmVwYXJlIHRoZSBkZXZpY2UgZm9yIHByb2Nlc3NpbmcgcGF5bWVudHMuXG4gICAqIFRoaXMgaW1wcm92ZXMgdGhlIHVzZXIgZXhwZXJpZW5jZSwgYnkgbWFraW5nIHRoZSBwcmVzZW50YXRpb24gb2YgdGhlXG4gICAqIFVJIGZhc3Rlci4gVGhlIHByZWNvbm5lY3QgaXMgdmFsaWQgZm9yIGEgbGltaXRlZCB0aW1lLCBzb1xuICAgKiB0aGUgcmVjb21tZW5kZWQgdGltZSB0byBwcmVjb25uZWN0IGlzIG9uIHBhZ2UgbG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtQYXlQYWxFbnZpcm9ubWVudH0gY2xpZW50SWRzRm9yRW52aXJvbm1lbnRzOiBzZXQgb2YgY2xpZW50IGlkcyBmb3IgZW52aXJvbm1lbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXQoY2xpZW50SWRzRm9yRW52aXJvbm1lbnRzOiBQYXlQYWxFbnZpcm9ubWVudCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBtdXN0IHByZWNvbm5lY3QgdG8gUGF5UGFsIHRvIHByZXBhcmUgdGhlIGRldmljZSBmb3IgcHJvY2Vzc2luZyBwYXltZW50cy5cbiAgICogVGhpcyBpbXByb3ZlcyB0aGUgdXNlciBleHBlcmllbmNlLCBieSBtYWtpbmcgdGhlIHByZXNlbnRhdGlvbiBvZiB0aGUgVUkgZmFzdGVyLlxuICAgKiBUaGUgcHJlY29ubmVjdCBpcyB2YWxpZCBmb3IgYSBsaW1pdGVkIHRpbWUsIHNvIHRoZSByZWNvbW1lbmRlZCB0aW1lIHRvIHByZWNvbm5lY3QgaXMgb24gcGFnZSBsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW52aXJvbm1lbnQ6IGF2YWlsYWJsZSBvcHRpb25zIGFyZSBcIlBheVBhbEVudmlyb25tZW50Tm9OZXR3b3JrXCIsIFwiUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uXCIgYW5kIFwiUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94XCJcbiAgICogQHBhcmFtIHtQYXlQYWxDb25maWd1cmF0aW9ufSBjb25maWd1cmF0aW9uOiBQYXlQYWxDb25maWd1cmF0aW9uIG9iamVjdCwgZm9yIEZ1dHVyZSBQYXltZW50cyBtZXJjaGFudE5hbWUsIG1lcmNoYW50UHJpdmFjeVBvbGljeVVSTCBhbmQgbWVyY2hhbnRVc2VyQWdyZWVtZW50VVJMIG11c3QgYmUgc2V0IGJlIHNldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVwYXJlVG9SZW5kZXIoXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZyxcbiAgICBjb25maWd1cmF0aW9uOiBQYXlQYWxDb25maWd1cmF0aW9uXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IFBheVBhbCBVSSB0byBjb2xsZWN0IHBheW1lbnQgZnJvbSB0aGUgdXNlci5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vd2ViYXBwcy9kZXZlbG9wZXIvZG9jcy9pbnRlZ3JhdGlvbi9tb2JpbGUvaW9zLWludGVncmF0aW9uLWd1aWRlL1xuICAgKiBmb3IgbW9yZSBkb2N1bWVudGF0aW9uIG9mIHRoZSBwYXJhbXMuXG4gICAqXG4gICAqIEBwYXJhbSB7UGF5UGFsUGF5bWVudH0gcGF5bWVudCBQYXlQYWxQYXltZW50IG9iamVjdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW5kZXJTaW5nbGVQYXltZW50VUkocGF5bWVudDogUGF5UGFsUGF5bWVudCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uY2UgYSB1c2VyIGhhcyBjb25zZW50ZWQgdG8gZnV0dXJlIHBheW1lbnRzLCB3aGVuIHRoZSB1c2VyIHN1YnNlcXVlbnRseSBpbml0aWF0ZXMgYSBQYXlQYWwgcGF5bWVudFxuICAgKiBmcm9tIHRoZWlyIGRldmljZSB0byBiZSBjb21wbGV0ZWQgYnkgeW91ciBzZXJ2ZXIsIFBheVBhbCB1c2VzIGEgQ29ycmVsYXRpb24gSUQgdG8gdmVyaWZ5IHRoYXQgdGhlXG4gICAqIHBheW1lbnQgaXMgb3JpZ2luYXRpbmcgZnJvbSBhIHZhbGlkLCB1c2VyLWNvbnNlbnRlZCBkZXZpY2UrYXBwbGljYXRpb24uXG4gICAqIFRoaXMgaGVscHMgcmVkdWNlIGZyYXVkIGFuZCBkZWNyZWFzZSBkZWNsaW5lcy5cbiAgICogVGhpcyBtZXRob2QgTVVTVCBiZSBjYWxsZWQgcHJpb3IgdG8gaW5pdGlhdGluZyBhIHByZS1jb25zZW50ZWQgcGF5bWVudCAoYSBcImZ1dHVyZSBwYXltZW50XCIpIGZyb20gYSBtb2JpbGUgZGV2aWNlLlxuICAgKiBQYXNzIHRoZSByZXN1bHQgdG8geW91ciBzZXJ2ZXIsIHRvIGluY2x1ZGUgaW4gdGhlIHBheW1lbnQgcmVxdWVzdCBzZW50IHRvIFBheVBhbC5cbiAgICogRG8gbm90IG90aGVyd2lzZSBjYWNoZSBvciBzdG9yZSB0aGlzIHZhbHVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGllbnRNZXRhZGF0YUlEKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsZWFzZSBSZWFkIERvY3Mgb24gRnV0dXJlIFBheW1lbnRzIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLWlPUy1TREsjZnV0dXJlLXBheW1lbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbmRlckZ1dHVyZVBheW1lbnRVSSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGVhc2UgUmVhZCBEb2NzIG9uIFByb2ZpbGUgU2hhcmluZyBhdCBodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL1BheVBhbC1pT1MtU0RLI3Byb2ZpbGUtc2hhcmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzY29wZXMgc2NvcGVzIFNldCBvZiByZXF1ZXN0ZWQgc2NvcGUtdmFsdWVzLiBBY2NlcHRlZCBzY29wZXMgYXJlOiBvcGVuaWQsIHByb2ZpbGUsIGFkZHJlc3MsIGVtYWlsLCBwaG9uZSwgZnV0dXJlcGF5bWVudHMgYW5kIHBheXBhbGF0dHJpYnV0ZXNcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9pbnRlZ3JhdGlvbi9kaXJlY3QvaWRlbnRpdHkvYXR0cmlidXRlcy8gZm9yIG1vcmUgZGV0YWlsc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW5kZXJQcm9maWxlU2hhcmluZ1VJKHNjb3Blczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBheVBhbEVudmlyb25tZW50IHtcbiAgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uOiBzdHJpbmc7XG4gIFBheVBhbEVudmlyb25tZW50U2FuZGJveDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBheVBhbFBheW1lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhbW91bnQ6IHN0cmluZyxcbiAgICBjdXJyZW5jeTogc3RyaW5nLFxuICAgIHNob3J0RGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBpbnRlbnQ6IHN0cmluZyxcbiAgICBkZXRhaWxzPzogUGF5UGFsUGF5bWVudERldGFpbHNcbiAgKSB7XG4gICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuc2hvcnREZXNjcmlwdGlvbiA9IHNob3J0RGVzY3JpcHRpb247XG4gICAgdGhpcy5pbnRlbnQgPSBpbnRlbnQ7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIHRoZSBwYXltZW50LlxuICAgKi9cbiAgYW1vdW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgSVNPIDQyMTcgY3VycmVuY3kgZm9yIHRoZSBwYXltZW50LlxuICAgKi9cbiAgY3VycmVuY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHBheW1lbnQuXG4gICAqL1xuICBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBcIlNhbGVcIiBmb3IgYW4gaW1tZWRpYXRlIHBheW1lbnQuXG4gICAqL1xuICBpbnRlbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIEJ1aWxkIE5vdGF0aW9uIGNvZGUgKFwiQk4gY29kZVwiKSwgb2J0YWluZWQgZnJvbSBwYXJ0bmVycHJvZ3JhbUBwYXlwYWwuY29tLFxuICAgKiBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy5cbiAgICovXG4gIGJuQ29kZSA9ICdQaG9uZUdhcF9TUCc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbnZvaWNlIG51bWJlciwgZm9yIHlvdXIgdHJhY2tpbmcgcHVycG9zZXMuICh1cCB0byAyNTYgY2hhcmFjdGVycylcbiAgICovXG4gIGludm9pY2VOdW1iZXI6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHRleHQsIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLiAodXAgdG8gMjU2IGNoYXJhY3RlcnMpXG4gICAqL1xuICBjdXN0b206IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHRleHQgd2hpY2ggd2lsbCBhcHBlYXIgb24gdGhlIGN1c3RvbWVyJ3MgY3JlZGl0IGNhcmQgc3RhdGVtZW50LiAodXAgdG8gMjIgY2hhcmFjdGVycylcbiAgICovXG4gIHNvZnREZXNjcmlwdG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBhcnJheSBvZiBQYXlQYWxJdGVtIG9iamVjdHMuXG4gICAqL1xuICBpdGVtczogUGF5UGFsSXRlbVtdO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBwYXllZSBlbWFpbCwgaWYgeW91ciBhcHAgaXMgcGF5aW5nIGEgdGhpcmQtcGFydHkgbWVyY2hhbnQuXG4gICAqIFRoZSBwYXllZSdzIGVtYWlsLiBJdCBtdXN0IGJlIGEgdmFsaWQgUGF5UGFsIGVtYWlsIGFkZHJlc3MuXG4gICAqL1xuICBwYXllZUVtYWlsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBjdXN0b21lciBzaGlwcGluZyBhZGRyZXNzLCBpZiB5b3VyIGFwcCB3aXNoZXMgdG8gcHJvdmlkZSB0aGlzIHRvIHRoZSBTREsuXG4gICAqL1xuICBzaGlwcGluZ0FkZHJlc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIFBheVBhbFBheW1lbnREZXRhaWxzIG9iamVjdFxuICAgKi9cbiAgZGV0YWlsczogUGF5UGFsUGF5bWVudERldGFpbHM7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsSXRlbSB7XG4gIC8qKlxuICAgKiBUaGUgUGF5UGFsSXRlbSBjbGFzcyBkZWZpbmVzIGFuIG9wdGlvbmFsIGl0ZW1pemF0aW9uIGZvciBhIHBheW1lbnQuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2FwaS8jaXRlbS1vYmplY3QgZm9yIG1vcmUgZGV0YWlscy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWU6IE5hbWUgb2YgdGhlIGl0ZW0uIDEyNyBjaGFyYWN0ZXJzIG1heFxuICAgKiBAcGFyYW0ge051bWJlcn0gcXVhbnRpdHk6IE51bWJlciBvZiB1bml0cy4gMTAgY2hhcmFjdGVycyBtYXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcmljZTogVW5pdCBwcmljZSBmb3IgdGhpcyBpdGVtIDEwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBNYXkgYmUgbmVnYXRpdmUgZm9yIFwiY291cG9uXCIgZXRjXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW5jeTogSVNPIHN0YW5kYXJkIGN1cnJlbmN5IGNvZGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBza3U6IFRoZSBzdG9jayBrZWVwaW5nIHVuaXQgZm9yIHRoaXMgaXRlbS4gNTAgY2hhcmFjdGVycyBtYXggKG9wdGlvbmFsKVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXIsXG4gICAgcHJpY2U6IHN0cmluZyxcbiAgICBjdXJyZW5jeTogc3RyaW5nLFxuICAgIHNrdT86IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuc2t1ID0gc2t1O1xuICB9XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpdGVtLiAxMjcgY2hhcmFjdGVycyBtYXhcbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE51bWJlciBvZiB1bml0cy4gMTAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBxdWFudGl0eTogbnVtYmVyO1xuICAvKipcbiAgICogVW5pdCBwcmljZSBmb3IgdGhpcyBpdGVtIDEwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgcHJpY2U6IHN0cmluZztcbiAgLyoqXG4gICAqIElTTyBzdGFuZGFyZCBjdXJyZW5jeSBjb2RlLlxuICAgKi9cbiAgY3VycmVuY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdG9jayBrZWVwaW5nIHVuaXQgZm9yIHRoaXMgaXRlbS4gNTAgY2hhcmFjdGVycyBtYXggKG9wdGlvbmFsKVxuICAgKi9cbiAgc2t1Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBheVBhbFBheW1lbnREZXRhaWxzIHtcbiAgLyoqXG4gICAqIFN1Yi10b3RhbCAoYW1vdW50KSBvZiBpdGVtcyBiZWluZyBwYWlkIGZvci4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKi9cbiAgc3VidG90YWw6IHN0cmluZztcbiAgLyoqXG4gICAqIEFtb3VudCBjaGFyZ2VkIGZvciBzaGlwcGluZy4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKi9cbiAgc2hpcHBpbmc6IHN0cmluZztcbiAgLyoqXG4gICAqIEFtb3VudCBjaGFyZ2VkIGZvciB0YXguIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICovXG4gIHRheDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgUGF5UGFsUGF5bWVudERldGFpbHMgY2xhc3MgZGVmaW5lcyBvcHRpb25hbCBhbW91bnQgZGV0YWlscy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN1YnRvdGFsOiBTdWItdG90YWwgKGFtb3VudCkgb2YgaXRlbXMgYmVpbmcgcGFpZCBmb3IuIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNoaXBwaW5nOiBBbW91bnQgY2hhcmdlZCBmb3Igc2hpcHBpbmcuIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHRheDogQW1vdW50IGNoYXJnZWQgZm9yIHRheC4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3VidG90YWw6IHN0cmluZywgc2hpcHBpbmc6IHN0cmluZywgdGF4OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1YnRvdGFsID0gc3VidG90YWw7XG4gICAgdGhpcy5zaGlwcGluZyA9IHNoaXBwaW5nO1xuICAgIHRoaXMudGF4ID0gdGF4O1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBlbWFpbCB1c2VkIGluIG1vc3QgcmVjZW50IFBheVBhbCBsb2dpbi5cbiAgICovXG4gIGRlZmF1bHRVc2VyRW1haWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaWxsIGJlIG92ZXJyaWRkZW4gYnkgcGhvbmUgY291bnRyeSBjb2RlIHVzZWQgaW4gbW9zdCByZWNlbnQgUGF5UGFsIGxvZ2luXG4gICAqL1xuICBkZWZhdWx0VXNlclBob25lQ291bnRyeUNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaWxsIGJlIG92ZXJyaWRkZW4gYnkgcGhvbmUgbnVtYmVyIHVzZWQgaW4gbW9zdCByZWNlbnQgUGF5UGFsIGxvZ2luLlxuICAgKi9cbiAgZGVmYXVsdFVzZXJQaG9uZU51bWJlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFlvdXIgY29tcGFueSBuYW1lLCBhcyBpdCBzaG91bGQgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIHdoZW4gcmVxdWVzdGluZyBjb25zZW50IHZpYSBhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlci5cbiAgICovXG4gIG1lcmNoYW50TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFVSTCBvZiB5b3VyIGNvbXBhbnkncyBwcml2YWN5IHBvbGljeSwgd2hpY2ggd2lsbCBiZSBvZmZlcmVkIHRvIHRoZSB1c2VyIHdoZW4gcmVxdWVzdGluZyBjb25zZW50IHZpYSBhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlci5cbiAgICovXG4gIG1lcmNoYW50UHJpdmFjeVBvbGljeVVSTD86IHN0cmluZztcbiAgLyoqXG4gICAqIFVSTCBvZiB5b3VyIGNvbXBhbnkncyB1c2VyIGFncmVlbWVudCwgd2hpY2ggd2lsbCBiZSBvZmZlcmVkIHRvIHRoZSB1c2VyIHdoZW4gcmVxdWVzdGluZyBjb25zZW50IHZpYSBhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlci5cbiAgICovXG4gIG1lcmNoYW50VXNlckFncmVlbWVudFVSTD86IHN0cmluZztcbiAgLyoqXG4gICAqIElmIHNldCB0byBOTywgdGhlIFNESyB3aWxsIG9ubHkgc3VwcG9ydCBwYXlpbmcgd2l0aCBQYXlQYWwsIG5vdCB3aXRoIGNyZWRpdCBjYXJkcy5cbiAgICogVGhpcyBhcHBsaWVzIG9ubHkgdG8gc2luZ2xlIHBheW1lbnRzICh2aWEgUGF5UGFsUGF5bWVudFZpZXdDb250cm9sbGVyKS5cbiAgICogRnV0dXJlIHBheW1lbnRzICh2aWEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyKSBhbHdheXMgdXNlIFBheVBhbC5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgYWNjZXB0Q3JlZGl0Q2FyZHM/OiBib29sZWFuO1xuICAvKipcbiAgICogRm9yIHNpbmdsZSBwYXltZW50cywgb3B0aW9ucyBmb3IgdGhlIHNoaXBwaW5nIGFkZHJlc3MuXG4gICAqIC0gMCAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbk5vbmU6IG5vIHNoaXBwaW5nIGFkZHJlc3MgYXBwbGllcy5cbiAgICogLSAxIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uUHJvdmlkZWQ6IHNoaXBwaW5nIGFkZHJlc3Mgd2lsbCBiZSBwcm92aWRlZCBieSB5b3VyIGFwcCxcbiAgICogICBpbiB0aGUgc2hpcHBpbmdBZGRyZXNzIHByb3BlcnR5IG9mIFBheVBhbFBheW1lbnQuXG4gICAqIC0gMiAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvblBheVBhbDogdXNlciB3aWxsIGNob29zZSBmcm9tIHNoaXBwaW5nIGFkZHJlc3NlcyBvbiBmaWxlXG4gICAqICAgZm9yIHRoZWlyIFBheVBhbCBhY2NvdW50LlxuICAgKiAtIDMgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Cb3RoOiB1c2VyIHdpbGwgY2hvb3NlIGZyb20gdGhlIHNoaXBwaW5nIGFkZHJlc3MgcHJvdmlkZWQgYnkgeW91ciBhcHAsXG4gICAqICAgaW4gdGhlIHNoaXBwaW5nQWRkcmVzcyBwcm9wZXJ0eSBvZiBQYXlQYWxQYXltZW50LCBwbHVzIHRoZSBzaGlwcGluZyBhZGRyZXNzZXMgb24gZmlsZSBmb3IgdGhlIHVzZXIncyBQYXlQYWwgYWNjb3VudC5cbiAgICogRGVmYXVsdHMgdG8gMCAoUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uTm9uZSkuXG4gICAqL1xuICBwYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gWUVTLCB0aGVuIGlmIHRoZSB1c2VyIHBheXMgdmlhIHRoZWlyIFBheVBhbCBhY2NvdW50LFxuICAgKiB0aGUgU0RLIHdpbGwgcmVtZW1iZXIgdGhlIHVzZXIncyBQYXlQYWwgdXNlcm5hbWUgb3IgcGhvbmUgbnVtYmVyO1xuICAgKiBpZiB0aGUgdXNlciBwYXlzIHZpYSB0aGVpciBjcmVkaXQgY2FyZCwgdGhlbiB0aGUgU0RLIHdpbGwgcmVtZW1iZXJcbiAgICogdGhlIFBheVBhbCBWYXVsdCB0b2tlbiByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBjcmVkaXQgY2FyZC5cbiAgICpcbiAgICogSWYgc2V0IHRvIE5PLCB0aGVuIGFueSBwcmV2aW91c2x5LXJlbWVtYmVyZWQgdXNlcm5hbWUsIHBob25lIG51bWJlciwgb3JcbiAgICogY3JlZGl0IGNhcmQgdG9rZW4gd2lsbCBiZSBlcmFzZWQsIGFuZCBzdWJzZXF1ZW50IHBheW1lbnQgaW5mb3JtYXRpb24gd2lsbFxuICAgKiBub3QgYmUgcmVtZW1iZXJlZC5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gWUVTLlxuICAgKi9cbiAgcmVtZW1iZXJVc2VyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElmIG5vdCBzZXQsIG9yIGlmIHNldCB0byBuaWwsIGRlZmF1bHRzIHRvIHRoZSBkZXZpY2UncyBjdXJyZW50IGxhbmd1YWdlIHNldHRpbmcuXG4gICAqXG4gICAqIENhbiBiZSBzcGVjaWZpZWQgYXMgYSBsYW5ndWFnZSBjb2RlIChcImVuXCIsIFwiZnJcIiwgXCJ6aC1IYW5zXCIsIGV0Yy4pIG9yIGFzIGEgbG9jYWxlIChcImVuX0FVXCIsIFwiZnJfRlJcIiwgXCJ6aC1IYW50X0hLXCIsIGV0Yy4pLlxuICAgKiBJZiB0aGUgbGlicmFyeSBkb2VzIG5vdCBjb250YWluIGxvY2FsaXplZCBzdHJpbmdzIGZvciBhIHNwZWNpZmllZCBsb2NhbGUsIHRoZW4gd2lsbCBmYWxsIGJhY2sgdG8gdGhlIGxhbmd1YWdlLiBFLmcuLCBcImVzX0NPXCIgLT4gXCJlc1wiLlxuICAgKiBJZiB0aGUgbGlicmFyeSBkb2VzIG5vdCBjb250YWluIGxvY2FsaXplZCBzdHJpbmdzIGZvciBhIHNwZWNpZmllZCBsYW5ndWFnZSwgdGhlbiB3aWxsIGZhbGwgYmFjayB0byBBbWVyaWNhbiBFbmdsaXNoLlxuICAgKlxuICAgKiBJZiB5b3Ugc3BlY2lmeSBvbmx5IGEgbGFuZ3VhZ2UgY29kZSwgYW5kIHRoYXQgY29kZSBtYXRjaGVzIHRoZSBkZXZpY2UncyBjdXJyZW50bHkgcHJlZmVycmVkIGxhbmd1YWdlLFxuICAgKiB0aGVuIHRoZSBsaWJyYXJ5IHdpbGwgYXR0ZW1wdCB0byB1c2UgdGhlIGRldmljZSdzIGN1cnJlbnQgcmVnaW9uIGFzIHdlbGwuXG4gICAqIEUuZy4sIHNwZWNpZnlpbmcgXCJlblwiIG9uIGEgZGV2aWNlIHNldCB0byBcIkVuZ2xpc2hcIiBhbmQgXCJVbml0ZWQgS2luZ2RvbVwiIHdpbGwgcmVzdWx0IGluIFwiZW5fR0JcIi5cbiAgICovXG4gIGxhbmd1YWdlT3JMb2NhbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb3JtYWxseSwgdGhlIFNESyBibHVycyB0aGUgc2NyZWVuIHdoZW4gdGhlIGFwcCBpcyBiYWNrZ3JvdW5kZWQsXG4gICAqIHRvIG9ic2N1cmUgY3JlZGl0IGNhcmQgb3IgUGF5UGFsIGFjY291bnQgZGV0YWlscyBpbiB0aGUgaU9TLXNhdmVkIHNjcmVlbnNob3QuXG4gICAqIElmIHlvdXIgYXBwIGFscmVhZHkgZG9lcyBpdHMgb3duIGJsdXJyaW5nIHVwb24gYmFja2dyb3VuZGluZywgeW91IG1pZ2h0IGNob29zZSB0byBkaXNhYmxlIHRoaXMuXG4gICAqIERlZmF1bHRzIHRvIE5PLlxuICAgKi9cbiAgZGlzYWJsZUJsdXJXaGVuQmFja2dyb3VuZGluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiB5b3Ugd2lsbCBwcmVzZW50IHRoZSBTREsncyB2aWV3IGNvbnRyb2xsZXIgd2l0aGluIGEgcG9wb3ZlciwgdGhlbiBzZXQgdGhpcyBwcm9wZXJ0eSB0byBZRVMuXG4gICAqIERlZmF1bHRzIHRvIE5PLiAoaU9TIG9ubHkpXG4gICAqL1xuICBwcmVzZW50aW5nSW5Qb3BvdmVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNhbmRib3ggY3JlZGVudGlhbHMgY2FuIGJlIGRpZmZpY3VsdCB0byB0eXBlIG9uIGEgbW9iaWxlIGRldmljZS4gU2V0dGluZyB0aGlzIGZsYWcgdG8gWUVTIHdpbGxcbiAgICogY2F1c2UgdGhlIHNhbmRib3hVc2VyUGFzc3dvcmQgYW5kIHNhbmRib3hVc2VyUGluIHRvIGFsd2F5cyBiZSBwcmUtcG9wdWxhdGVkIGludG8gbG9naW4gZmllbGRzLlxuICAgKi9cbiAgZm9yY2VEZWZhdWx0c0luU2FuZGJveD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBQYXNzd29yZCB0byB1c2UgZm9yIHNhbmRib3ggaWYgJ2ZvcmNlRGVmYXVsdHNJblNhbmRib3gnIGlzIHNldC5cbiAgICovXG4gIHNhbmRib3hVc2VyUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQSU4gdG8gdXNlIGZvciBzYW5kYm94IGlmICdmb3JjZURlZmF1bHRzSW5TYW5kYm94JyBpcyBzZXQuXG4gICAqL1xuICBzYW5kYm94VXNlclBpbj86IHN0cmluZztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ3VyYXRpb24gaW1wbGVtZW50cyBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBZb3UgdXNlIGEgUGF5UGFsQ29uZmlndXJhdGlvbiBvYmplY3QgdG8gY29uZmlndXJlIG1hbnkgYXNwZWN0cyBvZiBob3cgdGhlIFNESyBiZWhhdmVzLlxuICAgKiBzZWUgZGVmYXVsdHMgZm9yIG9wdGlvbnMgYXZhaWxhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPzogUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0czogUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMgPSB7XG4gICAgICBkZWZhdWx0VXNlckVtYWlsOiBudWxsLFxuICAgICAgZGVmYXVsdFVzZXJQaG9uZUNvdW50cnlDb2RlOiBudWxsLFxuICAgICAgZGVmYXVsdFVzZXJQaG9uZU51bWJlcjogbnVsbCxcbiAgICAgIG1lcmNoYW50TmFtZTogbnVsbCxcbiAgICAgIG1lcmNoYW50UHJpdmFjeVBvbGljeVVSTDogbnVsbCxcbiAgICAgIG1lcmNoYW50VXNlckFncmVlbWVudFVSTDogbnVsbCxcbiAgICAgIGFjY2VwdENyZWRpdENhcmRzOiB0cnVlLFxuICAgICAgcGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uOiAwLFxuICAgICAgcmVtZW1iZXJVc2VyOiB0cnVlLFxuICAgICAgbGFuZ3VhZ2VPckxvY2FsZTogbnVsbCxcbiAgICAgIGRpc2FibGVCbHVyV2hlbkJhY2tncm91bmRpbmc6IGZhbHNlLFxuICAgICAgcHJlc2VudGluZ0luUG9wb3ZlcjogZmFsc2UsXG4gICAgICBmb3JjZURlZmF1bHRzSW5TYW5kYm94OiBmYWxzZSxcbiAgICAgIHNhbmRib3hVc2VyUGFzc3dvcmQ6IG51bGwsXG4gICAgICBzYW5kYm94VXNlclBpbjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGRlZmF1bHRzW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBheVBhbFNoaXBwaW5nQWRkcmVzcyB7XG4gIC8qKlxuICAgKiBTZWUgdGhlIGRvY3VtZW50YXRpb24gb2YgdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBmb3IgbW9yZSBkZXRhaWwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZWNpcGllbnROYW1lOiBOYW1lIG9mIHRoZSByZWNpcGllbnQgYXQgdGhpcyBhZGRyZXNzLiA1MCBjaGFyYWN0ZXJzIG1heC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmUxOiBMaW5lIDEgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIE51bWJlciwgc3RyZWV0LCBldGMpLiAxMDAgY2hhcmFjdGVycyBtYXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lMjogTGluZSAyIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBTdWl0ZSwgYXB0ICMsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC4gT3B0aW9uYWwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjaXR5OiBDaXR5IG5hbWUuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhdGU6IDItbGV0dGVyIGNvZGUgZm9yIFVTIHN0YXRlcywgYW5kIHRoZSBlcXVpdmFsZW50IGZvciBvdGhlciBjb3VudHJpZXMuIDEwMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwb3N0YWxDb2RlOiBaSVAgY29kZSBvciBlcXVpdmFsZW50IGlzIHVzdWFsbHkgcmVxdWlyZWQgZm9yIGNvdW50cmllcyB0aGF0IGhhdmUgdGhlbS4gMjAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY291bnRyeUNvZGU6IDItbGV0dGVyIGNvdW50cnkgY29kZS4gMiBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlY2lwaWVudE5hbWU6IHN0cmluZyxcbiAgICBsaW5lMTogc3RyaW5nLFxuICAgIGxpbmUyOiBzdHJpbmcsXG4gICAgY2l0eTogc3RyaW5nLFxuICAgIHN0YXRlOiBzdHJpbmcsXG4gICAgcG9zdGFsQ29kZTogc3RyaW5nLFxuICAgIGNvdW50cnlDb2RlOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5yZWNpcGllbnROYW1lID0gcmVjaXBpZW50TmFtZTtcbiAgICB0aGlzLmxpbmUxID0gbGluZTE7XG4gICAgdGhpcy5saW5lMiA9IGxpbmUyO1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMucG9zdGFsQ29kZSA9IHBvc3RhbENvZGU7XG4gICAgdGhpcy5jb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlO1xuICB9XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSByZWNpcGllbnQgYXQgdGhpcyBhZGRyZXNzLiA1MCBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIHJlY2lwaWVudE5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIExpbmUgMSBvZiB0aGUgYWRkcmVzcyAoZS5nLiwgTnVtYmVyLCBzdHJlZXQsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIGxpbmUxOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaW5lIDIgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIFN1aXRlLCBhcHQgIywgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LiBPcHRpb25hbC5cbiAgICovXG4gIGxpbmUyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDaXR5IG5hbWUuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgY2l0eTogc3RyaW5nO1xuICAvKipcbiAgICogMi1sZXR0ZXIgY29kZSBmb3IgVVMgc3RhdGVzLCBhbmQgdGhlIGVxdWl2YWxlbnQgZm9yIG90aGVyIGNvdW50cmllcy4gMTAwIGNoYXJhY3RlcnMgbWF4LiBSZXF1aXJlZCBpbiBjZXJ0YWluIGNvdW50cmllcy5cbiAgICovXG4gIHN0YXRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBaSVAgY29kZSBvciBlcXVpdmFsZW50IGlzIHVzdWFsbHkgcmVxdWlyZWQgZm9yIGNvdW50cmllcyB0aGF0IGhhdmUgdGhlbS4gMjAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxuICAgKi9cbiAgcG9zdGFsQ29kZTogc3RyaW5nO1xuICAvKipcbiAgICogMi1sZXR0ZXIgY291bnRyeSBjb2RlLiAyIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgY291bnRyeUNvZGU6IHN0cmluZztcbn1cbiJdfQ==
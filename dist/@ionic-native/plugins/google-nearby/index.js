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
import { Observable } from 'rxjs';
var GoogleNearbyOriginal = /** @class */ (function (_super) {
    __extends(GoogleNearbyOriginal, _super);
    function GoogleNearbyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyOriginal.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearbyOriginal.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearbyOriginal.pluginName = "GoogleNearby";
    GoogleNearbyOriginal.plugin = "cordova-plugin-google-nearby";
    GoogleNearbyOriginal.pluginRef = "window.nearby";
    GoogleNearbyOriginal.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearbyOriginal.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearbyOriginal.installVariables = ["API_KEY"];
    GoogleNearbyOriginal.platforms = ["Android"];
    return GoogleNearbyOriginal;
}(IonicNativePlugin));
var GoogleNearby = new GoogleNearbyOriginal();
export { GoogleNearby };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1uZWFyYnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrQ0EsZ0NBQWlCOzs7O0lBT2pELDhCQUFPLGFBQUMsT0FBZTtJQVl2QixnQ0FBUzs7Ozs7Ozs7dUJBdkRYO0VBb0NrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEdvb2dsZSBOZWFyYnlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgR29vZ2xlIE5lYXJieSBNZXNzYWdlcyBBUEkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVOZWFyYnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dvb2dsZS1uZWFyYnkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnb29nbGVOZWFyYnk6IEdvb2dsZU5lYXJieSkgeyB9XG4gKlxuICogdGhpcy5nb29nbGVOZWFyYnkucHVibGlzaCgnSGVsbG8nKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuZ29vZ2xlTmVhcmJ5LnN1YnNjcmliZSgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVOZWFyYnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93Lm5lYXJieScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGFoYWhhbm5lcy9jb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5JyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnkgLS12YXJpYWJsZSBBUElfS0VZPVwiMTIzNDU2Nzg5XCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQSV9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVOZWFyYnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQdWJsaXNoIGEgbWVzc2FnZVxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1lc3NhZ2UgZ290IHB1Ymxpc2hlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwdWJsaXNoKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byByZWNlaXZlIG1lc3NhZ2VzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgcmVjZWl2ZWQgbWVzc2FnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bnN1YnNjcmliZSdcbiAgfSlcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
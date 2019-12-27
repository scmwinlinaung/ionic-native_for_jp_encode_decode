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
var BroadcasterOriginal = /** @class */ (function (_super) {
    __extends(BroadcasterOriginal, _super);
    function BroadcasterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcasterOriginal.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments); };
    BroadcasterOriginal.prototype.fireNativeEvent = function (eventName, eventData) { return cordova(this, "fireNativeEvent", {}, arguments); };
    BroadcasterOriginal.pluginName = "Broadcaster";
    BroadcasterOriginal.plugin = "cordova-plugin-broadcaster";
    BroadcasterOriginal.pluginRef = "broadcaster";
    BroadcasterOriginal.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    BroadcasterOriginal.platforms = ["Android", "iOS", "Browser"];
    return BroadcasterOriginal;
}(IonicNativePlugin));
var Broadcaster = new BroadcasterOriginal();
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb2FkY2FzdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBK0JELCtCQUFpQjs7OztJQVdoRCxzQ0FBZ0IsYUFBQyxTQUFpQjtJQVdsQyxxQ0FBZSxhQUFDLFNBQWlCLEVBQUUsU0FBYzs7Ozs7O3NCQXZEbkQ7RUFpQ2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgQnJvYWRjYXN0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBleGNoYW5naW5nIGV2ZW50cyBiZXR3ZWVuIG5hdGl2ZSBjb2RlIGFuZCB5b3VyIGFwcC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJyb2FkY2FzdGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9icm9hZGNhc3Rlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJvYWRjYXN0ZXI6IEJyb2FkY2FzdGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBMaXN0ZW4gdG8gZXZlbnRzIGZyb20gTmF0aXZlXG4gKiB0aGlzLmJyb2FkY2FzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2V2ZW50TmFtZScpLnN1YnNjcmliZSgoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KSk7XG4gKlxuICogLy8gU2VuZCBldmVudCB0byBOYXRpdmVcbiAqIHRoaXMuYnJvYWRjYXN0ZXIuZmlyZU5hdGl2ZUV2ZW50KCdldmVudE5hbWUnLCB7fSkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCcm9hZGNhc3RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyb2FkY2FzdGVyJyxcbiAgcGx1Z2luUmVmOiAnYnJvYWRjYXN0ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Jzb3JyZW50aW5vL2NvcmRvdmEtYnJvYWRjYXN0ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2FkY2FzdGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBsaXN0ZW4gdG8gYW4gZXZlbnQgc2VudCBmcm9tIHRoZSBuYXRpdmUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRvIHdhdGNoIHdoZW4gYW4gZXZlbnQgaXMgcmVjZWl2ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVFdmVudExpc3RlbmVyJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlXG4gIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNlbmRzIGRhdGEgdG8gdGhlIG5hdGl2ZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnl9IGV2ZW50RGF0YVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbiBldmVudCBpcyBzdWNjZXNzZnVsbHkgZmlyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlyZU5hdGl2ZUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
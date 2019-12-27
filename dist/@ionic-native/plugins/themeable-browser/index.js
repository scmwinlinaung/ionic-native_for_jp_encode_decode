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
import { IonicNativePlugin, instanceAvailability, cordovaInstance } from '@ionic-native/core';
import { Observable } from 'rxjs';
var ThemeableBrowserObject = /** @class */ (function () {
    function ThemeableBrowserObject(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url);
            }
            console.warn('Native: ThemeableBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    ThemeableBrowserObject.prototype.show = function () { return cordovaInstance(this, "show", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.reload = function () { return cordovaInstance(this, "reload", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.executeScript = function (script) { return cordovaInstance(this, "executeScript", {}, arguments); };
    ThemeableBrowserObject.prototype.insertCss = function (css) { return cordovaInstance(this, "insertCss", {}, arguments); };
    ThemeableBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    return ThemeableBrowserObject;
}());
export { ThemeableBrowserObject };
var ThemeableBrowserOriginal = /** @class */ (function (_super) {
    __extends(ThemeableBrowserOriginal, _super);
    function ThemeableBrowserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowserOriginal.prototype.create = function (url, target, styleOptions) {
        return new ThemeableBrowserObject(url, target, styleOptions);
    };
    ThemeableBrowserOriginal.pluginName = "ThemeableBrowser";
    ThemeableBrowserOriginal.plugin = "cordova-plugin-themeablebrowser";
    ThemeableBrowserOriginal.pluginRef = "cordova.ThemeableBrowser";
    ThemeableBrowserOriginal.repo = "https://github.com/initialxy/cordova-plugin-themeablebrowser";
    ThemeableBrowserOriginal.platforms = ["Amazon Fire OS", "Android", "Blackberry 10", "Browser", "FirefoxOS", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    return ThemeableBrowserOriginal;
}(IonicNativePlugin));
var ThemeableBrowser = new ThemeableBrowserOriginal();
export { ThemeableBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lYWJsZS1icm93c2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDREQUE2RCxNQUFNLG9CQUFvQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBeUVoQyxnQ0FDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLFlBQXFDO1FBRXJDLElBQUk7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2xELEdBQUcsRUFDSCxNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHlHQUF5RyxDQUMxRyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QscUNBQUk7SUFNSixzQ0FBSztJQU1MLHVDQUFNO0lBUU4sOENBQWEsYUFBQyxNQUF3QztJQVV0RCwwQ0FBUyxhQUFDLEdBQXFDO0lBVy9DLG1DQUFFLGFBQUMsS0FBYTs7O3NEQUFtQjtnQkFDakMsT0FBTyxJQUFJLFVBQVUsQ0FBTSxVQUFBLFFBQVE7b0JBQ2pDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7YUFDSjs7O2lDQTFKSDs7OztJQW9Rc0Msb0NBQWlCOzs7O0lBQ3JEOzs7Ozs7T0FNRztJQUNILGlDQUFNLEdBQU4sVUFDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLFlBQXFDO1FBRXJDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OzsyQkFsUkg7RUFvUXNDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IGNvcmRvdmE6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZWFibGVCcm93c2VyQnV0dG9uIHtcbiAgd3d3SW1hZ2U/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICB3d3dJbWFnZVByZXNzZWQ/OiBzdHJpbmc7XG4gIGltYWdlUHJlc3NlZD86IHN0cmluZztcbiAgd3d3SW1hZ2VEZW5zaXR5PzogbnVtYmVyO1xuICBhbGlnbj86IHN0cmluZztcbiAgZXZlbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnMge1xuICBzdGF0dXNiYXI/OiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgfTtcbiAgdG9vbGJhcj86IHtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgaW1hZ2U/OiBzdHJpbmc7XG4gIH07XG4gIHRpdGxlPzoge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHN0YXRpY1RleHQ/OiBzdHJpbmc7XG4gICAgc2hvd1BhZ2VUaXRsZT86IGJvb2xlYW47XG4gIH07XG4gIGJhY2tCdXR0b24/OiBUaGVtZWFibGVCcm93c2VyQnV0dG9uO1xuICBmb3J3YXJkQnV0dG9uPzogVGhlbWVhYmxlQnJvd3NlckJ1dHRvbjtcbiAgY2xvc2VCdXR0b24/OiBUaGVtZWFibGVCcm93c2VyQnV0dG9uO1xuICBjdXN0b21CdXR0b25zPzogVGhlbWVhYmxlQnJvd3NlckJ1dHRvbltdO1xuICBtZW51Pzoge1xuICAgIGltYWdlPzogc3RyaW5nO1xuICAgIGltYWdlUHJlc3NlZD86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBjYW5jZWw/OiBzdHJpbmc7XG4gICAgYWxpZ24/OiBzdHJpbmc7XG4gICAgaXRlbXM/OiB7XG4gICAgICBldmVudDogc3RyaW5nO1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICB9W107XG4gIH07XG4gIGJhY2tCdXR0b25DYW5DbG9zZT86IGJvb2xlYW47XG4gIGRpc2FibGVBbmltYXRpb24/OiBib29sZWFuO1xuXG4gIC8vIGluQXBwQnJvd3NlciBvcHRpb25zXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBjbGVhcmNhY2hlPzogYm9vbGVhbjtcbiAgY2xlYXJzZXNzaW9uY2FjaGU/OiBib29sZWFuO1xuICB6b29tPzogc3RyaW5nO1xuICBoYXJkd2FyZWJhY2s/OiBzdHJpbmc7XG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHNob3VsZFBhdXNlT25TdXNwc2VuZD86IHN0cmluZztcbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICBkaXNhbGxvd292ZXJzY3JvbGw/OiBzdHJpbmc7XG4gIGVuYWJsZVZpZXdwb3J0U2NhbGU/OiBzdHJpbmc7XG4gIGFsbG93SW5saW5lTWVkaWFQbGF5YmFjaz86IHN0cmluZztcbiAga2V5Ym9hcmREaXNwbGF5UmVxdWlyZXNVc2VyQWN0aW9uPzogc3RyaW5nO1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiBzdHJpbmc7XG4gIHByZXNlbnRhdGlvbnN0eWxlPzogc3RyaW5nO1xuICB0cmFuc2l0aW9uc3R5bGU/OiBzdHJpbmc7XG4gIHRvb2xiYXJwb3NpdGlvbj86IHN0cmluZztcbiAgZnVsbHNjcmVlbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaGVtZWFibGVCcm93c2VyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICBzdHlsZU9wdGlvbnM6IFRoZW1lYWJsZUJyb3dzZXJPcHRpb25zXG4gICkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvcmRvdmEuVGhlbWVhYmxlQnJvd3Nlci5vcGVuKFxuICAgICAgICB1cmwsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgc3R5bGVPcHRpb25zXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgfVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmF0aXZlOiBUaGVtZWFibGVCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIGJyb3dzZXIgd2luZG93IHRoYXQgd2FzIG9wZW5lZCBoaWRkZW4uIENhbGxpbmcgdGhpcyBoYXMgbm8gZWZmZWN0XG4gICAqIGlmIHRoZSBicm93c2VyIHdhcyBhbHJlYWR5IHZpc2libGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBicm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZWxvYWQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIEphdmFTY3JpcHQgY29kZSBpbnRvIHRoZSBicm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCAgICBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgYnJvd3NlciB3aW5kb3cuXG4gICAqIEBwYXJhbSBjc3MgICAgICAgRGV0YWlscyBvZiB0aGUgc2NyaXB0IHRvIHJ1biwgc3BlY2lmeWluZyBlaXRoZXIgYSBmaWxlIG9yIGNvZGUga2V5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGluc2VydENzcyhjc3M6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBldmVudHMgaGFwcGVuaW5nIGluIHRoZSBicm93c2VyLlxuICAgKiBBdmFpbGFibGUgZXZlbnRzIGFyZTogYFRoZW1lYWJsZUJyb3dzZXJFcnJvcmAsIGBUaGVtZWFibGVCcm93c2VyV2FybmluZ2AsIGBjcml0aWNhbGAsIGBsb2FkZmFpbGAsIGB1bmV4cGVjdGVkYCwgYHVuZGVmaW5lZGBcbiAgICogQHBhcmFtIGV2ZW50IEV2ZW50IG5hbWVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBiYWNrIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIGxpc3RlbiB0byB0aGUgZXZlbnQgb24gc3Vic2NyaWJlLCBhbmQgd2lsbCBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnQgb24gdW5zdWJzY3JpYmUuXG4gICAqL1xuICBASW5zdGFuY2VDaGVjayh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPGFueT4ob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICk7XG4gICAgICByZXR1cm4gKCkgPT5cbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBUaGVtZWFibGUgQnJvd3NlclxuICogQGRlc2NyaXB0aW9uXG4gKiBJbi1hcHAgYnJvd3NlciB0aGF0IGFsbG93cyBzdHlsaW5nLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVGhlbWVhYmxlQnJvd3NlciwgVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnMsIFRoZW1lYWJsZUJyb3dzZXJPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RoZW1lYWJsZS1icm93c2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZWFibGVCcm93c2VyOiBUaGVtZWFibGVCcm93c2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBjYW4gYWRkIG9wdGlvbnMgZnJvbSB0aGUgb3JpZ2luYWwgSW5BcHBCcm93c2VyIGluIGEgSmF2YVNjcmlwdCBvYmplY3QgZm9ybSAobm90IHN0cmluZylcbiAqIC8vIFRoaXMgb3B0aW9ucyBvYmplY3QgYWxzbyB0YWtlcyBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgaW50cm9kdWNlZCBieSB0aGUgVGhlbWVhYmxlQnJvd3NlciBwbHVnaW5cbiAqIC8vIFRoaXMgZXhhbXBsZSBvbmx5IHNob3dzIHRoZSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZm9yIFRoZW1lYWJsZUJyb3dzZXJcbiAqIC8vIE5vdGUgdGhhdCB0aGF0IGBpbWFnZWAgYW5kIGBpbWFnZVByZXNzZWRgIHZhbHVlcyByZWZlciB0byByZXNvdXJjZXMgdGhhdCBhcmUgc3RvcmVkIGluIHlvdXIgYXBwXG4gKiBjb25zdCBvcHRpb25zOiBUaGVtZWFibGVCcm93c2VyT3B0aW9ucyA9IHtcbiAqICAgICAgc3RhdHVzYmFyOiB7XG4gKiAgICAgICAgICBjb2xvcjogJyNmZmZmZmZmZidcbiAqICAgICAgfSxcbiAqICAgICAgdG9vbGJhcjoge1xuICogICAgICAgICAgaGVpZ2h0OiA0NCxcbiAqICAgICAgICAgIGNvbG9yOiAnI2YwZjBmMGZmJ1xuICogICAgICB9LFxuICogICAgICB0aXRsZToge1xuICogICAgICAgICAgY29sb3I6ICcjMDAzMjY0ZmYnLFxuICogICAgICAgICAgc2hvd1BhZ2VUaXRsZTogdHJ1ZVxuICogICAgICB9LFxuICogICAgICBiYWNrQnV0dG9uOiB7XG4gKiAgICAgICAgICBpbWFnZTogJ2JhY2snLFxuICogICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnYmFja19wcmVzc2VkJyxcbiAqICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gKiAgICAgICAgICBldmVudDogJ2JhY2tQcmVzc2VkJ1xuICogICAgICB9LFxuICogICAgICBmb3J3YXJkQnV0dG9uOiB7XG4gKiAgICAgICAgICBpbWFnZTogJ2ZvcndhcmQnLFxuICogICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnZm9yd2FyZF9wcmVzc2VkJyxcbiAqICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gKiAgICAgICAgICBldmVudDogJ2ZvcndhcmRQcmVzc2VkJ1xuICogICAgICB9LFxuICogICAgICBjbG9zZUJ1dHRvbjoge1xuICogICAgICAgICAgaW1hZ2U6ICdjbG9zZScsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdjbG9zZV9wcmVzc2VkJyxcbiAqICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gKiAgICAgICAgICBldmVudDogJ2Nsb3NlUHJlc3NlZCdcbiAqICAgICAgfSxcbiAqICAgICAgY3VzdG9tQnV0dG9uczogW1xuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGltYWdlOiAnc2hhcmUnLFxuICogICAgICAgICAgICAgIGltYWdlUHJlc3NlZDogJ3NoYXJlX3ByZXNzZWQnLFxuICogICAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICogICAgICAgICAgICAgIGV2ZW50OiAnc2hhcmVQcmVzc2VkJ1xuICogICAgICAgICAgfVxuICogICAgICBdLFxuICogICAgICBtZW51OiB7XG4gKiAgICAgICAgICBpbWFnZTogJ21lbnUnLFxuICogICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnbWVudV9wcmVzc2VkJyxcbiAqICAgICAgICAgIHRpdGxlOiAnVGVzdCcsXG4gKiAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICogICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gKiAgICAgICAgICBpdGVtczogW1xuICogICAgICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdoZWxsb1ByZXNzZWQnLFxuICogICAgICAgICAgICAgICAgICBsYWJlbDogJ0hlbGxvIFdvcmxkISdcbiAqICAgICAgICAgICAgICB9LFxuICogICAgICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgICAgZXZlbnQ6ICd0ZXN0UHJlc3NlZCcsXG4gKiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGVzdCEnXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgXVxuICogICAgICB9LFxuICogICAgICBiYWNrQnV0dG9uQ2FuQ2xvc2U6IHRydWVcbiAqIH1cbiAqXG4gKiBjb25zdCBicm93c2VyOiBUaGVtZWFibGVCcm93c2VyT2JqZWN0ID0gdGhpcy50aGVtZWFibGVCcm93c2VyLmNyZWF0ZSgnaHR0cHM6Ly9pb25pYy5pbycsICdfYmxhbmsnLCBvcHRpb25zKTtcbiAqXG4gKiBgYGBcbiAqIFdlIHN1Z2dlc3QgdGhhdCB5b3UgcmVmZXIgdG8gdGhlIHBsdWdpbidzIHJlcG9zaXRvcnkgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb24gdXNhZ2UgdGhhdCBtYXkgbm90IGJlIGNvdmVyZWQgaGVyZS5cbiAqIEBjbGFzc2VzXG4gKiBUaGVtZWFibGVCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogVGhlbWVhYmxlQnJvd3NlckJ1dHRvblxuICogVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUaGVtZWFibGVCcm93c2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGhlbWVhYmxlYnJvd3NlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuVGhlbWVhYmxlQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW5pdGlhbHh5L2NvcmRvdmEtcGx1Z2luLXRoZW1lYWJsZWJyb3dzZXInLFxuICBwbGF0Zm9ybXM6IFtcbiAgICAnQW1hem9uIEZpcmUgT1MnLFxuICAgICdBbmRyb2lkJyxcbiAgICAnQmxhY2tiZXJyeSAxMCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdGaXJlZm94T1MnLFxuICAgICdpT1MnLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyBQaG9uZSdcbiAgXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaGVtZWFibGVCcm93c2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGJyb3dzZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVUkwgdG8gb3BlblxuICAgKiBAcGFyYW0gdGFyZ2V0IHtzdHJpbmd9IFRhcmdldFxuICAgKiBAcGFyYW0gc3R5bGVPcHRpb25zIHtUaGVtZWFibGVCcm93c2VyT3B0aW9uc30gVGhlbWVhYmxlIGJyb3dzZXIgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7VGhlbWVhYmxlQnJvd3Nlck9iamVjdH1cbiAgICovXG4gIGNyZWF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICBzdHlsZU9wdGlvbnM6IFRoZW1lYWJsZUJyb3dzZXJPcHRpb25zXG4gICk6IFRoZW1lYWJsZUJyb3dzZXJPYmplY3Qge1xuICAgIHJldHVybiBuZXcgVGhlbWVhYmxlQnJvd3Nlck9iamVjdCh1cmwsIHRhcmdldCwgc3R5bGVPcHRpb25zKTtcbiAgfVxufVxuIl19
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
var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowserOriginal instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowserOriginal.
     *                 _blank: Opens in the InAppBrowserOriginal.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowserOriginal. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) { return cordovaInstance(this, "_loadAfterBeforeload", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.show = function () { return cordovaInstance(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return cordovaInstance(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return cordovaInstance(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return cordovaInstance(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
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
    return InAppBrowserObject;
}());
export { InAppBrowserObject };
var InAppBrowserOriginal = /** @class */ (function (_super) {
    __extends(InAppBrowserOriginal, _super);
    function InAppBrowserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowserOriginal instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowserOriginal. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowserOriginal.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowserOriginal.pluginName = "InAppBrowser";
    InAppBrowserOriginal.plugin = "cordova-plugin-inappbrowser";
    InAppBrowserOriginal.pluginRef = "cordova.InAppBrowser";
    InAppBrowserOriginal.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
    InAppBrowserOriginal.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
    return InAppBrowserOriginal;
}(IonicNativePlugin));
var InAppBrowser = new InAppBrowserOriginal();
export { InAppBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDREQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUF5STFDOzs7Ozs7Ozs7O09BVUc7SUFDSCw0QkFDRSxHQUFXLEVBQ1gsTUFBZSxFQUNmLE9BQXNDO1FBRXRDLElBQUk7WUFDRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsR0FBRyxDQUNGLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQ25FO3FCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHFHQUFxRyxDQUN0RyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QsaURBQW9CLGFBQUMsTUFBYztJQU9uQyxpQ0FBSTtJQU1KLGtDQUFLO0lBT0wsaUNBQUk7SUFRSiwwQ0FBYSxhQUFDLE1BQXdDO0lBVXRELHNDQUFTLGFBQUMsR0FBcUM7SUFVL0MsK0JBQUUsYUFBQyxLQUE0Qjs7O3NEQUFpQztnQkFDOUQsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsVUFBQyxRQUFxQztvQkFDcEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDbkMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QixDQUFDO29CQUNGLE9BQU87d0JBQ0wsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUN0QyxLQUFLLEVBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdCO29CQUhELENBR0MsQ0FBQztnQkFDTixDQUFDLENBQ0YsQ0FBQzthQUNIOzs7NkJBdlBIOzs7O0lBaVNrQyxnQ0FBaUI7Ozs7SUFDakQ7Ozs7Ozs7O09BUUc7SUFDSCw2QkFBTSxHQUFOLFVBQ0UsR0FBVyxFQUNYLE1BQWUsRUFDZixPQUFzQztRQUV0QyxPQUFPLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7dUJBalRIO0VBaVNrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnO1xuICAvKiogIHNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgYnJvd3NlcidzIGVudGlyZSBsb2NhbCBzdG9yYWdlIGNsZWFyZWQgKGNvb2tpZXMsIEhUTUw1IGxvY2FsIHN0b3JhZ2UsIEluZGV4ZWREQiwgZXRjLikgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZCAqL1xuICBjbGVhcmRhdGE/OiAneWVzJztcbiAgLyoqXG4gICAqIFNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgc2Vzc2lvbiBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLlxuICAgKiBGb3IgV0tXZWJWaWV3LCByZXF1aXJlcyBpT1MgMTErIG9uIHRhcmdldCBkZXZpY2UuXG4gICAqL1xuICBjbGVhcnNlc3Npb25jYWNoZT86ICd5ZXMnO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnO1xuICAvKipcbiAgICogKEFuZHJvaWQgJiBXaW5kb3dzIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB0byBuYXZpZ2F0ZSBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgSW5BcHBCcm93c2VyJ3MgaGlzdG9yeS5cbiAgICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcGFnZSwgdGhlIEluQXBwQnJvd3NlciB3aWxsIGNsb3NlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB5ZXMsIHNvIHlvdSBtdXN0IHNldCBpdCB0byBubyBpZiB5b3Ugd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2ltcGx5IGNsb3NlIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqL1xuICBoYXJkd2FyZWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBhbmQgbG9hZCB0aGUgcGFnZSwgYnV0IG5vdCBzaG93IGl0LiBUaGUgbG9hZHN0b3AgZXZlbnQgZmlyZXMgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxuICAgKiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gaGF2ZSB0aGUgYnJvd3NlciBvcGVuIGFuZCBsb2FkIG5vcm1hbGx5LlxuICAgKi9cbiAgaGlkZGVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgbmF2aWdhdGlvbiBidXR0b25zIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uXG4gICAqIChpT1MpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBuYXZpZ2F0aW9uIGJ1dHRvbnMgb24gb3Igb2ZmIChkZWZhdWx0cyB0byBubykuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGhpZGVuYXZpZ2F0aW9uYnV0dG9ucz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqICAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsb2FkaW5nIGluZGljYXRvciAoZGVmYXVsdHMgdG8gbm8pLlxuICAgKi9cbiAgaGlkZXNwaW5uZXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBoaWRlIHRoZSB1cmwgYmFyIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uICovXG4gIGhpZGV1cmxiYXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gb3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBmb3JtIGVsZW1lbnRzIHJlY2VpdmUgZm9jdXMgdmlhIEphdmFTY3JpcHQncyBmb2N1cygpIGNhbGwgKGRlZmF1bHRzIHRvIHllcykuICovXG4gIGtleWJvYXJkRGlzcGxheVJlcXVpcmVzVXNlckFjdGlvbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgbmF2aWdhdGlvbiBidXR0b25zIGdvIHRvIHRoZSBsZWZ0IGFuZCBjbG9zZSBidXR0b24gdG8gdGhlIHJpZ2h0LlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgY2xvc2UgYnV0dG9uIGdvZXMgdG8gdGhlIHJpZ2h0IGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgdG8gdGhlIGxlZnQuXG4gICAqL1xuICBsZWZ0dG9yaWdodD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgSW5BcHBCcm93c2VyJ3MgbG9jYXRpb24gYmFyIG9uIG9yIG9mZi4gKi9cbiAgbG9jYXRpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgU2V0IHRvIHllcyB0byBwcmV2ZW50IEhUTUw1IGF1ZGlvIG9yIHZpZGVvIGZyb20gYXV0b3BsYXlpbmcgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY29sb3Igb2YgYm90aCBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBkZWZhdWx0LiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcyBhbmQgbm90IGhpZGVuYXZpZ2F0aW9uYnV0dG9ucyBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHZpc2libGUuXG4gICAqL1xuICBuYXZpZ2F0aW9uYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBwYWdlc2hlZXQsIGZvcm1zaGVldCBvciBmdWxsc2NyZWVuIHRvIHNldCB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBmdWxsc2NyZWVuKS4gKi9cbiAgcHJlc2VudGF0aW9uc3R5bGU/OiAncGFnZXNoZWV0JyB8ICdmb3Jtc2hlZXQnIHwgJ2Z1bGxzY3JlZW4nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBtYWtlIEluQXBwQnJvd3NlciBXZWJWaWV3IHRvIHBhdXNlL3Jlc3VtZSB3aXRoIHRoZSBhcHAgdG8gc3RvcCBiYWNrZ3JvdW5kIGF1ZGlvICh0aGlzIG1heSBiZSByZXF1aXJlZCB0byBhdm9pZCBHb29nbGUgUGxheSBpc3N1ZXMpICovXG4gIHNob3VsZFBhdXNlT25TdXNwZW5kPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIHdhaXQgdW50aWwgYWxsIG5ldyB2aWV3IGNvbnRlbnQgaXMgcmVjZWl2ZWQgYmVmb3JlIGJlaW5nIHJlbmRlcmVkIChkZWZhdWx0cyB0byBubykuICovXG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG9uIG9yIG9mZiBmb3IgdGhlIEluQXBwQnJvd3NlciAoZGVmYXVsdHMgdG8geWVzKSAqL1xuICB0b29sYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIHRoZSB0b29sYmFyIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBjb2xvciBvZiB0aGUgdG9vbGJhci4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLlxuICAgKi9cbiAgdG9vbGJhcmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gdG9wIG9yIGJvdHRvbSAoZGVmYXVsdCBpcyBib3R0b20pLiBDYXVzZXMgdGhlIHRvb2xiYXIgdG8gYmUgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHdpbmRvdy4gKi9cbiAgdG9vbGJhcnBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byBtYWtlIHRoZSB0b29sYmFyIHRyYW5zbHVjZW50KHNlbWktdHJhbnNwYXJlbnQpIChkZWZhdWx0cyB0byB5ZXMpLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuICovXG4gIHRvb2xiYXJ0cmFuc2x1Y2VudD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIGZsaXBob3Jpem9udGFsLCBjcm9zc2Rpc3NvbHZlIG9yIGNvdmVydmVydGljYWwgdG8gc2V0IHRoZSB0cmFuc2l0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBjb3ZlcnZlcnRpY2FsKS4gKi9cbiAgdHJhbnNpdGlvbnN0eWxlPzogJ2ZsaXBob3Jpem9udGFsJyB8ICdjcm9zc2Rpc3NvbHZlJyB8ICdjb3ZlcnZlcnRpY2FsJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldHMgd2hldGhlciB0aGUgV2ViVmlldyBzaG91bGQgZW5hYmxlIHN1cHBvcnQgZm9yIHRoZSBcInZpZXdwb3J0XCIgSFRNTCBtZXRhIHRhZyBvciBzaG91bGQgdXNlIGEgd2lkZSB2aWV3cG9ydC4gV2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNldHRpbmcgaXMgbm8sIHRoZSBsYXlvdXQgd2lkdGggaXMgYWx3YXlzIHNldCB0byB0aGUgd2lkdGggb2YgdGhlIFdlYlZpZXcgY29udHJvbCBpbiBkZXZpY2UtaW5kZXBlbmRlbnQgKENTUykgcGl4ZWxzLiBXaGVuIHRoZSB2YWx1ZSBpcyB5ZXMgYW5kIHRoZSBwYWdlIGNvbnRhaW5zIHRoZSB2aWV3cG9ydCBtZXRhIHRhZywgdGhlIHZhbHVlIG9mIHRoZSB3aWR0aCBzcGVjaWZpZWQgaW4gdGhlIHRhZyBpcyB1c2VkLiBJZiB0aGUgcGFnZSBkb2VzIG5vdCBjb250YWluIHRoZSB0YWcgb3IgZG9lcyBub3QgcHJvdmlkZSBhIHdpZHRoLCB0aGVuIGEgd2lkZSB2aWV3cG9ydCB3aWxsIGJlIHVzZWQuIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICB1c2VXaWRlVmlld1BvcnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIFdLV2ViVmlldyBlbmdpbmUgZm9yIHRoZSBJbmFwcEJyb3dzZXIuIE9taXQgb3Igc2V0IHRvIG5vIChkZWZhdWx0KSB0byB1c2UgVUlXZWJWaWV3LiAqL1xuICB1c2V3a3dlYnZpZXc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgQW5kcm9pZCBicm93c2VyJ3Mgem9vbSBjb250cm9scywgc2V0IHRvIG5vIHRvIGhpZGUgdGhlbS4gRGVmYXVsdCB2YWx1ZSBpcyB5ZXMuICovXG4gIHpvb20/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEluQXBwQnJvd3NlckV2ZW50VHlwZSA9ICdsb2Fkc3RhcnQnIHwgJ2xvYWRzdG9wJyB8ICdsb2FkZXJyb3InIHwgJ2V4aXQnIHwgJ2JlZm9yZWxvYWQnIHwgJ21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3NlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKiogdGhlIGV2ZW50IG5hbWUgKi9cbiAgdHlwZTogSW5BcHBCcm93c2VyRXZlbnRUeXBlO1xuICAvKiogdGhlIFVSTCB0aGF0IHdhcyBsb2FkZWQuICovXG4gIHVybDogc3RyaW5nO1xuICAvKiogdGhlIGVycm9yIGNvZGUsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiB0aGUgZXJyb3IgbWVzc2FnZSwgb25seSBpbiB0aGUgY2FzZSBvZiBsb2FkZXJyb3IuICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldD1cInNlbGZcIl0gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogICAgICAgICAgICAgICAgIF9zZWxmOiBPcGVucyBpbiB0aGUgV2ViVmlldyBpZiB0aGUgVVJMIGlzIGluIHRoZSB3aGl0ZSBsaXN0LCBvdGhlcndpc2UgaXQgb3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9ibGFuazogT3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9zeXN0ZW06IE9wZW5zIGluIHRoZSBzeXN0ZW0ncyB3ZWIgYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwQnJvd3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIGEgVVJMIGluIGEgbmV3IEluQXBwQnJvd3NlciBpbnN0YW5jZSwgdGhlIGN1cnJlbnQgYnJvd3NlciBpbnN0YW5jZSwgb3IgdGhlIHN5c3RlbSBicm93c2VyLlxuICAgKiBAcGFyYW0gIHVybCB7c3RyaW5nfSAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0gIHRhcmdldCB7c3RyaW5nfSAgVGhlIHRhcmdldCBpbiB3aGljaCB0byBsb2FkIHRoZSBVUkwsIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIF9zZWxmLlxuICAgKiBAcGFyYW0gIG9wdGlvbnMge3N0cmluZ30gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqIEByZXR1cm5zIHtJbkFwcEJyb3dzZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGFyZ2V0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zXG4gICk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
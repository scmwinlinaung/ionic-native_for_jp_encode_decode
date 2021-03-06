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
import { IonicNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable, merge } from 'rxjs';
export var Connection;
(function (Connection) {
    Connection[Connection["UNKNOWN"] = 0] = "UNKNOWN";
    Connection[Connection["ETHERNET"] = 1] = "ETHERNET";
    Connection[Connection["WIFI"] = 2] = "WIFI";
    Connection[Connection["CELL_2G"] = 3] = "CELL_2G";
    Connection[Connection["CELL_3G"] = 4] = "CELL_3G";
    Connection[Connection["CELL_4G"] = 5] = "CELL_4G";
    Connection[Connection["CELL"] = 6] = "CELL";
    Connection[Connection["NONE"] = 7] = "NONE";
})(Connection || (Connection = {}));
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none'
        };
        return _this;
    }
    Network.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect(), _this.onDisconnect());
            }
        })();
    };
    Network.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    Network.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(Network.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: true,
        configurable: true
    });
    Network.pluginName = "Network";
    Network.plugin = "cordova-plugin-network-information";
    Network.pluginRef = "navigator.connection";
    Network.repo = "https://github.com/apache/cordova-plugin-network-information";
    Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Network = __decorate([
        Injectable()
    ], Network);
    return Network;
}(IonicNativePlugin));
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmsvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8seUZBTU4sTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl6QyxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLGlEQUFXLENBQUE7SUFDWCxtREFBUSxDQUFBO0lBQ1IsMkNBQUksQ0FBQTtJQUNKLGlEQUFPLENBQUE7SUFDUCxpREFBTyxDQUFBO0lBQ1AsaURBQU8sQ0FBQTtJQUNQLDJDQUFJLENBQUE7SUFDSiwyQ0FBSSxDQUFBO0FBQ04sQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCOztJQW9ENEIsMkJBQWlCOzs7UUFFNUM7O1dBRUc7UUFDSCxnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7OztJQW1CRiwwQkFBUTs7O21EQUFvQjtnQkFDMUIsT0FBTyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ3JEOzs7SUFXRCw4QkFBWTtJQWFaLDJCQUFTOzBCQXZDVSx5QkFBSTs7Ozs7OzBCQU1KLGdDQUFXOzs7Ozs7Ozs7OztJQTFCbkIsT0FBTztRQURuQixVQUFVLEVBQUU7T0FDQSxPQUFPO2tCQXpFcEI7RUF5RTZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbmV4cG9ydCBlbnVtIENvbm5lY3Rpb24ge1xuICBVTktOT1dOID0gMCxcbiAgRVRIRVJORVQsXG4gIFdJRkksXG4gIENFTExfMkcsXG4gIENFTExfM0cgLFxuICBDRUxMXzRHLFxuICBDRUxMLFxuICBOT05FXG59XG5cbi8qKlxuICogQG5hbWUgTmV0d29ya1xuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW05ldHdvcmsgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3Rpb25cbiAqIGxldCBkaXNjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHdhcyBkaXNjb25uZWN0ZWQgOi0oJyk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzdG9wIGRpc2Nvbm5lY3Qgd2F0Y2hcbiAqIGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqXG4gKlxuICogLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gKiBsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogICBjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0ZWQhJyk7XG4gKiAgIC8vIFdlIGp1c3QgZ290IGEgY29ubmVjdGlvbiBidXQgd2UgbmVlZCB0byB3YWl0IGJyaWVmbHlcbiAqICAgIC8vIGJlZm9yZSB3ZSBkZXRlcm1pbmUgdGhlIGNvbm5lY3Rpb24gdHlwZS4gTWlnaHQgbmVlZCB0byB3YWl0LlxuICogICAvLyBwcmlvciB0byBkb2luZyBhbnkgYXBpIHJlcXVlc3RzIGFzIHdlbGwuXG4gKiAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICogICAgIGlmICh0aGlzLm5ldHdvcmsudHlwZSA9PT0gJ3dpZmknKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGEgd2lmaSBjb25uZWN0aW9uLCB3b29ob28hJyk7XG4gKiAgICAgfVxuICogICB9LCAzMDAwKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3AgY29ubmVjdCB3YXRjaFxuICogY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGFkdmFuY2VkXG4gKiBUaGUgYHR5cGVgIHByb3BlcnR5IHdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGNvbm5lY3Rpb24gdHlwZXM6IGB1bmtub3duYCwgYGV0aGVybmV0YCwgYHdpZmlgLCBgMmdgLCBgM2dgLCBgNGdgLCBgY2VsbHVsYXJgLCBgbm9uZWBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb25uZWN0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXR3b3JrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHMgZm9yIHBvc3NpYmxlIGNvbm5lY3Rpb24gdHlwZXNcbiAgICovXG4gIENvbm5lY3Rpb24gPSB7XG4gICAgVU5LTk9XTjogJ3Vua25vd24nLFxuICAgIEVUSEVSTkVUOiAnZXRoZXJuZXQnLFxuICAgIFdJRkk6ICd3aWZpJyxcbiAgICBDRUxMXzJHOiAnMmcnLFxuICAgIENFTExfM0c6ICczZycsXG4gICAgQ0VMTF80RzogJzRnJyxcbiAgICBDRUxMOiAnY2VsbHVsYXInLFxuICAgIE5PTkU6ICdub25lJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25uZWN0aW9uIHR5cGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogRG93bmxpbmsgTWF4IFNwZWVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb3dubGlua01heDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggY29ubmVjdGlvbiBjaGFuZ2VzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBtZXJnZSh0aGlzLm9uQ29ubmVjdCgpLCB0aGlzLm9uRGlzY29ubmVjdCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb2ZmbGluZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb2ZmbGluZScsXG4gICAgZWxlbWVudDogZG9jdW1lbnRcbiAgfSlcbiAgb25EaXNjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBub3RpZmllZCB3aGVuIHRoZSBkZXZpY2UgZ29lcyBvbmxpbmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29ubGluZScsXG4gICAgZWxlbWVudDogZG9jdW1lbnRcbiAgfSlcbiAgb25Db25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
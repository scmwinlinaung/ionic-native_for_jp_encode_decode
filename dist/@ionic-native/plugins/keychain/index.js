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
var KeychainOriginal = /** @class */ (function (_super) {
    __extends(KeychainOriginal, _super);
    function KeychainOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeychainOriginal.prototype.get = function (key, touchIDMessage) { return cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.set = function (key, value, useTouchID) { return cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.getJson = function (key, touchIDMessage) { return cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.setJson = function (key, obj, useTouchId) { return cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.remove = function (key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.pluginName = "Keychain";
    KeychainOriginal.plugin = "cordova-plugin-ios-keychain";
    KeychainOriginal.pluginRef = "window.Keychain";
    KeychainOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    KeychainOriginal.platforms = ["iOS"];
    return KeychainOriginal;
}(IonicNativePlugin));
var Keychain = new KeychainOriginal();
export { Keychain };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWNoYWluL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DMUMsNEJBQWlCOzs7O0lBVzdDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLGNBQXVCO0lBY3hDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLEtBQWdDLEVBQUUsVUFBb0I7SUFhdkUsMEJBQU8sYUFBQyxHQUFXLEVBQUUsY0FBdUI7SUFjNUMsMEJBQU8sYUFBQyxHQUFXLEVBQUUsR0FBUSxFQUFFLFVBQW9CO0lBWW5ELHlCQUFNLGFBQUMsR0FBVzs7Ozs7O21CQXJHcEI7RUFxQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAbmFtZSBLZXljaGFpblxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgYW5kIHNldCBkYXRhIGluIHRoZSBpT1MgS2V5Y2hhaW5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXljaGFpbiBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9zLWtleWNoYWluKS5cbiAqXG4gKiBTZWUgYWxzbyBbU2VjdXJlIFN0b3JhZ2VdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbmF0aXZlL3NlY3VyZS1zdG9yYWdlLykgZm9yIG1vcmUgc3VwcG9ydGVkIHBsYXRmb3Jtcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEtleWNoYWluIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9rZXljaGFpbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUga2V5Y2hhaW46IEtleWNoYWluKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmtleWNoYWluLnNldChrZXksIHZhbHVlKS50aGVuKCgpID0+IHtcbiAqICAgdGhpcy5rZXljaGFpbi5nZXQoa2V5KVxuICogICAgIC50aGVuKHZhbHVlID0+IGNvbnNvbGUubG9nKCdHb3QgdmFsdWUnLCB2YWx1ZSkpXG4gKiAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nJywgZXJyKSk7XG4gKiB9KVxuICogLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nJywgZXJyKSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdLZXljaGFpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5LZXljaGFpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW4nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2V5Y2hhaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0b3VjaElETWVzc2FnZV0gdGhlIG1lc3NhZ2UgdG8gc2hvdyB1bmRlcm5lYXRoIHRoZSBUb3VjaElEIHByb21wdCAoaWYgYW55KVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBnZXQoa2V5OiBzdHJpbmcsIHRvdWNoSURNZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVRvdWNoSURdIHdoZXRoZXIgdG8gc3RvcmUgdGhlIHZhbHVlIHdpdGggc2VjdXJpdHkgc3VjaCB0aGF0IFRvdWNoSUQgd2lsbCBiZSBuZWVkZWQgdG8gZ3JhYiBpdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCB1c2VUb3VjaElEPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBKU09OIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvdWNoSURNZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHNob3cgdW5kZXJuZWF0aCB0aGUgVG91Y2hJRCBwcm9tcHQgKGlmIGFueSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0SnNvbihrZXk6IHN0cmluZywgdG91Y2hJRE1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgSlNPTiB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHNldFxuICAgKiBAcGFyYW0ge2FueX0gb2JqIHZhbHVlIHRoZSB2YWx1ZSB0byBzZXRcbiAgICogQHBhcmFtIHtib29sZWFufSBbdXNlVG91Y2hJZF0gV2V0aGVyIHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoIHNlY3VyaXR5IHN1Y2ggdGhhdCBUb3VjaElEIHdpbGwgYmUgbmVlZGVkIHRvIGdyYWIgaXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgc2V0SnNvbihrZXk6IHN0cmluZywgb2JqOiBhbnksIHVzZVRvdWNoSWQ/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gcmVtb3ZlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==
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
var AndroidExoplayerOriginal = /** @class */ (function (_super) {
    __extends(AndroidExoplayerOriginal, _super);
    function AndroidExoplayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidExoplayerOriginal.prototype.show = function (parameters) { return cordova(this, "show", { "observable": true, "clearFunction": "close", "clearWithArgs": false, "successIndex": 1, "errorIndex": 2 }, arguments); };
    AndroidExoplayerOriginal.prototype.setStream = function (url, controller) { return cordova(this, "setStream", {}, arguments); };
    AndroidExoplayerOriginal.prototype.playPause = function () { return cordova(this, "playPause", {}, arguments); };
    AndroidExoplayerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    AndroidExoplayerOriginal.prototype.seekTo = function (milliseconds) { return cordova(this, "seekTo", {}, arguments); };
    AndroidExoplayerOriginal.prototype.seekBy = function (milliseconds) { return cordova(this, "seekBy", {}, arguments); };
    AndroidExoplayerOriginal.prototype.getState = function () { return cordova(this, "getState", {}, arguments); };
    AndroidExoplayerOriginal.prototype.showController = function () { return cordova(this, "showController", {}, arguments); };
    AndroidExoplayerOriginal.prototype.hideController = function () { return cordova(this, "hideController", {}, arguments); };
    AndroidExoplayerOriginal.prototype.setController = function (controller) { return cordova(this, "setController", {}, arguments); };
    AndroidExoplayerOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    AndroidExoplayerOriginal.pluginName = "AndroidExoPlayer";
    AndroidExoplayerOriginal.plugin = "cordova-plugin-exoplayer";
    AndroidExoplayerOriginal.pluginRef = "ExoPlayer";
    AndroidExoplayerOriginal.repo = "https://github.com/frontyard/cordova-plugin-exoplayer";
    AndroidExoplayerOriginal.platforms = ["Android"];
    return AndroidExoplayerOriginal;
}(IonicNativePlugin));
var AndroidExoplayer = new AndroidExoplayerOriginal();
export { AndroidExoplayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuZHJvaWQtZXhvcGxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBcUxJLG9DQUFpQjs7OztJQWFyRCwrQkFBSSxhQUFDLFVBQWtDO0lBV3ZDLG9DQUFTLGFBQ1AsR0FBVyxFQUNYLFVBQTRDO0lBVTlDLG9DQUFTO0lBU1QsK0JBQUk7SUFVSixpQ0FBTSxhQUFDLFlBQW9CO0lBVTNCLGlDQUFNLGFBQUMsWUFBb0I7SUFTM0IsbUNBQVE7SUFTUix5Q0FBYztJQVNkLHlDQUFjO0lBVWQsd0NBQWEsYUFBQyxVQUE0QztJQVMxRCxnQ0FBSzs7Ozs7OzJCQXRTUDtFQXVMc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBBbmRyb2lkRXhvUGxheWVyQXNwZWN0UmF0aW8gPSAnRklMTF9TQ1JFRU4nIHwgJ0ZJVF9TQ1JFRU4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRFeG9QbGF5ZXJQYXJhbXMge1xuICAvKipcbiAgICogVXJsIG9mIHRoZSB2aWRlbyB0byBwbGF5LlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdXNlciBhZ2VudC4gRGVmYXVsdCBpcyBgRXhvUGxheWVyUGx1Z2luYFxuICAgKi9cbiAgdXNlckFnZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHBsYXllciBhc3BlY3QgcmF0aW8uXG4gICAqL1xuICBhc3BlY3RSYXRpbz86IEFuZHJvaWRFeG9QbGF5ZXJBc3BlY3RSYXRpbztcblxuICAvKipcbiAgICogSGlkZSBjb250cm9scyBhZnRlciB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzLCBkZWZhdWx0IGlzIGA1MDAwYC5cbiAgICovXG4gIGhpZGVUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIHNldCB0byBmYWxzZSBzdHJlYW0gd2lsbCBub3QgYXV0b21hdGljYWxseSBzdGFydC5cbiAgICovXG4gIGF1dG9QbGF5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3RhcnQgcGxheWJhY2sgYXQgdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBpbnRvIHZpZGVvLCBkZWZhdWx0IGlzIGAwYC5cbiAgICovXG4gIHNlZWtUbz86IG51bWJlcjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHVzZSB3aGVuIHNraXBwaW5nIGZvcndhcmQsIGRlZmF1bHQgaXMgYDEwMDBgLlxuICAgKi9cbiAgZm9yd2FyZFRpbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byB1c2Ugd2hlbiBza2lwcGluZyBiYWNrd2FyZCwgZGVmYXVsdCBpcyBgMTAwMGAuXG4gICAqL1xuICByZXdpbmRUaW1lPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPbmx5IHBsYXkgYXVkaW8gaW4gdGhlIGJhY2tncm91ZCwgZGVmYXVsdCBpcyBgZmFsc2VgLlxuICAgKiBJZiB5b3UgcGFzcyBpbiBgYXVkaW9Pbmx5OiB0cnVlYCwgbWFrZSBzdXJlIHRvIG1hbnVhbGx5IGNsb3NlIHRoZSBwbGF5ZXIgb24gc29tZSBldmVudCAobGlrZSBlc2NhcGUgYnV0dG9uKSBzaW5jZSB0aGUgcGx1Z2luIHdvbid0IGJlIGRldGVjdGluZyBrZXlwcmVzc2VzIHdoZW4gcGxheWluZyBhdWRpbyBpbiB0aGUgYmFja2dyb3VuZC5cbiAgICovXG4gIGF1ZGlvT25seT86IHRydWU7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHN1YnRpdGxlIHVybCB0byBkaXNwbGF5IG92ZXIgdGhlIHZpZGVvLlxuICAgKiBXZSBjdXJyZW50bHkgc3VwcG9ydCAuc3J0IGFuZCAudnR0IHN1YnRpdGxlIGZvcm1hdHMuIFN1YnRpdGxlcyBhcmUgbm90IHN1cHBvcnRlZCBvbiBhbGwgc3RyZWFtIHR5cGVzLCBhcyBFeG9QbGF5ZXIgaGFzIHJlcXVpcmVtZW50IHRoYXQgYm90aCB2aWRlbyBhbmQgc3VidGl0bGUgXCJtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHBlcmlvZHMsIGFuZCBtdXN0IG5vdCBoYXZlIGFueSBkeW5hbWljIHdpbmRvd3NcIiwgd2hpY2ggbWVhbnMgZm9yIHNpbXBsZSBtcDRzIGl0IHNob3VsZCB3b3JrLCBidXQgb24gbW9yZSBjb21wbGV4IEhMUy9EYXNoIHNldHVwcyBpdCBtaWdodCBub3QuXG4gICAqL1xuICBzdWJ0aXRsZVVybD86IHN0cmluZztcblxuICAvKipcbiAgICogb2todHRwIGNvbm5lY3QgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgKGRlZmF1bHQgaXMgYDBgKVxuICAgKi9cbiAgY29ubmVjdFRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIG9raHR0cCByZWFkIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIChkZWZhdWx0IGlzIGAwYClcbiAgICovXG4gIHJlYWRUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBva2h0dHAgd3JpdGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgKGRlZmF1bHQgaXMgYDBgKVxuICAgKi9cbiAgd3JpdGVUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBva2h0dHAgc29ja2V0IHBpbmcgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIChkZWZhdWx0IGlzIGAwYCBvciBkaXNhYmxlZClcbiAgICovXG4gIHBpbmdJbnRlcnZhbD86IG51bWJlcjtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHRpbWVzIGRhdGFzb3VyY2Ugd2lsbCByZXRyeSB0aGUgc3RyZWFtIGJlZm9yZSBnaXZpbmcgdXAgKGRlZmF1bHQgaXMgYDNgKVxuICAgKi9cbiAgcmV0cnlDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogSWYgdGhpcyBvYmplY3QgaXMgbm90IHByZXNlbnQgY29udHJvbGxlciB3aWxsIG5vdCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgY29udHJvbGxlcj86IEFuZHJvaWRFeG9QbGF5ZXJDb250cm9sbGVyQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRFeG9wbGF5ZXJTdGF0ZSB7XG4gIFtzOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZEV4b1BsYXllckNvbnRyb2xsZXJDb25maWcge1xuICAvKipcbiAgICogSW1hZ2UgaW4gdGhlIGNvbnRyb2xsZXIuXG4gICAqL1xuICBzdHJlYW1JbWFnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgc3RyZWFtVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIHN0cmVhbURlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZGUgZW50aXJlIHByb2dyZXNzIGJhci5cbiAgICovXG4gIGhpZGVQcm9ncmVzcz86IHRydWU7XG5cbiAgLyoqXG4gICAqIElmIHByb2dyZXNzIGJhciBpcyB2aXNpYmxlIGhpZGUgY3VycmVudCBwb3NpdGlvbiBmcm9tIGl0XG4gICAqL1xuICBoaWRlUG9zaXRpb246IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJZiBwcm9ncmVzcyBiYXIgaXMgdmlzaWJsZSBIaWRlIHN0cmVhbSBkdXJhdGlvbiBmcm9tIGl0XG4gICAqL1xuICBoaWRlRHVyYXRpb246IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgcGxheWVyIGNvbnRyb2wgYnV0dG9uIGljb25zLlxuICAgKi9cbiAgY29udHJvbEljb25zPzoge1xuICAgIC8qKlxuICAgICAqIFJld2luZCBidXR0b24gaWNvbi5cbiAgICAgKi9cbiAgICBleG9fcmV3OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IGJ1dHRvbiBpY29uLlxuICAgICAqL1xuICAgIGV4b19wbGF5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSBidXR0b24gaWNvbi5cbiAgICAgKi9cbiAgICBleG9fcGF1c2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEZhc3QgZm9yd2FyZCBidXR0b24gaWNvbi5cbiAgICAgKi9cbiAgICBleG9fZmZ3ZDogc3RyaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEFuZHJvaWQgRXhvUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgbWVkaWEgcGxheWVyIHBsdWdpbiB1c2luZyBHb29nbGUncyBFeG9QbGF5ZXIgZnJhbWV3b3JrLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvRXhvUGxheWVyXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBbmRyb2lkRXhvUGxheWVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbmRyb2lkLWV4b3BsYXllci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5kcm9pZEV4b1BsYXllcjogQW5kcm9pZEV4b1BsYXllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hbmRyb2lkRXhvUGxheWVyLnNob3coe3VybDogJ2h0dHA6Ly93d3cueW91dHViZS5jb20vYXBpL21hbmlmZXN0L2Rhc2gvaWQvYmY1YmIyNDE5MzYwZGFmMS9zb3VyY2UveW91dHViZSd9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQW5kcm9pZEV4b1BsYXllclBhcmFtc1xuICogQW5kcm9pZEV4b3BsYXllclN0YXRlXG4gKiBBbmRyb2lkRXhvUGxheWVyQ29udHJvbGxlckNvbmZpZ1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWRFeG9QbGF5ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1leG9wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdFeG9QbGF5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zyb250eWFyZC9jb3Jkb3ZhLXBsdWdpbi1leG9wbGF5ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWRFeG9wbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93IHRoZSBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7QW5kcm9pZEV4b1BsYXllclBhcmFtc30gcGFyYW1ldGVycyBQYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8QW5kcm9pZEV4b3BsYXllclN0YXRlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdjbG9zZScsXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2UsXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc2hvdyhwYXJhbWV0ZXJzOiBBbmRyb2lkRXhvUGxheWVyUGFyYW1zKTogT2JzZXJ2YWJsZTxBbmRyb2lkRXhvcGxheWVyU3RhdGU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHN0cmVhbSB3aXRob3V0IGRpc3Bvc2luZyBvZiB0aGUgcGxheWVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgb2YgdGhlIG5ldyBzdHJlYW0uXG4gICAqIEBwYXJhbSB7QW5kcm9pZEV4b1BsYXllckNvbnRyb2xsZXJDb25maWd9IGNvbnRyb2xsZXIgQ29uZmlndXJhdGlvbiBvZiB0aGUgY29udHJvbGxlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U3RyZWFtKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNvbnRyb2xsZXI6IEFuZHJvaWRFeG9QbGF5ZXJDb250cm9sbGVyQ29uZmlnXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHBhdXNlIGlmIHBsYXlpbmcgYW5kIHBsYXkgaWYgcGF1c2VkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBsYXlQYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBwbGF5aW5nLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBKdW1wIHRvIGEgcGFydGljdWxhciBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyBQb3NpdGlvbiBpbiBzdHJlYW0gaW4gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlZWtUbyhtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBKdW1wIHRvIGEgcGFydGljdWxhciB0aW1lIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIFRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlZWtCeShtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcGxheWVyIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFuZHJvaWRFeG9wbGF5ZXJTdGF0ZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0YXRlKCk6IFByb21pc2U8QW5kcm9pZEV4b3BsYXllclN0YXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbnRyb2xsZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dDb250cm9sbGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjb250cm9sbGVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlQ29udHJvbGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb250cm9sbGVyIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7QW5kcm9pZEV4b1BsYXllckNvbnRyb2xsZXJDb25maWd9IGNvbnRyb2xsZXIgQ29uZmlndXJhdGlvbiBvZiB0aGUgY29udHJvbGxlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q29udHJvbGxlcihjb250cm9sbGVyOiBBbmRyb2lkRXhvUGxheWVyQ29udHJvbGxlckNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhbmQgZGlzcG9zZSBvZiBwbGF5ZXIsIGNhbGwgYmVmb3JlIGRlc3Ryb3kuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
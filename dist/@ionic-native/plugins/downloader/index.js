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
export var NotificationVisibility;
(function (NotificationVisibility) {
    NotificationVisibility[NotificationVisibility["Visible"] = 0] = "Visible";
    NotificationVisibility[NotificationVisibility["VisibleNotifyCompleted"] = 1] = "VisibleNotifyCompleted";
    NotificationVisibility[NotificationVisibility["VisibilityHidden"] = 2] = "VisibilityHidden";
    NotificationVisibility[NotificationVisibility["VisibleNotifyOnlyCompletion"] = 3] = "VisibleNotifyOnlyCompletion";
})(NotificationVisibility || (NotificationVisibility = {}));
var DownloaderOriginal = /** @class */ (function (_super) {
    __extends(DownloaderOriginal, _super);
    function DownloaderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DownloaderOriginal.prototype.download = function (request) { return cordova(this, "download", {}, arguments); };
    DownloaderOriginal.pluginName = "Downloader";
    DownloaderOriginal.plugin = "integrator-cordova-plugin-downloader";
    DownloaderOriginal.pluginRef = "cordova.plugins.Downloader";
    DownloaderOriginal.repo = "https://github.com/Luka313/integrator-cordova-plugin-downloader.git";
    DownloaderOriginal.platforms = ["Android"];
    return DownloaderOriginal;
}(IonicNativePlugin));
var Downloader = new DownloaderOriginal();
export { Downloader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Rvd25sb2FkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksc0JBS1g7QUFMRCxXQUFZLHNCQUFzQjtJQUNoQyx5RUFBVyxDQUFBO0lBQ1gsdUdBQTBCLENBQUE7SUFDMUIsMkZBQW9CLENBQUE7SUFDcEIsaUhBQStCLENBQUE7QUFDakMsQ0FBQyxFQUxXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFLakM7O0lBMEcrQiw4QkFBaUI7Ozs7SUFNL0MsNkJBQVEsYUFBQyxPQUF3Qjs7Ozs7O3FCQXhIbkM7RUFrSGdDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblZpc2liaWxpdHkge1xuICBWaXNpYmxlID0gMCxcbiAgVmlzaWJsZU5vdGlmeUNvbXBsZXRlZCA9IDEsXG4gIFZpc2liaWxpdHlIaWRkZW4gPSAyLFxuICBWaXNpYmxlTm90aWZ5T25seUNvbXBsZXRpb24gPSAzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRIdHRwSGVhZGVyIHtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzdGluYXRpb25EaXJlY3Rvcnkge1xuICBkaXJUeXBlOiBzdHJpbmc7XG4gIHN1YlBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZFJlcXVlc3Qge1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIHJlc291cmNlIHRvIGRvd25sb2FkXG4gICAqL1xuICB1cmk6IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSB0aXRsZSBvZiB0aGlzIGRvd25sb2FkLCB0byBiZSBkaXNwbGF5ZWQgaW4gbm90aWZpY2F0aW9ucyAoaWYgZW5hYmxlZCkuXG4gICAqIElmIG5vIHRpdGxlIGlzIGdpdmVuLCBhIGRlZmF1bHQgb25lIHdpbGwgYmUgYXNzaWduZWQgYmFzZWQgb24gdGhlIGRvd25sb2FkIGZpbGVuYW1lLCBvbmNlIHRoZSBkb3dubG9hZCBzdGFydHMuXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFNldCBhIGRlc2NyaXB0aW9uIG9mIHRoaXMgZG93bmxvYWQsIHRvIGJlIGRpc3BsYXllZCBpbiBub3RpZmljYXRpb25zIChpZiBlbmFibGVkKVxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZXQgdGhlIE1JTUUgY29udGVudCB0eXBlIG9mIHRoaXMgZG93bmxvYWQuIFRoaXMgd2lsbCBvdmVycmlkZSB0aGUgY29udGVudCB0eXBlIGRlY2xhcmVkIGluIHRoZSBzZXJ2ZXIncyByZXNwb25zZS5cbiAgICovXG4gIG1pbWVUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhpcyBkb3dubG9hZCBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBzeXN0ZW0ncyBEb3dubG9hZHMgVUkuIFRydWUgYnkgZGVmYXVsdC5cbiAgICovXG4gIHZpc2libGVJbkRvd25sb2Fkc1VpPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENvbnRyb2wgd2hldGhlciBhIHN5c3RlbSBub3RpZmljYXRpb24gaXMgcG9zdGVkIGJ5IHRoZSBkb3dubG9hZCBtYW5hZ2VyIHdoaWxlIHRoaXMgZG93bmxvYWQgaXMgcnVubmluZyBvciB3aGVuIGl0IGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIG5vdGlmaWNhdGlvblZpc2liaWxpdHk/OiBOb3RpZmljYXRpb25WaXNpYmlsaXR5O1xuICAvKipcbiAgICogU2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZSB0byBhIHBhdGggd2l0aGluIHRoZSBhcHBsaWNhdGlvbidzIGV4dGVybmFsIGZpbGVzIGRpcmVjdG9yeVxuICAgKi9cbiAgZGVzdGluYXRpb25JbkV4dGVybmFsRmlsZXNEaXI/OiBEZXN0aW5hdGlvbkRpcmVjdG9yeTtcbiAgLyoqXG4gICAqIFNldCB0aGUgbG9jYWwgZGVzdGluYXRpb24gZm9yIHRoZSBkb3dubG9hZGVkIGZpbGUgdG8gYSBwYXRoIHdpdGhpbiB0aGUgcHVibGljIGV4dGVybmFsIHN0b3JhZ2UgZGlyZWN0b3J5XG4gICAqL1xuICBkZXN0aW5hdGlvbkluRXh0ZXJuYWxQdWJsaWNEaXI/OiBEZXN0aW5hdGlvbkRpcmVjdG9yeTtcbiAgLyoqXG4gICAqIFNldCB0aGUgbG9jYWwgZGVzdGluYXRpb24gZm9yIHRoZSBkb3dubG9hZGVkIGZpbGUuXG4gICAqIE11c3QgYmUgYSBmaWxlIFVSSSB0byBhIHBhdGggb24gZXh0ZXJuYWwgc3RvcmFnZSwgYW5kIHRoZSBjYWxsaW5nIGFwcGxpY2F0aW9uIG11c3QgaGF2ZSB0aGUgV1JJVEVfRVhURVJOQUxfU1RPUkFHRSBwZXJtaXNzaW9uLlxuICAgKi9cbiAgZGVzdGluYXRpb25Vcmk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGQgYW4gSFRUUCBoZWFkZXIgdG8gYmUgaW5jbHVkZWQgd2l0aCB0aGUgZG93bmxvYWQgcmVxdWVzdC4gVGhlIGhlYWRlciB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBoZWFkZXJzPzogRG93bmxvYWRIdHRwSGVhZGVyW107XG59XG5cbi8qKlxuICogQG5hbWUgRG93bmxvYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpcyBkZXNpZ25lZCB0byBzdXBwb3J0IGRvd25sb2FkaW5nIGZpbGVzIHVzaW5nIEFuZHJvaWQgRG93bmxvYWRNYW5hZ2VyLlxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERvd25sb2FkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Rvd25sb2FkZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb3dubG9hZGVyOiBEb3dubG9hZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAgICB2YXIgcmVxdWVzdDogRG93bmxvYWRSZXF1ZXN0ID0ge1xuICogICAgICAgICAgIHVyaTogWU9VUl9VUkksXG4gKiAgICAgICAgICAgdGl0bGU6ICdNeURvd25sb2FkJyxcbiAqICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gKiAgICAgICAgICAgbWltZVR5cGU6ICcnLFxuICogICAgICAgICAgIHZpc2libGVJbkRvd25sb2Fkc1VpOiB0cnVlLFxuICogICAgICAgICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdHk6IE5vdGlmaWNhdGlvblZpc2liaWxpdHkuVmlzaWJsZU5vdGlmeUNvbXBsZXRlZCxcbiAqICAgICAgICAgICBkZXN0aW5hdGlvbkluRXh0ZXJuYWxGaWxlc0Rpcjoge1xuICogICAgICAgICAgICAgICBkaXJUeXBlOiAnRG93bmxvYWRzJyxcbiAqICAgICAgICAgICAgICAgc3ViUGF0aDogJ015RmlsZS5hcGsnXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfTtcbiAqXG4gKlxuICogICB0aGlzLmRvd25sb2FkZXIuZG93bmxvYWQocmVxdWVzdClcbiAqICAgXHRcdFx0LnRoZW4oKGxvY2F0aW9uOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKCdGaWxlIGRvd25sb2FkZWQgYXQ6Jytsb2NhdGlvbikpXG4gKiAgIFx0XHRcdC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE5vdGlmaWNhdGlvblZpc2liaWxpdHlcbiAqIEhlYWRlclxuICogRGVzdGluYXRpb25EaXJlY3RvcnlcbiAqIERvd25sb2FkSHR0cEhlYWRlclxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Rvd25sb2FkZXInLFxuICBwbHVnaW46ICdpbnRlZ3JhdG9yLWNvcmRvdmEtcGx1Z2luLWRvd25sb2FkZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuRG93bmxvYWRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTHVrYTMxMy9pbnRlZ3JhdG9yLWNvcmRvdmEtcGx1Z2luLWRvd25sb2FkZXIuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb3dubG9hZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIFN0YXJ0cyBhIG5ldyBkb3dubG9hZCBhbmQgcmV0dXJucyBsb2NhdGlvbiBvZiB0aGUgZG93bmxvYWRlZCBmaWxlIG9uIGNvbXBsZXRpb25cbiAgICogIEBwYXJhbSByZXF1ZXN0IHtEb3dubG9hZFJlcXVlc3R9XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkKHJlcXVlc3Q6IERvd25sb2FkUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybjtcbiAgfVxufVxuIl19
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
var LastCamOriginal = /** @class */ (function (_super) {
    __extends(LastCamOriginal, _super);
    function LastCamOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LastCamOriginal.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    LastCamOriginal.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    LastCamOriginal.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    LastCamOriginal.prototype.switchFlash = function () { return cordova(this, "switchFlash", {}, arguments); };
    LastCamOriginal.prototype.takePicture = function () { return cordova(this, "takePicture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCamOriginal.prototype.startVideoCapture = function () { return cordova(this, "startVideoCapture", {}, arguments); };
    LastCamOriginal.prototype.stopVideoCapture = function () { return cordova(this, "stopVideoCapture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCamOriginal.prototype.recordingTimer = function () { return cordova(this, "recordingTimer", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCamOriginal.prototype.watchRecordingTimer = function () { return cordova(this, "watchRecordingTimer", { "successIndex": 0, "errorIndex": 1, "observable": true }, arguments); };
    LastCamOriginal.pluginName = "LastCam";
    LastCamOriginal.plugin = "cordova-plugin-last-cam";
    LastCamOriginal.pluginRef = "LastCam";
    LastCamOriginal.repo = "https://github.com/bengejd/cordova-plugin-last-cam";
    LastCamOriginal.platforms = ["iOS"];
    return LastCamOriginal;
}(IonicNativePlugin));
var LastCam = new LastCamOriginal();
export { LastCam };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xhc3QtY2FtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBb0NMLDJCQUFpQjs7OztJQVU1Qyw2QkFBVyxhQUFDLE9BQThCO0lBUzFDLDRCQUFVO0lBU1YsOEJBQVk7SUFTWiw2QkFBVztJQVlYLDZCQUFXO0lBU1gsbUNBQWlCO0lBWWpCLGtDQUFnQjtJQVloQixnQ0FBYztJQWFkLHFDQUFtQjs7Ozs7O2tCQXJJckI7RUFzQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdENhbVN0YXJ0dXBPcHRpb25zIHtcbiAgLyoqIFRoZSBsZWZ0IGVkZ2UgaW4gcGl4ZWxzLCBkZWZhdWx0IDAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKiogVGhlIHRvcCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHk/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSB3aWR0aCBpbiBwaXhlbHMsIGRlZmF1bHQgd2luZG93LnNjcmVlbi53aWR0aCAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogVGhlIGhlaWdodCBpbiBwaXhlbHMsIGRlZmF1bHQgd2luZG93LnNjcmVlbi5oZWlnaHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKiBDaG9vc2UgdGhlIGNhbWVyYSB0byB1c2UgJ2Zyb250JyBvciAnYmFjaycsIGRlZmF1bHQgJ2Zyb250JyAqL1xuICBjYW1lcmE/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgTGFzdENhbVxuICogQGRlc2NyaXB0aW9uXG4gKiBMYXN0IENhbSBpcyBhIENhbWVyYSBQcmV2aWV3IHBsdWdpbiB0aGF0IGFsbG93cyB5b3UgdG8gdGFrZSBjYXB0dXJlIGJvdGggVmlkZW9zIGFuZCBpbWFnZXMgaW4gYVxuICogY3VzdG9tIGh0bWwgcHJldmlldyBvZiB5b3VyIGNob2ljZS5cbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogTGFzdENhbVN0YXJ0dXBPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTGFzdENhbScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxhc3QtY2FtJyxcbiAgcGx1Z2luUmVmOiAnTGFzdENhbScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYmVuZ2VqZC9jb3Jkb3ZhLXBsdWdpbi1sYXN0LWNhbScsXG4gIHBsYXRmb3JtczogWydpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYXN0Q2FtIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnRzIHRoZSBjYW1lcmEgcHJldmlldyBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtMYXN0Q2FtU3RhcnR1cE9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHN0YXJ0Q2FtZXJhKG9wdGlvbnM6IExhc3RDYW1TdGFydHVwT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBjYW1lcmEgcHJldmlldyBpbnN0YW5jZS4gKGlPUylcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCBmcm9tIHRoZSByZWFyIGNhbWVyYSBhbmQgZnJvbnQgY2FtZXJhLCBpZiBhdmFpbGFibGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3dpdGNoQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0aGUgZmxhc2ggbW9kZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzd2l0Y2hGbGFzaCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIHRoZSBwaWN0dXJlIChiYXNlNjQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMVxuICB9KVxuICB0YWtlUGljdHVyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgdmlkZW8gY2FwdHVyZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0VmlkZW9DYXB0dXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSB2aWRlbyBjYXB0dXJlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMVxuICB9KVxuICBzdG9wVmlkZW9DYXB0dXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21pc2Ugb2YgdGhlIHJlY29yZGluZ1RpbWVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgcmVjb3JkaW5nVGltZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgcmVjb3JkaW5nVGltZXIuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMSxcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHdhdGNoUmVjb3JkaW5nVGltZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
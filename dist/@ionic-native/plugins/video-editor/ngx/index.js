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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var VideoEditor = /** @class */ (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OptimizeForNetworkUse = {
            NO: 0,
            YES: 1
        };
        _this.OutputFileType = {
            M4V: 0,
            MPEG4: 1,
            M4A: 2,
            QUICK_TIME: 3
        };
        return _this;
    }
    VideoEditor.prototype.transcodeVideo = function (options) { return cordova(this, "transcodeVideo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.prototype.trim = function (options) { return cordova(this, "trim", { "callbackOrder": "reverse", "platforms": ["iOS"] }, arguments); };
    VideoEditor.prototype.createThumbnail = function (options) { return cordova(this, "createThumbnail", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.prototype.getVideoInfo = function (options) { return cordova(this, "getVideoInfo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditor.pluginName = "VideoEditor";
    VideoEditor.plugin = "cordova-plugin-video-editor";
    VideoEditor.pluginRef = "VideoEditor";
    VideoEditor.repo = "https://github.com/jbavari/cordova-plugin-video-editor";
    VideoEditor.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    VideoEditor = __decorate([
        Injectable()
    ], VideoEditor);
    return VideoEditor;
}(IonicNativePlugin));
export { VideoEditor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpZGVvLWVkaXRvci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSnZDLCtCQUFpQjs7O1FBQ2hELDJCQUFxQixHQUFHO1lBQ3RCLEVBQUUsRUFBRSxDQUFDO1lBQ0wsR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDO1FBRUYsb0JBQWMsR0FBRztZQUNmLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQztZQUNOLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQzs7O0lBVUYsb0NBQWMsYUFBQyxPQUF5QjtJQWF4QywwQkFBSSxhQUFDLE9BQW9CO0lBWXpCLHFDQUFlLGFBQUMsT0FBK0I7SUFZL0Msa0NBQVksYUFBQyxPQUE0Qjs7Ozs7O0lBMUQ5QixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBcEp4QjtFQW9KaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2NvZGVPcHRpb25zIHtcbiAgLyoqIFRoZSBwYXRoIHRvIHRoZSB2aWRlbyBvbiB0aGUgZGV2aWNlLiAqL1xuICBmaWxlVXJpOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBmaWxlIG5hbWUgZm9yIHRoZSB0cmFuc2NvZGVkIHZpZGVvICovXG4gIG91dHB1dEZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIEluc3RydWN0aW9ucyBvbiBob3cgdG8gZW5jb2RlIHRoZSB2aWRlby4gQW5kcm9pZCBpcyBhbHdheXMgbXA0ICovXG4gIG91dHB1dEZpbGVUeXBlPzogbnVtYmVyO1xuXG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGJlIHByb2Nlc3NlZCB3aXRoIHF1YWlsdHkgb3Igc3BlZWQgaW4gbWluZC4gaU9TIG9ubHkgKi9cbiAgb3B0aW1pemVGb3JOZXR3b3JrVXNlPzogbnVtYmVyO1xuXG4gIC8qKiBTYXZlIHRoZSBuZXcgdmlkZW8gdGhlIGxpYnJhcnkuIE5vdCBzdXBwb3J0ZWQgaW4gd2luZG93cy4gRGVmYXVsdHMgdG8gdHJ1ZSAqL1xuICBzYXZlVG9MaWJyYXJ5PzogYm9vbGVhbjtcblxuICAvKiogRGVsZXRlIHRoZSBvcmlnaW5hbCB2aWRlby4gQW5kcm9pZCBvbmx5LiBEZWZhdWx0cyB0byBmYWxzZSAqL1xuICBkZWxldGVJbnB1dEZpbGU/OiBib29sZWFuO1xuXG4gIC8qKiBpT1Mgb25seS4gRGVmYXVsdHMgdG8gdHJ1ZSAqL1xuICBtYWludGFpbkFzcGVjdFJhdGlvPzogYm9vbGVhbjtcblxuICAvKiogV2lkdGggb2YgdGhlIHJlc3VsdCAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogSGVpZ2h0IG9mIHRoZSByZXN1bHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKiBCaXRyYXRlIGluIGJpdHMuIERlZmF1bHRzIHRvIDEgbWVnYWJpdCAoMTAwMDAwMCkuICovXG4gIHZpZGVvQml0cmF0ZT86IG51bWJlcjtcblxuICAvKiogRnJhbWVzIHBlciBzZWNvbmQgb2YgdGhlIHJlc3VsdC4gQW5kcm9pZCBvbmx5LiBEZWZhdWx0cyB0byAyNC4gKi9cbiAgZnBzPzogbnVtYmVyO1xuXG4gIC8qKiBOdW1iZXIgb2YgYXVkaW8gY2hhbm5lbHMuIGlPUyBvbmx5LiBEZWZhdWx0cyB0byAyLiAqL1xuICBhdWRpb0NoYW5uZWxzPzogbnVtYmVyO1xuXG4gIC8qIFNhbXBsZSByYXRlIGZvciB0aGUgYXVkaW8uIGlPUyBvbmx5LiBEZWZhdWx0cyB0byA0NDEwMCovXG4gIGF1ZGlvU2FtcGxlUmF0ZT86IG51bWJlcjtcblxuICAvKiogU2FtcGxlIHJhdGUgZm9yIHRoZSBhdWRpby4gaU9TIG9ubHkuIERlZmF1bHRzIHRvIDEyOCBraWxvYml0cyAoMTI4MDAwKS4gKi9cbiAgYXVkaW9CaXRyYXRlPzogbnVtYmVyO1xuXG4gIC8qKiBOb3Qgc3VwcG9ydGVkIGluIHdpbmRvd3MsIHByb2dyZXNzIG9uIHRoZSB0cmFuc2NvZGUuIGluZm8gd2lsbCBiZSBhIG51bWJlciBmcm9tIDAgdG8gMTAwICovXG4gIHByb2dyZXNzPzogKGluZm86IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmltT3B0aW9ucyB7XG4gIC8qKiBQYXRoIHRvIGlucHV0IHZpZGVvLiAqL1xuICBmaWxlVXJpOiBzdHJpbmc7XG5cbiAgLyoqIFRpbWUgdG8gc3RhcnQgdHJpbW1pbmcgaW4gc2Vjb25kcyAqL1xuICB0cmltU3RhcnQ6IG51bWJlcjtcblxuICAvKiogVGltZSB0byBlbmQgdHJpbW1pbmcgaW4gc2Vjb25kcyAqL1xuICB0cmltRW5kOiBudW1iZXI7XG5cbiAgLyoqIE91dHB1dCBmaWxlIG5hbWUgKi9cbiAgb3V0cHV0RmlsZU5hbWU6IHN0cmluZztcblxuICAvKiogUHJvZ3Jlc3Mgb24gdHJhbnNjb2RlLiBpbmZvIHdpbGwgYmUgYSBudW1iZXIgZnJvbSAwIHRvIDEwMCAqL1xuICBwcm9ncmVzcz86IChpbmZvOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlVGh1bWJuYWlsT3B0aW9ucyB7XG4gIC8qKiBUaGUgcGF0aCB0byB0aGUgdmlkZW8gb24gdGhlIGRldmljZSAqL1xuICBmaWxlVXJpOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBmaWxlIG5hbWUgZm9yIHRoZSBKUEVHIGltYWdlICovXG4gIG91dHB1dEZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIExvY2F0aW9uIGluIHRoZSB2aWRlbyB0byBjcmVhdGUgdGhlIHRodW1ibmFpbCAoaW4gc2Vjb25kcykgKi9cbiAgYXRUaW1lPzogbnVtYmVyO1xuXG4gIC8qKiBXaWR0aCBvZiB0aGUgdGh1bWJuYWlsLiAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogSGVpZ2h0IG9mIHRoZSB0aHVtYm5haWwuICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKiogUXVhbGl0eSBvZiB0aGUgdGh1bWJuYWlsIChiZXR3ZWVuIDEgYW5kIDEwMCkuICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0VmlkZW9JbmZvT3B0aW9ucyB7XG4gIC8qKiBUaGUgcGF0aCB0byB0aGUgdmlkZW8gb24gdGhlIGRldmljZS4gKi9cbiAgZmlsZVVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvSW5mbyB7XG4gIC8qKiBXaWR0aCBvZiB0aGUgdmlkZW8gaW4gcGl4ZWxzLiAqL1xuICB3aWR0aDogbnVtYmVyO1xuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIHZpZGVvIGluIHBpeGVscy4gKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqIE9yaWVudGF0aW9uIG9mIHRoZSB2aWRlby4gV2lsbCBiZSBlaXRoZXIgcG9ydHJhaXQgb3IgbGFuZHNjYXBlLiAqL1xuICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyB8ICdsYW5kc2NhcGUnO1xuXG4gIC8qKiBEdXJhdGlvbiBvZiB0aGUgdmlkZW8gaW4gc2Vjb25kcy4gKi9cbiAgZHVyYXRpb246IG51bWJlcjtcblxuICAvKiogU2l6ZSBvZiB0aGUgdmlkZW8gaW4gYnl0ZXMuICovXG4gIHNpemU6IG51bWJlcjtcblxuICAvKiogQml0cmF0ZSBvZiB0aGUgdmlkZW8gaW4gYml0cyBwZXIgc2Vjb25kLiAqL1xuICBiaXRyYXRlOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgVmlkZW8gRWRpdG9yXG4gKiBAZGVzY3JpcHRpb24gRWRpdCB2aWRlb3MgdXNpbmcgbmF0aXZlIGRldmljZSBBUElzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBWaWRlb0VkaXRvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdmlkZW8tZWRpdG9yL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWRlb0VkaXRvcjogVmlkZW9FZGl0b3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudmlkZW9FZGl0b3IudHJhbnNjb2RlVmlkZW8oe1xuICogICBmaWxlVXJpOiAnL3BhdGgvdG8vaW5wdXQubW92JyxcbiAqICAgb3V0cHV0RmlsZU5hbWU6ICdvdXRwdXQubXA0JyxcbiAqICAgb3V0cHV0RmlsZVR5cGU6IFZpZGVvRWRpdG9yLk91dHB1dEZpbGVUeXBlLk1QRUc0XG4gKiB9KVxuICogLnRoZW4oKGZpbGVVcmk6IHN0cmluZykgPT4gY29uc29sZS5sb2coJ3ZpZGVvIHRyYW5zY29kZSBzdWNjZXNzJywgZmlsZVVyaSkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCd2aWRlbyB0cmFuc2NvZGUgZXJyb3InLCBlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFRyYW5zY29kZU9wdGlvbnNcbiAqIFRyaW1PcHRpb25zXG4gKiBDcmVhdGVUaHVtYm5haWxPcHRpb25zXG4gKiBHZXRWaWRlb0luZm9PcHRpb25zXG4gKiBWaWRlb0luZm9cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWRlb0VkaXRvcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXZpZGVvLWVkaXRvcicsXG4gIHBsdWdpblJlZjogJ1ZpZGVvRWRpdG9yJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qYmF2YXJpL2NvcmRvdmEtcGx1Z2luLXZpZGVvLWVkaXRvcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZGVvRWRpdG9yIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBPcHRpbWl6ZUZvck5ldHdvcmtVc2UgPSB7XG4gICAgTk86IDAsXG4gICAgWUVTOiAxXG4gIH07XG5cbiAgT3V0cHV0RmlsZVR5cGUgPSB7XG4gICAgTTRWOiAwLFxuICAgIE1QRUc0OiAxLFxuICAgIE00QTogMixcbiAgICBRVUlDS19USU1FOiAzXG4gIH07XG5cbiAgLyoqXG4gICAqIFRyYW5zY29kZSBhIHZpZGVvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUcmFuc2NvZGVPcHRpb25zfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHBhdGggb2YgdGhlIHRyYW5zY29kZWQgdmlkZW9cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgdHJhbnNjb2RlVmlkZW8ob3B0aW9uczogVHJhbnNjb2RlT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaW0gYSB2aWRlb1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7VHJpbU9wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcGF0aCBvZiB0aGUgdHJpbW1lZCB2aWRlb1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgdHJpbShvcHRpb25zOiBUcmltT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIEpQRUcgdGh1bWJuYWlsIGZyb20gYSB2aWRlb1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7Q3JlYXRlVGh1bWJuYWlsT3B0aW9uc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBwYXRoIHRvIHRoZSBqcGVnIGltYWdlIG9uIHRoZSBkZXZpY2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY3JlYXRlVGh1bWJuYWlsKG9wdGlvbnM6IENyZWF0ZVRodW1ibmFpbE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mbyBvbiBhIHZpZGVvICh3aWR0aCwgaGVpZ2h0LCBvcmllbnRhdGlvbiwgZHVyYXRpb24sIHNpemUsICYgYml0cmF0ZSlcbiAgICogQHBhcmFtIG9wdGlvbnMge0dldFZpZGVvSW5mb09wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8VmlkZW9JbmZvPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZyBpbmZvIG9uIHRoZSB2aWRlb1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBnZXRWaWRlb0luZm8ob3B0aW9uczogR2V0VmlkZW9JbmZvT3B0aW9ucyk6IFByb21pc2U8VmlkZW9JbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
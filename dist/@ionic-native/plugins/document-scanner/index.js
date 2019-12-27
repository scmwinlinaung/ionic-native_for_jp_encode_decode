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
export var DocumentScannerSourceType;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(DocumentScannerSourceType || (DocumentScannerSourceType = {}));
var DocumentScannerOriginal = /** @class */ (function (_super) {
    __extends(DocumentScannerOriginal, _super);
    function DocumentScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScannerOriginal.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScannerOriginal.pluginName = "DocumentScanner";
    DocumentScannerOriginal.plugin = "cordova-plugin-document-scanner";
    DocumentScannerOriginal.pluginRef = "scan";
    DocumentScannerOriginal.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScannerOriginal.platforms = ["Android", "iOS"];
    return DocumentScannerOriginal;
}(IonicNativePlugin));
var DocumentScanner = new DocumentScannerOriginal();
export { DocumentScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXNjYW5uZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVkseUJBV1g7QUFYRCxXQUFZLHlCQUF5QjtJQUNuQzs7O09BR0c7SUFDSCw2RUFBVSxDQUFBO0lBRVY7O09BRUc7SUFDSCwrRUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQVhXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFXcEM7O0lBa0VvQyxtQ0FBaUI7Ozs7SUFVcEQsaUNBQU8sYUFBQyxJQUE2Qjs7Ozs7OzBCQTFGdkM7RUFnRnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGUge1xuICAvKipcbiAgICogU2NhbiBkaXJlY3RseSBmcm9tIGRldmljZSBjYW1lcmEuXG4gICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAqL1xuICBDQU1FUkEgPSAxLFxuXG4gIC8qKlxuICAgKiBTY2FuIGZyb20gYW4gaW1hZ2UgYWxyZWFkeSBzdG9yZWQgb24gZGV2aWNlLlxuICAgKi9cbiAgR0FMTEVSWSA9IDBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNjYW5uZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIENob29zZSB0byBzY2FuIGZyb20gY2FtZXJhIG9yIGV4aXN0aW5nIGltYWdlIGZpbGUuIE9ubHkgdmFsaWQgZm9yIEFuZHJvaWQuXG4gICAqL1xuICBzb3VyY2VUeXBlPzogRG9jdW1lbnRTY2FubmVyU291cmNlVHlwZTtcblxuICAvKipcbiAgICogRmlsZW5hbWUgdG8gc2F2ZSBzY2FubmVkIGltYWdlIHRvIChtaW51cyBleHRlbnNpb24sIHdoaWNoIGlzIGFsd2F5cyBcIi5wbmdcIikuXG4gICAqIE9ubHkgdmFsaWQgZm9yIGlPUy4gQ2FsbGVyIGlzIHJlc3BvbnNpYmxlIGZvciBjbGVhbmluZyB1cCBhbnkgZmlsZXMgY3JlYXRlZFxuICAgKiBpZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gYW55dGhpbmcgb3RoZXIgdGhhbiB0aGUgZGVmYXVsdCB2YWx1ZSxcbiAgICogd2hpY2ggaXMgXCJpbWFnZVwiLlxuICAgKi9cbiAgZmlsZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFF1YWxpdHkgdG8gdXNlIHdoZW4gY2FwdHVyaW5nIHRoZSBpbWFnZSwgbXVzdCBiZSBhIGZsb2F0IHZhbHVlXG4gICAqIGZyb20gMS4wKGRlZmF1bHQgLSBIaWdoZXN0IHF1YWxpdHkpIHRvIDUuMChMb3dlc3QgUXVhbGl0eSkuIEFueSB2YWx1ZVxuICAgKiBpbiBiZXR3ZWVuIHdpbGwgYmUgYWNjZXB0ZWQuIEFueSB2YWx1ZSBub3QgZXF1YWwgdG8gb3Igbm90IGJldHdlZW4gdGhlc2UgdmFsdWVzXG4gICAqICB3aWxsIGRlZmF1bHQgdG8gdGhlIGhpZ2hlc3QgcXVhbGl0eSBvZiAxLjAuXG4gICAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgaW1hZ2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIGEgYmFzZTY0IGVuY29kaW5nIGluc3RlYWQgb2YgYXMgYSBmaWxlIFVSTC5cbiAgICogSWYgdHJ1ZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiB0aGUgc2Nhbm5lZCBpbWFnZSBhcyBiYXNlNjQuIElmIGZhbHNlLFxuICAgKiB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIHRoZSBpbWFnZSBVUkwgb2YgdGhlIGltYWdlLlxuICAgKi9cbiAgcmV0dXJuQmFzZTY0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudCBTY2FubmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb2Nlc3NlcyBpbWFnZXMgb2YgZG9jdW1lbnRzLCBjb21wZW5zYXRpbmcgZm9yIHBlcnNwZWN0aXZlLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRTY2FubmVyLCBEb2N1bWVudFNjYW5uZXJPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kb2N1bWVudC1zY2FubmVyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudFNjYW5uZXI6IERvY3VtZW50U2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IG9wdHM6IERvY3VtZW50U2Nhbm5lck9wdGlvbnMgPSB7fTtcbiAqIHRoaXMuZG9jdW1lbnRTY2FubmVyLnNjYW5Eb2N1bWVudChvcHRzKVxuICogICAudGhlbigocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBEb2N1bWVudFNjYW5uZXJPcHRpb25zXG4gKiBAZW51bXNcbiAqIERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGVcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEb2N1bWVudFNjYW5uZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1zY2FubmVyJyxcbiAgcGx1Z2luUmVmOiAnc2NhbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtc2Nhbm5lcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2Nhbm5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU2NhbiBhIGRvY3VtZW50XG4gICAqIEBwYXJhbSBvcHRzIHtEb2N1bWVudFNjYW5uZXJPcHRpb25zfSBvcHRpb25hbCBwYXJhbWV0ZXIgZm9yIGNvbnRyb2xsaW5nIHNjYW5uaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gZmlsZSBVUkwgb2Ygc2Nhbm5lZCBkb2N1bWVudCBpbWFnZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzY2FuRG9jKG9wdHM/OiBEb2N1bWVudFNjYW5uZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
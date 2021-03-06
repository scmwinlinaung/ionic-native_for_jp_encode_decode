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
export var OCRSourceType;
(function (OCRSourceType) {
    /**
     * Normal processing from a file URL. This is the overall recommended choice
     * for most applications. The distinction between file and native URLs is
     * only relevant on iOS; under Android `NORMFILEURL` and `NORMNATIVEURL`
     * are interchangeable.
     */
    OCRSourceType[OCRSourceType["NORMFILEURL"] = 0] = "NORMFILEURL";
    /**
     * Normal processing from a native URL. Since this source type uses deprecated
     * OS APIs to interact with the camera plugin, it is best avoided, especially
     * if ongoing forward compatibility is a concern. For further information, see
     * https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr#plugin-usage
     * Under Android, this is equivalent to `NORMFILEURL`.
     */
    OCRSourceType[OCRSourceType["NORMNATIVEURL"] = 1] = "NORMNATIVEURL";
    /**
     * Fast processing from a file URL. As the compression done internally causes
     * a significant loss in extraction quality, it should only be preferred when
     * dealing with large images containing significant amounts of text, where
     * the execution time required to perform normal processing is prohibitive.
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTFILEURL"] = 2] = "FASTFILEURL";
    /**
     * Fast processing from a native URL. See comments above for `FASTFILEURL`
     * concerning quality loss.
     *
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTNATIVEURL"] = 3] = "FASTNATIVEURL";
    /**
     * Normal processing from a base64-encoded string. Quality is equivalent
     * to `NORMFILEURL`, but due to significantly higher memory requirements,
     * is only appropriate for use with very small images.
     */
    OCRSourceType[OCRSourceType["BASE64"] = 4] = "BASE64";
})(OCRSourceType || (OCRSourceType = {}));
var OCR = /** @class */ (function (_super) {
    __extends(OCR, _super);
    function OCR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OCR.prototype.recText = function (sourceType, source) { return cordova(this, "recText", {}, arguments); };
    OCR.pluginName = "OCR";
    OCR.plugin = "cordova-plugin-mobile-ocr";
    OCR.pluginRef = "textocr";
    OCR.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr";
    OCR.platforms = ["Android", "iOS"];
    OCR = __decorate([
        Injectable()
    ], OCR);
    return OCR;
}(IonicNativePlugin));
export { OCR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29jci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxhQTJDWDtBQTNDRCxXQUFZLGFBQWE7SUFDdkI7Ozs7O09BS0c7SUFDSCwrREFBZSxDQUFBO0lBRWY7Ozs7OztPQU1HO0lBQ0gsbUVBQWlCLENBQUE7SUFFakI7Ozs7Ozs7T0FPRztJQUNILCtEQUFlLENBQUE7SUFFZjs7Ozs7O09BTUc7SUFDSCxtRUFBaUIsQ0FBQTtJQUVqQjs7OztPQUlHO0lBQ0gscURBQVUsQ0FBQTtBQUNaLENBQUMsRUEzQ1csYUFBYSxLQUFiLGFBQWEsUUEyQ3hCOztJQTJHd0IsdUJBQWlCOzs7O0lBU3hDLHFCQUFPLGFBQUMsVUFBeUIsRUFBRSxNQUFjOzs7Ozs7SUFUdEMsR0FBRztRQURmLFVBQVUsRUFBRTtPQUNBLEdBQUc7Y0F6SmhCO0VBeUp5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBPQ1JTb3VyY2VUeXBlIHtcbiAgLyoqXG4gICAqIE5vcm1hbCBwcm9jZXNzaW5nIGZyb20gYSBmaWxlIFVSTC4gVGhpcyBpcyB0aGUgb3ZlcmFsbCByZWNvbW1lbmRlZCBjaG9pY2VcbiAgICogZm9yIG1vc3QgYXBwbGljYXRpb25zLiBUaGUgZGlzdGluY3Rpb24gYmV0d2VlbiBmaWxlIGFuZCBuYXRpdmUgVVJMcyBpc1xuICAgKiBvbmx5IHJlbGV2YW50IG9uIGlPUzsgdW5kZXIgQW5kcm9pZCBgTk9STUZJTEVVUkxgIGFuZCBgTk9STU5BVElWRVVSTGBcbiAgICogYXJlIGludGVyY2hhbmdlYWJsZS5cbiAgICovXG4gIE5PUk1GSUxFVVJMID0gMCxcblxuICAvKipcbiAgICogTm9ybWFsIHByb2Nlc3NpbmcgZnJvbSBhIG5hdGl2ZSBVUkwuIFNpbmNlIHRoaXMgc291cmNlIHR5cGUgdXNlcyBkZXByZWNhdGVkXG4gICAqIE9TIEFQSXMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgY2FtZXJhIHBsdWdpbiwgaXQgaXMgYmVzdCBhdm9pZGVkLCBlc3BlY2lhbGx5XG4gICAqIGlmIG9uZ29pbmcgZm9yd2FyZCBjb21wYXRpYmlsaXR5IGlzIGEgY29uY2Vybi4gRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24sIHNlZVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tbW9iaWxlLW9jciNwbHVnaW4tdXNhZ2VcbiAgICogVW5kZXIgQW5kcm9pZCwgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGBOT1JNRklMRVVSTGAuXG4gICAqL1xuICBOT1JNTkFUSVZFVVJMID0gMSxcblxuICAvKipcbiAgICogRmFzdCBwcm9jZXNzaW5nIGZyb20gYSBmaWxlIFVSTC4gQXMgdGhlIGNvbXByZXNzaW9uIGRvbmUgaW50ZXJuYWxseSBjYXVzZXNcbiAgICogYSBzaWduaWZpY2FudCBsb3NzIGluIGV4dHJhY3Rpb24gcXVhbGl0eSwgaXQgc2hvdWxkIG9ubHkgYmUgcHJlZmVycmVkIHdoZW5cbiAgICogZGVhbGluZyB3aXRoIGxhcmdlIGltYWdlcyBjb250YWluaW5nIHNpZ25pZmljYW50IGFtb3VudHMgb2YgdGV4dCwgd2hlcmVcbiAgICogdGhlIGV4ZWN1dGlvbiB0aW1lIHJlcXVpcmVkIHRvIHBlcmZvcm0gbm9ybWFsIHByb2Nlc3NpbmcgaXMgcHJvaGliaXRpdmUuXG4gICAqIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGZpbGUgYW5kIG5hdGl2ZSBVUkxzIGlzIG9ubHkgcmVsZXZhbnQgb24gaU9TO1xuICAgKiB1bmRlciBBbmRyb2lkIGBGQVNURklMRVVSTGAgYW5kIGBGQVNUTkFUSVZFVVJMYCBhcmUgaW50ZXJjaGFuZ2VhYmxlLlxuICAgKi9cbiAgRkFTVEZJTEVVUkwgPSAyLFxuXG4gIC8qKlxuICAgKiBGYXN0IHByb2Nlc3NpbmcgZnJvbSBhIG5hdGl2ZSBVUkwuIFNlZSBjb21tZW50cyBhYm92ZSBmb3IgYEZBU1RGSUxFVVJMYFxuICAgKiBjb25jZXJuaW5nIHF1YWxpdHkgbG9zcy5cbiAgICpcbiAgICogVGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gZmlsZSBhbmQgbmF0aXZlIFVSTHMgaXMgb25seSByZWxldmFudCBvbiBpT1M7XG4gICAqIHVuZGVyIEFuZHJvaWQgYEZBU1RGSUxFVVJMYCBhbmQgYEZBU1ROQVRJVkVVUkxgIGFyZSBpbnRlcmNoYW5nZWFibGUuXG4gICAqL1xuICBGQVNUTkFUSVZFVVJMID0gMyxcblxuICAvKipcbiAgICogTm9ybWFsIHByb2Nlc3NpbmcgZnJvbSBhIGJhc2U2NC1lbmNvZGVkIHN0cmluZy4gUXVhbGl0eSBpcyBlcXVpdmFsZW50XG4gICAqIHRvIGBOT1JNRklMRVVSTGAsIGJ1dCBkdWUgdG8gc2lnbmlmaWNhbnRseSBoaWdoZXIgbWVtb3J5IHJlcXVpcmVtZW50cyxcbiAgICogaXMgb25seSBhcHByb3ByaWF0ZSBmb3IgdXNlIHdpdGggdmVyeSBzbWFsbCBpbWFnZXMuXG4gICAqL1xuICBCQVNFNjQgPSA0LFxufVxuXG4vKipcbiAqIEZvdXIgcG9pbnRzIChvcmRlcmVkIGluIGNsb2Nrd2lzZSBkaXJlY3Rpb24pIHRoYXQgZW5jbG9zZSBhIHRleHRcbiAqIGNvbXBvbmVudC4gTWF5IG5vdCBiZSBheGlzLWFsaWduZWQgZHVlIHRvIHBlcnNwZWN0aXZlIHNrZXcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT0NSQ29ybmVycyB7XG4gIHgxOiBudW1iZXI7XG4gIHkxOiBudW1iZXI7XG4gIHgyOiBudW1iZXI7XG4gIHkyOiBudW1iZXI7XG4gIHgzOiBudW1iZXI7XG4gIHkzOiBudW1iZXI7XG4gIHg0OiBudW1iZXI7XG4gIHk0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQW4gYXhpcy1hbGlnbmVkIGJvdW5kaW5nIHJlY3RhbmdsZS4gYHhgIGFuZCBgeWAgcmVwcmVzZW50IHRoZSB0b3AgbGVmdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPQ1JSZWN0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoZSBgcmVjVGV4dGAgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9DUlJlc3VsdCB7XG4gIC8qKlxuICAgKiBXYXMgYW55IHRleHQgZXh0cmFjdGVkPyBJZiBgZm91bmRUZXh0YCBpcyBmYWxzZSwgbm8gb3RoZXIgZmllbGRzIGFyZVxuICAgKiByZXR1cm5lZC4gSWYgZm91bmRUZXh0IGlzIHRydWUsIGFsbCBvdGhlciBmaWVsZHMgYXJlIHJlbGlhYmxlLlxuICAgKi9cbiAgZm91bmRUZXh0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGJsb2NrIGlzIHRoZSBsYXJnZXN0IHVuaXQgb2YgdGV4dCwgd2hpY2ggY2FuIGJlIHRob3VnaHQgb2YgYXMgYSBwYXJhZ3JhcGguXG4gICAqIFRoaXMgZmllbGQgY29uc2lzdHMgb2Ygc2V2ZXJhbCBwYXJhbGxlbCBhcnJheXMsIHNvIHRoZSB0ZXh0IGluIGBibG9ja3RleHRbMF1gXG4gICAqIGlzIGJvdW5kZWQgYnkgYGJsb2NrcG9pbnRzWzBdYCBhbmQgYGJsb2NrZnJhbWVbMF1gLlxuICAgKi9cbiAgYmxvY2tzOiB7XG4gICAgYmxvY2t0ZXh0OiBzdHJpbmdbXTtcbiAgICBibG9ja3BvaW50czogT0NSQ29ybmVyc1tdO1xuICAgIGJsb2NrZnJhbWU6IE9DUlJlY3RbXTtcbiAgfTtcblxuICAvKipcbiAgICogQSBsaW5lIGlzIHRoZSBjZW50cmFsIHVuaXQgb2YgdGV4dCwgY29udGFpbmluZyBzZXZlcmFsIGVsZW1lbnRzLiBBIGJsb2NrXG4gICAqIGNhbiBjb250YWluIE4gbGluZXMuIFRoaXMgZmllbGQgY29uc2lzdHMgb2Ygc2V2ZXJhbCBwYXJhbGxlbCBhcnJheXMsIHNvIHRoZVxuICAgKiB0ZXh0IGluIGBsaW5ldGV4dFswXWAgaXMgYm91bmRlZCBieSBgbGluZXBvaW50c1swXWAgYW5kIGBsaW5lZnJhbWVbMF1gLlxuICAgKi9cbiAgbGluZXM6IHtcbiAgICBsaW5ldGV4dDogc3RyaW5nW107XG4gICAgbGluZXBvaW50czogT0NSQ29ybmVyc1tdO1xuICAgIGxpbmVmcmFtZTogT0NSUmVjdFtdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIHdvcmQgKG9yIGVsZW1lbnQpIGlzIHRoZSBzbWFsbGVzdCB1bml0IG9mIHRleHQuIFRoaXMgZmllbGQgY29uc2lzdHMgb2ZcbiAgICogc2V2ZXJhbCBwYXJhbGxlbCBhcnJheXMsIHNvIHRoZSB0ZXh0IGluIGB3b3JkdGV4dFswXWAgaXMgYm91bmRlZCBieVxuICAgKiBgd29yZHBvaW50c1swXWAgYW5kIGB3b3JkZnJhbWVbMF1gLlxuICAgKi9cbiAgd29yZHM6IHtcbiAgICB3b3JkdGV4dDogc3RyaW5nW107XG4gICAgd29yZHBvaW50czogT0NSQ29ybmVyc1tdO1xuICAgIHdvcmRmcmFtZTogT0NSUmVjdFtdO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIE9DUlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhdHRlbXB0cyB0byBpZGVudGlmeSBhbmQgZXh0cmFjdCB0ZXh0IGZyb20gYW4gaW1hZ2UuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPQ1IsIE9DUlNvdXJjZVR5cGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL29jci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG9jcjogT0NSKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm9jci5yZWNUZXh0KE9DUlNvdXJjZVR5cGUuTk9STUZJTEVVUkwsIFwiZmlsZTovL3BhdGgvdG8vaW1hZ2UucG5nXCIpXG4gKiAgIC50aGVuKChyZXM6IE9DUlJlc3VsdCkgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBPQ1JDb3JuZXJzXG4gKiBPQ1JSZWN0XG4gKiBPQ1JSZXN1bHRcbiAqXG4gKiBAZW51bXNcbiAqIE9DUlNvdXJjZVR5cGVcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdPQ1InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tb2JpbGUtb2NyJyxcbiAgcGx1Z2luUmVmOiAndGV4dG9jcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tbW9iaWxlLW9jcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9DUiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogRXh0cmFjdCB0ZXh0IGZyb20gaW1hZ2VcbiAgICogQHBhcmFtIHNvdXJjZVR5cGUge09DUlNvdXJjZVR5cGV9IHR5cGUgb2YgaW1hZ2Ugc291cmNlXG4gICAqIEBwYXJhbSBzb3VyY2Uge3N0cmluZ30gaW1hZ2Ugc291cmNlIChlaXRoZXIgZmlsZSBVUkwgb3IgYmFzZTY0IHN0cmluZylcbiAgICogQHJldHVybiB7UHJvbWlzZTxPQ1JSZXN1bHQ+fSBleHRyYWN0ZWQgdGV4dCBhbmQgZ2VvbWV0cnlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVjVGV4dChzb3VyY2VUeXBlOiBPQ1JTb3VyY2VUeXBlLCBzb3VyY2U6IHN0cmluZyk6IFByb21pc2U8T0NSUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==
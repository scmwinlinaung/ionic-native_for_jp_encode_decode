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
var InAppReviewOriginal = /** @class */ (function (_super) {
    __extends(InAppReviewOriginal, _super);
    function InAppReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReviewOriginal.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReviewOriginal.pluginName = "InAppReview";
    InAppReviewOriginal.plugin = "com.omarben.inappreview";
    InAppReviewOriginal.pluginRef = "inappreview";
    InAppReviewOriginal.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReviewOriginal.platforms = ["iOS"];
    return InAppReviewOriginal;
}(IonicNativePlugin));
var InAppReview = new InAppReviewOriginal();
export { InAppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1yZXZpZXcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUN2QywrQkFBaUI7Ozs7SUFNaEQsbUNBQWE7Ozs7OztzQkExQ2Y7RUFvQ2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbmFtZSBJbiBBcHAgUmV2aWV3XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgdXNlIHRoZSBpT1MgY2xhc3MgU0tTdG9yZeKAi1Jldmlld+KAi0NvbnRyb2xsZXIgdG8gb3BlbiB0aGUgaW5BcHAgcmV2aWV3IHBvcHVwIGF2YWlsYWJsZSBzaW5jZSBpT1MgMTAuM1xuICpcbiAqIFRoaXMgZnVuY3Rpb25hbGl0eSBvbmx5IHdvcmtzIG9uIGlPUyBkZXZpY2VzXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBSZXZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luLWFwcC1yZXZpZXcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbkFwcFJldmlldzogSW5BcHBSZXZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmluQXBwUmV2aWV3LnJlcXVlc3RSZXZpZXcoKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luQXBwUmV2aWV3JyxcbiAgcGx1Z2luOiAnY29tLm9tYXJiZW4uaW5hcHByZXZpZXcnLFxuICBwbHVnaW5SZWY6ICdpbmFwcHJldmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb21heGxpdmUvY29tLm9tYXJiZW4uaW5hcHByZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBSZXZpZXcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIHRoZSBpbkFwcCByZXZpZXcgcG9wdXBcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJldmlldygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==
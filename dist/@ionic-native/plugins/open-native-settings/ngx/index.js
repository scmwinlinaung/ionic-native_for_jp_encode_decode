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
var OpenNativeSettings = /** @class */ (function (_super) {
    __extends(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenNativeSettings.prototype.open = function (setting) { return cordova(this, "open", {}, arguments); };
    OpenNativeSettings.pluginName = "OpenNativeSettings";
    OpenNativeSettings.plugin = "cordova-open-native-settings";
    OpenNativeSettings.pluginRef = "cordova.plugins.settings";
    OpenNativeSettings.repo = "https://github.com/guyromb/Cordova-open-native-settings";
    OpenNativeSettings.platforms = ["Android", "iOS"];
    OpenNativeSettings = __decorate([
        Injectable()
    ], OpenNativeSettings);
    return OpenNativeSettings;
}(IonicNativePlugin));
export { OpenNativeSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW4tbmF0aXZlLXNldHRpbmdzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1HaEMsc0NBQWlCOzs7O0lBT3ZELGlDQUFJLGFBQUMsT0FBbUM7Ozs7OztJQVA3QixrQkFBa0I7UUFEOUIsVUFBVSxFQUFFO09BQ0Esa0JBQWtCOzZCQXBHL0I7RUFvR3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBPcGVuIE5hdGl2ZSBTZXR0aW5nc1xuICogQGRlc2NyaXB0aW9uXG4gKiBQbHVnaW4gdG8gb3BlbiBuYXRpdmUgc2NyZWVucyBvZiBpT1MvYW5kcm9pZCBzZXR0aW5nc1xuICogQHVzYWdlXG4gKiBZb3UgY2FuIG9wZW4gYW55IG9mIHRoZXNlIHNldHRpbmdzOlxuICogYGBgXG4gKiAgXCJhYm91dFwiLCAvLyBpb3NcbiAqICBcImFjY2Vzc2liaWxpdHlcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiAgXCJhY2NvdW50XCIsIC8vIGlvcywgYW5kcm9pZFxuICogIFwiYWlycGxhbmVfbW9kZVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqICBcImFwblwiLCAvLyBhbmRyb2lkXG4gKiAgXCJhcHBsaWNhdGlvbl9kZXRhaWxzXCIsIC8vIGlvcywgYW5kcm9pZFxuICogIFwiYXBwbGljYXRpb25fZGV2ZWxvcG1lbnRcIiwgLy8gYW5kcm9pZFxuICogIFwiYXBwbGljYXRpb25cIiwgLy8gYW5kcm9pZFxuICogIFwiYXV0b2xvY2tcIiwgLy8gaW9zXG4gKiAgXCJiYXR0ZXJ5X29wdGltaXphdGlvblwiLCAvLyBhbmRyb2lkXG4gKiAgXCJibHVldG9vdGhcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiAgXCJjYXN0bGVcIiwgLy8gaW9zXG4gKiAgXCJjYXB0aW9uaW5nXCIsIC8vIGFuZHJvaWRcbiAqICBcImNhc3RcIiwgLy8gYW5kcm9pZFxuICogIFwiY2VsbHVsYXJfdXNhZ2VcIiwgLy8gaW9zXG4gKiAgXCJjb25maWd1cmF0aW9uX2xpc3RcIiwgLy8gaW9zXG4gKiAgXCJkYXRhX3JvYW1pbmdcIiwgLy8gYW5kcm9pZFxuICogIFwiZGF0ZVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqICBcImRpc3BsYXlcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiAgXCJkcmVhbVwiLCAvLyBhbmRyb2lkXG4gKiAgXCJmYWNldGltZVwiLCAvLyBpb3NcbiAqICBcImhvbWVcIiwgLy8gYW5kcm9pZFxuICogIFwia2V5Ym9hcmRcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiAgXCJrZXlib2FyZF9zdWJ0eXBlXCIsIC8vIGFuZHJvaWRcbiAqICBcImxvY2FsZVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqIFwibG9jYXRpb25cIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcImxvY2F0aW9uc1wiLCAvLyBpb3NcbiAqIFwibWFuYWdlX2FsbF9hcHBsaWNhdGlvbnNcIiwgLy8gYW5kcm9pZFxuICogXCJtYW5hZ2VfYXBwbGljYXRpb25zXCIsIC8vIGFuZHJvaWRcbiAqIFwibWVtb3J5X2NhcmRcIiwgLy8gYW5kcm9pZFxuICogXCJtdXNpY1wiLCAvLyBpb3NcbiAqIFwibXVzaWNfZXF1YWxpemVyXCIsIC8vIGlvc1xuICogXCJtdXNpY192b2x1bWVcIiwgLy8gaW9zXG4gKiBcIm5ldHdvcmtcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcIm5pa2VfaXBvZFwiLCAvLyBpb3NcbiAqIFwibmZjc2hhcmluZ1wiLCAvLyBhbmRyb2lkXG4gKiBcIm5mY19wYXltZW50XCIsIC8vIGFuZHJvaWRcbiAqIFwibmZjX3NldHRpbmdzXCIsIC8vIGFuZHJvaWRcbiAqIFwibm90ZXNcIiwgLy8gaW9zXG4gKiBcIm5vdGlmaWNhdGlvbl9pZFwiLCAvLyBpb3NcbiAqIFwicGFzc2Jvb2tcIiwgLy8gaW9zXG4gKiBcInBob25lXCIsIC8vIGlvc1xuICogXCJwaG90b3NcIiwgLy8gaW9zXG4gKiBcInByaW50XCIsIC8vIGFuZHJvaWRcbiAqIFwicHJpdmFjeVwiLCAvLyBhbmRyb2lkXG4gKiBcInF1aWNrX2xhdW5jaFwiLCAvLyBhbmRyb2lkXG4gKiBcInJlc2V0XCIsIC8vIGlvc1xuICogXCJyaW5ndG9uZVwiLCAvLyBpb3NcbiAqIFwiYnJvd3NlclwiLCAvLyBpb3NcbiAqIFwic2VhcmNoXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJzZWN1cml0eVwiLCAvLyBhbmRyb2lkXG4gKiBcInNldHRpbmdzXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJzaG93X3JlZ3VsYXRvcnlfaW5mb1wiLFxuICogXCJzb3VuZFwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqIFwic29mdHdhcmVfdXBkYXRlXCIsIC8vIGlvc1xuICogXCJzdG9yYWdlXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJzdG9yZVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqIFwic3luY1wiLCAvLyBhbmRyb2lkXG4gKiBcInRldGhlcmluZ1wiLCAvLyBpb3NcbiAqIFwidHdpdHRlclwiLCAvLyBpb3NcbiAqIFwidG91Y2hcIiwgLy8gaW9zXG4gKiBcInVzYWdlXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJ1c2VyX2RpY3Rpb25hcnlcIiwgLy8gYW5kcm9pZFxuICogXCJ2aWRlb1wiLCAvLyBpb3NcbiAqIFwidm9pY2VfaW5wdXRcIiwgLy8gYW5kcm9pZFxuICogXCJ2cG5cIiwgLy8gaW9zXG4gKiBcIndhbGxwYXBlclwiLCAvLyBpb3NcbiAqIFwid2lmaV9pcFwiLCAvLyBhbmRyb2lkXG4gKiBcIndpZmlcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcIndpcmVsZXNzXCIgLy8gYW5kcm9pZFxuICogIGBgYFxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgT3Blbk5hdGl2ZVNldHRpbmdzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9vcGVuLW5hdGl2ZS1zZXR0aW5ncy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wZW5OYXRpdmVTZXR0aW5nczogT3Blbk5hdGl2ZVNldHRpbmdzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnT3Blbk5hdGl2ZVNldHRpbmdzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1vcGVuLW5hdGl2ZS1zZXR0aW5ncycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zZXR0aW5ncycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZ3V5cm9tYi9Db3Jkb3ZhLW9wZW4tbmF0aXZlLXNldHRpbmdzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3Blbk5hdGl2ZVNldHRpbmdzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbnMgYSBzZXR0aW5nIGRpYWxvZ1xuICAgKiBAcGFyYW0gc2V0dGluZyB7c3RyaW5nfGFycmF5fSBzZXR0aW5nIG5hbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuKHNldHRpbmc6IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
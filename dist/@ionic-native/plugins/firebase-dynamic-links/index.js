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
var FirebaseDynamicLinksOriginal = /** @class */ (function (_super) {
    __extends(FirebaseDynamicLinksOriginal, _super);
    function FirebaseDynamicLinksOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseDynamicLinksOriginal.prototype.onDynamicLink = function () { return cordova(this, "onDynamicLink", { "callbackOrder": "reverse", "observable": true }, arguments); };
    FirebaseDynamicLinksOriginal.pluginName = "FirebaseDynamicLinks";
    FirebaseDynamicLinksOriginal.plugin = " cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinksOriginal.pluginRef = "cordova.plugins.firebase.dynamiclinks";
    FirebaseDynamicLinksOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinksOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN=\"example.com\" --variable APP_PATH=\"/\"";
    FirebaseDynamicLinksOriginal.installVariables = ["APP_DOMAIN", "APP_PATH"];
    FirebaseDynamicLinksOriginal.platforms = ["Android", "iOS"];
    return FirebaseDynamicLinksOriginal;
}(IonicNativePlugin));
var FirebaseDynamicLinks = new FirebaseDynamicLinksOriginal();
export { FirebaseDynamicLinks };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWR5bmFtaWMtbGlua3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF5RFEsd0NBQWlCOzs7O0lBU3pELDRDQUFhOzs7Ozs7OzsrQkFwRWY7RUEyRDBDLGlCQUFpQjtTQUE5QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRHluYW1pY0xpbmsge1xuICBtYXRjaFR5cGU6ICdXZWFrJyB8ICdTdHJvbmcnO1xuICBkZWVwTGluazogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBGaXJlYmFzZSBEeW5hbWljIExpbmtzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBEeW5hbWljIExpbmtzXG4gKlxuICogVmFyaWFibGVzIEFQUF9ET01BSU4gYW5kIEFQUF9QQVRIIHNwZWNpZnkgd2ViIFVSTCB3aGVyZSB5b3VyIGFwcCB3aWxsIHN0YXJ0IGFuIGFjdGl2aXR5IHRvIGhhbmRsZSB0aGUgbGluay4gVGhleSBhbHNvIHVzZWQgdG8gc2V0dXAgc3VwcG9ydCBmb3IgQXBwIEluZGV4aW5nLlxuICogR28gdG8gZmlyZWJhc2UgY29uc29sZSBhbmQgZXhwb3J0IGdvb2dsZS1zZXJ2aWNlcy5qc29uIGFuZCBHb29nbGVTZXJ2aWNlLUluZm8ucGxpc3QuIFB1dCB0aG9zZSBmaWxlcyBpbnRvIHRoZSByb290IG9mIHlvdXIgY29yZG92YSBhcHAgZm9sZGVyLlxuICpcbiAqIFByZWZlcmVuY2VzOlxuICpcbiAqIFByZWZlcmVuY2VzIEdvb2dsZUlPU0NsaWVudElkIGFuZCBHb29nbGVBbmRyb2lkQ2xpZW50SWQgYXJlIHVzZWQgdG8gc2V0dXAgZHluYW1pYyBsaW5rcyB3aGVuIHlvdSBoYXZlIGFuIGFwcCBmb3Igc2V2ZXJhbCBwbGF0Zm9ybXMuXG4gKiBZb3UgY2FuIGZpbmQgdmFsdWVzIGF0IHlvdXIgR29vZ2xlU2VydmljZS1JbmZvLnBsaXN0IChrZXkgQU5EUk9JRF9DTElFTlRfSUQpIGFuZCBnb29nbGUtc2VydmljZXMuanNvbiAoa2V5IGNsaWVudFswXS5vYXV0aF9jbGllbnRbMF0uY2xpZW50X2lkKS5cbiAqXG4gKiBjb25maWcueG1sOlxuICogYGBgeG1sXG4gKiA8cGxhdGZvcm0gbmFtZT1cImlvc1wiPlxuICogICAgIDxwcmVmZXJlbmNlIG5hbWU9XCJHb29nbGVJT1NDbGllbnRJZFwiIHZhbHVlPVwiLi4uXCIgLz5cbiAqIDwvcGxhdGZvcm0+XG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICAgICA8cHJlZmVyZW5jZSBuYW1lPVwiR29vZ2xlQW5kcm9pZENsaWVudElkXCIgdmFsdWU9XCIuLi5cIiAvPlxuICogPC9wbGF0Zm9ybT5cbiAqIGBgYFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZUR5bmFtaWNMaW5rcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2UtZHluYW1pYy1saW5rcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlRHluYW1pY0xpbmtzOiBGaXJlYmFzZUR5bmFtaWNMaW5rcykgeyB9XG4gKlxuICogLi4uXG4gKiAvLyBIYW5kbGUgdGhlIGxvZ2ljIGhlcmUgYWZ0ZXIgb3BlbmluZyB0aGUgYXBwIHdpdGggdGhlIER5bmFtaWMgbGlua1xuICogdGhpcy5maXJlYmFzZUR5bmFtaWNMaW5rcy5vbkR5bmFtaWNMaW5rKClcbiAqICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcyksIChlcnJvcjphbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogRHluYW1pY0xpbmtzT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlRHluYW1pY0xpbmtzJyxcbiAgcGx1Z2luOiAnIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWR5bmFtaWNsaW5rcycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5keW5hbWljbGlua3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtZHluYW1pY2xpbmtzJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWR5bmFtaWNsaW5rcyAtLXNhdmUgLS12YXJpYWJsZSBBUFBfRE9NQUlOPVwiZXhhbXBsZS5jb21cIiAtLXZhcmlhYmxlIEFQUF9QQVRIPVwiL1wiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfRE9NQUlOJywgJ0FQUF9QQVRIJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlRHluYW1pY0xpbmtzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVnaXN0ZXJzIGNhbGxiYWNrIHRoYXQgaXMgdHJpZ2dlcmVkIG9uIGVhY2ggZHluYW1pYyBsaW5rIGNsaWNrLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPElEeW5hbWljTGluaz59IFJldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uRHluYW1pY0xpbmsoKTogT2JzZXJ2YWJsZTxJRHluYW1pY0xpbms+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
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
import { IonicNativePlugin, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability } from '@ionic-native/core';
var MSAdal = /** @class */ (function (_super) {
    __extends(MSAdal, _super);
    function MSAdal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSAdal.prototype.createAuthenticationContext = function (authority, validateAuthority) {
        if (validateAuthority === void 0) { validateAuthority = true; }
        var authContext;
        if (checkAvailability(MSAdal.getPluginRef(), null, MSAdal.getPluginName()) ===
            true) {
            authContext = new (MSAdal.getPlugin()).AuthenticationContext(authority, validateAuthority);
        }
        return new AuthenticationContext(authContext);
    };
    MSAdal.pluginName = "MSADAL";
    MSAdal.plugin = "cordova-plugin-ms-adal";
    MSAdal.pluginRef = "Microsoft.ADAL";
    MSAdal.repo = "https://github.com/AzureAD/azure-activedirectory-library-for-cordova";
    MSAdal.platforms = ["Android", "iOS", "Windows"];
    MSAdal = __decorate([
        Injectable()
    ], MSAdal);
    return MSAdal;
}(IonicNativePlugin));
export { MSAdal };
var AuthenticationContext = /** @class */ (function () {
    function AuthenticationContext(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    AuthenticationContext.prototype.acquireTokenAsync = function (resourceUrl, clientId, redirectUrl, userId, extraQueryParameters, claims) { return cordovaInstance(this, "acquireTokenAsync", { "otherPromise": true }, arguments); };
    AuthenticationContext.prototype.acquireTokenSilentAsync = function (resourceUrl, clientId, userId) { return cordovaInstance(this, "acquireTokenSilentAsync", { "otherPromise": true }, arguments); };
    Object.defineProperty(AuthenticationContext.prototype, "authority", {
        get: function () { return instancePropertyGet(this, "authority"); },
        set: function (value) { instancePropertySet(this, "authority", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "validateAuthority", {
        get: function () { return instancePropertyGet(this, "validateAuthority"); },
        set: function (value) { instancePropertySet(this, "validateAuthority", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "tokenCache", {
        get: function () { return instancePropertyGet(this, "tokenCache"); },
        set: function (value) { instancePropertySet(this, "tokenCache", value); },
        enumerable: true,
        configurable: true
    });
    return AuthenticationContext;
}());
export { AuthenticationContext };
var AuthenticationSettings = /** @class */ (function () {
    function AuthenticationSettings() {
    }
    AuthenticationSettings.prototype.setUseBroker = function (useBroker) { return cordovaInstance(this, "setUseBroker", { "otherPromise": true }, arguments); };
    return AuthenticationSettings;
}());
export { AuthenticationSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21zLWFkYWwvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQWdFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBK0Z6RiwwQkFBaUI7Ozs7SUFFM0MsNENBQTJCLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsaUJBQXdCO1FBQXhCLGtDQUFBLEVBQUEsd0JBQXdCO1FBQ3JFLElBQUksV0FBZ0IsQ0FBQztRQUNyQixJQUNFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RFLElBQUksRUFDSjtZQUNBLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQzFELFNBQVMsRUFDVCxpQkFBaUIsQ0FDbEIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQWRVLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkFoR25CO0VBZ0c0QixpQkFBaUI7U0FBaEMsTUFBTTs7SUErQmpCLCtCQUFvQixlQUFvQjtRQUFwQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztJQUN4QyxDQUFDO0lBa0JELGlEQUFpQixhQUFDLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLE1BQWUsRUFBRSxvQkFBMEIsRUFBRSxNQUFlO0lBaUIxSSx1REFBdUIsYUFBQyxXQUFtQixFQUFFLFFBQWdCLEVBQUUsTUFBZTswQkE1QzlFLDRDQUFTOzs7Ozs7MEJBR1Qsb0RBQWlCOzs7Ozs7MEJBR2pCLDZDQUFVOzs7Ozs7Z0NBN0haOzs7Ozs7SUFxTFMsNkNBQVksYUFBQyxTQUFrQjtpQ0FyTHhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRpb25SZXN1bHQge1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBhY2Nlc3NUb2tlblR5cGU6IHN0cmluZztcbiAgZXhwaXJlc09uOiBEYXRlO1xuICBpZFRva2VuOiBzdHJpbmc7XG4gIGlzTXVsdGlwbGVSZXNvdXJjZVJlZnJlc2hUb2tlbjogYm9vbGVhbjtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgdGVuYW50SWQ6IHN0cmluZztcbiAgdXNlckluZm86IFVzZXJJbmZvO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGF1dGhvcml6YXRpb24gaGVhZGVyIGZvciB3ZWIgcmVxdWVzdHMuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBhdXRob3JpemF0aW9uIGhlYWRlci5cbiAgICovXG4gIGNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuQ2FjaGUge1xuICBjbGVhcigpOiB2b2lkO1xuXG4gIHJlYWRJdGVtcygpOiBQcm9taXNlPFRva2VuQ2FjaGVJdGVtW10+O1xuXG4gIGRlbGV0ZUl0ZW0oaXRlbTogVG9rZW5DYWNoZUl0ZW0pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuQ2FjaGVJdGVtIHtcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGRpc3BsYXlhYmxlSWQ6IHN0cmluZztcbiAgZXhwaXJlc09uOiBEYXRlO1xuICBpc011bHRpcGxlUmVzb3VyY2VSZWZyZXNoVG9rZW46IGJvb2xlYW47XG4gIHJlc291cmNlOiBzdHJpbmc7XG4gIHRlbmFudElkOiBzdHJpbmc7XG4gIHVzZXJJbmZvOiBVc2VySW5mbztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5mbyB7XG4gIGRpc3BsYXlhYmxlSWQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG4gIGZhbWlseU5hbWU6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIGlkZW50aXR5UHJvdmlkZXI6IHN0cmluZztcbiAgcGFzc3dvcmRDaGFuZ2VVcmw6IHN0cmluZztcbiAgcGFzc3dvcmRFeHBpcmVzT246IERhdGU7XG4gIHVuaXF1ZUlkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgTVMgQURBTFxuICogQGRlc2NyaXB0aW9uXG4gKiBBY3RpdmUgRGlyZWN0b3J5IEF1dGhlbnRpY2F0aW9uIExpYnJhcnkgKEFEQUwpIHBsdWdpbi5cbiAqIEFjdGl2ZSBEaXJlY3RvcnkgQXV0aGVudGljYXRpb24gTGlicmFyeSAoW0FEQUxdKGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2RvdG5ldC9hcGkvbWljcm9zb2Z0LmlkZW50aXR5bW9kZWwuY2xpZW50cy5hY3RpdmVkaXJlY3Rvcnk/dmlldz1henVyZS1kb3RuZXQpKVxuICogcGx1Z2luIHByb3ZpZGVzIGVhc3kgdG8gdXNlIGF1dGhlbnRpY2F0aW9uIGZ1bmN0aW9uYWxpdHkgZm9yIHlvdXIgQXBhY2hlIENvcmRvdmEgYXBwcyBieSB0YWtpbmcgYWR2YW50YWdlIG9mXG4gKiBXaW5kb3dzIFNlcnZlciBBY3RpdmUgRGlyZWN0b3J5IGFuZCBXaW5kb3dzIEF6dXJlIEFjdGl2ZSBEaXJlY3RvcnkuIEhlcmUgeW91IGNhbiBmaW5kIHRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIGxpYnJhcnkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1TQWRhbCwgQXV0aGVudGljYXRpb25Db250ZXh0LCBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbXMtYWRhbC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1zQWRhbDogTVNBZGFsKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBhdXRoQ29udGV4dDogQXV0aGVudGljYXRpb25Db250ZXh0ID0gdGhpcy5tc0FkYWwuY3JlYXRlQXV0aGVudGljYXRpb25Db250ZXh0KCdodHRwczovL2xvZ2luLndpbmRvd3MubmV0L2NvbW1vbicpO1xuICpcbiAqIGF1dGhDb250ZXh0LmFjcXVpcmVUb2tlbkFzeW5jKCdodHRwczovL2dyYXBoLndpbmRvd3MubmV0JywgJ2E1ZDkyNDkzLWFlNWEtNGE5Zi1iY2JmLTlmMWQzNTQwNjdkMycsICdodHRwOi8vTXlEaXJlY3RvcnlTZWFyY2hlckFwcCcpXG4gKiAgIC50aGVuKChhdXRoUmVzcG9uc2U6IEF1dGhlbnRpY2F0aW9uUmVzdWx0KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ1Rva2VuIGlzJyAsIGF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbik7XG4gKiAgICAgY29uc29sZS5sb2coJ1Rva2VuIHdpbGwgZXhwaXJlIG9uJywgYXV0aFJlc3BvbnNlLmV4cGlyZXNPbik7XG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZTogYW55KSA9PiBjb25zb2xlLmxvZygnQXV0aGVudGljYXRpb24gZmFpbGVkJywgZSkpO1xuICpcbiAqXG4gKiBgYGBcbiAqXG4gKiBAY2xhc3Nlc1xuICogQXV0aGVudGljYXRpb25Db250ZXh0XG4gKiBAaW50ZXJmYWNlc1xuICogQXV0aGVudGljYXRpb25SZXN1bHRcbiAqIFRva2VuQ2FjaGVcbiAqIFRva2VuQ2FjaGVJdGVtXG4gKiBVc2VySW5mb1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01TQURBTCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1zLWFkYWwnLFxuICBwbHVnaW5SZWY6ICdNaWNyb3NvZnQuQURBTCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9henVyZS1hY3RpdmVkaXJlY3RvcnktbGlicmFyeS1mb3ItY29yZG92YScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTVNBZGFsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIGNyZWF0ZUF1dGhlbnRpY2F0aW9uQ29udGV4dChhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHkgPSB0cnVlKSB7XG4gICAgbGV0IGF1dGhDb250ZXh0OiBhbnk7XG4gICAgaWYgKFxuICAgICAgY2hlY2tBdmFpbGFiaWxpdHkoTVNBZGFsLmdldFBsdWdpblJlZigpLCBudWxsLCBNU0FkYWwuZ2V0UGx1Z2luTmFtZSgpKSA9PT1cbiAgICAgIHRydWVcbiAgICApIHtcbiAgICAgIGF1dGhDb250ZXh0ID0gbmV3IChNU0FkYWwuZ2V0UGx1Z2luKCkpLkF1dGhlbnRpY2F0aW9uQ29udGV4dChcbiAgICAgICAgYXV0aG9yaXR5LFxuICAgICAgICB2YWxpZGF0ZUF1dGhvcml0eVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRoZW50aWNhdGlvbkNvbnRleHQoYXV0aENvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db250ZXh0IHtcblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpXG4gIGF1dGhvcml0eTogc3RyaW5nO1xuXG4gIEBJbnN0YW5jZVByb3BlcnR5KClcbiAgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW47XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKVxuICB0b2tlbkNhY2hlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFjcXVpcmVzIHRva2VuIHVzaW5nIGludGVyYWN0aXZlIGZsb3cuIEl0IGFsd2F5cyBzaG93cyBVSSBhbmQgc2tpcHMgdG9rZW4gZnJvbSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtICAge1N0cmluZ30gIHJlc291cmNlVXJsIFJlc291cmNlIGlkZW50aWZpZXJcbiAgICogQHBhcmFtICAge1N0cmluZ30gIGNsaWVudElkICAgIENsaWVudCAoYXBwbGljYXRpb24pIGlkZW50aWZpZXJcbiAgICogQHBhcmFtICAge1N0cmluZ30gIHJlZGlyZWN0VXJsIFJlZGlyZWN0IHVybCBmb3IgdGhpcyBhcHBsaWNhdGlvblxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgdXNlcklkICAgICAgVXNlciBpZGVudGlmaWVyIChvcHRpb25hbClcbiAgICogQHBhcmFtICAge1N0cmluZ30gIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBxdWVyeSBwYXJhbWV0ZXJzIChvcHRpb25hbClcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcmFtZXRlcnMgc2hvdWxkIGJlIGVzY2FwZWQgYmVmb3JlIHBhc3NpbmcgdG8gdGhpcyBtZXRob2QgKGUuZy4gdXNpbmcgJ2VuY29kZVVSSSgpJylcbiAgICogQHBhcmFtICAge1N0cmluZ30gIGNsYWltcyAgICAgIENsYWltIHBhcmFtZXRlci4gUGFyYW1ldGVyIHNob3VsZCBiZSB1c2VkIHVuZGVyIGNvbmRpdGlvbmFsIGFjY2VzcyBzY2VuYXJpb3MgKG9wdGlvbmFsKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBlaXRoZXIgZnVsZmlsbGVkIHdpdGggQXV0aGVudGljYXRpb25SZXN1bHQgb2JqZWN0IG9yIHJlamVjdGVkIHdpdGggZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZVxuICB9KVxuICBhY3F1aXJlVG9rZW5Bc3luYyhyZXNvdXJjZVVybDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVybDogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogYW55LCBjbGFpbXM/OiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjcXVpcmVzIHRva2VuIFdJVEhPVVQgdXNpbmcgaW50ZXJhY3RpdmUgZmxvdy4gSXQgY2hlY2tzIHRoZSBjYWNoZSB0byByZXR1cm4gZXhpc3RpbmcgcmVzdWx0XG4gICAqIGlmIG5vdCBleHBpcmVkLiBJdCB0cmllcyB0byB1c2UgcmVmcmVzaCB0b2tlbiBpZiBhdmFpbGFibGUuIElmIGl0IGZhaWxzIHRvIGdldCB0b2tlbiB3aXRob3V0XG4gICAqIGRpc3BsYXlpbmcgVUkgaXQgd2lsbCBmYWlsLiBUaGlzIG1ldGhvZCBndWFyYW50ZWVzIHRoYXQgbm8gVUkgd2lsbCBiZSBzaG93biB0byB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgcmVzb3VyY2VVcmwgUmVzb3VyY2UgaWRlbnRpZmllclxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgY2xpZW50SWQgICAgQ2xpZW50IChhcHBsaWNhdGlvbikgaWRlbnRpZmllclxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgdXNlcklkICAgICAgVXNlciBpZGVudGlmaWVyIChvcHRpb25hbClcbiAgICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZWl0aGVyIGZ1bGZpbGxlZCB3aXRoIEF1dGhlbnRpY2F0aW9uUmVzdWx0IG9iamVjdCBvciByZWplY3RlZCB3aXRoIGVycm9yXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBvdGhlclByb21pc2U6IHRydWVcbiAgfSlcbiAgYWNxdWlyZVRva2VuU2lsZW50QXN5bmMocmVzb3VyY2VVcmw6IHN0cmluZywgY2xpZW50SWQ6IHN0cmluZywgdXNlcklkPzogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNldHRpbmdzIHtcbiAgLyoqXG4gICAqIFNldHMgZmxhZyB0byB1c2Ugb3Igc2tpcCBhdXRoZW50aWNhdGlvbiBicm9rZXIuXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBmbGFnIHZhbHVlIGlzIGZhbHNlIGFuZCBBREFMIHdpbGwgbm90IHRhbGsgdG8gYnJva2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlQnJva2VyIEZsYWcgdG8gdXNlIG9yIHNraXAgYXV0aGVudGljYXRpb24gYnJva2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGVpdGhlciBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQgd2l0aCBlcnJvclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlXG4gIH0pXG4gIHN0YXRpYyBzZXRVc2VCcm9rZXIodXNlQnJva2VyOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
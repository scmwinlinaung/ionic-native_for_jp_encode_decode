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
import { IonicNativePlugin, checkAvailability, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * For description on error codes, please visit https://github.com/nordnet/cordova-hot-code-push/wiki/Error-codes
 */
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOTHING_TO_INSTALL"] = 1] = "NOTHING_TO_INSTALL";
    ErrorCode[ErrorCode["NOTHING_TO_UPDATE"] = 2] = "NOTHING_TO_UPDATE";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_APPLICATION_CONFIG"] = -1] = "FAILED_TO_DOWNLOAD_APPLICATION_CONFIG";
    ErrorCode[ErrorCode["APPLICATION_BUILD_VERSION_TOO_LOW"] = -2] = "APPLICATION_BUILD_VERSION_TOO_LOW";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_CONTENT_MANIFEST"] = -3] = "FAILED_TO_DOWNLOAD_CONTENT_MANIFEST";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_UPDATE_FILES"] = -4] = "FAILED_TO_DOWNLOAD_UPDATE_FILES";
    ErrorCode[ErrorCode["FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER"] = -5] = "FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER";
    ErrorCode[ErrorCode["UPDATE_IS_INVALID"] = -6] = "UPDATE_IS_INVALID";
    ErrorCode[ErrorCode["FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE"] = -7] = "FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE";
    ErrorCode[ErrorCode["FAILED_TO_COPY_NEW_CONTENT_FILES"] = -8] = "FAILED_TO_COPY_NEW_CONTENT_FILES";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -9] = "LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_MANIFEST_NOT_FOUND"] = -10] = "LOCAL_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -11] = "LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_MANIFEST_NOT_FOUND"] = -12] = "LOADED_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE"] = -13] = "FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE";
    ErrorCode[ErrorCode["CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS"] = -14] = "CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS";
    ErrorCode[ErrorCode["CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS"] = -15] = "CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS";
    ErrorCode[ErrorCode["INSTALLATION_ALREADY_IN_PROGRESS"] = -16] = "INSTALLATION_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["DOWNLOAD_ALREADY_IN_PROGRESS"] = -17] = "DOWNLOAD_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["ASSETS_FOLDER_IS_NOT_YET_INSTALLED"] = -18] = "ASSETS_FOLDER_IS_NOT_YET_INSTALLED";
    ErrorCode[ErrorCode["NEW_APPLICATION_CONFIG_IS_INVALID"] = -19] = "NEW_APPLICATION_CONFIG_IS_INVALID";
})(ErrorCode || (ErrorCode = {}));
var HotCodePushOriginal = /** @class */ (function (_super) {
    __extends(HotCodePushOriginal, _super);
    function HotCodePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HotCodePushOriginal.prototype.requestApplicationUpdate = function (message) { return cordova(this, "requestApplicationUpdate", {}, arguments); };
    HotCodePushOriginal.prototype.fetchUpdate = function (options) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    HotCodePushOriginal.getPlugin().fetchUpdate(function (error, data) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(data);
                        }
                    }, options);
                });
            }
        })();
    };
    HotCodePushOriginal.prototype.installUpdate = function () { return cordova(this, "installUpdate", { "callbackStyle": "node" }, arguments); };
    HotCodePushOriginal.prototype.isUpdateAvailableForInstallation = function () { return cordova(this, "isUpdateAvailableForInstallation", { "callbackStyle": "node" }, arguments); };
    HotCodePushOriginal.prototype.getVersionInfo = function () { return cordova(this, "getVersionInfo", { "callbackStyle": "node" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateIsReadyToInstall = function () { return cordova(this, "onUpdateIsReadyToInstall", { "eventObservable": true, "event": "chcp_updateIsReadyToInstall" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateLoadFailed = function () { return cordova(this, "onUpdateLoadFailed", { "eventObservable": true, "event": "chcp_updateLoadFailed" }, arguments); };
    HotCodePushOriginal.prototype.onNothingToUpdate = function () { return cordova(this, "onNothingToUpdate", { "eventObservable": true, "event": "chcp_nothingToUpdate" }, arguments); };
    HotCodePushOriginal.prototype.onBeforeInstall = function () { return cordova(this, "onBeforeInstall", { "eventObservable": true, "event": "chcp_beforeInstall" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateInstalled = function () { return cordova(this, "onUpdateInstalled", { "eventObservable": true, "event": "chcp_updateInstalled" }, arguments); };
    HotCodePushOriginal.prototype.onUpdateInstallFailed = function () { return cordova(this, "onUpdateInstallFailed", { "eventObservable": true, "event": "chcp_updateInstallFailed" }, arguments); };
    HotCodePushOriginal.prototype.onNothingToInstall = function () { return cordova(this, "onNothingToInstall", { "eventObservable": true, "event": "chcp_nothingToInstall" }, arguments); };
    HotCodePushOriginal.prototype.onBeforeAssetsInstalledOnExternalStorage = function () { return cordova(this, "onBeforeAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_beforeAssetsInstalledOnExternalStorage" }, arguments); };
    HotCodePushOriginal.prototype.onAssetsInstalledOnExternalStorage = function () { return cordova(this, "onAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_assetsInstalledOnExternalStorage" }, arguments); };
    HotCodePushOriginal.prototype.onAssetsInstallationError = function () { return cordova(this, "onAssetsInstallationError", { "eventObservable": true, "event": "chcp_assetsInstallationError" }, arguments); };
    HotCodePushOriginal.pluginName = "HotCodePush";
    HotCodePushOriginal.plugin = "cordova-hot-code-push";
    HotCodePushOriginal.pluginRef = "chcp";
    HotCodePushOriginal.repo = "https://github.com/nordnet/cordova-hot-code-push";
    HotCodePushOriginal.platforms = ["Android", "iOS"];
    return HotCodePushOriginal;
}(IonicNativePlugin));
var HotCodePush = new HotCodePushOriginal();
export { HotCodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hvdC1jb2RlLXB1c2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8saURBQW9ELE1BQU0sb0JBQW9CLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWlEbEM7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQXNCWDtBQXRCRCxXQUFZLFNBQVM7SUFDbkIscUVBQXNCLENBQUE7SUFDdEIsbUVBQXFCLENBQUE7SUFDckIsNEdBQTBDLENBQUE7SUFDMUMsb0dBQXNDLENBQUE7SUFDdEMsd0dBQXdDLENBQUE7SUFDeEMsZ0dBQW9DLENBQUE7SUFDcEMsc0lBQXVELENBQUE7SUFDdkQsb0VBQXNCLENBQUE7SUFDdEIsc0hBQStDLENBQUE7SUFDL0Msa0dBQXFDLENBQUE7SUFDckMsNEhBQWtELENBQUE7SUFDbEQseUdBQXlDLENBQUE7SUFDekMsK0hBQW9ELENBQUE7SUFDcEQsMkdBQTBDLENBQUE7SUFDMUMsMkhBQWtELENBQUE7SUFDbEQsaUhBQTZDLENBQUE7SUFDN0MseUlBQXlELENBQUE7SUFDekQsbUdBQXNDLENBQUE7SUFDdEMsMkZBQWtDLENBQUE7SUFDbEMsdUdBQXdDLENBQUE7SUFDeEMscUdBQXVDLENBQUE7QUFDekMsQ0FBQyxFQXRCVyxTQUFTLEtBQVQsU0FBUyxRQXNCcEI7O0lBd0NnQywrQkFBaUI7Ozs7SUFPaEQsOENBQXdCLGFBQUMsT0FBZTtJQVV4QyxpQ0FBVyxhQUFDLE9BQW1DOzs7bURBQWdCO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQ2pDLFVBQUMsS0FBdUIsRUFBRSxJQUFTO3dCQUNqQyxJQUFJLEtBQUssRUFBRTs0QkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO29CQUNILENBQUMsRUFDRCxPQUFPLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxtQ0FBYTtJQVdiLHNEQUFnQztJQVdoQyxvQ0FBYztJQVlkLDhDQUF3QjtJQVl4Qix3Q0FBa0I7SUFZbEIsdUNBQWlCO0lBWWpCLHFDQUFlO0lBWWYsdUNBQWlCO0lBWWpCLDJDQUFxQjtJQVlyQix3Q0FBa0I7SUFZbEIsOERBQXdDO0lBWXhDLHdEQUFrQztJQVlsQywrQ0FBeUI7Ozs7OztzQkF6UzNCO0VBb0hpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyIGNoY3A6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaFZlcnNpb24ge1xuICAvKipcbiAgICogQXBwbGljYXRpb24ncyB2ZXJzaW9uIG5hbWUuIFRoaXMgdmVyc2lvbiBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyIG9uIHRoZSBzdG9yZXMuXG4gICAqL1xuICBhcHBWZXJzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBcHBsaWNhdGlvbidzIGJ1aWxkIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgYnVpbGRWZXJzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWZXJzaW9uIG9mIHRoZSB3ZWIgY29udGVudCwgdGhhdCBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuIEJhc2ljYWxseSwgdmFsdWUgb2YgdGhlIHJlbGVhc2UgcHJvcGVydHkgZnJvbSBjaGNwLmpzb24gZmlsZSBpbiB5b3VyIGxvY2FsIHd3dyBmb2xkZXIuXG4gICAqL1xuICBjdXJyZW50V2ViVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogUHJldmlvdXMgd2ViIGNvbnRlbnQgdmVyc2lvbi4gVGhpcyBpcyBhIHZlcnNpb24gb2Ygb3VyIGJhY2t1cC4gQ2FuIGJlIGVtcHR5LCBpZiB0aGVyZSB3ZXJlIG5vIHVwZGF0ZXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgcHJldmlvdXNXZWJWZXJzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWZXJzaW9uIG51bWJlciBvZiB0aGUgd2ViIGNvbnRlbnQsIHRoYXQgd2FzIGxvYWRlZCBieSB0aGUgcGx1Z2luIGFuZCByZWFkeSB0byBiZSBpbnN0YWxsZWQuIEJhc2ljYWxseSwgdmFsdWUgb2YgdGhlIHJlbGVhc2UgcHJvcGVydHkgZnJvbSBjaGNwLmpzb24gZmlsZSBvbiB5b3VyIHNlcnZlci4gQ2FuIGJlIGVtcHR5LCBpZiBubyB1cGRhdGUgaXMgd2FpdGluZyBmb3IgaW5zdGFsbGF0aW9uLlxuICAgKi9cbiAgcmVhZHlUb0luc3RhbGxXZWJWZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hVcGRhdGUge1xuICAvKipcbiAgICogQ3VycmVudCB2ZXJzaW9uIGluc3RhbGxlZC5cbiAgICovXG4gIGN1cnJlbnRWZXJzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBdmFpbGFibGUgdmVyc2lvbiB0byByZXBsYWNlIHRoZSBjdXJyZW50IG9uZS5cbiAgICovXG4gIHJlYWR5VG9JbnN0YWxsVmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogVXJsIG9mIHRoZSBjaGNwLmpzb24gY29uZmlnIG9uIHRoZSBzZXJ2ZXIuIFBsdWdpbiB3aWxsIHVzZSB0aGlzIG9uZSBpbnN0ZWFkIG9mIDxjb25maWctZmlsZSB1cmw9XCJcIj4gZnJvbSB0aGUgY29uZmlnLnhtbC5cbiAgICovXG4gICdjb25maWctZmlsZSc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUVFAgaGVhZGVycywgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIGFsbCByZXF1ZXN0cyBpbiB1cGRhdGUgZG93bmxvYWQgcHJvY2VzcywgaW5jbHVkaW5nIGxvYWRpbmcgY29uZmlncyBhbmQgbmV3L2NoYW5nZWQgZmlsZXMuXG4gICAqL1xuICAncmVxdWVzdC1oZWFkZXJzJz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogRm9yIGRlc2NyaXB0aW9uIG9uIGVycm9yIGNvZGVzLCBwbGVhc2UgdmlzaXQgaHR0cHM6Ly9naXRodWIuY29tL25vcmRuZXQvY29yZG92YS1ob3QtY29kZS1wdXNoL3dpa2kvRXJyb3ItY29kZXNcbiAqL1xuZXhwb3J0IGVudW0gRXJyb3JDb2RlIHtcbiAgTk9USElOR19UT19JTlNUQUxMID0gMSxcbiAgTk9USElOR19UT19VUERBVEUgPSAyLFxuICBGQUlMRURfVE9fRE9XTkxPQURfQVBQTElDQVRJT05fQ09ORklHID0gLTEsXG4gIEFQUExJQ0FUSU9OX0JVSUxEX1ZFUlNJT05fVE9PX0xPVyA9IC0yLFxuICBGQUlMRURfVE9fRE9XTkxPQURfQ09OVEVOVF9NQU5JRkVTVCA9IC0zLFxuICBGQUlMRURfVE9fRE9XTkxPQURfVVBEQVRFX0ZJTEVTID0gLTQsXG4gIEZBSUxFRF9UT19NT1ZFX0xPQURFRF9GSUxFU19UT19JTlNUQUxMQVRJT05fRk9MREVSID0gLTUsXG4gIFVQREFURV9JU19JTlZBTElEID0gLTYsXG4gIEZBSUxFRF9UT19DT1BZX0ZJTEVTX0ZST01fUFJFVklPVVNfUkVMRUFTRSA9IC03LFxuICBGQUlMRURfVE9fQ09QWV9ORVdfQ09OVEVOVF9GSUxFUyA9IC04LFxuICBMT0NBTF9WRVJTSU9OX09GX0FQUExJQ0FUSU9OX0NPTkZJR19OT1RfRk9VTkQgPSAtOSxcbiAgTE9DQUxfVkVSU0lPTl9PRl9NQU5JRkVTVF9OT1RfRk9VTkQgPSAtMTAsXG4gIExPQURFRF9WRVJTSU9OX09GX0FQUExJQ0FUSU9OX0NPTkZJR19OT1RfRk9VTkQgPSAtMTEsXG4gIExPQURFRF9WRVJTSU9OX09GX01BTklGRVNUX05PVF9GT1VORCA9IC0xMixcbiAgRkFJTEVEX1RPX0lOU1RBTExfQVNTRVRTX09OX0VYVEVSTkFMX1NUT1JBR0UgPSAtMTMsXG4gIENBTlRfSU5TVEFMTF9XSElMRV9ET1dOTE9BRF9JTl9QUk9HUkVTUyA9IC0xNCxcbiAgQ0FOVF9ET1dOTE9BRF9VUERBVEVfV0hJTEVfSU5TVEFMTEFUSU9OX0lOX1BST0dSRVNTID0gLTE1LFxuICBJTlNUQUxMQVRJT05fQUxSRUFEWV9JTl9QUk9HUkVTUyA9IC0xNixcbiAgRE9XTkxPQURfQUxSRUFEWV9JTl9QUk9HUkVTUyA9IC0xNyxcbiAgQVNTRVRTX0ZPTERFUl9JU19OT1RfWUVUX0lOU1RBTExFRCA9IC0xOCxcbiAgTkVXX0FQUExJQ0FUSU9OX0NPTkZJR19JU19JTlZBTElEID0gLTE5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hFcnJvciB7XG4gIGNvZGU6IEVycm9yQ29kZTtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaEV2ZW50RGF0YSB7XG4gIGRldGFpbHM/OiB7XG4gICAgZXJyb3I/OiBIb3RDb2RlUHVzaEVycm9yO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEhvdCBDb2RlIFB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICogSG90Q29kZVB1c2ggcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TIGFuZCBBbmRyb2lkLiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGtlZXAgeW91ciBodG1sLCBjc3MgYW5kIGpzIGZpbGVzIHN5bmNlZCB3aXRoIHlvdXIgc2VydmVyLlxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIGRldGFpbGVkIHdpa2kgaHR0cHM6Ly9naXRodWIuY29tL25vcmRuZXQvY29yZG92YS1ob3QtY29kZS1wdXNoL3dpa2lcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhvdENvZGVQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ob3QtY29kZS1wdXNoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBob3RDb2RlUHVzaDogSG90Q29kZVB1c2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGhvdENvZGVQdXNoLmZldGNoVXBkYXRlKG9wdGlvbnMpLnRoZW4oZGF0YSA9PiB7IGNvbnNvbGUubG9nKCdVcGRhdGUgYXZhaWxhYmxlJyk7IH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hvdENvZGVQdXNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1ob3QtY29kZS1wdXNoJyxcbiAgcGx1Z2luUmVmOiAnY2hjcCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbm9yZG5ldC9jb3Jkb3ZhLWhvdC1jb2RlLXB1c2gnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIb3RDb2RlUHVzaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3cgZGlhbG9nIHdpdGggdGhlIHJlcXVlc3QgdG8gdXBkYXRlIGFwcGxpY2F0aW9uIHRocm91Z2ggdGhlIFN0b3JlIChBcHAgU3RvcmUgb3IgR29vZ2xlIFBsYXkpLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNob3cgaW4gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyB3aGVuIHRoZSB1c2VyIGlzIHJlZGlyZWN0ZWQgdG8gdGhlIHN0b3JlLCByZWplY3RzIGlmIHRoZSB1c2VyIGRlY2xpbmVzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0QXBwbGljYXRpb25VcGRhdGUobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWQgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXItc2lkZS5cbiAgICogQHBhcmFtIG9wdGlvbnMge0hvdENvZGVQdXNoUmVxdWVzdE9wdGlvbnN9IEFkZGl0aW9uYWwgb3B0aW9ucyB0byB0aGUgcmVxdWVzdC4gSWYgbm90IHNldCAtIHByZWZlcmVuY2VzIGZyb20gY29uZmlnLnhtbCBhcmUgdXNlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgdGhlcmUgaXMgYW4gdXBkYXRlIGF2YWlsYWJsZSwgcmVqZWN0cyBvdGhlcndpc2UuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZmV0Y2hVcGRhdGUob3B0aW9ucz86IEhvdENvZGVQdXNoUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEhvdENvZGVQdXNoLmdldFBsdWdpbigpLmZldGNoVXBkYXRlKFxuICAgICAgICAoZXJyb3I6IEhvdENvZGVQdXNoRXJyb3IsIGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zdGFsbCB1cGRhdGUgaWYgdGhlcmUgaXMgYW55dGhpbmcgdG8gaW5zdGFsbC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgd2hlbiB0aGUgdXBkYXRlIGlzIGluc3RhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgaW5zdGFsbFVwZGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB1cGRhdGUgd2FzIGxvYWRlZCBhbmQgcmVhZHkgdG8gYmUgaW5zdGFsbGVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIb3RDb2RlUHVzaFVwZGF0ZT59IFJlc29sdmVzIGlmIGFuIHVwZGF0ZSBpcyByZWFkeSwgcmVqZWN0cyBpZiB0aGVyZSBpcyBubyB1cGRhdGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIGlzVXBkYXRlQXZhaWxhYmxlRm9ySW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SG90Q29kZVB1c2hVcGRhdGU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXBwJ3MgdmVyc2lvbnMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhvdENvZGVQdXNoVmVyc2lvbj59IFJlc29sdmVzIHdpdGggdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB2ZXJzaW9ucy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgZ2V0VmVyc2lvbkluZm8oKTogUHJvbWlzZTxIb3RDb2RlUHVzaFZlcnNpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIG5ldyByZWxlYXNlIHdhcyBzdWNjZXNzZnVsbHkgbG9hZGVkIGFuZCByZWFkeSB0byBiZSBpbnN0YWxsZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX3VwZGF0ZUlzUmVhZHlUb0luc3RhbGwnXG4gIH0pXG4gIG9uVXBkYXRlSXNSZWFkeVRvSW5zdGFsbCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gY291bGRuJ3QgbG9hZCB1cGRhdGUgZnJvbSB0aGUgc2VydmVyLiBFcnJvciBkZXRhaWxzIGFyZSBhdHRhY2hlZCB0byB0aGUgZXZlbnQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX3VwZGF0ZUxvYWRGYWlsZWQnXG4gIH0pXG4gIG9uVXBkYXRlTG9hZEZhaWxlZCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiB3ZSBzdWNjZXNzZnVsbHkgbG9hZGVkIGFwcGxpY2F0aW9uIGNvbmZpZyBmcm9tIHRoZSBzZXJ2ZXIsIGJ1dCB0aGVyZSBpcyBub3RoaW5nIG5ldyBpcyBhdmFpbGFibGUuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX25vdGhpbmdUb1VwZGF0ZSdcbiAgfSlcbiAgb25Ob3RoaW5nVG9VcGRhdGUoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gYW4gdXBkYXRlIGlzIGFib3V0IHRvIGJlIGluc3RhbGxlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2NoY3BfYmVmb3JlSW5zdGFsbCdcbiAgfSlcbiAgb25CZWZvcmVJbnN0YWxsKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bGx5IGluc3RhbGxlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2NoY3BfdXBkYXRlSW5zdGFsbGVkJ1xuICB9KVxuICBvblVwZGF0ZUluc3RhbGxlZCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiB1cGRhdGUgaW5zdGFsbGF0aW9uIGZhaWxlZC4gRXJyb3IgZGV0YWlscyBhcmUgYXR0YWNoZWQgdG8gdGhlIGV2ZW50LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2hjcF91cGRhdGVJbnN0YWxsRmFpbGVkJ1xuICB9KVxuICBvblVwZGF0ZUluc3RhbGxGYWlsZWQoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gdGhlcmUgaXMgbm90aGluZyB0byBpbnN0YWxsLiBQcm9iYWJseSwgbm90aGluZyB3YXMgbG9hZGVkIGJlZm9yZSB0aGF0LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2hjcF9ub3RoaW5nVG9JbnN0YWxsJ1xuICB9KVxuICBvbk5vdGhpbmdUb0luc3RhbGwoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gcGx1Z2luIGlzIGFib3V0IHRvIHN0YXJ0IGluc3RhbGxpbmcgYnVuZGxlIGNvbnRlbnQgb24gdGhlIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX2JlZm9yZUFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlJ1xuICB9KVxuICBvbkJlZm9yZUFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBzdWNjZXNzZnVsbHkgY29waWVkIHdlYiBwcm9qZWN0IGZpbGVzIGZyb20gYnVuZGxlIG9uIHRoZSBleHRlcm5hbCBzdG9yYWdlLiBNb3N0IGxpa2VseSB5b3Ugd2lsbCB1c2UgaXQgZm9yIGRlYnVnIHB1cnBvc2Ugb25seS4gT3IgZXZlbiBuZXZlci5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2NoY3BfYXNzZXRzSW5zdGFsbGVkT25FeHRlcm5hbFN0b3JhZ2UnXG4gIH0pXG4gIG9uQXNzZXRzSW5zdGFsbGVkT25FeHRlcm5hbFN0b3JhZ2UoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gcGx1Z2luIGNvdWxkbid0IGNvcHkgZmlsZXMgZnJvbSBidW5kbGUgb24gdGhlIGV4dGVybmFsIHN0b3JhZ2UuIElmIHRoaXMgaGFwcGVucyAtIHBsdWdpbiB3b24ndCB3b3JrLiBDYW4gb2NjdXIgd2hlbiB0aGVyZSBpcyBub3QgZW5vdWdoIGZyZWUgc3BhY2Ugb24gdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2NoY3BfYXNzZXRzSW5zdGFsbGF0aW9uRXJyb3InXG4gIH0pXG4gIG9uQXNzZXRzSW5zdGFsbGF0aW9uRXJyb3IoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
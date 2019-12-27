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
export var ELocalNotificationTriggerUnit;
(function (ELocalNotificationTriggerUnit) {
    ELocalNotificationTriggerUnit["SECOND"] = "second";
    ELocalNotificationTriggerUnit["MINUTE"] = "minute";
    ELocalNotificationTriggerUnit["HOUR"] = "hour";
    ELocalNotificationTriggerUnit["DAY"] = "day";
    ELocalNotificationTriggerUnit["WEEK"] = "week";
    ELocalNotificationTriggerUnit["MONTH"] = "month";
    ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
    ELocalNotificationTriggerUnit["YEAR"] = "year";
    ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
    ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
    ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));
export var ILocalNotificationActionType;
(function (ILocalNotificationActionType) {
    ILocalNotificationActionType["INPUT"] = "input";
    ILocalNotificationActionType["BUTTON"] = "button";
})(ILocalNotificationActionType || (ILocalNotificationActionType = {}));
var LocalNotificationsOriginal = /** @class */ (function (_super) {
    __extends(LocalNotificationsOriginal, _super);
    function LocalNotificationsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalNotificationsOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    LocalNotificationsOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    LocalNotificationsOriginal.prototype.schedule = function (options) { return cordova(this, "schedule", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.update = function (options) { return cordova(this, "update", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.clear = function (notificationId) { return cordova(this, "clear", {}, arguments); };
    LocalNotificationsOriginal.prototype.clearAll = function () { return cordova(this, "clearAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.cancel = function (notificationId) { return cordova(this, "cancel", {}, arguments); };
    LocalNotificationsOriginal.prototype.cancelAll = function () { return cordova(this, "cancelAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.isPresent = function (notificationId) { return cordova(this, "isPresent", {}, arguments); };
    LocalNotificationsOriginal.prototype.isScheduled = function (notificationId) { return cordova(this, "isScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.isTriggered = function (notificationId) { return cordova(this, "isTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.hasType = function (id, type) { return cordova(this, "hasType", {}, arguments); };
    LocalNotificationsOriginal.prototype.getType = function (id) { return cordova(this, "getType", {}, arguments); };
    LocalNotificationsOriginal.prototype.getIds = function () { return cordova(this, "getIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.getScheduledIds = function () { return cordova(this, "getScheduledIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.getTriggeredIds = function () { return cordova(this, "getTriggeredIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.get = function (notificationId) { return cordova(this, "get", {}, arguments); };
    LocalNotificationsOriginal.prototype.getAll = function () { return cordova(this, "getAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.getScheduled = function (notificationId) { return cordova(this, "getScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.getTriggered = function (notificationId) { return cordova(this, "getTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.addActions = function (groupId, actions) { return cordova(this, "addActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.removeActions = function (groupId) { return cordova(this, "removeActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.hasActions = function (groupId) { return cordova(this, "hasActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.getDefaults = function () { return cordova(this, "getDefaults", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.setDefaults = function (defaults) { return cordova(this, "setDefaults", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.getAllScheduled = function () { return cordova(this, "getAllScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.getAllTriggered = function () { return cordova(this, "getAllTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.on = function (eventName) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    LocalNotificationsOriginal.prototype.fireEvent = function (eventName, args) { return cordova(this, "fireEvent", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.fireQueuedEvents = function () { return cordova(this, "fireQueuedEvents", {}, arguments); };
    LocalNotificationsOriginal.pluginName = "LocalNotifications";
    LocalNotificationsOriginal.plugin = "cordova-plugin-local-notification";
    LocalNotificationsOriginal.pluginRef = "cordova.plugins.notification.local";
    LocalNotificationsOriginal.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
    LocalNotificationsOriginal.platforms = ["Android", "iOS", "Windows"];
    return LocalNotificationsOriginal;
}(IonicNativePlugin));
var LocalNotifications = new LocalNotificationsOriginal();
export { LocalNotifications };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2FsLW5vdGlmaWNhdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNLENBQU4sSUFBWSw2QkFZWDtBQVpELFdBQVksNkJBQTZCO0lBQ3ZDLGtEQUFpQixDQUFBO0lBQ2pCLGtEQUFpQixDQUFBO0lBQ2pCLDhDQUFhLENBQUE7SUFDYiw0Q0FBVyxDQUFBO0lBQ1gsOENBQWEsQ0FBQTtJQUNiLGdEQUFlLENBQUE7SUFDZixvREFBbUIsQ0FBQTtJQUNuQiw4Q0FBYSxDQUFBO0lBQ2Isb0RBQW1CLENBQUE7SUFDbkIsbUVBQWtDLENBQUE7SUFDbEMsOERBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQVpXLDZCQUE2QixLQUE3Qiw2QkFBNkIsUUFZeEM7QUEwSUQsTUFBTSxDQUFOLElBQVksNEJBR1g7QUFIRCxXQUFZLDRCQUE0QjtJQUN0QywrQ0FBZSxDQUFBO0lBQ2YsaURBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFHdkM7O0lBMlh1QyxzQ0FBaUI7Ozs7SUFNdkQsMENBQWE7SUFTYiw4Q0FBaUI7SUFXakIscUNBQVEsYUFBQyxPQUFtRDtJQVM1RCxtQ0FBTSxhQUFDLE9BQTRCO0lBUW5DLGtDQUFLLGFBQUMsY0FBbUI7SUFTekIscUNBQVE7SUFVUixtQ0FBTSxhQUFDLGNBQW1CO0lBUzFCLHNDQUFTO0lBVVQsc0NBQVMsYUFBQyxjQUFzQjtJQVVoQyx3Q0FBVyxhQUFDLGNBQXNCO0lBVWxDLHdDQUFXLGFBQUMsY0FBc0I7SUFXbEMsb0NBQU8sYUFBQyxFQUFVLEVBQUUsSUFBWTtJQVNoQyxvQ0FBTyxhQUFDLEVBQVU7SUFTbEIsbUNBQU07SUFTTiw0Q0FBZTtJQVNmLDRDQUFlO0lBVWYsZ0NBQUcsYUFBQyxjQUFtQjtJQVN2QixtQ0FBTTtJQVVOLHlDQUFZLGFBQUMsY0FBbUI7SUFVaEMseUNBQVksYUFBQyxjQUFtQjtJQVdoQyx1Q0FBVSxhQUFDLE9BQVksRUFBRSxPQUFtQztJQVU1RCwwQ0FBYSxhQUFDLE9BQVk7SUFVMUIsdUNBQVUsYUFBQyxPQUFZO0lBV3ZCLHdDQUFXO0lBV1gsd0NBQVcsYUFBQyxRQUFhO0lBU3pCLDRDQUFlO0lBU2YsNENBQWU7SUFjZiwrQkFBRSxhQUFDLFNBQWlCO0lBWXBCLHNDQUFTLGFBQUMsU0FBaUIsRUFBRSxJQUFTO0lBT3RDLDZDQUFnQjs7Ozs7OzZCQTN6QmxCO0VBd2hCd0MsaUJBQWlCO1NBQTVDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBFTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyVW5pdCB7XG4gIFNFQ09ORCA9ICdzZWNvbmQnLFxuICBNSU5VVEUgPSAnbWludXRlJyxcbiAgSE9VUiA9ICdob3VyJyxcbiAgREFZID0gJ2RheScsXG4gIFdFRUsgPSAnd2VlaycsXG4gIE1PTlRIID0gJ21vbnRoJyxcbiAgUVVBUlRFUiA9ICdxdWFydGVyJyxcbiAgWUVBUiA9ICd5ZWFyJyxcbiAgV0VFS0RBWSA9ICd3ZWVrZGF5JyxcbiAgV0VFS0RBWV9PUkRJTkFMID0gJ3dlZWtkYXlPcmRpbmFsJyxcbiAgV0VFS19PRl9NT05USCA9ICd3ZWVrT2ZNb250aCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25FdmVyeSB7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbnV0ZS5cbiAgICAgKi9cbiAgICBtaW51dGU/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaG91ci5cbiAgICAgKi9cbiAgICBob3VyPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRheS5cbiAgICAgKi9cbiAgICBkYXk/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IG9mIHdlZWsuXG4gICAgICovXG4gICAgd2Vla2RheT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWVrIG9mIHllYWRheSBvZiB0aGUgYXJkaW5hbCB3ZWVrLlxuICAgICAqL1xuICAgIHdlZWs/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IG9mIHRoZSBvcmRpbmFsIHdlZWsuXG4gICAgICovXG4gICAgd2Vla2RheU9yZGluYWw/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VlayBvZiBtb250aC5cbiAgICAgKi9cbiAgICB3ZWVrT2ZNb250aD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtb250aC5cbiAgICAgKi9cbiAgICBtb250aD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWFydGVyLlxuICAgICAqL1xuICAgIHF1YXJ0ZXI/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgeWVhci5cbiAgICAgKi9cbiAgICB5ZWFyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXIge1xuICAvKiogKioqKiogRklYICoqKioqICovXG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHN5c3RlbSBzaG91bGQgZGVsaXZlciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uLiBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5pbCBvciBpcyBhIGRhdGUgaW4gdGhlIHBhc3QsIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaXMgZGVsaXZlcmVkIGltbWVkaWF0ZWx5LlxuICAgKiBEZWZhdWx0OiBub3cgfiBuZXcgRGF0ZSgpXG4gICAqL1xuICBhdD86IERhdGU7XG5cbiAgLyoqICoqKioqIFRJTUVTUEFOICoqKioqICovXG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB1bml0c1xuICAgKi9cbiAgaW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXRcbiAgICovXG4gIHVuaXQ/OiBFTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyVW5pdDtcblxuICAvKiogKioqKiogUkVQRUFUL01BVENIICoqKioqICovXG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB1bml0c1xuICAgKi9cbiAgY291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB1bml0XG4gICAqL1xuICBldmVyeT86IEVMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXJVbml0IHwgSUxvY2FsTm90aWZpY2F0aW9uRXZlcnk7XG5cbiAgLyoqXG4gICAqIFRoZSBlbmQgb2YgdGhlIHJlcGVhdGluZyBub3RpZmljYXRpb25cbiAgICovXG4gIGJlZm9yZT86IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHN5c3RlbSBzaG91bGQgZGVsaXZlciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uLiBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5pbCBvciBpcyBhIGRhdGUgaW4gdGhlIHBhc3QsIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaXMgZGVsaXZlcmVkIGltbWVkaWF0ZWx5LlxuICAgKiBPbmx5IGZvciBcInJlcGVhdFwiXG4gICAqIERlZmF1bHQ6IG5vdyB+IG5ldyBEYXRlKClcbiAgICovXG4gIGZpcnN0QXQ/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBPbmx5IGZvciBcIm1hdGNoXCJcbiAgICovXG4gIGFmdGVyPzogRGF0ZTtcblxuICAvKiogKioqKiogTE9DQVRJT04gKioqKiogKi9cblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogQ2VudGVyIG9mIHRoZSBsb2NhdGlvblxuICAgKiBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlIHZhbHVlc1xuICAgKi9cbiAgY2VudGVyPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIFJhZGl1cyBpbiBtZXRlcnNcbiAgICovXG4gIHJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVHJpZ2dlciBvbiBlbnRyeSBvZiB0aGUgbG9jYXRpb25cbiAgICovXG4gIG5vdGlmeU9uRW50cnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBUcmlnZ2VyIG9uIGV4aXQgb2YgdGhlIGxvY2F0aW9uXG4gICAqL1xuICBub3RpZnlPbkV4aXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBUcmlnZ2VyIG9ubHkgb25jZT9cbiAgICovXG4gIHNpbmdsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvblR5cGUge1xuICBJTlBVVCA9ICdpbnB1dCcsXG4gIEJVVFRPTiA9ICdidXR0b24nXG59XG5cbi8qKlxuICogTm90aWZpY2F0aW9uIGFjdGlvblxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb25zI2FjdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb24ge1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBhY3Rpb24gaXMgdXNlZCBhcyB0aGUgZXZlbnQgbmFtZSBpbiB0aGUgbGlzdGVuZXIgZnVuY3Rpb25cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBtZXNzYWdlXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogTWFrZSB0aGlzIG5vdGlmaWNhdGlvbiBzaG93IHdoZW4gYXBwIGluIGZvcmVncm91bmQuXG4gICAqL1xuICBmb3JlZ3JvdW5kPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGFjdGlvbiBjYXVzZXMgdGhlIGFwcCB0byBsYXVuY2ggaW4gdGhlIGZvcmVncm91bmRcbiAgICovXG4gIGxhdW5jaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIHRoZSB2YWx1ZSBpcyAnZGVjbGluZScgdGhlIGFjdGlvbiBpcyBkaXNwbGF5ZWQgd2l0aCBzcGVjaWFsIGhpZ2hsaWdodGluZyB0byBpbmRpY2F0ZSB0aGF0IGl0IHBlcmZvcm1zIGEgZGVzdHJ1Y3RpdmUgdGFza1xuICAgKi9cbiAgdWk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBhY3Rpb24gcmVxdWlyZXMgdGhhdCB0aGUgdXNlcuKAmXMgZGV2aWNlIGJlIHVubG9ja2VkLlxuICAgKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYW4gYWN0aW9uIHdpdGggdGhpcyBvcHRpb24sIHRoZSBzeXN0ZW0gcHJvbXB0c1xuICAgKiB0aGUgdXNlciB0byB1bmxvY2sgdGhlIGRldmljZVxuICAgKi9cbiAgbmVlZHNBdXRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHJlc291cmNlIHBhdGggb2YgdGhlIGFjdGlvbiBpY29uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogQW4gYXJyYXkgb2YgcHJlLWRlZmluZWQgY2hvaWNlcyBmb3IgdXNlcnMgaW5wdXRcbiAgICovXG4gIGNob2ljZXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBwcm92aWRlIGFyYml0cmFyeSB0ZXh0IHZhbHVlc1xuICAgKi9cbiAgZWRpdGFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIHRleHQgaW5wdXQgYnV0dG9uIHRoYXQgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyLlxuICAgKi9cbiAgc3VibWl0VGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBhY3Rpb24uIElmIG9taXR0ZWQgJ2J1dHRvbicgaXMgdXNlZC5cbiAgICovXG4gIHR5cGU/OiBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25UeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvblByb2dyZXNzQmFyIHtcbiAgLyoqXG4gICAqIElzIHRoZSBwcm9ncmVzcyBiYXIgZW5hYmxlZD9cbiAgICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2YWx1ZVxuICAgKi9cbiAgdmFsdWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSAoZGVmYXVsdCBpcyAxMDApXG4gICAqL1xuICBtYXhWYWx1ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNob3cgYW4gaW5kZXRlcm1pbmF0ZSBwcm9ncmVzcyBiYXJcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXSU5ET1dTIE9OTFlcbiAgICogR2V0cyBvciBzZXRzIGFuIG9wdGlvbmFsIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgaW5zdGVhZCBvZiB0aGVcbiAgICogZGVmYXVsdCBwZXJjZW50YWdlIHN0cmluZy4gSWYgdGhpcyBpc24ndCBwcm92aWRlZCwgc29tZXRoaW5nXG4gICAqIGxpa2UgXCI3MCVcIiB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXSU5ET1dTIE9OTFlcbiAgICogU2V0cyB0aGUgc3RhdHVzIChyZXF1aXJlZCksIHdoaWNoIGlzIGRpc3BsYXllZCB1bmRlcm5lYXRoIHRoZSBwcm9ncmVzcyBiYXJcbiAgICogb24gdGhlIGxlZnQuXG4gICAqIFRoaXMgc3RyaW5nIHNob3VsZCByZWZsZWN0IHRoZSBzdGF0dXMgb2YgdGhlIG9wZXJhdGlvbixcbiAgICogbGlrZSBcIkRvd25sb2FkaW5nLi4uXCIgb3IgXCJJbnN0YWxsaW5nLi4uXCJcbiAgICovXG4gIHN0YXR1cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb24ge1xuICAvKipcbiAgICogQSB1bmlxdWUgaWRlbnRpZmllciByZXF1aXJlZCB0byBjbGVhciwgY2FuY2VsLCB1cGRhdGUgb3IgcmV0cmlldmUgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbiBpbiB0aGUgZnV0dXJlXG4gICAqIERlZmF1bHQ6IDBcbiAgICovXG4gIGlkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBGaXJzdCByb3cgb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgKiBEZWZhdWx0OiBFbXB0eSBzdHJpbmcgKGlPUykgb3IgdGhlIGFwcCBuYW1lIChBbmRyb2lkKVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlY29uZCByb3cgb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgKiBEZWZhdWx0OiBFbXB0eSBzdHJpbmdcbiAgICovXG4gIHRleHQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBjdXJyZW50bHkgc2V0IGFzIHRoZSBiYWRnZSBvZiB0aGUgYXBwIGljb24gaW4gU3ByaW5nYm9hcmQgKGlPUykgb3IgYXQgdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIChBbmRyb2lkKVxuICAgKiBEZWZhdWx0OiAwICh3aGljaCBtZWFucyBkb24ndCBzaG93IGEgbnVtYmVyKVxuICAgKi9cbiAgYmFkZ2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVyaSBvZiB0aGUgZmlsZSBjb250YWluaW5nIHRoZSBzb3VuZCB0byBwbGF5IHdoZW4gYW4gYWxlcnQgaXMgZGlzcGxheWVkXG4gICAqIERlZmF1bHQ6IHJlczovL3BsYXRmb3JtX2RlZmF1bHRcbiAgICovXG4gIHNvdW5kPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcmJpdHJhcnkgZGF0YSwgb2JqZWN0cyB3aWxsIGJlIGVuY29kZWQgdG8gSlNPTiBzdHJpbmdcbiAgICogRGVmYXVsdDogbnVsbFxuICAgKi9cbiAgZGF0YT86IGFueTtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFVyaSBvZiB0aGUgaWNvbiB0aGF0IGlzIHNob3duIGluIHRoZSB0aWNrZXIgYW5kIG5vdGlmaWNhdGlvblxuICAgKiBEZWZhdWx0OiByZXM6Ly9pY29uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogVXJpIG9mIHRoZSByZXNvdXJjZSAob25seSByZXM6Ly8pIHRvIHVzZSBpbiB0aGUgbm90aWZpY2F0aW9uIGxheW91dHMuIERpZmZlcmVudCBjbGFzc2VzIG9mIGRldmljZXMgbWF5IHJldHVybiBkaWZmZXJlbnQgc2l6ZXNcbiAgICogRGVmYXVsdDogcmVzOi8vaWNfcG9wdXBfcmVtaW5kZXJcbiAgICovXG4gIHNtYWxsSWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFJHQiB2YWx1ZSBmb3IgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHNtYWxsSWNvbi5cbiAgICogRGVmYXVsdDogQW5kcm9pZHMgQ09MT1JfREVGQVVMVCwgd2hpY2ggd2lsbCB2YXJ5IGJhc2VkIG9uIEFuZHJvaWQgdmVyc2lvbi5cbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogVXNlIHRoZSBkZWZhdWx0IG5vdGlmaWNhdGlvbiB2aWJyYXRlLlxuICAgKi9cbiAgdmlicmF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBEZWZpbmUgdGhlIGJsaW5raW5nIG9mIHRoZSBMRUQgb24gdGhlIGRldmljZS5cbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSBMRUQgd2lsbCBibGluayBpbiB0aGUgZGVmYXVsdCBjb2xvciB3aXRoXG4gICAqIHRpbWluZ3MgZm9yIG9uIGFuZCBvZmYgc2V0IHRvIDEwMDAgbXMuXG4gICAqIElmIHNldCB0byBhIHN0cmluZywgdGhlIExFRCB3aWxsIGJsaW5rIGluIHRoaXMgQVJHQiB2YWx1ZSB3aXRoXG4gICAqIHRpbWluZ3MgZm9yIG9uIGFuZCBvZmYgc2V0IHRvIDEwMDAgbXMuXG4gICAqIElmIHNldCB0byBhbiBhcnJheSwgdGhlIHZhbHVlIG9mIHRoZSBrZXkgMCB3aWxsIGJlIHVzZWQgYXMgdGhlIGNvbG9yLFxuICAgKiB0aGUgdmFsdWUgb2YgdGhlIGtleSAxIHdpbGwgYmUgdXNlZCBhcyB0aGUgJ29uJyB0aW1pbmcsIHRoZSB2YWx1ZSBvZlxuICAgKiB0aGUga2V5IDIgd2lsbCBiZSB1c2VkIGFzIHRoZSAnb2ZmJyB0aW1pbmdcbiAgICovXG4gIGxlZD86IHsgY29sb3I6IHN0cmluZzsgb246IG51bWJlcjsgb2ZmOiBudW1iZXIgfSB8IGFueVtdIHwgYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogTm90aWZpY2F0aW9uIHByaW9yaXR5LlxuICAgKiBJbnRlZ2VycyBiZXR3ZWVuIC0yIGFuZCAyLCB3aGVyZWFzIC0yIGlzIG1pbmltdW0gYW5kIDIgaXMgbWF4aW11bSBwcmlvcml0eVxuICAgKi9cbiAgcHJpb3JpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElzIGEgc2lsZW50IG5vdGlmaWNhdGlvblxuICAgKi9cbiAgc2lsZW50PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGEgY2xpY2sgb24gdGhlIG5vdGlmaWNhdGlvbiBjYXVzZXMgdGhlIGFwcFxuICAgKiB0byBsYXVuY2ggaW4gdGhlIGZvcmVncm91bmRcbiAgICovXG4gIGxhdW5jaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBXYWtldXAgdGhlIGRldmljZS4gKGRlZmF1bHQgaXMgdHJ1ZSlcbiAgICovXG4gIHdha2V1cD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTcGVjaWZpZXMgYSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhpcyBub3RpZmljYXRpb24gc2hvdWxkIGJlIGNhbmNlbGVkLCBpZiBpdCBpcyBub3QgYWxyZWFkeSBjYW5jZWxlZC5cbiAgICovXG4gIHRpbWVvdXRBZnRlcj86IG51bWJlciB8IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBY3Rpb25zIGlkIG9yIGFjdGlvbnNcbiAgICovXG4gIGFjdGlvbnM/OiBzdHJpbmcgfCBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25bXTtcblxuICAvKipcbiAgICogV2hlbiB0byB0cmlnZ2VyIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHRyaWdnZXI/OiBJTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaW1hZ2UgYXR0YWNobWVudHNcbiAgICovXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBJZiBhbmQgaG93IHRoZSBub3RpZmljYXRpb24gc2hhbGwgc2hvdyB0aGUgd2hlbiBkYXRlLlxuICAgKiBQb3NzYmlsZSB2YWx1ZXM6XG4gICAqICAgICAgICAgICAgICAgICAgYm9vbGVhbjogdHJ1ZSBlcXVhbHMgJ2Nsb2NrJywgZmFsc2UgZGlzYWJsZSBhIHdhdGNoL2NvdW50ZXJcbiAgICogICAgICAgICAgICAgICAgICAnY2xvY2snOiBTaG93IHRoZSB3aGVuIGRhdGUgaW4gdGhlIGNvbnRlbnQgdmlld1xuICAgKiAgICAgICAgICAgICAgICAgICdjaHJvbm9tZXRlcic6IFNob3cgYSBzdG9wd2F0Y2hcbiAgICpcbiAgICovXG4gIGNsb2NrPzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogU2hvd3MgYSBwcm9ncmVzcyBiYXJcbiAgICogU2V0dGluZyBhIGJvb2xlYW4gaXMgYSBzaG9ydGN1dCBmb3Ige2VuYWJsZWQ6IHRydWUvZmFsc2V9IHJlc3BlY3RpdmVseVxuICAgKi9cbiAgcHJvZ3Jlc3NCYXI/OiBJTG9jYWxOb3RpZmljYXRpb25Qcm9ncmVzc0JhciB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBJZiBtdWx0aXBsZSBub3RpZmljYXRpb25zIGhhdmUgdGhlIHNhbWUgZ3JvdXAgeW91ciBhcHAgY2FuIHByZXNlbnRcbiAgICogdGhlbSBhcyBhIHNpbmdsZSBncm91cC5cbiAgICovXG4gIGdyb3VwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogSWYgc2V0IHRvICd0cnVlJyB0aGlzIG5vdGlmaWNhdGlvbiBjb3VsZCB1c2UgJ3N1bW1hcnknIHRvIHN1bW1hcml6ZVxuICAgKiB0aGUgY29udGVudHMgb2YgdGhlIHdob2xlIGdyb3VwXG4gICAqL1xuICBncm91cFN1bW1hcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU3VtbWFyeSBvZiB0aGUgd2hvbGUgbm90aWZpY2F0aW9uIGdyb3VwLiBTaG91bGQgYmUgdXNlZCBpbiBjb25qdW50aW9uXG4gICAqIHdpdGggJ2dyb3VwU3VtbWFyeScgc2V0IHRvIHRydWVcbiAgICovXG4gIHN1bW1hcnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdGhpcyBub3RpZmljYXRpb24gcmVwcmVzZW50cy5cbiAgICovXG4gIG51bWJlcj86IG51bWJlcjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNldCB3aGV0aGVyIHRoaXMgaXMgYW4gXCJvbmdvaW5nXCIgbm90aWZpY2F0aW9uLlxuICAgKiBPbmdvaW5nIG5vdGlmaWNhdGlvbnMgY2Fubm90IGJlIGRpc21pc3NlZCBieSB0aGUgdXNlcixcbiAgICogc28geW91ciBhcHBsaWNhdGlvbiBvciBzZXJ2aWNlIG11c3QgdGFrZSBjYXJlIG9mIGNhbmNlbGluZyB0aGVtLlxuICAgKi9cbiAgc3RpY2t5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIE1ha2UgdGhpcyBub3RpZmljYXRpb24gYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgdXNlciB0b3VjaGVzIGl0LlxuICAgKi9cbiAgYXV0b0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIElmIHNldCB0byB0cnVlIHRoZSBub3RpZmljYXRpb24gd2lsbCBiZSBzaG93IGluIGl0cyBlbnRpcmV0eSBvbiBhbGwgbG9ja3NjcmVlbnMuXG4gICAqIElmIHNldCB0byBmYWxzZSBpdCB3aWxsIG5vdCBiZSByZXZlYWxlZCBvbiBhIHNlY3VyZSBsb2Nrc2NyZWVuLlxuICAgKi9cbiAgbG9ja3NjcmVlbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTZXQgdGhlIGRlZmF1bHQgbm90aWZpY2F0aW9uIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHVzZWQuXG4gICAqIFRoZSB2YWx1ZSBzaG91bGQgYmUgb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyBmaWVsZHMgY29tYmluZWQgd2l0aFxuICAgKiBiaXR3aXNlLW9yOiBERUZBVUxUX1NPVU5ELCBERUZBVUxUX1ZJQlJBVEUsIERFRkFVTFRfTElHSFRTLlxuICAgKi9cbiAgZGVmYXVsdHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTcGVjaWZpZXMgdGhlIGNoYW5uZWwgdGhlIG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgZGVsaXZlcmVkIG9uLlxuICAgKi9cbiAgY2hhbm5lbD86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNldCB0aGUgdG9rZW4gZm9yIHRoZSBtZWRpYSBzZXNzaW9uXG4gICAqL1xuICBtZWRpYVNlc3Npb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBub3RpZmljYXRpb24gc2hvdyB3aGVuIGFwcCBpbiBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgZm9yZWdyb3VuZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgTG9jYWwgTm90aWZpY2F0aW9uc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGRpc3BsYXkgbG9jYWwgbm90aWZpY2F0aW9ucyBvbiB0aGUgZGV2aWNlXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2FsLW5vdGlmaWNhdGlvbnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbnM6IExvY2FsTm90aWZpY2F0aW9ucykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFNjaGVkdWxlIGEgc2luZ2xlIG5vdGlmaWNhdGlvblxuICogdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xuICogICBpZDogMSxcbiAqICAgdGV4dDogJ1NpbmdsZSBJTG9jYWxOb3RpZmljYXRpb24nLFxuICogICBzb3VuZDogaXNBbmRyb2lkPyAnZmlsZTovL3NvdW5kLm1wMyc6ICdmaWxlOi8vYmVlcC5jYWYnLFxuICogICBkYXRhOiB7IHNlY3JldDoga2V5IH1cbiAqIH0pO1xuICpcbiAqXG4gKiAvLyBTY2hlZHVsZSBtdWx0aXBsZSBub3RpZmljYXRpb25zXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICogICAgaWQ6IDEsXG4gKiAgICB0ZXh0OiAnTXVsdGkgSUxvY2FsTm90aWZpY2F0aW9uIDEnLFxuICogICAgc291bmQ6IGlzQW5kcm9pZCA/ICdmaWxlOi8vc291bmQubXAzJzogJ2ZpbGU6Ly9iZWVwLmNhZicsXG4gKiAgICBkYXRhOiB7IHNlY3JldDprZXkgfVxuICogICB9LHtcbiAqICAgIGlkOiAyLFxuICogICAgdGl0bGU6ICdMb2NhbCBJTG9jYWxOb3RpZmljYXRpb24gRXhhbXBsZScsXG4gKiAgICB0ZXh0OiAnTXVsdGkgSUxvY2FsTm90aWZpY2F0aW9uIDInLFxuICogICAgaWNvbjogJ2h0dHA6Ly9leGFtcGxlLmNvbS9pY29uLnBuZydcbiAqIH1dKTtcbiAqXG4gKlxuICogLy8gU2NoZWR1bGUgZGVsYXllZCBub3RpZmljYXRpb25cbiAqIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKHtcbiAqICAgIHRleHQ6ICdEZWxheWVkIElMb2NhbE5vdGlmaWNhdGlvbicsXG4gKiAgICB0cmlnZ2VyOiB7YXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMzYwMCl9LFxuICogICAgbGVkOiAnRkYwMDAwJyxcbiAqICAgIHNvdW5kOiBudWxsXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIElMb2NhbE5vdGlmaWNhdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvY2FsTm90aWZpY2F0aW9ucycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ub3RpZmljYXRpb24ubG9jYWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb25zJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbE5vdGlmaWNhdGlvbnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbmZvcm1zIGlmIHRoZSBhcHAgaGFzIHRoZSBwZXJtaXNzaW9uIHRvIHNob3cgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBzaG93IG5vdGlmaWNhdGlvbnMgaWYgbm90IGFscmVhZHkgZ3JhbnRlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7Tm90aWZpY2F0aW9uIHwgSUxvY2FsTm90aWZpY2F0aW9uW119IG9wdGlvbmFsXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzY2hlZHVsZShvcHRpb25zPzogSUxvY2FsTm90aWZpY2F0aW9uIHwgSUxvY2FsTm90aWZpY2F0aW9uW10pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSBwcmV2aW91c2x5IHNjaGVkdWxlZCBub3RpZmljYXRpb24uIE11c3QgaW5jbHVkZSB0aGUgaWQgaW4gdGhlIG9wdGlvbnMgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SUxvY2FsTm90aWZpY2F0aW9ufSBvcHRpb25hbFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgdXBkYXRlKG9wdGlvbnM/OiBJTG9jYWxOb3RpZmljYXRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsZWFycyBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gQSBzaW5nbGUgbm90aWZpY2F0aW9uIGlkLCBvciBhbiBhcnJheSBvZiBub3RpZmljYXRpb24gaWRzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBub3RpZmljYXRpb24gaGFkIGJlZW4gY2xlYXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcihub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gYWxsIG5vdGlmaWNhdGlvbnMgaGF2ZSBjbGVhcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyQWxsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbHMgc2luZ2xlIG9yIG11bHRpcGxlIG5vdGlmaWNhdGlvbnNcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IEEgc2luZ2xlIG5vdGlmaWNhdGlvbiBpZCwgb3IgYW4gYXJyYXkgb2Ygbm90aWZpY2F0aW9uIGlkcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiB0aGUgbm90aWZpY2F0aW9uIGlzIGNhbmNlbGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbChub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VscyBhbGwgbm90aWZpY2F0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIGFsbCBub3RpZmljYXRpb25zIGFyZSBjYW5jZWxlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHByZXNlbmNlIG9mIGEgbm90aWZpY2F0aW9uXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNQcmVzZW50KG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlzIGEgbm90aWZpY2F0aW9uIGlzIHNjaGVkdWxlZFxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzU2NoZWR1bGVkKG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbm90aWZpY2F0aW9uIGlzIHRyaWdnZXJlZFxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzVHJpZ2dlcmVkKG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBub3RpZmljYXRpb24gaGFzIGEgZ2l2ZW4gdHlwZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFRoZSBJRCBvZiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgVGhlIHR5cGUgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1R5cGUoaWQ6IG51bWJlciwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdHlwZSAodHJpZ2dlcmVkLCBzY2hlZHVsZWQpIGZvciB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFR5cGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBub3RpZmljYXRpb24gaWRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PG51bWJlcj4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJZHMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGlkcyBvZiBzY2hlZHVsZWQgbm90aWZpY2F0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJbXT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNjaGVkdWxlZElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaWRzIG9mIHRyaWdnZXJlZCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PG51bWJlcj4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUcmlnZ2VyZWRJZHMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBub3RpZmljYXRpb24gb2JqZWN0XG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7YW55fSBUaGUgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vdGlmaWNhdGlvbiBvYmplY3RzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbltdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsKCk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2NoZWR1bGVkIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IFRoZSBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTY2hlZHVsZWQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHRyaWdnZXJlZCBub3RpZmljYXRpb24gb2JqZWN0XG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCBUaGUgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VHJpZ2dlcmVkKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZ3JvdXAgb2YgYWN0aW9uc1xuICAgKiBAcGFyYW0gZ3JvdXBJZCBUaGUgaWQgb2YgdGhlIGFjdGlvbiBncm91cFxuICAgKiBAcGFyYW0gYWN0aW9ucyBUaGUgYWN0aW9ucyBvZiB0aGlzIGdyb3VwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZEFjdGlvbnMoZ3JvdXBJZDogYW55LCBhY3Rpb25zOiBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25bXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBncm91cCBvZiBhY3Rpb25zXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUFjdGlvbnMoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZ3JvdXAgb2YgYWN0aW9ucyBpcyBkZWZpbmVkXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBXaGV0aGVyIHRoZSBncm91cCBpcyBkZWZpbmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc0FjdGlvbnMoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIChwbGF0Zm9ybSBzcGVjaWZpYykgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gQW4gb2JqZWN0IHdpdGggYWxsIGRlZmF1bHQgc2V0dGluZ3NcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGdldERlZmF1bHRzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgdGhlIChwbGF0Zm9ybSBzcGVjaWZpYykgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHNldERlZmF1bHRzKGRlZmF1bHRzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHNjaGVkdWxlZCBub3RpZmljYXRpb24gb2JqZWN0c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxJTG9jYWxOb3RpZmljYXRpb24+Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsU2NoZWR1bGVkKCk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0cmlnZ2VyZWQgbm90aWZpY2F0aW9uIG9iamVjdHNcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8SUxvY2FsTm90aWZpY2F0aW9uPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFsbFRyaWdnZXJlZCgpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBldmVudC4gQXZhaWxhYmxlIGV2ZW50czogc2NoZWR1bGUsIHRyaWdnZXIsIGNsaWNrLCB1cGRhdGUsIGNsZWFyLCBjbGVhcmFsbCwgY2FuY2VsLCBjYW5jZWxhbGwuIEN1c3RvbSBldmVudCBuYW1lcyBhcmUgcG9zc2libGUgZm9yIGFjdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBvbihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vdCBhbiBvZmZpY2lhbCBpbnRlcmZhY2UsIGhvd2V2ZXIgaXRzIHBvc3NpYmxlIHRvIG1hbnVhbGx5IGZpcmUgZXZlbnRzLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gQXZhaWxhYmxlIGV2ZW50czogc2NoZWR1bGUsIHRyaWdnZXIsIGNsaWNrLCB1cGRhdGUsIGNsZWFyLCBjbGVhcmFsbCwgY2FuY2VsLCBjYW5jZWxhbGwuIEN1c3RvbSBldmVudCBuYW1lcyBhcmUgcG9zc2libGUgZm9yIGFjdGlvbnNcbiAgICogQHBhcmFtIGFyZ3MgT3B0aW9uYWwgYXJndW1lbnRzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBmaXJlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQge31cblxuICAvKipcbiAgICogRmlyZSBxdWV1ZWQgZXZlbnRzIG9uY2UgdGhlIGRldmljZSBpcyByZWFkeSBhbmQgYWxsIGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlyZVF1ZXVlZEV2ZW50cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
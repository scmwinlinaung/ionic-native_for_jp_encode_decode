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
/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
export var SyncStatus;
(function (SyncStatus) {
    /**
     * The application is up to date.
     */
    SyncStatus[SyncStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    SyncStatus[SyncStatus["UPDATE_INSTALLED"] = 1] = "UPDATE_INSTALLED";
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    SyncStatus[SyncStatus["UPDATE_IGNORED"] = 2] = "UPDATE_IGNORED";
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    SyncStatus[SyncStatus["ERROR"] = 3] = "ERROR";
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    SyncStatus[SyncStatus["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    SyncStatus[SyncStatus["CHECKING_FOR_UPDATE"] = 5] = "CHECKING_FOR_UPDATE";
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    SyncStatus[SyncStatus["AWAITING_USER_ACTION"] = 6] = "AWAITING_USER_ACTION";
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    SyncStatus[SyncStatus["DOWNLOADING_PACKAGE"] = 7] = "DOWNLOADING_PACKAGE";
    /**
     * Intermediate status - the update package is about to be installed.
     */
    SyncStatus[SyncStatus["INSTALLING_UPDATE"] = 8] = "INSTALLING_UPDATE";
})(SyncStatus || (SyncStatus = {}));
/**
 * Defines the available install modes for updates.
 */
export var InstallMode;
(function (InstallMode) {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    InstallMode[InstallMode["IMMEDIATE"] = 0] = "IMMEDIATE";
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    InstallMode[InstallMode["ON_NEXT_RESTART"] = 1] = "ON_NEXT_RESTART";
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    InstallMode[InstallMode["ON_NEXT_RESUME"] = 2] = "ON_NEXT_RESUME";
})(InstallMode || (InstallMode = {}));
var CodePushOriginal = /** @class */ (function (_super) {
    __extends(CodePushOriginal, _super);
    function CodePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodePushOriginal.prototype.getCurrentPackage = function () { return cordova(this, "getCurrentPackage", {}, arguments); };
    CodePushOriginal.prototype.getPendingPackage = function () { return cordova(this, "getPendingPackage", {}, arguments); };
    CodePushOriginal.prototype.checkForUpdate = function (deploymentKey) { return cordova(this, "checkForUpdate", { "callbackOrder": "reverse" }, arguments); };
    CodePushOriginal.prototype.notifyApplicationReady = function () { return cordova(this, "notifyApplicationReady", {}, arguments); };
    CodePushOriginal.prototype.restartApplication = function () { return cordova(this, "restartApplication", {}, arguments); };
    CodePushOriginal.prototype.sync = function (syncOptions, downloadProgress) { return cordova(this, "sync", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    CodePushOriginal.pluginName = "CodePush";
    CodePushOriginal.plugin = "cordova-plugin-code-push";
    CodePushOriginal.pluginRef = "codePush";
    CodePushOriginal.repo = "https://github.com/Microsoft/cordova-plugin-code-push";
    CodePushOriginal.platforms = ["Android", "iOS"];
    return CodePushOriginal;
}(IonicNativePlugin));
var CodePush = new CodePushOriginal();
export { CodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvZGUtcHVzaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBc1JsQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFVBK0NYO0FBL0NELFdBQVksVUFBVTtJQUNwQjs7T0FFRztJQUNILHVEQUFVLENBQUE7SUFFVjs7O09BR0c7SUFDSCxtRUFBZ0IsQ0FBQTtJQUVoQjs7T0FFRztJQUNILCtEQUFjLENBQUE7SUFFZDs7O09BR0c7SUFDSCw2Q0FBSyxDQUFBO0lBRUw7O09BRUc7SUFDSCx5REFBVyxDQUFBO0lBRVg7O09BRUc7SUFDSCx5RUFBbUIsQ0FBQTtJQUVuQjs7T0FFRztJQUNILDJFQUFvQixDQUFBO0lBRXBCOztPQUVHO0lBQ0gseUVBQW1CLENBQUE7SUFFbkI7O09BRUc7SUFDSCxxRUFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBL0NXLFVBQVUsS0FBVixVQUFVLFFBK0NyQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksV0FlWDtBQWZELFdBQVksV0FBVztJQUNyQjs7T0FFRztJQUNILHVEQUFTLENBQUE7SUFFVDs7T0FFRztJQUNILG1FQUFlLENBQUE7SUFFZjs7T0FFRztJQUNILGlFQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFdBQVcsS0FBWCxXQUFXLFFBZXRCOztJQTJJNkIsNEJBQWlCOzs7O0lBTzdDLG9DQUFpQjtJQVVqQixvQ0FBaUI7SUFhakIsaUNBQWMsYUFBQyxhQUFzQjtJQVlyQyx5Q0FBc0I7SUFVdEIscUNBQWtCO0lBNkJsQix1QkFBSSxhQUNGLFdBQXlCLEVBQ3pCLGdCQUFvRDs7Ozs7O21CQTVqQnhEO0VBeWU4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5uYW1lc3BhY2UgSHR0cCB7XG4gIGV4cG9ydCBjb25zdCBlbnVtIFZlcmIge1xuICAgIEdFVCxcbiAgICBIRUFELFxuICAgIFBPU1QsXG4gICAgUFVULFxuICAgIERFTEVURSxcbiAgICBUUkFDRSxcbiAgICBPUFRJT05TLFxuICAgIENPTk5FQ1QsXG4gICAgUEFUQ0hcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2Uge1xuICAgIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgICBib2R5Pzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0ZXIge1xuICAgIHJlcXVlc3QodmVyYjogVmVyYiwgdXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBDYWxsYmFjazxSZXNwb25zZT4pOiB2b2lkO1xuICAgIHJlcXVlc3QoXG4gICAgICB2ZXJiOiBWZXJiLFxuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICByZXF1ZXN0Qm9keTogc3RyaW5nLFxuICAgICAgY2FsbGJhY2s6IENhbGxiYWNrPFJlc3BvbnNlPlxuICAgICk6IHZvaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgcGFja2FnZS4gQWxsIGZpZWxkcyBhcmUgbm9uLW51bGxhYmxlLCBleGNlcHQgd2hlbiByZXRyaWV2aW5nIHRoZSBjdXJyZW50bHkgcnVubmluZyBwYWNrYWdlIG9uIHRoZSBmaXJzdCBydW4gb2YgdGhlIGFwcCxcbiAqIGluIHdoaWNoIGNhc2Ugb25seSB0aGUgYXBwVmVyc2lvbiBpcyBjb21wdWxzb3J5LlxuICpcbiAqICEhIFRISVMgVFlQRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQYWNrYWdlIHtcbiAgZGVwbG95bWVudEtleTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBhcHBWZXJzaW9uOiBzdHJpbmc7XG4gIGlzTWFuZGF0b3J5OiBib29sZWFuO1xuICBwYWNrYWdlSGFzaDogc3RyaW5nO1xuICBwYWNrYWdlU2l6ZTogbnVtYmVyO1xuICBmYWlsZWRJbnN0YWxsOiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlZmluZXMgYSByZW1vdGUgcGFja2FnZSwgd2hpY2ggcmVwcmVzZW50cyBhbiB1cGRhdGUgcGFja2FnZSBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElSZW1vdGVQYWNrYWdlIGV4dGVuZHMgSVBhY2thZ2Uge1xuICAvKipcbiAgICogVGhlIFVSTCBhdCB3aGljaCB0aGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxuICAgKi9cbiAgZG93bmxvYWRVcmw6IHN0cmluZztcblxuICAvKipcbiAgICogRG93bmxvYWRzIHRoZSBwYWNrYWdlIHVwZGF0ZSBmcm9tIHRoZSBDb2RlUHVzaCBzZXJ2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFja30gZG93bmxvYWRTdWNjZXNzIENhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHRoZSBkb3dubG9hZGVkIHBhY2thZ2UgaW5mb3JtYXRpb24sIG9uY2UgdGhlIGRvd25sb2FkIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2Rvd25sb2FkRXJyb3JdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaW4gY2FzZSBvZiBhbiBlcnJvci5cbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz59IFtkb3dubG9hZFByb2dyZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gSXQgaXMgY2FsbGVkIHNldmVyYWwgdGltZXMgd2l0aCBvbmUgRG93bmxvYWRQcm9ncmVzcyBwYXJhbWV0ZXIuXG4gICAqL1xuICBkb3dubG9hZChcbiAgICBkb3dubG9hZFN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJTG9jYWxQYWNrYWdlPixcbiAgICBkb3dubG9hZEVycm9yPzogRXJyb3JDYWxsYmFjayxcbiAgICBkb3dubG9hZFByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+XG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFib3J0cyB0aGUgY3VycmVudCBkb3dubG9hZCBzZXNzaW9uLCBwcmV2aW91c2x5IHN0YXJ0ZWQgd2l0aCBkb3dubG9hZCgpLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gW2Fib3J0U3VjY2Vzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpZiB0aGUgYWJvcnQgb3BlcmF0aW9uIHN1Y2NlZWRlZC5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbYWJvcnRFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKi9cbiAgYWJvcnREb3dubG9hZChcbiAgICBhYm9ydFN1Y2Nlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8dm9pZD4sXG4gICAgYWJvcnRFcnJvcj86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgbG9jYWwgcGFja2FnZS5cbiAqXG4gKiAhISBUSElTIFRZUEUgSVMgUkVBRCBGUk9NIE5BVElWRSBDT0RFIEFTIFdFTEwuIEFOWSBDSEFOR0VTIFRPIFRISVMgSU5URVJGQUNFIE5FRURTIFRPIEJFIFVQREFURUQgSU4gTkFUSVZFIENPREUgISFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxQYWNrYWdlIGV4dGVuZHMgSVBhY2thZ2Uge1xuICAvKipcbiAgICogVGhlIGxvY2FsIHN0b3JhZ2UgcGF0aCB3aGVyZSB0aGlzIHBhY2thZ2UgaXMgbG9jYXRlZC5cbiAgICovXG4gIGxvY2FsUGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gcnVuIGlzIHRoZSBmaXJzdCBvbmUgYWZ0ZXIgdGhlIHBhY2thZ2Ugd2FzIGFwcGxpZWQuXG4gICAqL1xuICBpc0ZpcnN0UnVuOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoaXMgcGFja2FnZSB0byB0aGUgYXBwbGljYXRpb24uIFRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHJlbG9hZGVkIHdpdGggdGhpcyBwYWNrYWdlIGFuZCBvbiBldmVyeSBhcHBsaWNhdGlvbiBsYXVuY2ggdGhpcyBwYWNrYWdlIHdpbGwgYmUgbG9hZGVkLlxuICAgKiBPbiB0aGUgZmlyc3QgcnVuIGFmdGVyIHRoZSB1cGRhdGUsIHRoZSBhcHBsaWNhdGlvbiB3aWxsIHdhaXQgZm9yIGEgY29kZVB1c2gubm90aWZ5QXBwbGljYXRpb25SZWFkeSgpIGNhbGwuIE9uY2UgdGhpcyBjYWxsIGlzIG1hZGUsIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBpcyBjb25zaWRlcmVkIGEgc3VjY2Vzcy5cbiAgICogT3RoZXJ3aXNlLCB0aGUgaW5zdGFsbCBvcGVyYXRpb24gd2lsbCBiZSBtYXJrZWQgYXMgZmFpbGVkLCBhbmQgdGhlIGFwcGxpY2F0aW9uIGlzIHJldmVydGVkIHRvIGl0cyBwcmV2aW91cyB2ZXJzaW9uIG9uIHRoZSBuZXh0IHJ1bi5cbiAgICpcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8SW5zdGFsbE1vZGU+fSBpbnN0YWxsU3VjY2VzcyBDYWxsYmFjayBpbnZva2VkIGlmIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBzdWNjZWVkZWQuXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2luc3RhbGxFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge0luc3RhbGxPcHRpb25zfSBbaW5zdGFsbE9wdGlvbnNdIE9wdGlvbmFsIHBhcmFtZXRlciB1c2VkIGZvciBjdXN0b21pemluZyB0aGUgaW5zdGFsbGF0aW9uIGJlaGF2aW9yLlxuICAgKi9cbiAgaW5zdGFsbChcbiAgICBpbnN0YWxsU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPEluc3RhbGxNb2RlPixcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayxcbiAgICBpbnN0YWxsT3B0aW9ucz86IEluc3RhbGxPcHRpb25zXG4gICk6IHZvaWQ7XG59XG5cbi8qKlxuICogRGVjb21wb3NlZCBzdGF0aWMgc2lkZSBvZiBSZW1vdGVQYWNrYWdlLlxuICogRm9yIENsYXNzIERlY29tcG9zaXRpb24gZ3VpZGVsaW5lcyBzZWUgaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvSGFuZGJvb2sjd3JpdGluZy1kdHMtZmlsZXMtZ3VpZGVsaW5lcy1hbmQtc3BlY2lmaWNzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmludGVyZmFjZSBSZW1vdGVQYWNrYWdlX1N0YXRpYyB7XG4gIG5ldyAoKTogSVJlbW90ZVBhY2thZ2U7XG59XG5cbi8qIHRzbGludDplbmFibGUgKi9cblxuLyoqXG4gKiBEZWNvbXBvc2VkIHN0YXRpYyBzaWRlIG9mIExvY2FsUGFja2FnZS5cbiAqIEZvciBDbGFzcyBEZWNvbXBvc2l0aW9uIGd1aWRlbGluZXMgc2VlIGh0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL0hhbmRib29rI3dyaXRpbmctZHRzLWZpbGVzLWd1aWRlbGluZXMtYW5kLXNwZWNpZmljc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbnRlcmZhY2UgTG9jYWxQYWNrYWdlX1N0YXRpYyB7XG4gIG5ldyAoKTogSUxvY2FsUGFja2FnZTtcbn1cblxuLyogdHNsaW50OmVuYWJsZSAqL1xuXG5kZWNsYXJlIGNvbnN0IFJlbW90ZVBhY2thZ2U6IFJlbW90ZVBhY2thZ2VfU3RhdGljO1xuZGVjbGFyZSBjb25zdCBMb2NhbFBhY2thZ2U6IExvY2FsUGFja2FnZV9TdGF0aWM7XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgSlNPTiBmb3JtYXQgb2YgdGhlIGN1cnJlbnQgcGFja2FnZSBpbmZvcm1hdGlvbiBmaWxlLlxuICogVGhpcyBmaWxlIGlzIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZSBvZiB0aGUgZGV2aWNlIGFuZCBwZXJzaXN0cyBiZXR3ZWVuIHN0b3JlIHVwZGF0ZXMgYW5kIGNvZGUtcHVzaCB1cGRhdGVzLlxuICpcbiAqICEhIFRISVMgRklMRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxuICovXG5pbnRlcmZhY2UgSVBhY2thZ2VJbmZvTWV0YWRhdGEgZXh0ZW5kcyBJTG9jYWxQYWNrYWdlIHtcbiAgbmF0aXZlQnVpbGRUaW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBOYXRpdmVVcGRhdGVOb3RpZmljYXRpb24ge1xuICB1cGRhdGVBcHBWZXJzaW9uOiBib29sZWFuOyAvLyBBbHdheXMgdHJ1ZVxuICBhcHBWZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrPFQ+ID0gKGVycm9yOiBFcnJvciwgcGFyYW1ldGVyOiBUKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgU3VjY2Vzc0NhbGxiYWNrPFQ+ID0gKHJlc3VsdD86IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrID0gKGVycm9yPzogRXJyb3IpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xuICBjbGllbnRVbmlxdWVJZDogc3RyaW5nO1xuICBkZXBsb3ltZW50S2V5OiBzdHJpbmc7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBpZ25vcmVBcHBWZXJzaW9uPzogYm9vbGVhbjtcbn1cblxuZGVjbGFyZSBjbGFzcyBBY3F1aXNpdGlvblN0YXR1cyB7XG4gIHN0YXRpYyBEZXBsb3ltZW50U3VjY2VlZGVkOiBzdHJpbmc7XG4gIHN0YXRpYyBEZXBsb3ltZW50RmFpbGVkOiBzdHJpbmc7XG59XG5cbmRlY2xhcmUgY2xhc3MgQWNxdWlzaXRpb25NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoaHR0cFJlcXVlc3RlcjogSHR0cC5SZXF1ZXN0ZXIsIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pO1xuICBxdWVyeVVwZGF0ZVdpdGhDdXJyZW50UGFja2FnZShcbiAgICBjdXJyZW50UGFja2FnZTogSVBhY2thZ2UsXG4gICAgY2FsbGJhY2s/OiBDYWxsYmFjazxJUmVtb3RlUGFja2FnZSB8IE5hdGl2ZVVwZGF0ZU5vdGlmaWNhdGlvbj5cbiAgKTogdm9pZDtcbiAgcmVwb3J0U3RhdHVzRGVwbG95KFxuICAgIHBrZz86IElQYWNrYWdlLFxuICAgIHN0YXR1cz86IHN0cmluZyxcbiAgICBwcmV2aW91c0xhYmVsT3JBcHBWZXJzaW9uPzogc3RyaW5nLFxuICAgIHByZXZpb3VzRGVwbG95bWVudEtleT86IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IENhbGxiYWNrPHZvaWQ+XG4gICk6IHZvaWQ7XG4gIHJlcG9ydFN0YXR1c0Rvd25sb2FkKHBrZzogSVBhY2thZ2UsIGNhbGxiYWNrPzogQ2FsbGJhY2s8dm9pZD4pOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ29kZVB1c2hDb3Jkb3ZhUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGFja2FnZVN1Y2Nlc3MgQ2FsbGJhY2sgaW52b2tlZCB3aXRoIHRoZSBjdXJyZW50bHkgZGVwbG95ZWQgcGFja2FnZSBpbmZvcm1hdGlvbi5cbiAgICogQHBhcmFtIHBhY2thZ2VFcnJvciBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXG4gICAqL1xuICBnZXRDdXJyZW50UGFja2FnZShcbiAgICBwYWNrYWdlU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElMb2NhbFBhY2thZ2U+LFxuICAgIHBhY2thZ2VFcnJvcj86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogR2V0cyB0aGUgcGVuZGluZyBwYWNrYWdlIGluZm9ybWF0aW9uLCBpZiBhbnkuIEEgcGVuZGluZyBwYWNrYWdlIGlzIG9uZSB0aGF0IGhhcyBiZWVuIGluc3RhbGxlZCBidXQgdGhlIGFwcGxpY2F0aW9uIHN0aWxsIHJ1bnMgdGhlIG9sZCBjb2RlLlxuICAgKiBUaGlzIGhhcHBlbnMgb25seSBhZnRlciBhIHBhY2thZ2UgaGFzIGJlZW4gaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlLCBidXQgdGhlIGFwcGxpY2F0aW9uIHdhcyBub3QgcmVzdGFydGVkL3Jlc3VtZWQgeWV0LlxuICAgKi9cbiAgZ2V0UGVuZGluZ1BhY2thZ2UoXG4gICAgcGFja2FnZVN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJTG9jYWxQYWNrYWdlPixcbiAgICBwYWNrYWdlRXJyb3I/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aXRoIHRoZSBDb2RlUHVzaCBzZXJ2ZXIgaWYgYW4gdXBkYXRlIHBhY2thZ2UgaXMgYXZhaWxhYmxlIGZvciBkb3dubG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8SVJlbW90ZVBhY2thZ2U+fSBxdWVyeVN1Y2Nlc3MgQ2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqICAgICAgICAgICAgICAgICAgICAgVGhlIGNhbGxiYWNrIHRha2VzIG9uZSBSZW1vdGVQYWNrYWdlIHBhcmFtZXRlci4gQSBub24tbnVsbCBwYWNrYWdlIGlzIGEgdmFsaWQgdXBkYXRlLlxuICAgKiAgICAgICAgICAgICAgICAgICAgIEEgbnVsbCBwYWNrYWdlIG1lYW5zIHRoZSBhcHBsaWNhdGlvbiBpcyB1cCB0byBkYXRlIGZvciB0aGUgY3VycmVudCBuYXRpdmUgYXBwbGljYXRpb24gdmVyc2lvbi5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbcXVlcnlFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlcGxveW1lbnRLZXldIE9wdGlvbmFsIGRlcGxveW1lbnQga2V5IHRoYXQgb3ZlcnJpZGVzIHRoZSBjb25maWcueG1sIHNldHRpbmcuXG4gICAqL1xuICBjaGVja0ZvclVwZGF0ZShcbiAgICBxdWVyeVN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJUmVtb3RlUGFja2FnZT4sXG4gICAgcXVlcnlFcnJvcj86IEVycm9yQ2FsbGJhY2ssXG4gICAgZGVwbG95bWVudEtleT86IHN0cmluZ1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBOb3RpZmllcyB0aGUgcGx1Z2luIHRoYXQgdGhlIHVwZGF0ZSBvcGVyYXRpb24gc3VjY2VlZGVkIGFuZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyByZWFkeS5cbiAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIG9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgYW4gdXBkYXRlLiBPbiBldmVyeSBzdWJzZXF1ZW50IGFwcGxpY2F0aW9uIHJ1biwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIGEgbm9vcC5cbiAgICogSWYgdXNpbmcgc3luYyBBUEksIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBub3QgcmVxdWlyZWQgc2luY2Ugc3luYyBjYWxscyBpdCBpbnRlcm5hbGx5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gW25vdGlmeVN1Y2NlZWRlZF0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpZiB0aGUgcGx1Z2luIHdhcyBzdWNjZXNzZnVsbHkgbm90aWZpZWQuXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW25vdGlmeUZhaWxlZF0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yIGR1cmluZyBub3RpZnlpbmcgdGhlIHBsdWdpbi5cbiAgICovXG4gIG5vdGlmeUFwcGxpY2F0aW9uUmVhZHkoXG4gICAgbm90aWZ5U3VjY2VlZGVkPzogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LFxuICAgIG5vdGlmeUZhaWxlZD86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgYXBwbGljYXRpb24uIElmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgcGFja2FnZSBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGVzLCB0aGUgdXBkYXRlXG4gICAqIHdpbGwgYmUgaW1tZWRpYXRlbHkgdmlzaWJsZSB0byB0aGUgdXNlci4gT3RoZXJ3aXNlLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmVsb2FkIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gaW5zdGFsbFN1Y2Nlc3NcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbZXJyb3JDYWxsYmFja11cbiAgICovXG4gIHJlc3RhcnRBcHBsaWNhdGlvbihcbiAgICBpbnN0YWxsU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgaW5zdGFsbGluZyB1cGRhdGVzIGluIG9uZSBtZXRob2QgY2FsbC5cbiAgICogVGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgZm9yIHNpbXBsaWNpdHksIGFuZCBpdHMgYmVoYXZpb3IgY2FuIGJlIHJlcGxpY2F0ZWQgYnkgdXNpbmcgd2luZG93LmNvZGVQdXNoLmNoZWNrRm9yVXBkYXRlKCksIFJlbW90ZVBhY2thZ2UncyBkb3dubG9hZCgpIGFuZCBMb2NhbFBhY2thZ2UncyBpbnN0YWxsKCkgbWV0aG9kcy5cbiAgICpcbiAgICogVGhlIGFsZ29yaXRobSBvZiB0aGlzIG1ldGhvZCBpcyB0aGUgZm9sbG93aW5nOlxuICAgKiAtIENoZWNrcyBmb3IgYW4gdXBkYXRlIG9uIHRoZSBDb2RlUHVzaCBzZXJ2ZXIuXG4gICAqIC0gSWYgYW4gdXBkYXRlIGlzIGF2YWlsYWJsZVxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkgYW5kIHRoZSBhbGVydE1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgaW5mb3JtZWQgdGhhdCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cbiAgICogICAgICAgICAgIFRoZSB1cGRhdGUgcGFja2FnZSB3aWxsIHRoZW4gYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZC5cbiAgICogICAgICAgICAtIElmIHRoZSB1cGRhdGUgaXMgbm90IG1hbmRhdG9yeSBhbmQgdGhlIGNvbmZpcm1NZXNzYWdlIGlzIHNldCBpbiBvcHRpb25zLCB0aGUgdXNlciB3aWxsIGJlIGFza2VkIGlmIHRoZXkgd2FudCB0byB1cGRhdGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgKiAgICAgICAgICAgSWYgdGhleSBkZWNsaW5lLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIFN5bmNTdGF0dXMuVVBEQVRFX0lHTk9SRUQuXG4gICAqICAgICAgICAgLSBPdGhlcndpc2UsIHRoZSB1cGRhdGUgcGFja2FnZSB3aWxsIGJlIGRvd25sb2FkZWQgYW5kIGFwcGxpZWQgd2l0aCBubyB1c2VyIGludGVyYWN0aW9uLlxuICAgKiAtIElmIG5vIHVwZGF0ZSBpcyBhdmFpbGFibGUgb24gdGhlIHNlcnZlciwgb3IgaWYgYSBwcmV2aW91c2x5IHJvbGxlZCBiYWNrIHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoZSBpZ25vcmVGYWlsZWRVcGRhdGVzIGlzIHNldCB0byB0cnVlLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLlVQX1RPX0RBVEUuXG4gICAqIC0gSWYgYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBjaGVja2luZyBmb3IgdXBkYXRlLCBkb3dubG9hZGluZyBvciBpbnN0YWxsaW5nIGl0LCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLkVSUk9SLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxTeW5jU3RhdHVzPn0gW3N5bmNDYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXR1cyBvZiB0aGUgc3luYyBvcGVyYXRpb24uXG4gICAqICAgICAgICAgICAgICAgICAgICAgVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZSwgYW5kIHRoZSBwb3NzaWJsZSBzdGF0dXNlcyBhcmUgZGVmaW5lZCBieSB0aGUgU3luY1N0YXR1cyBlbnVtLlxuICAgKiBAcGFyYW0ge1N5bmNPcHRpb25zfSBbc3luY09wdGlvbnNdIE9wdGlvbmFsIFN5bmNPcHRpb25zIHBhcmFtZXRlciBjb25maWd1cmluZyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN5bmMgb3BlcmF0aW9uLlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPn0gW2Rvd25sb2FkUHJvZ3Jlc3NdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgZHVyaW5nIHRoZSBkb3dubG9hZCBwcm9jZXNzLiBJdCBpcyBjYWxsZWQgc2V2ZXJhbCB0aW1lcyB3aXRoIG9uZSBEb3dubG9hZFByb2dyZXNzIHBhcmFtZXRlci5cbiAgICpcbiAgICovXG4gIHN5bmMoXG4gICAgc3luY0NhbGxiYWNrPzogU3VjY2Vzc0NhbGxiYWNrPFN5bmNTdGF0dXM+LFxuICAgIHN5bmNPcHRpb25zPzogU3luY09wdGlvbnMsXG4gICAgZG93bmxvYWRQcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPlxuICApOiB2b2lkO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIHBvc3NpYmxlIHJlc3VsdCBzdGF0dXNlcyBvZiB0aGUgd2luZG93LmNvZGVQdXNoLnN5bmMgb3BlcmF0aW9uLlxuICovXG5leHBvcnQgZW51bSBTeW5jU3RhdHVzIHtcbiAgLyoqXG4gICAqIFRoZSBhcHBsaWNhdGlvbiBpcyB1cCB0byBkYXRlLlxuICAgKi9cbiAgVVBfVE9fREFURSxcblxuICAvKipcbiAgICogQW4gdXBkYXRlIGlzIGF2YWlsYWJsZSwgaXQgaGFzIGJlZW4gZG93bmxvYWRlZCwgdW56aXBwZWQgYW5kIGNvcGllZCB0byB0aGUgZGVwbG95bWVudCBmb2xkZXIuXG4gICAqIEFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIHRoZSBjYWxsYmFjayBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSU5TVEFMTEVELCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSByZWxvYWRlZCB3aXRoIHRoZSB1cGRhdGVkIGNvZGUgYW5kIHJlc291cmNlcy5cbiAgICovXG4gIFVQREFURV9JTlNUQUxMRUQsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIHVwZGF0ZSBpcyBhdmFpbGFibGUsIGJ1dCB0aGUgdXNlciBkZWNsaW5lZCB0byBpbnN0YWxsIGl0LiBUaGUgdXBkYXRlIHdhcyBub3QgZG93bmxvYWRlZC5cbiAgICovXG4gIFVQREFURV9JR05PUkVELFxuXG4gIC8qKlxuICAgKiBBbiBlcnJvciBoYXBwZW5lZCBkdXJpbmcgdGhlIHN5bmMgb3BlcmF0aW9uLiBUaGlzIG1pZ2h0IGJlIGFuIGVycm9yIHdoaWxlIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgc2VydmVyLCBkb3dubG9hZGluZyBvciB1bnppcGluZyB0aGUgdXBkYXRlLlxuICAgKiBUaGUgY29uc29sZSBsb2dzIHNob3VsZCBjb250YWluIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBoYXBwZW5lZC4gTm8gdXBkYXRlIGhhcyBiZWVuIGFwcGxpZWQgaW4gdGhpcyBjYXNlLlxuICAgKi9cbiAgRVJST1IsXG5cbiAgLyoqXG4gICAqIFRoZXJlIGlzIGFuIG9uZ29pbmcgc3luYyBpbiBwcm9ncmVzcywgc28gdGhpcyBhdHRlbXB0IHRvIHN5bmMgaGFzIGJlZW4gYWJvcnRlZC5cbiAgICovXG4gIElOX1BST0dSRVNTLFxuXG4gIC8qKlxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHBsdWdpbiBpcyBhYm91dCB0byBjaGVjayBmb3IgdXBkYXRlcy5cbiAgICovXG4gIENIRUNLSU5HX0ZPUl9VUERBVEUsXG5cbiAgLyoqXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSBhIHVzZXIgZGlhbG9nIGlzIGFib3V0IHRvIGJlIGRpc3BsYXllZC4gVGhpcyBzdGF0dXMgd2lsbCBiZSByZXBvcnRlZCBvbmx5IGlmIHVzZXIgaW50ZXJhY3Rpb24gaXMgZW5hYmxlZC5cbiAgICovXG4gIEFXQUlUSU5HX1VTRVJfQUNUSU9OLFxuXG4gIC8qKlxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHVwZGF0ZSBwYWNrYWdlIGlzIGFib3V0IHRvIGJlIGRvd25sb2FkZWQuXG4gICAqL1xuICBET1dOTE9BRElOR19QQUNLQUdFLFxuXG4gIC8qKlxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHVwZGF0ZSBwYWNrYWdlIGlzIGFib3V0IHRvIGJlIGluc3RhbGxlZC5cbiAgICovXG4gIElOU1RBTExJTkdfVVBEQVRFXG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgYXZhaWxhYmxlIGluc3RhbGwgbW9kZXMgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBlbnVtIEluc3RhbGxNb2RlIHtcbiAgLyoqXG4gICAqIFRoZSB1cGRhdGUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBydW5uaW5nIGFwcGxpY2F0aW9uIGltbWVkaWF0ZWx5LiBUaGUgYXBwbGljYXRpb24gd2lsbCBiZSByZWxvYWRlZCB3aXRoIHRoZSBuZXcgY29udGVudCBpbW1lZGlhdGVseS5cbiAgICovXG4gIElNTUVESUFURSxcblxuICAvKipcbiAgICogVGhlIHVwZGF0ZSBpcyBkb3dubG9hZGVkIGJ1dCBub3QgaW5zdGFsbGVkIGltbWVkaWF0ZWx5LiBUaGUgbmV3IGNvbnRlbnQgd2lsbCBiZSBhdmFpbGFibGUgdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgc3RhcnRlZC5cbiAgICovXG4gIE9OX05FWFRfUkVTVEFSVCxcblxuICAvKipcbiAgICogVGhlIHVkcGF0ZSBpcyBkb3dubG9hZGVkIGJ1dCBub3QgaW5zdGFsbGVkIGltbWVkaWF0ZWx5LiBUaGUgbmV3IGNvbnRlbnQgd2lsbCBiZSBhdmFpbGFibGUgdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgcmVzdW1lZCBvciByZXN0YXJ0ZWQsIHdoaWNoZXZlciBldmVudCBoYXBwZW5kcyBmaXJzdC5cbiAgICovXG4gIE9OX05FWFRfUkVTVU1FXG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgaW5zdGFsbCBvcGVyYXRpb24gb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YWxsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBVc2VkIHRvIHNwZWNpZnkgdGhlIEluc3RhbGxNb2RlIHVzZWQgZm9yIHRoZSBpbnN0YWxsIG9wZXJhdGlvbi4gVGhpcyBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gSW5zdGFsbE1vZGUuT05fTkVYVF9SRVNUQVJULlxuICAgKi9cbiAgaW5zdGFsbE1vZGU/OiBJbnN0YWxsTW9kZTtcblxuICAvKipcbiAgICogSWYgaW5zdGFsbE1vZGUgPT09IE9OX05FWFRfUkVTVU1FLCB0aGUgbWluaW11bSBhbW91bnQgb2YgdGltZSAoaW4gc2Vjb25kcykgd2hpY2ggbmVlZHMgdG8gcGFzcyB3aXRoIHRoZSBhcHAgaW4gdGhlIGJhY2tncm91bmQgYmVmb3JlIGFuIHVwZGF0ZSBpbnN0YWxsIG9jY3VycyB3aGVuIHRoZSBhcHAgaXMgcmVzdW1lZC5cbiAgICovXG4gIG1pbmltdW1CYWNrZ3JvdW5kRHVyYXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc3BlY2lmeSB0aGUgSW5zdGFsbE1vZGUgdXNlZCBmb3IgdGhlIGluc3RhbGwgb3BlcmF0aW9uIGlmIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5LiBUaGlzIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBJbnN0YWxsTW9kZS5JTU1FRElBVEUuXG4gICAqL1xuICBtYW5kYXRvcnlJbnN0YWxsTW9kZT86IEluc3RhbGxNb2RlO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIHN5bmMgb3BlcmF0aW9uIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3luY09wdGlvbnMgZXh0ZW5kcyBJbnN0YWxsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBib29sZWFuIGZsYWcuIElmIHNldCwgcHJldmlvdXMgdXBkYXRlcyB3aGljaCB3ZXJlIHJvbGxlZCBiYWNrIHdpbGwgYmUgaWdub3JlZC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIGlnbm9yZUZhaWxlZFVwZGF0ZXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGVuYWJsZSwgZGlzYWJsZSBvciBjdXN0b21pemUgdGhlIHVzZXIgaW50ZXJhY3Rpb24gZHVyaW5nIHN5bmMuXG4gICAqIElmIHNldCB0byBmYWxzZSwgdXNlciBpbnRlcmFjdGlvbiB3aWxsIGJlIGRpc2FibGVkLiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgd2lsbCBiZSBhbGVydGVkIG9yIGFza2VkIHRvIGNvbmZpcm0gbmV3IHVwZGF0ZXMsIGJhc2VkIG9uIHdoZXRoZXIgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkuXG4gICAqIFRvIGN1c3RvbWl6ZSB0aGUgdXNlciBkaWFsb2csIHRoaXMgb3B0aW9uIGNhbiBiZSBzZXQgdG8gYSBjdXN0b20gVXBkYXRlRGlhbG9nT3B0aW9ucyBpbnN0YW5jZS5cbiAgICovXG4gIHVwZGF0ZURpYWxvZz86IGJvb2xlYW4gfCBVcGRhdGVEaWFsb2dPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGNvbmZpZy54bWwgZGVwbG95bWVudCBrZXkgd2hlbiBjaGVja2luZyBmb3IgdXBkYXRlcy5cbiAgICovXG4gIGRlcGxveW1lbnRLZXk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgYWxlcnQgb3IgY29uZmlybWF0aW9uIGRpYWxvZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZURpYWxvZ09wdGlvbnMge1xuICAvKipcbiAgICogSWYgYSBtYW5kYXRvcnkgdXBkYXRlIGlzIGF2YWlsYWJsZSBhbmQgdGhpcyBvcHRpb24gaXMgc2V0LCB0aGUgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBpbiBhbiBhbGVydCBkaWFsb2cgYmVmb3JlIGRvd25sb2FkaW5nIGFuZCBpbnN0YWxsaW5nIHRoZSB1cGRhdGUuXG4gICAqIFRoZSB1c2VyIHdpbGwgbm90IGJlIGFibGUgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24sIHNpbmNlIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5LlxuICAgKi9cbiAgbWFuZGF0b3J5VXBkYXRlTWVzc2FnZT86IHN0cmluZztcblxuICAvKipcbiAgICogSWYgYW4gb3B0aW9uYWwgdXBkYXRlIGlzIGF2YWlsYWJsZSBhbmQgdGhpcyBvcHRpb24gaXMgc2V0LCB0aGUgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBpbiBhIGNvbmZpcm1hdGlvbiBkaWFsb2cuXG4gICAqIElmIHRoZSB1c2VyIGNvbmZpcm1zIHRoZSB1cGRhdGUsIGl0IHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgaW5zdGFsbGVkLiBPdGhlcndpc2UsIHRoZSB1cGRhdGUgdXBkYXRlIGlzIG5vdCBkb3dubG9hZGVkLlxuICAgKi9cbiAgb3B0aW9uYWxVcGRhdGVNZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIGRpYWxvZyBib3ggdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgdXNlciBpbiBjYXNlIG9mIGEgbWFuZGF0b3J5IG9yIG9wdGlvbmFsIHVwZGF0ZS5cbiAgICogVGhpcyB0aXRsZSB3aWxsIG9ubHkgYmUgdXNlZCBpZiBhdCBsZWFzdCBvbmUgb2YgbWFuZGF0b3J5VXBkYXRlTWVzc2FnZSBvciBvcHRpb25hbFVwZGF0ZU1lc3NhZ2Ugb3B0aW9ucyBhcmUgc2V0LlxuICAgKi9cbiAgdXBkYXRlVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBvZiB0aGUgY29uZmlybWF0aW9uIGJ1dHRvbiBpbiBjYXNlIG9mIGFuIG9wdGlvbmFsIHVwZGF0ZS5cbiAgICovXG4gIG9wdGlvbmFsSW5zdGFsbEJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24gaW4gY2FzZSBvZiBhbiBvcHRpb25hbCB1cGRhdGUuXG4gICAqL1xuICBvcHRpb25hbElnbm9yZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpbiBjYXNlIG9mIGEgbWFuZGF0b3J5IHVwZGF0ZS5cbiAgICovXG4gIG1hbmRhdG9yeUNvbnRpbnVlQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZsYWcgaW5kaWNhdGluZyBpZiB0aGUgdXBkYXRlIGRlc2NyaXB0aW9uIHByb3ZpZGVkIGJ5IHRoZSBDb2RlUHVzaCBzZXJ2ZXIgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgZGlhbG9nIGJveCBhcHBlbmRlZCB0byB0aGUgdXBkYXRlIG1lc3NhZ2UuXG4gICAqL1xuICBhcHBlbmRSZWxlYXNlRGVzY3JpcHRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBwcmVmaXggdG8gYWRkIHRvIHRoZSByZWxlYXNlIGRlc2NyaXB0aW9uLlxuICAgKi9cbiAgZGVzY3JpcHRpb25QcmVmaXg/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgSlNPTiBmb3JtYXQgb2YgdGhlIHBhY2thZ2UgZGlmZiBtYW5pZmVzdCBmaWxlLlxuICovXG5pbnRlcmZhY2UgSURpZmZNYW5pZmVzdCB7XG4gIGRlbGV0ZWRGaWxlczogc3RyaW5nW107XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgZm9ybWF0IG9mIHRoZSBEb3dubG9hZFByb2dyZXNzIG9iamVjdCwgdXNlZCB0byBzZW5kIHBlcmlvZGljYWwgdXBkYXRlIG5vdGlmaWNhdGlvbnMgb24gdGhlIHByb2dyZXNzIG9mIHRoZSB1cGRhdGUgZG93bmxvYWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRQcm9ncmVzcyB7XG4gIHRvdGFsQnl0ZXM6IG51bWJlcjtcbiAgcmVjZWl2ZWRCeXRlczogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIENvZGUgUHVzaFxuICogQGRlc2NyaXB0aW9uXG4gKiBDb2RlUHVzaCBwbHVnaW4gZm9yIENvcmRvdmEgYnkgTWljcm9zb2Z0IHRoYXQgc3VwcG9ydHMgaU9TIGFuZCBBbmRyb2lkLlxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0RlbGxvczcvZXhhbXBsZS1jb3Jkb3ZhLWNvZGUtcHVzaC1wbHVnaW5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvZGVQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb2RlLXB1c2gvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZGVQdXNoOiBDb2RlUHVzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gbm90ZSAtIG1vc3RseSBlcnJvciAmIGNvbXBsZXRlZCBtZXRob2RzIG9mIG9ic2VydmFibGUgd2lsbCBub3QgZmlyZVxuICogLy8gYXMgc3luY1N0YXR1cyB3aWxsIGNvbnRhaW4gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHVwZGF0ZVxuICogdGhpcy5jb2RlUHVzaC5zeW5jKCkuc3Vic2NyaWJlKChzeW5jU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzeW5jU3RhdHVzKSk7XG4gKlxuICogY29uc3QgZG93bmxvYWRQcm9ncmVzcyA9IChwcm9ncmVzcykgPT4geyBjb25zb2xlLmxvZyhgRG93bmxvYWRlZCAke3Byb2dyZXNzLnJlY2VpdmVkQnl0ZXN9IG9mICR7cHJvZ3Jlc3MudG90YWxCeXRlc31gKTsgfVxuICogdGhpcy5jb2RlUHVzaC5zeW5jKHt9LCBkb3dubG9hZFByb2dyZXNzKS5zdWJzY3JpYmUoKHN5bmNTdGF0dXMpID0+IGNvbnNvbGUubG9nKHN5bmNTdGF0dXMpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb2RlUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNvZGUtcHVzaCcsXG4gIHBsdWdpblJlZjogJ2NvZGVQdXNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvY29yZG92YS1wbHVnaW4tY29kZS1wdXNoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29kZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFja2FnZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsUGFja2FnZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRQYWNrYWdlKCk6IFByb21pc2U8SUxvY2FsUGFja2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwZW5kaW5nIHBhY2thZ2UgaW5mb3JtYXRpb24sIGlmIGFueS4gQSBwZW5kaW5nIHBhY2thZ2UgaXMgb25lIHRoYXQgaGFzIGJlZW4gaW5zdGFsbGVkIGJ1dCB0aGUgYXBwbGljYXRpb24gc3RpbGwgcnVucyB0aGUgb2xkIGNvZGUuXG4gICAqIFRoaXMgaGFwcGVucyBvbmx5IGFmdGVyIGEgcGFja2FnZSBoYXMgYmVlbiBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGUsIGJ1dCB0aGUgYXBwbGljYXRpb24gd2FzIG5vdCByZXN0YXJ0ZWQvcmVzdW1lZCB5ZXQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbFBhY2thZ2U+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQZW5kaW5nUGFja2FnZSgpOiBQcm9taXNlPElMb2NhbFBhY2thZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdpdGggdGhlIENvZGVQdXNoIHNlcnZlciBpZiBhbiB1cGRhdGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlcGxveW1lbnRLZXldIE9wdGlvbmFsIGRlcGxveW1lbnQga2V5IHRoYXQgb3ZlcnJpZGVzIHRoZSBjb25maWcueG1sIHNldHRpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElSZW1vdGVQYWNrYWdlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2hlY2tGb3JVcGRhdGUoZGVwbG95bWVudEtleT86IHN0cmluZyk6IFByb21pc2U8SVJlbW90ZVBhY2thZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTm90aWZpZXMgdGhlIHBsdWdpbiB0aGF0IHRoZSB1cGRhdGUgb3BlcmF0aW9uIHN1Y2NlZWRlZCBhbmQgdGhhdCB0aGUgYXBwbGljYXRpb24gaXMgcmVhZHkuXG4gICAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyByZXF1aXJlZCBvbiB0aGUgZmlyc3QgcnVuIGFmdGVyIGFuIHVwZGF0ZS4gT24gZXZlcnkgc3Vic2VxdWVudCBhcHBsaWNhdGlvbiBydW4sIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBhIG5vb3AuXG4gICAqIElmIHVzaW5nIHN5bmMgQVBJLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgbm90IHJlcXVpcmVkIHNpbmNlIHN5bmMgY2FsbHMgaXQgaW50ZXJuYWxseS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG5vdGlmeUFwcGxpY2F0aW9uUmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZHMgdGhlIGFwcGxpY2F0aW9uLiBJZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIHBhY2thZ2UgaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlcywgdGhlIHVwZGF0ZVxuICAgKiB3aWxsIGJlIGltbWVkaWF0ZWx5IHZpc2libGUgdG8gdGhlIHVzZXIuIE90aGVyd2lzZSwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHdpbGwgc2ltcGx5IHJlbG9hZCB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc3RhcnRBcHBsaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBpbnN0YWxsaW5nIHVwZGF0ZXMgaW4gb25lIG1ldGhvZCBjYWxsLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBmb3Igc2ltcGxpY2l0eSwgYW5kIGl0cyBiZWhhdmlvciBjYW4gYmUgcmVwbGljYXRlZCBieSB1c2luZyB3aW5kb3cuY29kZVB1c2guY2hlY2tGb3JVcGRhdGUoKSwgUmVtb3RlUGFja2FnZSdzIGRvd25sb2FkKCkgYW5kIExvY2FsUGFja2FnZSdzIGluc3RhbGwoKSBtZXRob2RzLlxuICAgKlxuICAgKiBUaGUgYWxnb3JpdGhtIG9mIHRoaXMgbWV0aG9kIGlzIHRoZSBmb2xsb3dpbmc6XG4gICAqIC0gQ2hlY2tzIGZvciBhbiB1cGRhdGUgb24gdGhlIENvZGVQdXNoIHNlcnZlci5cbiAgICogLSBJZiBhbiB1cGRhdGUgaXMgYXZhaWxhYmxlXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeSBhbmQgdGhlIGFsZXJ0TWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBpbmZvcm1lZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgKiAgICAgICAgICAgVGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgdGhlbiBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkLlxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBub3QgbWFuZGF0b3J5IGFuZCB0aGUgY29uZmlybU1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgYXNrZWQgaWYgdGhleSB3YW50IHRvIHVwZGF0ZSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAqICAgICAgICAgICBJZiB0aGV5IGRlY2xpbmUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSUdOT1JFRC5cbiAgICogICAgICAgICAtIE90aGVyd2lzZSwgdGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZCB3aXRoIG5vIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqIC0gSWYgbm8gdXBkYXRlIGlzIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyLCBvciBpZiBhIHByZXZpb3VzbHkgcm9sbGVkIGJhY2sgdXBkYXRlIGlzIGF2YWlsYWJsZSBhbmQgdGhlIGlnbm9yZUZhaWxlZFVwZGF0ZXMgaXMgc2V0IHRvIHRydWUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuVVBfVE9fREFURS5cbiAgICogLSBJZiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIGNoZWNraW5nIGZvciB1cGRhdGUsIGRvd25sb2FkaW5nIG9yIGluc3RhbGxpbmcgaXQsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuRVJST1IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3luY09wdGlvbnN9IFtzeW5jT3B0aW9uc10gT3B0aW9uYWwgU3luY09wdGlvbnMgcGFyYW1ldGVyIGNvbmZpZ3VyaW5nIHRoZSBiZWhhdmlvciBvZiB0aGUgc3luYyBvcGVyYXRpb24uXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+fSBbZG93bmxvYWRQcm9ncmVzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIEl0IGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHdpdGggb25lIERvd25sb2FkUHJvZ3Jlc3MgcGFyYW1ldGVyLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTeW5jU3RhdHVzPn1cbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzIC8vIHdlIGRvbid0IG5lZWQgdGhpcywgc28gd2Ugc2V0IGl0IHRvIGEgdmFsdWUgaGlnaGVyIHRoYW4gIyBvZiBhcmdzXG4gIH0pXG4gIHN5bmMoXG4gICAgc3luY09wdGlvbnM/OiBTeW5jT3B0aW9ucyxcbiAgICBkb3dubG9hZFByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+XG4gICk6IE9ic2VydmFibGU8U3luY1N0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
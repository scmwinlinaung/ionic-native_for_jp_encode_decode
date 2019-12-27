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
var SSHConnectOriginal = /** @class */ (function (_super) {
    __extends(SSHConnectOriginal, _super);
    function SSHConnectOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSHConnectOriginal.prototype.connect = function (user, password, host, port) { return cordova(this, "connect", {}, arguments); };
    SSHConnectOriginal.prototype.executeCommand = function (command) { return cordova(this, "executeCommand", {}, arguments); };
    SSHConnectOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    SSHConnectOriginal.pluginName = "SSHConnect";
    SSHConnectOriginal.plugin = "cordova-plugin-ssh-connect";
    SSHConnectOriginal.pluginRef = "cordova.plugins.sshConnect";
    SSHConnectOriginal.repo = "https://github.com/JosePerez27/cordova-plugin-ssh-connect";
    SSHConnectOriginal.platforms = ["Android"];
    return SSHConnectOriginal;
}(IonicNativePlugin));
var SSHConnect = new SSHConnectOriginal();
export { SSHConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NzaC1jb25uZWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDeEMsOEJBQWlCOzs7O0lBVy9DLDRCQUFPLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFVbEUsbUNBQWMsYUFBQyxPQUFlO0lBUzlCLCtCQUFVOzs7Ozs7cUJBdEVaO0VBd0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNTSCBDb25uZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIG1ha2UgY29ubmVjdGlvbnMgYW5kIGV4ZWN1dGUgY29tbWFuZHMgdGhyb3VnaCBTU0hcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNTSENvbm5lY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NzaC1jb25uZWN0L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3NoQ29ubmVjdDogU1NIQ29ubmVjdCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3NoQ29ubmVjdC5jb25uZWN0KCd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCBwb3J0KVxuICogICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc3NoQ29ubmVjdC5leGVjdXRlQ29tbWFuZCgnY29tbWFuZCcpXG4gKiAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5zc2hDb25uZWN0LmRpc2Nvbm5lY3QoKVxuICogICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NTSENvbm5lY3QnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zc2gtY29ubmVjdCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zc2hDb25uZWN0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3NlUGVyZXoyNy9jb3Jkb3ZhLXBsdWdpbi1zc2gtY29ubmVjdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1NIQ29ubmVjdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogRXN0YWJsaXNoIGEgcmVtb3RlIHNzaCBjb25uZWN0aW9uXG4gICAqIEBwYXJhbSB7dXNlcn0gdXNlciAgVGhlIHJlbW90ZSBob3N0IHVzZXJcbiAgICogQHBhcmFtIHtwYXNzd29yZH0gcGFzc3dvcmQgIFRoZSByZW1vdGUgaG9zdCBwYXNzd29yZFxuICAgKiBAcGFyYW0ge2hvc3R9IGhvc3QgIFRoZSByZW1vdGUgZGV2aWNlIHRvIGNvbm5lY3RcbiAgICogQHBhcmFtIHtwb3J0fSBwb3J0ICBUaGUgU1NIIHBvcnQgZm9yIGNvbm5lY3Rpb24gKHVzdWFsbHkgcG9ydCAyMilcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGFuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzdWNjZXNzIG9mIHRoZSBjb25uZWN0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QodXNlcjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBob3N0OiBzdHJpbmcsIHBvcnQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgYSBjb21tYW5kIG9uIHRoZSByZW1vdGUgaG9zdCBjb25uZWN0ZWQgYnkgc3NoXG4gICAqIEBwYXJhbSB7Y29tbWFuZH0gY29tbWFuZCAgVGhlIGNvbW1hbmQgdG8gZXhlY3V0ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYW4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHByaW50ZWQgdGV4dCBvbiB0aGUgcmVtb3RlIGNvbnNvbGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdCB0aGUgU1NIIHNlc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGFuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzdWNjZXNzIG9mIHRoZSBkaXNjb25uZWN0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
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
var DBMeterOriginal = /** @class */ (function (_super) {
    __extends(DBMeterOriginal, _super);
    function DBMeterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBMeterOriginal.prototype.start = function () { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    DBMeterOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    DBMeterOriginal.prototype.isListening = function () { return cordova(this, "isListening", {}, arguments); };
    DBMeterOriginal.prototype.delete = function () { return cordova(this, "delete", {}, arguments); };
    DBMeterOriginal.pluginName = "DBMeter";
    DBMeterOriginal.plugin = "cordova-plugin-dbmeter";
    DBMeterOriginal.pluginRef = "DBMeter";
    DBMeterOriginal.repo = "https://github.com/akofman/cordova-plugin-dbmeter";
    DBMeterOriginal.platforms = ["Android", "iOS"];
    return DBMeterOriginal;
}(IonicNativePlugin));
var DBMeter = new DBMeterOriginal();
export { DBMeter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RiLW1ldGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMENMLDJCQUFpQjs7OztJQVM1Qyx1QkFBSztJQVNMLHNCQUFJO0lBU0osNkJBQVc7SUFTWCx3QkFBTTs7Ozs7O2tCQWhGUjtFQTRDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBEQiBNZXRlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRlZmluZXMgYSBnbG9iYWwgREJNZXRlciBvYmplY3QsIHdoaWNoIHBlcm1pdHMgdG8gZ2V0IHRoZSBkZWNpYmVsIHZhbHVlcyBmcm9tIHRoZSBtaWNyb3Bob25lLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEQk1ldGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kYi1tZXRlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGJNZXRlcjogREJNZXRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFN0YXJ0IGxpc3RlbmluZ1xuICogbGV0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZGJNZXRlci5zdGFydCgpLnN1YnNjcmliZShcbiAqICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICogKTtcbiAqXG4gKiAvLyBDaGVjayBpZiB3ZSBhcmUgbGlzdGVuaW5nXG4gKiB0aGlzLmRiTWV0ZXIuaXNMaXN0ZW5pbmcoKS50aGVuKFxuICogICBpc0xpc3RlbmluZyA9PiBjb25zb2xlLmxvZyhpc0xpc3RlbmluZylcbiAqICk7XG4gKlxuICogLy8gU3RvcCBsaXN0ZW5pbmdcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIC8vIERlbGV0ZSBEQk1ldGVyIGluc3RhbmNlIGZyb20gbWVtb3J5XG4gKiB0aGlzLmRiTWV0ZXIuZGVsZXRlKCkudGhlbihcbiAqICAgKCkgPT4gY29uc29sZS5sb2coJ0RlbGV0ZWQgREIgTWV0ZXIgaW5zdGFuY2UnKSxcbiAqICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIERCIE1ldGVyIGluc3RhbmNlJylcbiAqICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEQk1ldGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGJtZXRlcicsXG4gIHBsdWdpblJlZjogJ0RCTWV0ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Frb2ZtYW4vY29yZG92YS1wbHVnaW4tZGJtZXRlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERCTWV0ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydHMgbGlzdGVuaW5nXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS4gU3Vic2NyaWJlIHRvIHN0YXJ0IGxpc3RlbmluZy4gVW5zdWJzY3JpYmUgdG8gc3RvcCBsaXN0ZW5pbmcuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcCdcbiAgfSlcbiAgc3RhcnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgbGlzdGVuaW5nXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgREIgTWV0ZXIgaXMgbGlzdGVuaW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgdGVsbHMgdXMgd2hldGhlciB0aGUgREIgbWV0ZXIgaXMgbGlzdGVuaW5nXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzTGlzdGVuaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIERCIE1ldGVyIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIGlmIHRoZSBpbnN0YW5jZSBoYXMgYmVlbiBkZWxldGVkLCBhbmQgcmVqZWN0cyBpZiBlcnJvcnMgb2NjdXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
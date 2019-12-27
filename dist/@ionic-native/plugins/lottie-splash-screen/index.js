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
var LottieSplashScreenOriginal = /** @class */ (function (_super) {
    __extends(LottieSplashScreenOriginal, _super);
    function LottieSplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreenOriginal.prototype.show = function (location, remote, width, height) { return cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.pluginName = "LottieSplashScreen";
    LottieSplashScreenOriginal.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.pluginRef = "lottie.splashscreen";
    LottieSplashScreenOriginal.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.install = "";
    LottieSplashScreenOriginal.installVariables = [];
    LottieSplashScreenOriginal.platforms = ["Android", "iOS"];
    return LottieSplashScreenOriginal;
}(IonicNativePlugin));
var LottieSplashScreen = new LottieSplashScreenOriginal();
export { LottieSplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvdHRpZS1zcGxhc2gtc2NyZWVuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDaEMsc0NBQWlCOzs7O0lBV3ZELGlDQUFJLGFBQUMsUUFBaUIsRUFBRSxNQUFnQixFQUFFLEtBQWMsRUFBRSxNQUFlO0lBTXpFLGlDQUFJOzs7Ozs7Ozs2QkFuRE47RUFrQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBMb3R0aWUgU3BsYXNoIFNjcmVlblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBzaG93IGJvZHltb3Zpbi9Mb3R0aWUgYW5pbWF0aW9ucyBhcyB0aGUgc3BsYXNoIHNjcmVlbiB3aXRoIEFpcmJuYidzIExvdHRpZSB3cmFwcGVyXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb3R0aWVTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvdHRpZS1zcGxhc2gtc2NyZWVuL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG90dGllU3BsYXNoU2NyZWVuOiBMb3R0aWVTcGxhc2hTY3JlZW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmxvdHRpZVNwbGFzaFNjcmVlbi5zaG93KCd3d3cvbG90dGllL2FuaW1hdGlvbi5qc29uJywgZmFsc2UsIDEwMjQsIDc2OClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMb3R0aWVTcGxhc2hTY3JlZW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb3R0aWUtc3BsYXNoc2NyZWVuJyxcbiAgcGx1Z2luUmVmOiAnbG90dGllLnNwbGFzaHNjcmVlbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdGltYnJ1MzEvY29yZG92YS1wbHVnaW4tbG90dGllLXNwbGFzaHNjcmVlbicsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG90dGllU3BsYXNoU2NyZWVuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzaG93cyBhIExvdHRpZSBzcGxhc2ggc2NyZWVuLiBJZiBubyBhcmd1bWVudHMgYXJlIGdpdmVuLCBpdCBkZWZhdWx0cyB0byB0aGUgY29uZmlnLnhtbCB2YWx1ZXMsIGhvd2V2ZXIgeW91IGNhbiBwYXNzIChuZXcpIG9wdGlvbnMgaGVyZSB0byBjaGFuZ2UgdGhlIGJlaGF2aW9yIG9uIHJ1bnRpbWUuIChGb3IgZWFzaWVyIHJlYWRpbmcgdGhlIFR5cGVTY3JpcHQgbm90YXRpb24gaXMgdXNlZClcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtzdHJpbmd9IExvY2F0aW9uIG9mIHRoZSBMb3R0aWUgSlNPTiBmaWxlIHRoYXQgc2hvdWxkIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHJlbW90ZSB7bnVtYmVyfSBUb2dnbGVzIExvdHRpZSdzIHJlbW90ZSBtb2RlIHdoaWNoIGFsbG93cyBmaWxlcyB0byBiZSBkb3dubG9hZGVkL2Rpc3BsYXllZCBmcm9tIFVSTHMuIEV4YW1wbGU6XG4gICAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBXaWR0aCBvZiB0aGUgY29udGFpbmVyIHRoYXQncyByZW5kZXJpbmcgdGhlIExvdHRpZSBhbmltYXRpb25cbiAgICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBIZWlnaHQgb2YgdGhlIGNvbnRhaW5lciB0aGF0J3MgcmVuZGVyaW5nIHRoZSBMb3R0aWUgYW5pbWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzaG93KGxvY2F0aW9uPzogc3RyaW5nLCByZW1vdGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZHMgaGlkZXMgdGhlIGN1cnJlbnQgYWN0aXZlIExvdHRpZSBzcGxhc2hzY3JlZW4gYW5kIGRlc3Ryb3lzIHRoZSB2aWV3cy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cbn1cbiJdfQ==
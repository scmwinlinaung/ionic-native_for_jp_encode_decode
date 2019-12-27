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
var CardIO = /** @class */ (function (_super) {
    __extends(CardIO, _super);
    function CardIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardIO.prototype.canScan = function () { return cordova(this, "canScan", {}, arguments); };
    CardIO.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    CardIO.prototype.version = function () { return cordova(this, "version", {}, arguments); };
    CardIO.pluginName = "CardIO";
    CardIO.plugin = "card.io.cordova.mobilesdk";
    CardIO.pluginRef = "CardIO";
    CardIO.repo = "https://github.com/card-io/card.io-Cordova-Plugin";
    CardIO.platforms = ["Android", "iOS"];
    CardIO = __decorate([
        Injectable()
    ], CardIO);
    return CardIO;
}(IonicNativePlugin));
export { CardIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhcmQtaW8vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0s1QywwQkFBaUI7Ozs7SUFRM0Msd0JBQU87SUFVUCxxQkFBSSxhQUFDLE9BQXVCO0lBUzVCLHdCQUFPOzs7Ozs7SUEzQkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQWhMbkI7RUFnTDRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZElPT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byByZXF1aXJlIGV4cGlyeSBkYXRlXG4gICAqL1xuICByZXF1aXJlRXhwaXJ5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogIFRoZSB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgZm9yIHRoZSBjYXJkIENWVlxuICAgKi9cbiAgcmVxdWlyZUNWVj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgZm9yIHRoZSBjYXJkIGJpbGxpbmcgcG9zdGFsIGNvZGUuXG4gICAqL1xuICByZXF1aXJlUG9zdGFsQ29kZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBSZW1vdmVzIHRoZSBrZXlib2FyZCBidXR0b24gZnJvbSB0aGUgc2NhbiBzY3JlZW4uXG4gICAqL1xuICBzdXBwcmVzc01hbnVhbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBwb3N0YWwgY29kZSB3aWxsIG9ubHkgY29sbGVjdCBudW1lcmljIGlucHV0LiBTZXQgdGhpcyBpZiB5b3Uga25vdyB0aGUgZXhwZWN0ZWQgY291bnRyeSdzIHBvc3RhbCBjb2RlIGhhcyBvbmx5IG51bWVyaWMgcG9zdGFsIGNvZGVzLlxuICAgKi9cbiAgcmVzdHJpY3RQb3N0YWxDb2RlVG9OdW1lcmljT25seT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB0aGVtZSBmb3IgdGhlIGNhcmQuaW8gQWN0aXZpdHkncyB3aWxsIGJlIHNldCB0byB0aGUgdGhlbWUgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAga2VlcEFwcGxpY2F0aW9uVGhlbWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgdXNlciB3aWxsIGJlIHByb21wdGVkIGZvciB0aGUgY2FyZGhvbGRlciBuYW1lXG4gICAqL1xuICByZXF1aXJlQ2FyZGhvbGRlck5hbWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGRpc3BsYXkgaW5zdHJ1Y3Rpb25zIHRvIHRoZSB1c2VyIHdoaWxlIHRoZXkgYXJlIHNjYW5uaW5nIHRoZWlyIGNhcmQuXG4gICAqL1xuICBzY2FuSW5zdHJ1Y3Rpb25zPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgSWYgc2V0LCB0aGUgY2FyZCB3aWxsIG5vdCBiZSBzY2FubmVkIHdpdGggdGhlIGNhbWVyYS5cbiAgICovXG4gIG5vQ2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgc2NhbkV4cGlyeSBpcyB0cnVlLCBhbiBhdHRlbXB0IHRvIGV4dHJhY3QgdGhlIGV4cGlyeSBmcm9tIHRoZSBjYXJkIGltYWdlIHdpbGwgYmUgbWFkZS5cbiAgICovXG4gIHNjYW5FeHBpcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJlZmVycmVkIGxhbmd1YWdlIGZvciBhbGwgc3RyaW5ncyBhcHBlYXJpbmcgaW4gdGhlIHVzZXIgaW50ZXJmYWNlLiBJZiBub3Qgc2V0LCBvciBpZiBzZXQgdG8gbnVsbCwgZGVmYXVsdHMgdG8gdGhlIGRldmljZSdzIGN1cnJlbnQgbGFuZ3VhZ2Ugc2V0dGluZy5cbiAgICovXG4gIGxhbmd1YWdlT3JMb2NhbGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNvbG9yIG9mIHRoZSBndWlkZSBvdmVybGF5IG9uIHRoZSBjYW1lcmEuIFRoZSBjb2xvciBpcyBwcm92aWRlZCBpbiBoZXhhZGVjaW1hbCBmb3JtYXQgKGUuZy4gYCNGRkZGRkZgKVxuICAgKi9cbiAgZ3VpZGVDb2xvcj86IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHVzZXIgd2lsbCBub3QgYmUgcHJvbXB0ZWQgdG8gY29uZmlybSB0aGVpciBjYXJkIG51bWJlciBhZnRlciBwcm9jZXNzaW5nLlxuICAgKi9cbiAgc3VwcmVzc0NvbmZpcm1hdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBjYXJkLmlvIGxvZ28gd2lsbCBub3QgYmUgc2hvd24gb3ZlcmxhaWQgb24gdGhlIGNhbWVyYS5cbiAgICovXG4gIGhpZGVDYXJkSU9Mb2dvPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGNhcmQuaW8gbG9nbyB3aWxsIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIFBheVBhbCBsb2dvLlxuICAgKi9cbiAgdXNlQ2FyZElPTG9nbz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9uY2UgYSBjYXJkIGltYWdlIGhhcyBiZWVuIGNhcHR1cmVkIGJ1dCBiZWZvcmUgaXQgaGFzIGJlZW4gcHJvY2Vzc2VkLCB0aGlzIHZhbHVlIHdpbGwgZGV0ZXJtaW5lIHdoZXRoZXIgdG8gY29udGludWUgcHJvY2Vzc2luZyBhcyB1c3VhbC5cbiAgICovXG4gIHN1cHJlc3NTY2FuPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkSU9SZXNwb25zZSB7XG4gIC8qKlxuICAgKiBDYXJkIHR5cGVcbiAgICovXG4gIGNhcmRUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1hc2tlZCBjYXJkIG51bWJlciwgc2hvd2luZyBvbmx5IGxhc3QgNCBkaWdpdHNcbiAgICovXG4gIHJlZGFjdGVkQ2FyZE51bWJlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGdWxsIGNhcmQgbnVtYmVyXG4gICAqL1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEV4cGlyeSBtb250aFxuICAgKi9cbiAgZXhwaXJ5TW9udGg6IG51bWJlcjtcblxuICAvKipcbiAgICogRXhwaXJ5IHllYXJcbiAgICovXG4gIGV4cGlyeVllYXI6IG51bWJlcjtcblxuICAvKipcbiAgICogQ1ZWXG4gICAqL1xuICBjdnY6IHN0cmluZztcblxuICAvKipcbiAgICogUG9zdGFsIGNvZGVcbiAgICovXG4gIHBvc3RhbENvZGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FyZGhvbGRlciBuYW1lXG4gICAqL1xuICBjYXJkaG9sZGVyTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIENhcmQgSU9cbiAqIEBkZXNjcmlwdGlvblxuICogQHVzYWdlXG4gKiBUaGlzIHBsdWctaW4gZXhwb3NlcyBjYXJkLmlvIGNyZWRpdCBjYXJkIHNjYW5uaW5nLlxuICpcbiAqICoqTk9URSoqOiBJZiB5b3Ugd291bGQgbGlrZSB0byBhY3R1YWxseSBwcm9jZXNzIGEgY3JlZGl0IGNhcmQgY2hhcmdlLCB5b3UgbWlnaHQgYmUgaW50ZXJlc3RlZCBpbiB0aGUgW1BheVBhbCBDb3Jkb3ZhIFBsdWctaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLUNvcmRvdmEtUGx1Z2luKS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNhcmQuaW8uY29yZG92YS5tb2JpbGVzZGtgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ2FyZCBJTyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2NhcmQtaW8vY2FyZC5pby1Db3Jkb3ZhLVBsdWdpbikuXG4gKlxuICogTm90ZTogRm9yIHVzZSB3aXRoIGlPUyAxMCArIFdoZW4gYnVpbGRpbmcgeW91ciBhcHAgd2l0aCB0aGUgaU9TIDEwIFNESyArLCB5b3UgaGF2ZSB0byBhZGQgc29tZSBpbmZvIHRvIHRoZSBpbmZvLnBsaXN0IGZpbGUuIFRoaXMgaXMgZHVlIHRvIGluY3JlYXNlZCBzZWN1cml0eSBpbiBpT1MgMTAuIEdvIHRvIHlvdXIgYXBwIGRpcmVjdG9yeSBhbmQgc2VhcmNoIGZvciB0aGUgPHlvdXIgYXBwIG5hbWU+SW5mby5wbGlzdCBmaWxlLiBBZGQgdGhlIGZvbGxvd2luZyBsaW5lcyBpbiB0aGUgbWFpbiA8ZGljdD4gZWxlbWVudC5cbiAqIGBgYHhtbFxuICogPGtleT5OU0NhbWVyYVVzYWdlRGVzY3JpcHRpb248L2tleT5cbiAqIDxzdHJpbmc+VG8gc2NhbiBjcmVkaXQgY2FyZHMuPC9zdHJpbmc+XG4gKiBgYGBcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhcmRJTyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FyZC1pby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FyZElPOiBDYXJkSU8pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNhcmRJTy5jYW5TY2FuKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKHJlczogYm9vbGVhbikgPT4ge1xuICogICAgICAgaWYocmVzKXtcbiAqICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gKiAgICAgICAgICAgcmVxdWlyZUV4cGlyeTogdHJ1ZSxcbiAqICAgICAgICAgICByZXF1aXJlQ1ZWOiBmYWxzZSxcbiAqICAgICAgICAgICByZXF1aXJlUG9zdGFsQ29kZTogZmFsc2VcbiAqICAgICAgICAgfTtcbiAqICAgICAgICAgdGhpcy5jYXJkSU8uc2NhbihvcHRpb25zKTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgICk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYXJkSU9PcHRpb25zXG4gKiBDYXJkSU9SZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhcmRJTycsXG4gIHBsdWdpbjogJ2NhcmQuaW8uY29yZG92YS5tb2JpbGVzZGsnLFxuICBwbHVnaW5SZWY6ICdDYXJkSU8nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NhcmQtaW8vY2FyZC5pby1Db3Jkb3ZhLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcmRJTyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgY2FyZCBzY2FubmluZyBpcyBjdXJyZW50bHkgYXZhaWxhYmxlLiAoTWF5IHZhcnkgYnlcbiAgICogZGV2aWNlLCBPUyB2ZXJzaW9uLCBuZXR3b3JrIGNvbm5lY3Rpdml0eSwgZXRjLilcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhblNjYW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYW4gYSBjcmVkaXQgY2FyZCB3aXRoIGNhcmQuaW8uXG4gICAqIEBwYXJhbSB7Q2FyZElPT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBwbHVnaW5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NhbihvcHRpb25zPzogQ2FyZElPT3B0aW9ucyk6IFByb21pc2U8Q2FyZElPUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIHZlcnNpb24gb2YgdGhlIGNhcmQuaW8gbGlicmFyeS4gVXNlZnVsIHdoZW4gY29udGFjdGluZyBzdXBwb3J0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
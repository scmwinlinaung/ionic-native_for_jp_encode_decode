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
var AutostartOriginal = /** @class */ (function (_super) {
    __extends(AutostartOriginal, _super);
    function AutostartOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutostartOriginal.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    AutostartOriginal.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    AutostartOriginal.pluginName = "Autostart";
    AutostartOriginal.plugin = "cordova-plugin-autostart";
    AutostartOriginal.pluginRef = "cordova.plugins.autoStart";
    AutostartOriginal.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    AutostartOriginal.platforms = ["Android"];
    return AutostartOriginal;
}(IonicNativePlugin));
var Autostart = new AutostartOriginal();
export { Autostart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1dG9zdGFydC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnpDLDZCQUFpQjs7OztJQU05QywwQkFBTTtJQU9OLDJCQUFPOzs7Ozs7b0JBN0NUO0VBZ0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEF1dG9zdGFydFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhdXRvbWF0aWNhbGx5IHN0YXJ0cyB5b3VyIEFuZHJvaWQgYXBwIGFmdGVyIGV2ZXJ5IGJvb3Qgb3IgYXV0by11cGRhdGUuXG4gKiBZb3UgY2FuIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhdXRvc3RhcnQgZnVuY3Rpb24gaW4geW91ciBhcHAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBdXRvc3RhcnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2F1dG9zdGFydC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9zdGFydDogQXV0b3N0YXJ0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmF1dG9zdGFydC5lbmFibGUoKTtcbiAqXG4gKiB0aGlzLmF1dG9zdGFydC5kaXNhYmxlKCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXV0b3N0YXJ0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXV0b3N0YXJ0JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmF1dG9TdGFydCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9uaUtvcmluL2NvcmRvdmEtcGx1Z2luLWF1dG9zdGFydCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0b3N0YXJ0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGF1dG9tYXRpYyBzdGFydHVwIGFmdGVyIHRoZSBib290XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5hYmxlKCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGF1dG9tYXRpYyBzdGFydHVwIGFmdGVyIHRoZSBib290XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=
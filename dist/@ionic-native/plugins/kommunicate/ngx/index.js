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
var Kommunicate = /** @class */ (function (_super) {
    __extends(Kommunicate, _super);
    function Kommunicate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kommunicate.prototype.login = function (kmUser) { return cordova(this, "login", {}, arguments); };
    Kommunicate.prototype.registerPushNotification = function () { return cordova(this, "registerPushNotification", {}, arguments); };
    Kommunicate.prototype.isLoggedIn = function () { return cordova(this, "isLoggedIn", {}, arguments); };
    Kommunicate.prototype.updatePushNotificationToken = function (token) { return cordova(this, "updatePushNotificationToken", {}, arguments); };
    Kommunicate.prototype.launchConversation = function () { return cordova(this, "launchConversation", {}, arguments); };
    Kommunicate.prototype.launchParticularConversation = function (conversationObject) { return cordova(this, "launchParticularConversation", {}, arguments); };
    Kommunicate.prototype.startNewConversation = function (conversationParams) { return cordova(this, "startNewConversation", {}, arguments); };
    Kommunicate.prototype.processPushNotification = function (data) { return cordova(this, "processPushNotification", { "sync": true }, arguments); };
    Kommunicate.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    Kommunicate.prototype.startSingleChat = function (data) { return cordova(this, "startSingleChat", {}, arguments); };
    Kommunicate.prototype.conversationBuilder = function (converationObject) { return cordova(this, "conversationBuilder", {}, arguments); };
    Kommunicate.pluginName = "Kommunicate";
    Kommunicate.plugin = "kommunicate-cordova-plugin";
    Kommunicate.pluginRef = "kommunicate";
    Kommunicate.repo = "https://github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin";
    Kommunicate.platforms = ["Android", "Browser", "iOS"];
    Kommunicate = __decorate([
        Injectable()
    ], Kommunicate);
    return Kommunicate;
}(IonicNativePlugin));
export { Kommunicate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tvbW11bmljYXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZDdkMsK0JBQWlCOzs7O0lBbUJoRCwyQkFBSyxhQUFDLE1BQVc7SUFRakIsOENBQXdCO0lBUXhCLGdDQUFVO0lBU1YsaURBQTJCLGFBQUMsS0FBYTtJQVF6Qyx3Q0FBa0I7SUFjbEIsa0RBQTRCLGFBQUMsa0JBQXVCO0lBVXBELDBDQUFvQixhQUFDLGtCQUF1QjtJQVM1Qyw2Q0FBdUIsYUFBQyxJQUFTO0lBUWpDLDRCQUFNO0lBVU4scUNBQWUsYUFBQyxJQUFTO0lBZXpCLHlDQUFtQixhQUFDLGlCQUFzQjs7Ozs7O0lBdEgvQixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBOUN4QjtFQThDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBLb21tdW5pY2F0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgcGx1Z2luIGZvciB0aGUgS29tbXVuaWNhdGUgU0RLLlxuICogV2l0aCB0aGUgaGVscCBvZiB0aGlzIHBsdWdpbiwgeW91IGNhbiBlYXNpbHkgYWRkIGh1bWFuICsgYm90IGNoYXQgc3VwcG9ydCBmdW5jdGlvbmFsaXR5IHRvIHlvdSBhcHAuXG4gKiBSZWZlciB0bzogVE9ETzogaW5zZXJ0IHNpdGUgbGlua1xuICogRm9yIGRvY3VtZW50YXRpb246IFRPRE86IGluc2VydCBsaW5rXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBLb21tdW5pY2F0ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvS29tbXVuaWNhdGUnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUga29tbXVuaWNhdGU6IEtvbW11bmljYXRlKSB7IH1cbiAqIC8vYWxzbyBhZGQgWy4uLiwgS29tbXVuaWNhdGUsIC4uLiBdIGluc2lkZSB0aGUgcHJvdmlkZXJzIGFycmF5LCBpZiByZXF1aXJlZFxuICpcbiAqIHZhciBrbVVzZXIgPSB7XG4gKiAgICB1c2VySWQgOiAncmFuZG9tc3RyaW5nJyxcbiAqICAgIGF1dGhlbnRpY2F0aW9uVHlwZUlkIDogMVxuICogfTtcbiAqXG4gKiB0aGlzLmtvbW11bmljYXRlLmxvZ2luKGttVXNlcilcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhcIlN1Y2Vzc2Z1bGx5IGxvZ2dlZCBpbi5cIiArIHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgaW4uXCIgKyBlcnJvcikpO1xuICpcbiAqIHZhciBjb252ZXJzYXRpb25PYmplY3QgPSB7XG4gKiAgICBpc1VuaXF1ZSA6IGZhbHNlXG4gKiB9O1xuICpcbiAqIHRoaXMua29tbXVuaWNhdGUuY29udmVyc2F0aW9uQnVpbGRlcihjb252ZXJhdGlvbk9iamVjdClcbiAqICAgLnRoZW4oKGNsaWVudENoYW5uZWxLZXk6IGFueSkgPT4gY29uc29sZS5sb2coXCJLb21tdW5pY2F0ZSBjcmVhdGUgY29udmVyc2F0aW9uIHN1Y2Nlc3NmdWwgdGhlIGNsaWVudENoYW5uZWxLZXkgaXMgOiBcIiArIGNsaWVudENoYW5uZWxLZXkpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb252ZXJzYXRpb24uXCIgKyBlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tvbW11bmljYXRlJyxcbiAgcGx1Z2luOiAna29tbXVuaWNhdGUtY29yZG92YS1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdrb21tdW5pY2F0ZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vS29tbXVuaWNhdGUtaW8vS29tbXVuaWNhdGUtQ29yZG92YS1Jb25pYy1QaG9uZUdhcC1DaGF0LVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS29tbXVuaWNhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIExvZ2luIHRoZSB1c2VyIHdpdGggdGhlIGRldGFpbHMgcGFzc2VkIGluXG4gICAqIENyZWF0ZXMgYSBuZXcgdXNlciB3aXRoIHRoZSBkZXRhaWxzIHByb3ZpZGVkIHRoZXJlIGlzIG5vIGV4aXN0aW5nIHVzZXJcbiAgICpcbiAgICogdmFyIGttVXNlciA9IHtcbiAgICogICAgJ3VzZXJJZCcgOiAndXNlcklkJywgICAvL1JlcGxhY2UgaXQgd2l0aCB0aGUgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAgICAncGFzc3dvcmQnIDogJ3Bhc3N3b3JkJywgIC8vcmVwbGFjZSB3aXRoIHBhc3N3b3JkXG4gICAqICAgICdhdXRoZW50aWNhdGlvblR5cGVJZCcgOiAxLFxuICAgKiAgICAnaW1hZ2VMaW5rJyA6IDxpbWFnZS1saW5rLWZvci11c2VyPlxuICAgKiAgICAnYXBwbGljYXRpb25JZCcgOiAnPEFQUF9JRD4nLCAgLy9yZXBsYWNlIHRoaXMgd2l0aCB5b3VyIEFQUF9JRCBmcm9tIEFwcGxvemljIERhc2hib2FyZFxuICAgKiAgICAnZGV2aWNlQXBuc1R5cGUnIDogMCAgICAvL1NldCAwIGZvciBEZXZlbG9wbWVudCBhbmQgMSBmb3IgRGlzdHJpYnV0aW9uIChSZWxlYXNlKVxuICAgKiB9O1xuICAgKlxuICAgKiBAcGFyYW0ga21Vc2VyIHthbnl9IHRoZSB1c2VyIGRldGFpbHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbihrbVVzZXI6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBmb3IgcHVzaCBub3RpZmljYXRpb25cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWdpc3RlclB1c2hOb3RpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFueSB1c2VyIGlzIGxvZ2dlZCBpbiBvciBub3RcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0xvZ2dlZEluKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHRva2VuIGZvciBwdXNoIG5vdGlmaWNhdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHRva2VuIHtzdHJpbmd9IHRoZSB1c2VyIGRldGFpbHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVQdXNoTm90aWZpY2F0aW9uVG9rZW4odG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBMYXVuY2ggdGhlIGNvbnZlcnNhdGlvbiBzY3JlZW4gKGl0IGNvbnRhaW5zIGFsbCB0aGUgZXhpc3RpbmcgY29udmVyc2F0aW9ucylcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsYXVuY2hDb252ZXJzYXRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIExhdW5jaCB0aGUgY29udmVyc2F0aW9uIGlkZW50aWZpZWQgYnkgdGhlIGdpdmVuIGNoYW5uZWwoY29udmVyc2F0aW9uKSBrZXlcbiAgICpcbiAgICogbGV0IGNvbnZPYmogPSB7XG4gICAqICAgJ2NsaWVudENoYW5uZWxLZXknIDogY2xpZW50Q2hhbm5lbEtleSwgLy9wYXNzIHRoZSBjbGllbnRDaGFubmVsS2V5IGhlcmVcbiAgICogICAndGFrZU9yZGVyJyA6IHRydWUgLy9za2lwIGNoYXQgbGlzdCBvbiBiYWNrIHByZXNzLCBwYXNzIGZhbHNlIGlmIHlvdSB3YW50IHRvIHNob3cgY2hhdCBsaXN0IG9uIGJhY2sgcHJlc3NcbiAgICogfTtcbiAgICpcbiAgICogQHBhcmFtIGNvbnZlcnNhdGlvbk9iamVjdCB7YW55fSB0aGUgY2hhbm5lbCBrZXkgYW5kIG90aGVyIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbGF1bmNoUGFydGljdWxhckNvbnZlcnNhdGlvbihjb252ZXJzYXRpb25PYmplY3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIG5ldyBjb252ZXJzYXRpb24sIGRldGFpbHMgYWJvdXQgdGhlIGNvbnZlcnNhdGlvbiB0byBiZSBwYXNzZWQgYXMgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBAcGFyYW0gY29udmVyYXRpb25QYXJhbXMge2FueX0gdGhlIHVzZXIgZGV0YWlsc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0TmV3Q29udmVyc2F0aW9uKGNvbnZlcnNhdGlvblBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgcHVzaCBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIHthbnl9IHRoZSB1c2VyIGRldGFpbHNcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlL2ZhbHNlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcHJvY2Vzc1B1c2hOb3RpZmljYXRpb24oZGF0YTogYW55KTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgdGhlIGN1cnJlbnQgdXNlclxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogU3RhcnQgYSBzaW5nbGUgY2hhdCAoY29udmVyc2F0aW9uKVxuICAgKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBAcGFyYW0gZGF0YSB7YW55fSB0aGUgdXNlciBkZXRhaWxzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRTaW5nbGVDaGF0KGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBhIGNvbnZlcnNhdGlvbiB3aXRoIHRoZSBwcm9wZXJ0aWVzIHBhc3NlZCBpbiB0aGUgY29udmVyc2F0aW9uIHBhcmFtXG4gICAqXG4gICAqIHZhciBjb252ZXJzYXRpb25PYmplY3QgPSB7XG4gICAqICAgJ2lzVW5pcXVlJyA6IGZhbHNlLFxuICAgKiAgICdhZ2VudElkcyc6Wyc8QUdFTlRfSUQ+J10sICAvL0xpc3Qgb2YgYWdlbnRJZHMuIEFHRU5UX0lEIGlzIHRoZSBlbWFpbElEIHVzZWQgdG8gc2lnbnVwIG9uIEtvbW11bmljYXRlXG4gICAqICAgJ2JvdElkcyc6IFsnPEJPVF9JRD4nXSAgLy9MaXN0IG9mIGJvdElkcy4gR28gdG8gTWFuYWdlIEJvdHMoaHR0cHM6Ly9kYXNoYm9hcmQua29tbXVuaWNhdGUuaW8vYm90cy9tYW5hZ2UtYm90cykgLT4gQ29weSBib3RJRFxuICAgKiB9O1xuICAgKlxuICAgKiBAcGFyYW0gY29udmVyc2F0aW9uT2JqZWN0IHthbnl9IHRoZSB1c2VyIGRldGFpbHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb252ZXJzYXRpb25CdWlsZGVyKGNvbnZlcmF0aW9uT2JqZWN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxufVxuIl19
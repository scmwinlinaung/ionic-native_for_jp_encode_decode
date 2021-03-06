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
import { Observable } from 'rxjs';
var SpeechRecognition = /** @class */ (function (_super) {
    __extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognition.prototype.isRecognitionAvailable = function () { return cordova(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognition.prototype.startListening = function (options) { return cordova(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognition.prototype.stopListening = function () { return cordova(this, "stopListening", {}, arguments); };
    SpeechRecognition.prototype.getSupportedLanguages = function () { return cordova(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognition.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SpeechRecognition.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SpeechRecognition.pluginName = "SpeechRecognition";
    SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognition.pluginRef = "plugins.speechRecognition";
    SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognition.platforms = ["Android", "iOS"];
    SpeechRecognition = __decorate([
        Injectable()
    ], SpeechRecognition);
    return SpeechRecognition;
}(IonicNativePlugin));
export { SpeechRecognition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaC1yZWNvZ25pdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTJHSyxxQ0FBaUI7Ozs7SUFNdEQsa0RBQXNCO0lBWXRCLDBDQUFjLGFBQ1osT0FBMkM7SUFTN0MseUNBQWE7SUFTYixpREFBcUI7SUFTckIseUNBQWE7SUFTYiw2Q0FBaUI7Ozs7OztJQXZETixpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCOzRCQTdHOUI7RUE2R3VDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zID1cbiAgfCBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNJT1NcbiAgfCBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNBbmRyb2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc0lPUyB7XG4gIC8qKlxuICAgKiB1c2VkIGxhbmd1YWdlIGZvciByZWNvZ25pdGlvbiAoZGVmYXVsdCBgXCJlbi1VU1wiYClcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB1bWJlciBvZiByZXR1cm4gbWF0Y2hlcyAoZGVmYXVsdCBgNWApXG4gICAqL1xuICBtYXRjaGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBwYXJ0aWFsIHJlc3VsdHMgdG8gYmUgcmV0dXJuZWQgKGRlZmF1bHQgYGZhbHNlYClcbiAgICovXG4gIHNob3dQYXJ0aWFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNBbmRyb2lkIHtcbiAgLyoqXG4gICAqIHVzZWQgbGFuZ3VhZ2UgZm9yIHJlY29nbml0aW9uIChkZWZhdWx0IGBcImVuLVVTXCJgKVxuICAgKi9cbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIG51bWJlciBvZiByZXR1cm4gbWF0Y2hlcyAobWF4aW11bSBudW1iZXIgb2YgbWF0Y2hlcylcbiAgICovXG4gIG1hdGNoZXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGRpc3BsYXllZCBwcm9tcHQgb2YgbGlzdGVuZXIgcG9wdXAgd2luZG93XG4gICAqL1xuICBwcm9tcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGRpc3BsYXkgbGlzdGVuZXIgcG9wdXAgd2luZG93IHdpdGggcHJvbXB0IChkZWZhdWx0IGB0cnVlYClcbiAgICovXG4gIHNob3dQb3B1cD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93IHBhcnRpYWwgcmVzdWx0cyB0byBiZSByZXR1cm5lZCAoZGVmYXVsdCBgZmFsc2VgKVxuICAgKi9cbiAgc2hvd1BhcnRpYWw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFNwZWVjaCBSZWNvZ25pdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNwZWVjaCByZWNvZ25pdGlvbiB1c2luZyBjbG91ZCBzZXJ2aWNlc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwZWVjaC1yZWNvZ25pdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlZWNoUmVjb2duaXRpb246IFNwZWVjaFJlY29nbml0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICpcbiAqIC8vIENoZWNrIGZlYXR1cmUgYXZhaWxhYmxlXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmlzUmVjb2duaXRpb25BdmFpbGFibGUoKVxuICogICAudGhlbigoYXZhaWxhYmxlOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhdmFpbGFibGUpKVxuICpcbiAqIC8vIFN0YXJ0IHRoZSByZWNvZ25pdGlvbiBwcm9jZXNzXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0YXJ0TGlzdGVuaW5nKG9wdGlvbnMpXG4gKiAgIC5zdWJzY3JpYmUoXG4gKiAgICAgKG1hdGNoZXM6IHN0cmluZ1tdKSA9PiBjb25zb2xlLmxvZyhtYXRjaGVzKSxcbiAqICAgICAob25lcnJvcikgPT4gY29uc29sZS5sb2coJ2Vycm9yOicsIG9uZXJyb3IpXG4gKiAgIClcbiAqXG4gKiAvLyBTdG9wIHRoZSByZWNvZ25pdGlvbiBwcm9jZXNzIChpT1Mgb25seSlcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RvcExpc3RlbmluZygpXG4gKlxuICogLy8gR2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKGxhbmd1YWdlczogc3RyaW5nW10pID0+IGNvbnNvbGUubG9nKGxhbmd1YWdlcyksXG4gKiAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgKVxuICpcbiAqIC8vIENoZWNrIHBlcm1pc3Npb25cbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uaGFzUGVybWlzc2lvbigpXG4gKiAgIC50aGVuKChoYXNQZXJtaXNzaW9uOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhoYXNQZXJtaXNzaW9uKSlcbiAqXG4gKiAvLyBSZXF1ZXN0IHBlcm1pc3Npb25zXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ0dyYW50ZWQnKSxcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnRGVuaWVkJylcbiAqICAgKVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NwZWVjaFJlY29nbml0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3BlZWNocmVjb2duaXRpb24nLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnNwZWVjaFJlY29nbml0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYmFrb25keS9jb3Jkb3ZhLXBsdWdpbi1zcGVlY2hyZWNvZ25pdGlvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgZmVhdHVyZSBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZWNvZ25pdGlvbkF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICogQHJldHVybiB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiByZWNvZ25pemVkIHRlcm1zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc3RhcnRMaXN0ZW5pbmcoXG4gICAgb3B0aW9ucz86IFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcExpc3RlbmluZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiBsYW5ndWFnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBoYXMgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
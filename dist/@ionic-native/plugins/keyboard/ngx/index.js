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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
export var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(KeyboardStyle || (KeyboardStyle = {}));
export var KeyboardResizeMode;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(KeyboardResizeMode || (KeyboardResizeMode = {}));
var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.hideFormAccessoryBar = function (hide) { return cordova(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.hide = function () { return cordova(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.show = function () { return cordova(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    Keyboard.prototype.setResizeMode = function (mode) { return cordova(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.setKeyboardStyle = function (style) { return cordova(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.disableScroll = function (disable) { return cordova(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.onKeyboardShow = function () { return cordova(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillShow = function () { return cordova(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidShow = function () { return cordova(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardHide = function () { return cordova(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillHide = function () { return cordova(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidHide = function () { return cordova(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(Keyboard.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    Keyboard.pluginName = "Keyboard";
    Keyboard.plugin = "cordova-plugin-ionic-keyboard";
    Keyboard.pluginRef = "window.Keyboard";
    Keyboard.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    Keyboard.platforms = ["Android", "iOS"];
    Keyboard = __decorate([
        Injectable()
    ], Keyboard);
    return Keyboard;
}(IonicNativePlugin));
export { Keyboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUtYO0FBTEQsV0FBWSxrQkFBa0I7SUFDNUIsdUNBQWlCLENBQUE7SUFDakIscUNBQWUsQ0FBQTtJQUNmLG1DQUFhLENBQUE7SUFDYixtQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLN0I7O0lBZ0M2Qiw0QkFBaUI7Ozs7SUFnQjdDLHVDQUFvQixhQUFDLElBQWE7SUFTbEMsdUJBQUk7SUFTSix1QkFBSTtJQVVKLGdDQUFhLGFBQUMsSUFBd0I7SUFVdEMsbUNBQWdCLGFBQUMsS0FBb0I7SUFVckMsZ0NBQWEsYUFBQyxPQUFnQjtJQVc5QixpQ0FBYztJQWFkLHFDQUFrQjtJQWFsQixvQ0FBaUI7SUFhakIsaUNBQWM7SUFhZCxxQ0FBa0I7SUFhbEIsb0NBQWlCOzBCQXRJakIsK0JBQVM7Ozs7Ozs7Ozs7O0lBTkUsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQTlDckI7RUE4QzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIENvcmRvdmFQcm9wZXJ0eSwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gS2V5Ym9hcmRTdHlsZSB7XG4gIExpZ2h0ID0gJ2xpZ2h0JyxcbiAgRGFyayA9ICdkYXJrJ1xufVxuXG5leHBvcnQgZW51bSBLZXlib2FyZFJlc2l6ZU1vZGUge1xuICBOYXRpdmUgPSAnbmF0aXZlJyxcbiAgSW9uaWMgPSAnaW9uaWMnLFxuICBCb2R5ID0gJ2JvZHknLFxuICBOb25lID0gJ25vbmUnXG59XG5cblxuLyoqXG4gKiBAbmFtZSBLZXlib2FyZFxuICogQGRlc2NyaXB0aW9uXG4gKiBLZXlib2FyZCBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXlib2FyZCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2tleWJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXlib2FyZDogS2V5Ym9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Ym9hcmQuc2hvdygpO1xuICpcbiAqIHRoaXMua2V5Ym9hcmQuaGlkZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tleWJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Ym9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGtleWJvYXJkIHN0YXR1cyB2aXNpYmxlIG9yIG5vdC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBrZXlib2FyZCBhY2Nlc3NvcnkgYmFyIHdpdGggdGhlIG5leHQsIHByZXZpb3VzIGFuZCBkb25lIGJ1dHRvbnMuXG4gICAqIEBwYXJhbSBoaWRlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIGhpZGVGb3JtQWNjZXNzb3J5QmFyKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGlmIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGtleWJvYXJkIHRvIGJlIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCB0aGUgcmVzaXplIG1vZGVcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBzZXRSZXNpemVNb2RlKG1vZGU6IEtleWJvYXJkUmVzaXplTW9kZSk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCBLZXlib2FyZCBzdHlsZVxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIHNldEtleWJvYXJkU3R5bGUoc3R5bGU6IEtleWJvYXJkU3R5bGUpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1hdGljYWxseSBlbmFibGUgb3IgZGlzYWJsZSB0aGUgV2ViVmlldyBzY3JvbGxcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBkaXNhYmxlU2Nyb2xsKGRpc2FibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBpcyBzaG93bi4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnbmF0aXZlLmtleWJvYXJkc2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIHdpbGwgc2hvdy4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmRXaWxsU2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZFdpbGxTaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBkaWQgc2hvdy4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmREaWRTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkRGlkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgaXMgaGlkZGVuLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRoaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkSGlkZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBoaWRlLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxIaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkV2lsbEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGRpZCBoaWRlLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZERpZEhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIG9uS2V5Ym9hcmREaWRIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
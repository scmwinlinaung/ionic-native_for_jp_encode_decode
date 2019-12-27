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
var NativeAudio = /** @class */ (function (_super) {
    __extends(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return cordova(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return cordova(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return cordova(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return cordova(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return cordova(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return cordova(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return cordova(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
    NativeAudio = __decorate([
        Injectable()
    ], NativeAudio);
    return NativeAudio;
}(IonicNativePlugin));
export { NativeAudio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1hdWRpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3ZDLCtCQUFpQjs7OztJQVFoRCxtQ0FBYSxhQUFDLEVBQVUsRUFBRSxTQUFpQjtJQWMzQyxvQ0FBYyxhQUFDLEVBQVUsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtJQWMzRiwwQkFBSSxhQUFDLEVBQVUsRUFBRSxnQkFBMkI7SUFVNUMsMEJBQUksYUFBQyxFQUFVO0lBVWYsMEJBQUksYUFBQyxFQUFVO0lBVWYsNEJBQU0sYUFBQyxFQUFVO0lBV2pCLDhDQUF3QixhQUFDLEVBQVUsRUFBRSxNQUFjOzs7Ozs7SUE3RXhDLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkF2Q3hCO0VBdUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBOYXRpdmUgQXVkaW9cbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgQXVkaW8gUGxheWJhY2tcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlQXVkaW8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1hdWRpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlQXVkaW86IE5hdGl2ZUF1ZGlvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRTaW1wbGUoJ3VuaXF1ZUlkMScsICdwYXRoL3RvL2ZpbGUubXAzJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkQ29tcGxleCgndW5pcXVlSWQyJywgJ3BhdGgvdG8vZmlsZTIubXAzJywgMSwgMSwgMCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIC8vIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBkb25lIHBsYXlpbmdcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJywgKCkgPT4gY29uc29sZS5sb2coJ3VuaXF1ZUlkMSBpcyBkb25lIHBsYXlpbmcnKSk7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5sb29wKCd1bmlxdWVJZDInKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoJ3VuaXF1ZUlkMicsIDAuNikudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zdG9wKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnVubG9hZCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlQXVkaW8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuTmF0aXZlQXVkaW8nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWF1ZGlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXRpdmVBdWRpbyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3Igc2hvcnQgY2xpcHMgLyBzaW5nbGUgc2hvdHMgKHVwIHRvIGZpdmUgc2Vjb25kcykuIENhbm5vdCBiZSBzdG9wcGVkIC8gbG9vcGVkLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlbG9hZFNpbXBsZShpZDogc3RyaW5nLCBhc3NldFBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3IgYmFja2dyb3VuZCBtdXNpYyAvIGFtYmllbnQgc291bmQuIFVzZXMgaGlnaGxldmVsIG5hdGl2ZSBBUElzIHdpdGggYSBsYXJnZXIgZm9vdHByaW50LiAoaU9TOiBBVkF1ZGlvUGxheWVyKS4gQ2FuIGJlIHN0b3BwZWQgLyBsb29wZWQgYW5kIHVzZWQgd2l0aCBtdWx0aXBsZSB2b2ljZXMuIENhbiBiZSBmYWRlZCBpbiBhbmQgb3V0IHVzaW5nIHRoZSBkZWxheSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIHByZWxvYWRlZCBzb3VuZCAoMC4xIHRvIDEuMClcbiAgICogQHBhcmFtIHZvaWNlcyB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIG11bHRpY2hhbm5lbCB2b2ljZXMgYXZhaWxhYmxlXG4gICAqIEBwYXJhbSBkZWxheSB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVsb2FkQ29tcGxleChpZDogc3RyaW5nLCBhc3NldFBhdGg6IHN0cmluZywgdm9sdW1lOiBudW1iZXIsIHZvaWNlczogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGxheXMgYW4gYXVkaW8gYXNzZXRcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGNvbXBsZXRlQ2FsbGJhY2sge0Z1bmN0aW9ufSBvcHRpb25hbC4gQ2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aGVuIGF1ZGlvIGlzIGRvbmUgcGxheWluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHBsYXkoaWQ6IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpb1xuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyBhbiBhdWRpbyBhc3NldCBpbmZpbml0ZWx5LCB0aGlzIG9ubHkgd29ya3MgZm9yIGNvbXBsZXggYXNzZXRzXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9vcChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5sb2FkcyBhbiBhdWRpbyBmaWxlIGZyb20gbWVtb3J5XG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVubG9hZChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgdm9sdW1lIGZvciBwcmVsb2FkZWQgY29tcGxleCBhc3NldHMuXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gdGhlIHZvbHVtZSBvZiB0aGUgYXVkaW8gYXNzZXQgKDAuMSB0byAxLjApXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFZvbHVtZUZvckNvbXBsZXhBc3NldChpZDogc3RyaW5nLCB2b2x1bWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==
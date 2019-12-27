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
var GyroscopeOriginal = /** @class */ (function (_super) {
    __extends(GyroscopeOriginal, _super);
    function GyroscopeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    GyroscopeOriginal.prototype.watch = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.gyroscope.clearWatch(watchId); };
        });
    };
    GyroscopeOriginal.prototype.getCurrent = function (options) { return cordova(this, "getCurrent", { "callbackOrder": "reverse" }, arguments); };
    GyroscopeOriginal.pluginName = "Gyroscope";
    GyroscopeOriginal.plugin = "cordova-plugin-gyroscope";
    GyroscopeOriginal.pluginRef = "navigator.gyroscope";
    GyroscopeOriginal.repo = "https://github.com/NeoLSN/cordova-plugin-gyroscope";
    GyroscopeOriginal.platforms = ["Android", "iOS"];
    return GyroscopeOriginal;
}(IonicNativePlugin));
var Gyroscope = new GyroscopeOriginal();
export { Gyroscope };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2d5cm9zY29wZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtGSCw2QkFBaUI7Ozs7SUFDOUM7Ozs7T0FJRztJQUNILHlCQUFLLEdBQUwsVUFBTSxPQUEwQjtRQUM5QixPQUFPLElBQUksVUFBVSxDQUNuQixVQUFDLFFBQWE7WUFDWixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvRyxPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQztRQUN2RCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFVRCw4QkFBVSxhQUFDLE9BQTBCOzs7Ozs7b0JBMUd2QztFQW1GK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuLyoqXG4gKiAgQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEd5cm9zY29wZU9yaWVudGF0aW9uIHtcbiAgLyoqXG4gICAqICBSZXByZXNlbnQgeC1heGlzXG4gICAqL1xuICB4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnQgeS1heGlzXG4gICAqL1xuICB5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnQgei1heGlzXG4gICAqL1xuICB6OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnQgdGltZXN0YW1wIG9mIHNlbnNvciByZWFkLiBEZWZhdWx0IGlzIDEwMDAwbXNcbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuXG4vKipcbiAqICBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3lyb3Njb3BlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAgUmVwcmVzZW50IGhvdyBvZnRlbiAoaW4gbWlsbGlzZWNvbmRzKSBzZW5zb3Igc2hvdWxkIGJlIHJlYWQuICBEZWZhdWx0IGlzIDEwMDAwIG1zXG4gICAqL1xuICBmcmVxdWVuY3k6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBHeXJvc2NvcGVcbiAqIEBkZXNjcmlwdGlvbiBSZWFkIEd5cm9zY29wZSBzZW5zb3IgZGF0YVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHeXJvc2NvcGUsIEd5cm9zY29wZU9yaWVudGF0aW9uLCBHeXJvc2NvcGVPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9neXJvc2NvcGUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBneXJvc2NvcGU6IEd5cm9zY29wZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGxldCBvcHRpb25zOiBHeXJvc2NvcGVPcHRpb25zID0ge1xuICogICAgZnJlcXVlbmN5OiAxMDAwXG4gKiB9XG4gKlxuICogdGhpcy5neXJvc2NvcGUuZ2V0Q3VycmVudChvcHRpb25zKVxuICogICAudGhlbigob3JpZW50YXRpb246IEd5cm9zY29wZU9yaWVudGF0aW9uKSA9PiB7XG4gKiAgICAgIGNvbnNvbGUubG9nKG9yaWVudGF0aW9uLngsIG9yaWVudGF0aW9uLnksIG9yaWVudGF0aW9uLnosIG9yaWVudGF0aW9uLnRpbWVzdGFtcCk7XG4gKiAgICB9KVxuICogICAuY2F0Y2goKVxuICpcbiAqXG4gKiB0aGlzLmd5cm9zY29wZS53YXRjaCgpXG4gKiAgICAuc3Vic2NyaWJlKChvcmllbnRhdGlvbjogR3lyb3Njb3BlT3JpZW50YXRpb24pID0+IHtcbiAqICAgICAgIGNvbnNvbGUubG9nKG9yaWVudGF0aW9uLngsIG9yaWVudGF0aW9uLnksIG9yaWVudGF0aW9uLnosIG9yaWVudGF0aW9uLnRpbWVzdGFtcCk7XG4gKiAgICB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBHeXJvc2NvcGVPcmllbnRhdGlvblxuICogR3lyb3Njb3BlT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0d5cm9zY29wZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWd5cm9zY29wZScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5neXJvc2NvcGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05lb0xTTi9jb3Jkb3ZhLXBsdWdpbi1neXJvc2NvcGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHeXJvc2NvcGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXYXRjaGluZyBmb3IgZ3lyb3Njb3BlIHNlbnNvciBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7R3lyb3Njb3BlT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8R3lyb3Njb3BlT3JpZW50YXRpb24+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCByZXNvbHZlcyBHeXJvc2NvcGVPcmllbnRhdGlvblxuICAgKi9cbiAgd2F0Y2gob3B0aW9ucz86IEd5cm9zY29wZU9wdGlvbnMpOiBPYnNlcnZhYmxlPEd5cm9zY29wZU9yaWVudGF0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEd5cm9zY29wZU9yaWVudGF0aW9uPihcbiAgICAgIChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZ3lyb3Njb3BlLndhdGNoKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gKCkgPT4gbmF2aWdhdG9yLmd5cm9zY29wZS5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgZGF0YSBmcm9tIGd5cm9zY29wZSBzZW5zb3JcbiAgICogQHBhcmFtIHtHeXJvc2NvcGVPcHRpb25zfSBbb3B0aW9uc11cbiAgICogQHJldHVybiB7UHJvbWlzZTxHeXJvc2NvcGVPcmllbnRhdGlvbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgR3lyb3Njb3BlT3JpZW50YXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0Q3VycmVudChvcHRpb25zPzogR3lyb3Njb3BlT3B0aW9ucyk6IFByb21pc2U8R3lyb3Njb3BlT3JpZW50YXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
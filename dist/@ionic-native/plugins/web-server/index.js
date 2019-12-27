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
var WebServerOriginal = /** @class */ (function (_super) {
    __extends(WebServerOriginal, _super);
    function WebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServerOriginal.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServerOriginal.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServerOriginal.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServerOriginal.pluginName = "WebServer";
    WebServerOriginal.plugin = "cordova-plugin-webserver";
    WebServerOriginal.pluginRef = "window.webserver";
    WebServerOriginal.repo = "https://github.com/bykof/cordova-plugin-webserver.git";
    WebServerOriginal.platforms = ["Android", "iOS"];
    return WebServerOriginal;
}(IonicNativePlugin));
var WebServer = new WebServerOriginal();
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1zZXJ2ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUErREgsNkJBQWlCOzs7O0lBUzlDLHlCQUFLLGFBQUMsSUFBYTtJQVFuQix3QkFBSTtJQWFKLDZCQUFTO0lBV1QsZ0NBQVksYUFBQyxTQUFpQixFQUFFLGNBQXdCOzs7Ozs7b0JBMUcxRDtFQWlFK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBib2R5Pzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdCB7XG4gIHJlcXVlc3RJZDogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGhlYWRlcnM6IHN0cmluZztcbiAgbWV0aG9kOiAnUE9TVCcgfCAnR0VUJyB8ICdQVVQnIHwgJ1BBVENIJyB8ICdERUxFVEUnO1xuICBwYXRoOiBzdHJpbmc7XG4gIHF1ZXJ5OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgV2ViIFNlcnZlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN0YXJ0IGEgbG9jYWwgZHluYW1pYyBjb250ZW50IHdlYiBzZXJ2ZXIgZm9yIGFuZHJvaWQgYW5kIGlPUyBkZXZpY2VzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViU2VydmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWItc2VydmVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViU2VydmVyOiBXZWJTZXJ2ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMud2ViU2VydmVyLm9uUmVxdWVzdCgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAqICAgY29uc29sZS5sb2coZGF0YSk7XG4gKiAgIGNvbnN0IHJlczogUmVzcG9uc2UgPSB7XG4gKiAgICAgc3RhdHVzOiAyMDAsXG4gKiAgICAgYm9keTogJycsXG4gKiAgICAgaGVhZGVyczoge1xuICogICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXG4gKiAgICAgfVxuICogICB9O1xuICpcbiAqICAgdGhpcy53ZWJTZXJ2ZXIuc2VuZFJlc3BvbnNlKGRhdGEucmVxdWVzdElkLCByZXMpXG4gKiAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiB9KTtcbiAqXG4gKiB0aGlzLndlYlNlcnZlci5zdGFydCg4MClcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIFJlc3BvbnNlXG4gKiBSZXF1ZXN0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViU2VydmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2Vic2VydmVyJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LndlYnNlcnZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYnlrb2YvY29yZG92YS1wbHVnaW4td2Vic2VydmVyLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYlNlcnZlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBzdGFydCB5b3VyIHdlYnNlcnZlci5cbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gUG9ydCBudW1iZXIgKGRlZmF1bHQgdG8gODA4MClcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHN0YXJ0KHBvcnQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0b3AgeW91ciB3ZWJzZXJ2ZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgc3RyZWFtcyBIVFRQIHJlcXVlc3RzIHRvIGFuIG9ic2VydmVyLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFJlcXVlc3Q+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gcmVzb2x2ZSBhcyBhIFJlcXVlc3Qgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnXG4gIH0pXG4gIG9uUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJlcXVlc3Q+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2VuZHMgYSByZXNwb25zZSB0byBhIHJlcXVlc3QuXG4gICAqIEBwYXJhbSByZXF1ZXN0SWQge3N0cmluZ30gUmVxdWVzdCBJRCB0byByZXNwb25kIHRvXG4gICAqIEBwYXJhbSByZXNwb25zZU9iamVjdCB7UmVzcG9uc2V9IFJlc3BvbnNlIG9iamVjdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVzcG9uc2UocmVxdWVzdElkOiBzdHJpbmcsIHJlc3BvbnNlT2JqZWN0OiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==
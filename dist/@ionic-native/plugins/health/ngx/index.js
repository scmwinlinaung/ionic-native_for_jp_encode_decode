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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var Health = /** @class */ (function (_super) {
    __extends(Health, _super);
    function Health() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Health.prototype.isAvailable = function () { return cordova(this, "isAvailable", { "callbackOrder": "reverse" }, arguments); };
    Health.prototype.promptInstallFit = function () { return cordova(this, "promptInstallFit", { "callbackOrder": "reverse" }, arguments); };
    Health.prototype.requestAuthorization = function (datatypes) { return cordova(this, "requestAuthorization", {}, arguments); };
    Health.prototype.isAuthorized = function (datatypes) { return cordova(this, "isAuthorized", {}, arguments); };
    Health.prototype.query = function (queryOptions) { return cordova(this, "query", {}, arguments); };
    Health.prototype.queryAggregated = function (queryOptionsAggregated) { return cordova(this, "queryAggregated", {}, arguments); };
    Health.prototype.store = function (storeOptions) { return cordova(this, "store", {}, arguments); };
    Health.pluginName = "Health";
    Health.plugin = "cordova-plugin-health";
    Health.pluginRef = "navigator.health";
    Health.repo = "https://github.com/dariosalvi78/cordova-plugin-health";
    Health.platforms = ["Android", "iOS"];
    Health = __decorate([
        Injectable()
    ], Health);
    return Health;
}(IonicNativePlugin));
export { Health };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hlYWx0aC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUErTWYsMEJBQWlCOzs7O0lBUzNDLDRCQUFXO0lBa0JYLGlDQUFnQjtJQXdCaEIscUNBQW9CLGFBQUMsU0FBc0M7SUFnQjNELDZCQUFZLGFBQUMsU0FBc0M7SUFvQ25ELHNCQUFLLGFBQUMsWUFBZ0M7SUEwQnRDLGdDQUFlLGFBQ2Isc0JBQW9EO0lBb0J0RCxzQkFBSyxhQUFDLFlBQWdDOzs7Ozs7SUF0SjNCLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkFoTm5CO0VBZ040QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIZWFsdGhEYXRhVHlwZSB7XG4gIC8qKlxuICAgKiBSZWFkIG9ubHkgZGF0ZSB0eXBlcyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJpb3NhbHZpNzgvY29yZG92YS1wbHVnaW4taGVhbHRoI3N1cHBvcnRlZC1kYXRhLXR5cGVzKVxuICAgKi9cbiAgcmVhZD86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBXcml0ZSBvbmx5IGRhdGUgdHlwZXMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGFyaW9zYWx2aTc4L2NvcmRvdmEtcGx1Z2luLWhlYWx0aCNzdXBwb3J0ZWQtZGF0YS10eXBlcylcbiAgICovXG4gIHdyaXRlPzogc3RyaW5nW107XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWx0aFF1ZXJ5T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdGFydCBkYXRlIGZyb20gd2hpY2ggdG8gZ2V0IGRhdGFcbiAgICovXG4gIHN0YXJ0RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogRW5kIGRhdGUgZnJvbSB3aGljaCB0byBnZXQgZGF0YVxuICAgKi9cbiAgZW5kRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogRGF0YXR5cGUgdG8gYmUgcXVlcmllZCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJpb3NhbHZpNzgvY29yZG92YS1wbHVnaW4taGVhbHRoI3N1cHBvcnRlZC1kYXRhLXR5cGVzKVxuICAgKi9cbiAgZGF0YVR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uYWwgbGltaXQgdGhlIG51bWJlciBvZiB2YWx1ZXMgcmV0dXJuZWQuIERlZmF1bHRzIHRvIDEwMDBcbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbmRpY2F0b3IgdG8gc29ydCB2YWx1ZXMgYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmdcbiAgICovXG4gIGFzY2VuZGluZz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluIEFuZHJvaWQsIGl0IGlzIHBvc3NpYmxlIHRvIHF1ZXJ5IGZvciBcInJhd1wiIHN0ZXBzIG9yIHRvIHNlbGVjdCB0aG9zZSBhcyBmaWx0ZXJlZCBieSB0aGUgR29vZ2xlIEZpdCBhcHAuXG4gICAqIEluIHRoZSBsYXR0ZXIgY2FzZSB0aGUgcXVlcnkgb2JqZWN0IG11c3QgY29udGFpbiB0aGUgZmllbGQgZmlsdGVyZWQ6IHRydWUuXG4gICAqL1xuICBmaWx0ZXJlZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWx0aFF1ZXJ5T3B0aW9uc0FnZ3JlZ2F0ZWQge1xuICAvKipcbiAgICogU3RhcnQgZGF0ZSBmcm9tIHdoaWNoIHRvIGdldCBkYXRhXG4gICAqL1xuICBzdGFydERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEVuZCBkYXRlIGZyb20gd2hpY2ggdG8gZ2V0IGRhdGFcbiAgICovXG4gIGVuZERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIERhdGF0eXBlIHRvIGJlIHF1ZXJpZWQgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGFyaW9zYWx2aTc4L2NvcmRvdmEtcGx1Z2luLWhlYWx0aCNzdXBwb3J0ZWQtZGF0YS10eXBlcylcbiAgICovXG4gIGRhdGFUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlmIHNwZWNpZmllZCwgYWdncmVnYXRpb24gaXMgZ3JvdXBlZCBhbiBhcnJheSBvZiBcImJ1Y2tldHNcIiAod2luZG93cyBvZiB0aW1lKSxcbiAgICogc3VwcG9ydGVkIHZhbHVlcyBhcmU6ICdob3VyJywgJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3llYXInLlxuICAgKi9cbiAgYnVja2V0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluIEFuZHJvaWQsIGl0IGlzIHBvc3NpYmxlIHRvIHF1ZXJ5IGZvciBcInJhd1wiIHN0ZXBzIG9yIHRvIHNlbGVjdCB0aG9zZSBhcyBmaWx0ZXJlZCBieSB0aGUgR29vZ2xlIEZpdCBhcHAuXG4gICAqIEluIHRoZSBsYXR0ZXIgY2FzZSB0aGUgcXVlcnkgb2JqZWN0IG11c3QgY29udGFpbiB0aGUgZmllbGQgZmlsdGVyZWQ6IHRydWUuXG4gICAqL1xuICBmaWx0ZXJlZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWx0aFN0b3JlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdGFydCBkYXRlIGZyb20gd2hpY2ggdG8gZ2V0IGRhdGFcbiAgICovXG4gIHN0YXJ0RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogRW5kIGRhdGUgZnJvbSB3aGljaCB0byBnZXQgZGF0YVxuICAgKi9cbiAgZW5kRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogRGF0YXR5cGUgdG8gYmUgcXVlcmllZCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJpb3NhbHZpNzgvY29yZG92YS1wbHVnaW4taGVhbHRoI3N1cHBvcnRlZC1kYXRhLXR5cGVzKVxuICAgKi9cbiAgZGF0YVR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVmFsdWUgb2YgY29ycmVzcG9uZGluZyBEYXRhdHlwZSAoc2VlIFwiT3ZlcnZpZXcgb2YgdmFsaWQgZGF0YXR5cGVzXCIpXG4gICAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIHRoYXQgcHJvZHVjZWQgdGhpcyBkYXRhLiBJbiBpT1MgdGhpcyBpcyBpZ25vcmVkIGFuZFxuICAgKiBzZXQgYXV0b21hdGljYWxseSB0byB0aGUgbmFtZSBvZiB5b3VyIGFwcC5cbiAgICovXG4gIHNvdXJjZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNvbXBsZXRlIHBhY2thZ2Ugb2YgdGhlIHNvdXJjZSB0aGF0IHByb2R1Y2VkIHRoaXMgZGF0YS5cbiAgICogSW4gQW5kcm9pZCwgaWYgbm90IHNwZWNpZmllZCwgaXQncyBhc3NpZ25lZCB0byB0aGUgcGFja2FnZSBvZiB0aGUgQXBwLiBJbiBpT1MgdGhpcyBpcyBpZ25vcmVkIGFuZFxuICAgKiBzZXQgYXV0b21hdGljYWxseSB0byB0aGUgYnVuZGUgaWQgb2YgdGhlIGFwcC5cbiAgICovXG4gIHNvdXJjZUJ1bmRsZUlkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWx0aERhdGEge1xuICAvKipcbiAgICogU3RhcnQgZGF0ZSBmcm9tIHdoaWNoIHRvIGdldCBkYXRhXG4gICAqL1xuICBzdGFydERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEVuZCBkYXRlIGZyb20gd2hpY2ggdG8gZ2V0IGRhdGFcbiAgICovXG4gIGVuZERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFZhbHVlIG9mIGNvcnJlc3BvbmRpbmcgRGF0YXR5cGUgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGFyaW9zYWx2aTc4L2NvcmRvdmEtcGx1Z2luLWhlYWx0aCNzdXBwb3J0ZWQtZGF0YS10eXBlcylcbiAgICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFVuaXQgb2YgY29ycmVzcG9uZGluZyB2YWx1ZSBvZiBEYXRhdHlwZSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJpb3NhbHZpNzgvY29yZG92YS1wbHVnaW4taGVhbHRoI3N1cHBvcnRlZC1kYXRhLXR5cGVzKVxuICAgKi9cbiAgdW5pdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIHRoYXQgcHJvZHVjZWQgdGhpcyBkYXRhLiBJbiBpT1MgdGhpcyBpcyBpZ25vcmVkIGFuZFxuICAgKiBzZXQgYXV0b21hdGljYWxseSB0byB0aGUgbmFtZSBvZiB5b3VyIGFwcC5cbiAgICovXG4gIHNvdXJjZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNvbXBsZXRlIHBhY2thZ2Ugb2YgdGhlIHNvdXJjZSB0aGF0IHByb2R1Y2VkIHRoaXMgZGF0YS5cbiAgICogSW4gQW5kcm9pZCwgaWYgbm90IHNwZWNpZmllZCwgaXQncyBhc3NpZ25lZCB0byB0aGUgcGFja2FnZSBvZiB0aGUgQXBwLiBJbiBpT1MgdGhpcyBpcyBpZ25vcmVkIGFuZFxuICAgKiBzZXQgYXV0b21hdGljYWxseSB0byB0aGUgYnVuZGUgaWQgb2YgdGhlIGFwcC5cbiAgICovXG4gIHNvdXJjZUJ1bmRsZUlkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgSGVhbHRoXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgcGx1Z2luIHRoYXQgYWJzdHJhY3RzIGZpdG5lc3MgYW5kIGhlYWx0aCByZXBvc2l0b3JpZXMgbGlrZSBBcHBsZSBIZWFsdGhLaXQgb3IgR29vZ2xlIEZpdC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhlYWx0aCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaGVhbHRoL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhbHRoOiBIZWFsdGgpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaGVhbHRoLmlzQXZhaWxhYmxlKClcbiAqIC50aGVuKChhdmFpbGFibGU6Ym9vbGVhbikgPT4ge1xuICogICBjb25zb2xlLmxvZyhhdmFpbGFibGUpO1xuICogICB0aGlzLmhlYWx0aC5yZXF1ZXN0QXV0aG9yaXphdGlvbihbXG4gKiAgICAgJ2Rpc3RhbmNlJywgJ251dHJpdGlvbicsICAvL3JlYWQgYW5kIHdyaXRlIHBlcm1pc3Npb25zXG4gKiAgICAge1xuICogICAgICAgcmVhZDogWydzdGVwcyddLCAgICAgICAvL3JlYWQgb25seSBwZXJtaXNzaW9uXG4gKiAgICAgICB3cml0ZTogWydoZWlnaHQnLCAnd2VpZ2h0J10gIC8vd3JpdGUgb25seSBwZXJtaXNzaW9uXG4gKiAgICAgfVxuICogICBdKVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICogfSlcbiAqIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqIFNlZSBkZXNjcmlwdGlvbiBhdCBodHRwczovL2dpdGh1Yi5jb20vZGFyaW9zYWx2aTc4L2NvcmRvdmEtcGx1Z2luLWhlYWx0aCBmb3IgYSBmdWxsIGxpc3Qgb2YgRGF0YXR5cGVzIGFuZCBzZWUgZXhhbXBsZXMuXG4gKlxuICogQGludGVyZmFjZXNcbiAqIEhlYWx0aFF1ZXJ5T3B0aW9uc1xuICogSGVhbHRoUXVlcnlPcHRpb25zQWdncmVnYXRlZFxuICogSGVhbHRoU3RvcmVPcHRpb25zXG4gKiBIZWFsdGhEYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSGVhbHRoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taGVhbHRoJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmhlYWx0aCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGFyaW9zYWx2aTc4L2NvcmRvdmEtcGx1Z2luLWhlYWx0aCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlYWx0aCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRlbGxzIGlmIGVpdGhlciBHb29nbGUgRml0IG9yIEhlYWx0aEtpdCBhcmUgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJlY2VudCBHb29nbGUgUGxheSBTZXJ2aWNlcyBhbmQgR29vZ2xlIEZpdCBhcmUgaW5zdGFsbGVkLiBJZiB0aGUgcGxheSBzZXJ2aWNlcyBhcmUgbm90IGluc3RhbGxlZCxcbiAgICogb3IgYXJlIG9ic29sZXRlLCBpdCB3aWxsIHNob3cgYSBwb3AtdXAgc3VnZ2VzdGluZyB0byBkb3dubG9hZCB0aGVtLiBJZiBHb29nbGUgRml0IGlzIG5vdCBpbnN0YWxsZWQsXG4gICAqIGl0IHdpbGwgb3BlbiB0aGUgUGxheSBTdG9yZSBhdCB0aGUgbG9jYXRpb24gb2YgdGhlIEdvb2dsZSBGaXQgYXBwLlxuICAgKiBUaGUgcGx1Z2luIGRvZXMgbm90IHdhaXQgdW50aWwgdGhlIG1pc3NpbmcgcGFja2FnZXMgYXJlIGluc3RhbGxlZCwgaXQgd2lsbCByZXR1cm4gaW1tZWRpYXRlbHkuXG4gICAqIElmIGJvdGggUGxheSBTZXJ2aWNlcyBhbmQgR29vZ2xlIEZpdCBhcmUgYXZhaWxhYmxlLCB0aGlzIGZ1bmN0aW9uIGp1c3QgcmV0dXJucyB3aXRob3V0IGFueSB2aXNpYmxlIGVmZmVjdC5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBvbmx5IGF2YWlsYWJsZSBvbiBBbmRyb2lkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHByb21wdEluc3RhbGxGaXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgcmVhZCBhbmQvb3Igd3JpdGUgYWNjZXNzIHRvIGEgc2V0IG9mIGRhdGEgdHlwZXMuIEl0IGlzIHJlY29tbWVuZGFibGUgdG8gYWx3YXlzIGV4cGxhaW4gd2h5IHRoZSBhcHBcbiAgICogbmVlZHMgYWNjZXNzIHRvIHRoZSBkYXRhIGJlZm9yZSBhc2tpbmcgdGhlIHVzZXIgdG8gYXV0aG9yaXplIGl0LlxuICAgKiBUaGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB1c2luZyB0aGUgcXVlcnkgYW5kIHN0b3JlIGZ1bmN0aW9ucywgZXZlbiBpZiB0aGUgYXV0aG9yaXphdGlvbiBoYXMgYWxyZWFkeVxuICAgKiBiZWVuIGdpdmVuIGF0IHNvbWUgcG9pbnQgaW4gdGhlIHBhc3QuXG4gICAqXG4gICAqIFF1aXJrcyBvZiByZXF1ZXN0QXV0aG9yaXphdGlvbigpXG4gICAqXG4gICAqIEluIEFuZHJvaWQsIGl0IHdpbGwgdHJ5IHRvIGdldCBhdXRob3JpemF0aW9uIGZyb20gdGhlIEdvb2dsZSBGaXQgQVBJcy5cbiAgICogSXQgaXMgbmVjZXNzYXJ5IHRoYXQgdGhlIGFwcCdzIHBhY2thZ2UgbmFtZSBhbmQgdGhlIHNpZ25pbmcga2V5IGFyZSByZWdpc3RlcmVkIGluIHRoZSBHb29nbGUgQVBJIGNvbnNvbGUuXG4gICAqIEluIEFuZHJvaWQsIGJlIGF3YXJlIHRoYXQgaWYgdGhlIGFjdGl2aXR5IGlzIGRlc3Ryb3llZCAoZS5nLiBhZnRlciBhIHJvdGF0aW9uKSBvciBpcyBwdXQgaW4gYmFja2dyb3VuZCxcbiAgICogdGhlIGNvbm5lY3Rpb24gdG8gR29vZ2xlIEZpdCBtYXkgYmUgbG9zdCB3aXRob3V0IGFueSBjYWxsYmFjay4gR29pbmcgdGhyb3VnaCB0aGUgYXV0aG9yaXphdGlvbiB3aWxsIGVuc3VyZSB0aGF0XG4gICAqIHRoZSBhcHAgaXMgY29ubmVjdGVkIGFnYWluLlxuICAgKiBJbiBBbmRyb2lkIDYgYW5kIG92ZXIsIHRoaXMgZnVuY3Rpb24gd2lsbCBhbHNvIGFzayBmb3Igc29tZSBkeW5hbWljIHBlcm1pc3Npb25zIGlmIG5lZWRlZFxuICAgKiAoZS5nLiBpbiB0aGUgY2FzZSBvZiBcImRpc3RhbmNlXCIsIGl0IHdpbGwgbmVlZCBhY2Nlc3MgdG8gQUNDRVNTX0ZJTkVfTE9DQVRJT04pLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdIHwgSGVhbHRoRGF0YVR5cGVbXX0gZGF0YXR5cGVzIGEgbGlzdCBvZiBkYXRhIHR5cGVzIHlvdSB3YW50IHRvIGJlIGdyYW50ZWQgYWNjZXNzIHRvLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RBdXRob3JpemF0aW9uKGRhdGF0eXBlczogKHN0cmluZyB8IEhlYWx0aERhdGFUeXBlKVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGFwcCBoYXMgYXV0aG9yaXphdGlvbiB0byByZWFkL3dyaXRlIGEgc2V0IG9mIGRhdGF0eXBlcy5cbiAgICpcbiAgICogUXVpcmtzIG9mIGlzQXV0aG9yaXplZCgpXG4gICAqXG4gICAqIEluIGlPUywgdGhpcyBmdW5jdGlvbiB3aWxsIG9ubHkgY2hlY2sgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHdyaXRhYmxlIGRhdGEuXG4gICAqIFJlYWQtb25seSBkYXRhIHdpbGwgYWx3YXlzIGJlIGNvbnNpZGVyZWQgYXMgbm90IGF1dGhvcml6ZWQuIFRoaXMgaXMgYW4gaW50ZW5kZWQgYmVoYXZpb3VyIG9mIEhlYWx0aEtpdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXSB8IEhlYWx0aERhdGFUeXBlW119IGRhdGF0eXBlcyBhIGxpc3Qgb2YgZGF0YSB0eXBlcyB5b3Ugd2FudCB0byBjaGVjayBhY2Nlc3Mgb2YsIHNhbWUgYXMgaW4gcmVxdWVzdEF1dGhvcml6YXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB0aGUgYXV0aG9yaXphdGlvbiBzdGF0dXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNBdXRob3JpemVkKGRhdGF0eXBlczogKHN0cmluZyB8IEhlYWx0aERhdGFUeXBlKVtdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWxsIHRoZSBkYXRhIHBvaW50cyBvZiBhIGNlcnRhaW4gZGF0YSB0eXBlIHdpdGhpbiBhIGNlcnRhaW4gdGltZSB3aW5kb3cuXG4gICAqIFdhcm5pbmc6IGlmIHRoZSB0aW1lIHNwYW4gaXMgYmlnLCBpdCBjYW4gZ2VuZXJhdGUgbG9uZyBhcnJheXMhXG4gICAqXG4gICAqIFF1aXJrcyBvZiBxdWVyeSgpXG4gICAqXG4gICAqIEluIGlPUywgdGhlIGFtb3VudCBvZiBkYXRhcG9pbnRzIGlzIGxpbWl0ZWQgdG8gMTAwMCBieSBkZWZhdWx0LlxuICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgYnkgYWRkaW5nIGEgbGltaXQ6IHh4eCB0byB5b3VyIHF1ZXJ5IG9iamVjdC5cbiAgICogSW4gaU9TLCBkYXRhcG9pbnRzIGFyZSBvcmRlcmVkIGluIGFuIGRlc2NlbmRpbmcgZmFzaGlvbiAoZnJvbSBuZXdlciB0byBvbGRlcikuXG4gICAqIFlvdSBjYW4gcmV2ZXJ0IHRoaXMgYmVoYXZpb3VyIGJ5IGFkZGluZyBhc2NlbmRpbmc6IHRydWUgdG8geW91ciBxdWVyeSBvYmplY3QuXG4gICAqIEluIEFuZHJvaWQsIGl0IGlzIHBvc3NpYmxlIHRvIHF1ZXJ5IGZvciBcInJhd1wiIHN0ZXBzIG9yIHRvIHNlbGVjdCB0aG9zZSBhcyBmaWx0ZXJlZCBieSB0aGUgR29vZ2xlIEZpdCBhcHAuXG4gICAqIEluIHRoZSBsYXR0ZXIgY2FzZSB0aGUgcXVlcnkgb2JqZWN0IG11c3QgY29udGFpbiB0aGUgZmllbGQgZmlsdGVyZWQ6IHRydWUuXG4gICAqIEluIEdvb2dsZSBGaXQsIGNhbG9yaWVzLmJhc2FsIGlzIHJldHVybmVkIGFzIGFuIGF2ZXJhZ2UgcGVyIGRheSwgYW5kIHVzdWFsbHkgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgZGF5cy5cbiAgICogSW4gR29vZ2xlIEZpdCwgY2Fsb3JpZXMuYWN0aXZlIGlzIGNvbXB1dGVkIGJ5IHN1YnRyYWN0aW5nIHRoZSBiYXNhbCBjYWxvcmllcyBmcm9tIHRoZSB0b3RhbC5cbiAgICogQXMgYmFzYWwgZW5lcmd5IGV4cGVuZGl0dXJlLCBhbiBhdmVyYWdlIGlzIGNvbXB1dGVkIGZyb20gdGhlIHdlZWsgYmVmb3JlIGVuZERhdGUuXG4gICAqIFdoaWxlIEdvb2dsZSBGaXQgY2FsY3VsYXRlcyBiYXNhbCBhbmQgYWN0aXZlIGNhbG9yaWVzIGF1dG9tYXRpY2FsbHksXG4gICAqIEhlYWx0aEtpdCBuZWVkcyBhbiBleHBsaWNpdCBpbnB1dCBmcm9tIHNvbWUgYXBwLlxuICAgKiBXaGVuIHF1ZXJ5aW5nIGZvciBhY3Rpdml0aWVzLCBHb29nbGUgRml0IGlzIGFibGUgdG8gZGV0ZXJtaW5lIHNvbWUgYWN0aXZpdGllcyBhdXRvbWF0aWNhbGx5XG4gICAqIChzdGlsbCwgd2Fsa2luZywgcnVubmluZywgYmlraW5nLCBpbiB2ZWhpY2xlKSwgd2hpbGUgSGVhbHRoS2l0IG9ubHkgcmVsaWVzIG9uIHRoZSBpbnB1dCBvZlxuICAgKiB0aGUgdXNlciBvciBvZiBzb21lIGV4dGVybmFsIGFwcC5cbiAgICogV2hlbiBxdWVyeWluZyBmb3IgYWN0aXZpdGllcywgY2Fsb3JpZXMgYW5kIGRpc3RhbmNlIGFyZSBhbHNvIHByb3ZpZGVkIGluIEhlYWx0aEtpdCAodW5pdHMgYXJlIGtjYWwgYW5kIG1ldGVycykgYW5kXG4gICAqIG5ldmVyIGluIEdvb2dsZSBGaXQuXG4gICAqIFdoZW4gcXVlcnlpbmcgZm9yIG51dHJpdGlvbiwgR29vZ2xlIEZpdCBhbHdheXMgcmV0dXJucyBhbGwgdGhlIG51dHJpdGlvbiBlbGVtZW50cyBpdCBoYXMsXG4gICAqIHdoaWxlIEhlYWx0aEtpdCByZXR1cm5zIG9ubHkgdGhvc2UgdGhhdCBhcmUgc3RvcmVkIGFzIGNvcnJlbGF0aW9uLiBUbyBiZSBzdXJlIHRvIGdldCBhbGwgc3RvcmVkIHRoZSBxdWFudGl0aWVzXG4gICAqIChyZWdhcmRsZXNzIG9mIHRoZXkgYXJlIHN0b3JlZCBhcyBjb3JyZWxhdGlvbiBvciBub3QpLCBpdCdzIGJldHRlciB0byBxdWVyeSBzaW5nbGUgbnV0cmllbnRzLlxuICAgKiBudXRyaXRpb24udml0YW1pbl9hIGlzIGdpdmVuIGluIG1pY3JvZ3JhbXMgaW4gSGVhbHRoS2l0IGFuZCBJbnRlcm5hdGlvbmFsIFVuaXQgaW4gR29vZ2xlIEZpdC5cbiAgICogQXV0b21hdGljIGNvbnZlcnNpb24gaXMgbm90IHRyaXZpYWwgYW5kIGRlcGVuZHMgb24gdGhlIGFjdHVhbCBzdWJzdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7SGVhbHRoUXVlcnlPcHRpb25zfSBxdWVyeU9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxIZWFsdGhEYXRhW10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBxdWVyeShxdWVyeU9wdGlvbnM6IEhlYWx0aFF1ZXJ5T3B0aW9ucyk6IFByb21pc2U8SGVhbHRoRGF0YVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWdncmVnYXRlZCBkYXRhIGluIGEgY2VydGFpbiB0aW1lIHdpbmRvdy4gVXN1YWxseSB0aGUgc3VtIGlzIHJldHVybmVkIGZvciB0aGUgZ2l2ZW4gcXVhbnRpdHkuXG4gICAqXG4gICAqIFF1aXJrcyBvZiBxdWVyeUFnZ3JlZ2F0ZWQoKVxuICAgKiBJbiBBbmRyb2lkLCB0byBxdWVyeSBmb3Igc3RlcHMgYXMgZmlsdGVyZWQgYnkgdGhlIEdvb2dsZSBGaXQgYXBwLCB0aGUgZmxhZyBmaWx0ZXJlZDpcbiAgICogdHJ1ZSBtdXN0IGJlIGFkZGVkIGludG8gdGhlIHF1ZXJ5IG9iamVjdC5cbiAgICogV2hlbiBxdWVyeWluZyBmb3IgYWN0aXZpdGllcywgY2Fsb3JpZXMgYW5kIGRpc3RhbmNlIGFyZSBwcm92aWRlZFxuICAgKiB3aGVuIGF2YWlsYWJsZSBpbiBIZWFsdGhLaXQgYW5kIG5ldmVyIGluIEdvb2dsZSBGaXQuXG4gICAqIEluIEFuZHJvaWQsIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIHJldHVybmVkIGFyZSB0aGUgZGF0ZSBvZiB0aGUgZmlyc3QgYW5kIHRoZSBsYXN0IGF2YWlsYWJsZSBzYW1wbGVzLlxuICAgKiBJZiBubyBzYW1wbGVzIGFyZSBmb3VuZCwgc3RhcnQgYW5kIGVuZCBtYXkgbm90IGJlIHNldC5cbiAgICogV2hlbiBidWNrZXRpbmcsIGJ1Y2tldHMgd2lsbCBpbmNsdWRlIHRoZSB3aG9sZSBob3VyIC8gZGF5IC8gbW9udGggLyB3ZWVrIC8geWVhciB3aGVyZSBzdGFydCBhbmQgZW5kIHRpbWVzXG4gICAqIGZhbGwgaW50by4gRm9yIGV4YW1wbGUsIGlmIHlvdXIgc3RhcnQgdGltZSBpcyAyMDE2LTEwLTIxIDEwOjUzOjM0LFxuICAgKiB0aGUgZmlyc3QgZGFpbHkgYnVja2V0IHdpbGwgc3RhcnQgYXQgMjAxNi0xMC0yMSAwMDowMDowMC5cbiAgICogV2Vla3Mgc3RhcnQgb24gTW9uZGF5LlxuICAgKiBXaGVuIHF1ZXJ5aW5nIGZvciBudXRyaXRpb24sIEhlYWx0aEtpdCByZXR1cm5zIG9ubHkgdGhvc2UgdGhhdCBhcmUgc3RvcmVkIGFzIGNvcnJlbGF0aW9uLlxuICAgKiBUbyBiZSBzdXJlIHRvIGdldCBhbGwgdGhlIHN0b3JlZCBxdWFudGl0aWVzLCBpdCdzIGJldHRlciB0byBxdWVyeSBzaW5nbGUgbnV0cmllbnRzLlxuICAgKiBudXRyaXRpb24udml0YW1pbl9hIGlzIGdpdmVuIGluIG1pY3JvZ3JhbXMgaW4gSGVhbHRoS2l0IGFuZCBJbnRlcm5hdGlvbmFsIFVuaXQgaW4gR29vZ2xlIEZpdC5cbiAgICpcbiAgICogQHBhcmFtIHtIZWFsdGhRdWVyeU9wdGlvbnNBZ2dyZWdhdGVkfSBxdWVyeU9wdGlvbnNBZ2dyZWdhdGVkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8SGVhbHRoRGF0YVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcXVlcnlBZ2dyZWdhdGVkKFxuICAgIHF1ZXJ5T3B0aW9uc0FnZ3JlZ2F0ZWQ6IEhlYWx0aFF1ZXJ5T3B0aW9uc0FnZ3JlZ2F0ZWRcbiAgKTogUHJvbWlzZTxIZWFsdGhEYXRhW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIGEgZGF0YSBwb2ludC5cbiAgICpcbiAgICogUXVpcmtzIG9mIHN0b3JlKClcbiAgICpcbiAgICogR29vZ2xlIEZpdCBkb2Vzbid0IGFsbG93IHlvdSB0byBvdmVyd3JpdGUgZGF0YSBwb2ludHMgdGhhdCBvdmVybGFwIHdpdGggb3RoZXJzIGFscmVhZHkgc3RvcmVkIG9mIHRoZSBzYW1lIHR5cGUgKHNlZSBoZXJlKS4gQXQgdGhlIG1vbWVudCB0aGVyZSBpcyBubyBzdXBwb3J0IGZvciB1cGRhdGUgbm9yIGRlbGV0ZS5cbiAgICogSW4gaU9TIHlvdSBjYW5ub3Qgc3RvcmUgdGhlIHRvdGFsIGNhbG9yaWVzLCB5b3UgbmVlZCB0byBzcGVjaWZ5IGVpdGhlciBiYXNhbCBvciBhY3RpdmUuIElmIHlvdSB1c2UgdG90YWwgY2Fsb3JpZXMsIHRoZSBhY3RpdmUgb25lcyB3aWxsIGJlIHN0b3JlZC5cbiAgICogSW4gQW5kcm9pZCB5b3UgY2FuIG9ubHkgc3RvcmUgYWN0aXZlIGNhbG9yaWVzLCBhcyB0aGUgYmFzYWwgYXJlIGVzdGltYXRlZCBhdXRvbWF0aWNhbGx5LiBJZiB5b3Ugc3RvcmUgdG90YWwgY2Fsb3JpZXMsIHRoZXNlIHdpbGwgYmUgdHJlYXRlZCBhcyBhY3RpdmUuXG4gICAqIEluIGlPUyBkaXN0YW5jZSBpcyBhc3N1bWVkIHRvIGJlIG9mIHR5cGUgV2Fsa2luZ1J1bm5pbmcsIGlmIHlvdSB3YW50IHRvIGV4cGxpY2l0bHkgc2V0IGl0IHRvIEN5Y2xpbmcgeW91IG5lZWQgdG8gYWRkIHRoZSBmaWVsZCBjeWNsaW5nOiB0cnVlLlxuICAgKiBJbiBpT1Mgc3RvcmluZyB0aGUgc2xlZXAgYWN0aXZpdGllcyBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoZSBtb21lbnQuXG4gICAqIFN0b3Jpbmcgb2YgbnV0cmllbnRzIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhlIG1vbWVudC5cbiAgICogQHBhcmFtIHN0b3JlT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3JlKHN0b3JlT3B0aW9uczogSGVhbHRoU3RvcmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
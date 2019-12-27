import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Shake
 * @description Handles shake gesture
 * @usage
 * ```typescript
 * import { Shake } from '@ionic-native/shake/ngx';
 *
 * constructor(private shake: Shake) { }
 *
 * ...
 *
 * const watch = this.shake.startWatch(60).subscribe(() => {
 *   // do something
 *   });
 *
 * watch.unsubscribe();
 * ```
 */
export declare class ShakeOriginal extends IonicNativePlugin {
    /**
     * Watch for shake gesture
     * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
     * @returns {Observable<any>}
     */
    startWatch(sensitivity?: number): Observable<any>;
}

export declare const Shake: ShakeOriginal;
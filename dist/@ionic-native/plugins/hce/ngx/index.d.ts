import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name hce
 * @description
 * HCE Cordova Wrapper
 *
 * @usage
 * ```typescript
 * import { hce } from '@ionic-native/hce/ngx';
 *
 *
 * constructor(private hce: hce) { }
 *
 * ...
 *
 * function onCommand(command){
 *   var commandAsBytes = new Uint8Array(command);
 *   var commandAsString = hce.util.byteArrayToHexString(commandAsBytes);
 *
 *   // do something with the command
 *
 *   // send the response
 *   hce.sendReponse(commandResponse);
 * }
 * this.hce.registerCommandCallback().then(onCommand);
 *
 * ```
 */
export declare class HCE extends IonicNativePlugin {
    /**
     * Registers command receiver.
     * @param onCommand {HCECommandEvent} The event handler.
     * @param fail {Function} Error event handler.
     *
     */
    registerCommandCallback(onCommand: HCECommandEvent, fail?: Function): void;
    /**
     * Registers Deactivated receiver.
     * @param ok {HCEDeactivatedEvent} Success event handler.
     * @param fail {Function} Error event handler.
     *
     */
    registerDeactivatedCallback(ok: HCEDeactivatedEvent, fail?: Function): void;
    /**
     * Sends response APDU.
     * @param response {Uint8Array} Response
     * @param success {string} Success Callback.
     * @param success {string} Failure Callback.
     *
     */
    sendResponse(response: Uint8Array, success?: Function, failure?: Function): void;
}
export declare type HCECommandEvent = (command: Uint8Array) => void;
export declare type HCEDeactivatedEvent = (command: number) => void;

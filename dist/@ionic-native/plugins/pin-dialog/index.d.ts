import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Pin Dialog
 * @description
 * PhoneGap numeric password dialog plugin for Android and iOS.
 *
 * Requires Cordova plugin: `cordova-plugin-pin-dialog`. For more info, please see the [Pin Dialog plugin docs](https://github.com/Paldom/PinDialog).
 *
 *
 *
 * @usage
 * ```typescript
 * import { PinDialog } from '@ionic-native/pin-dialog/ngx';
 *
 *
 * constructor(private pinDialog: PinDialog) { }
 *
 * ...
 *
 * this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
export declare class PinDialogOriginal extends IonicNativePlugin {
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     * @returns {Promise<{ buttonIndex: number, input1: string }>}
     */
    prompt(message: string, title: string, buttons: string[]): Promise<{
        buttonIndex: number;
        input1: string;
    }>;
}

export declare const PinDialog: PinDialogOriginal;
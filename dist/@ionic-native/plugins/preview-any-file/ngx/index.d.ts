import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name PreviewAnyFile
 * @description
 * Whatever the file is PDF document, Word document, Excel, office document,zip archive file, image, text, html or anything else, you can perform a preview by this cordova Plugin to preview any file in native mode by providing the local or external URL.
 *
 *  Requires Cordova plugin: `cordova-plugin-preview-any-file`. For more info, please see the [previewAnyFile plugin docs](https://github.com/mostafa-mansour1/previewAnyFile).
 *
 * @usage
 * ```typescript
 * import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
 *
 *
 * constructor(private previewAnyFile: PreviewAnyFile) { }
 *
 * ...
 *
 *
 * this.previewAnyFile.preview('file://filepath.ext')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class PreviewAnyFile extends IonicNativePlugin {
    /**
     * this function return SUCCESS in success callback if the file successfully opened, if the content is base64 you have to write it into file by cordova-plugin-file
     * @param url {string} full absolute URL for the file, if the path is content:// you need to resolve the native url, if the path is https:// it may not work in android
     * @return {Promise<any>} Returns a promise that resolves if the file opened reject if not;
     */
    preview(url: string): Promise<string>;
}

import { IonicNativePlugin } from '@ionic-native/core';
export declare enum NotificationVisibility {
    Visible = 0,
    VisibleNotifyCompleted = 1,
    VisibilityHidden = 2,
    VisibleNotifyOnlyCompletion = 3
}
export interface DownloadHttpHeader {
    header: string;
    value: string;
}
export interface DestinationDirectory {
    dirType: string;
    subPath: string;
}
export interface DownloadRequest {
    /**
     * Location of the resource to download
     */
    uri: string;
    /**
     * Set the title of this download, to be displayed in notifications (if enabled).
     * If no title is given, a default one will be assigned based on the download filename, once the download starts.
     */
    title?: string;
    /**
     * Set a description of this download, to be displayed in notifications (if enabled)
     */
    description?: string;
    /**
     * Set the MIME content type of this download. This will override the content type declared in the server's response.
     */
    mimeType?: string;
    /**
     * Set whether this download should be displayed in the system's Downloads UI. True by default.
     */
    visibleInDownloadsUi?: boolean;
    /**
     * Control whether a system notification is posted by the download manager while this download is running or when it is completed.
     */
    notificationVisibility?: NotificationVisibility;
    /**
     * Set the local destination for the downloaded file to a path within the application's external files directory
     */
    destinationInExternalFilesDir?: DestinationDirectory;
    /**
     * Set the local destination for the downloaded file to a path within the public external storage directory
     */
    destinationInExternalPublicDir?: DestinationDirectory;
    /**
     * Set the local destination for the downloaded file.
     * Must be a file URI to a path on external storage, and the calling application must have the WRITE_EXTERNAL_STORAGE permission.
     */
    destinationUri?: string;
    /**
     * Add an HTTP header to be included with the download request. The header will be added to the end of the list.
     */
    headers?: DownloadHttpHeader[];
}
/**
 * @name Downloader
 * @description
 * This plugin is designed to support downloading files using Android DownloadManager.
 *
 *
 * @usage
 * ```typescript
 * import { Downloader } from '@ionic-native/downloader/ngx';
 *
 *
 * constructor(private downloader: Downloader) { }
 *
 * ...
 *
 *    var request: DownloadRequest = {
 *           uri: YOUR_URI,
 *           title: 'MyDownload',
 *           description: '',
 *           mimeType: '',
 *           visibleInDownloadsUi: true,
 *           notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
 *           destinationInExternalFilesDir: {
 *               dirType: 'Downloads',
 *               subPath: 'MyFile.apk'
 *           }
 *       };
 *
 *
 *   this.downloader.download(request)
 *   			.then((location: string) => console.log('File downloaded at:'+location))
 *   			.catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * NotificationVisibility
 * Header
 * DestinationDirectory
 * DownloadHttpHeader
 */
export declare class Downloader extends IonicNativePlugin {
    /**
     *  Starts a new download and returns location of the downloaded file on completion
     *  @param request {DownloadRequest}
     */
    download(request: DownloadRequest): Promise<string>;
}

import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name PSPDFKit-Cordova
 * @description
 * The official plugin to use PSPDFKit with Cordova and Ionic.
 *
 * @usage
 * ```typescript
 * import { PSPDFKit } from '@ionic-native/pspdfkit-cordova/ngx';
 *
 *
 * constructor(private pspdfkit: PSPDFKit) { }
 *
 * ...
 *
 * // Set your license key here.
 * this.pspdfkit.setLicenseKey("YOUR KEY");
 *
 * // Show a PDF in single page mode, with a black background.
 * this.pspdfkit.present('document.pdf', {pageMode: 'single', backgroundColor: "black"})
 *   .then(result => {
 *      console.log(result); // Success
 *   })
 *   .catch(error => {
 *      console.log(error); // Failed
 *   });
 * }
 *
 * // Scroll to page at index 1.
 * this.pspdfkit.setPage(1, true);
 *
 * ```
 */
export declare class PSPDFKit extends IonicNativePlugin {
    /**
     * Activates PSPDFKit with your license key from https://customers.pspdfkit.com.
     *
     * @param key {string} The license key.
     * @return {Promise<any>} Success and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    setLicenseKey(licenseKey: string): Promise<any>;
    /**
     * iOS: Displays a PDF in a full-screen modal.
     * Android: Opens the PSPDFActivity to show a document from the local device file system.
     *
     * @param path {string} The path should be a string containing the file path (not URL) for the PDF. Relative paths are assumed to be relative to the www directory (if the path has a different base URL set, this will be ignored). To specify a path inside the application documents or library directory, use a `~`, e.g. `"~/Documents/mypdf.pdf"` or `"~/Library/Application Support/mypdf.pdf"`. Path can be null, but must not be omitted
     * @param options {any} The `options` parameter is an optional object containing configuration properties for the PDF document and/or view controller. All currently supported values are listed below under Options.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    present(path: string, options?: any): Promise<any>;
    /**
     * Opens the PSPDFActivity to show a document from the app's assets folder. This method copies the
     * file to the internal app directory on the device before showing it.
     * @param assetFile {string} Relative path within the app's assets folder.
     * @param options {any} PSPDFKit configuration options.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -Android
     */
    presentFromAssets(assetFile: string, options?: any): Promise<any>;
    /**
     * Displays a PDF in a full-screen modal and imports annotations from a given XFDF file.
     *
     * @param path {string} Should be a string containing the file path (not URL) for the PDF. Relative paths are assumed to be relative to the www directory (if the path has a different base URL set, this will be ignored). To specify a path inside the application documents or library directory, use a `~`, e.g. `"~/Documents/mypdf.pdf"` or `"~/Library/Application Support/mypdf.pdf"`. Path can be null, but must not be omitted
     * @param xfdfPath {string} should be a string containing the file path (not URL) for the XFDF file backing the PDF document. Relative paths are assumed to be relative to the www directory (if the xfdf path has a different base URL set, we will create an XFDF file in `'"~/Documents/" + xfdfPath'`). To specify a path inside the application documents or library directory, use a ~, e.g. `"~/Documents/myXFDF.xfdf"` or `"~/Library/Application Support/myXFDF.xfdf"`. The xfdfPath cannot be null and must not be omitted.
     * @param options {any} The `options` parameter is an optional object containing configuration properties for the PDF document and/or view controller. All currently supported values are listed below under Options.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    presentWithXFDF(path: string, xfdfPath: string, options?: any): Promise<any>;
    /**
     * iOS: Dismisses the modally presented PDF view.
     * Android: Dismisses any previously launched PDF activity. Calls the optional callback function after all activities have been dismissed.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    dismiss(): Promise<any>;
    /**
     * Reloads the current PDF.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    reload(): Promise<any>;
    /**
     * Saves the document to original location if it has been changed. If there were no changes to the
     * document, the document file will not be modified.
     * Provides "wasModified" as a part of a successful response which will be equal to true if
     * the file was modified and changes were saved. false if there was nothing to save.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -Android
     */
    saveDocument(): Promise<any>;
    /**
     * Saves any changed annotations in the current document.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    saveAnnotations(): Promise<any>;
    /**
     * Return true in the success (or result) callback if the document has unsaved annotation. Returns false otherwise.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    getHasDirtyAnnotations(): Promise<any>;
    /**
     * Triggers a search for the specified query.
     *
     * @param query {string} Search Term to query
     * @param animated {boolean} Determines if the search should be animated (if omitted, the search will not be animated). The optional headless argument determines whether the search UI should be disaplyed (if omitted, the search UI *will* be displayed).
     * @param headless {boolean} Determines whether the search UI should be disaplyed (if omitted, the search UI *will* be displayed).
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    search(query: string, animated?: boolean, headless?: boolean): Promise<any>;
    /**
     * Sets multiple document and view controller settings at once.
     *
     * @param options {any} The options set will be applied to the current document (if there is one) as well as all subsequently displayed documents. All currently supported values are listed below under Options.
     * @param animated {boolean} determines if the property should be animated. Not all property changes can be animated, so if the property does not support animation the animated argument will be ignored.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    setOptions(options: any, animated: boolean): Promise<any>;
    /**
     * Gets several document or view controller options in a single call.
     *
     * @param names {any} array of option names
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    getOptions(names: any): Promise<any>;
    /**
     * Sets a single document or view controller settings at once.
     *
     * @param name {string} the option name
     * @param value {any} the option value
     * @param animated {boolean} determines if the property should be animated. Not all property changes can be animated, so if the property does not support animation the animated argument will be ignored.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    setOption(name: string, value: any, animated: boolean): Promise<any>;
    /**
     * Gets a single document or view controller settings at once.
     *
     * @param name {string} the option name
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    getOption(name: string): Promise<any>;
    /**
     * Sets the current visible page.
     *
     * @param page {number} the page index
     * @param animated {boolean} Optional argument. Determines if the page change should be animated (if omitted, the search will not be animated).
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    setPage(page: number, animated?: boolean): Promise<any>;
    /**
     * Gets the currently visible page.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    getPage(): Promise<any>;
    /**
     * Gets the page count of the current document.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    getPageCount(): Promise<any>;
    /**
     * Scrolls to the next page.
     *
     * @param animated {boolean} Optional argument. Determines if the page change should be animated (if omitted, the search will not be animated).
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    scrollToNextPage(animated?: boolean): Promise<any>;
    /**
     * Scrolls to the previous page.
     *
     * @param animated {boolean} Optional argument. Determines if the page change should be animated (if omitted, the search will not be animated).
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    scrollToPreviousPage(animated?: boolean): Promise<any>;
    /**
     * Sets the appearance mode.
     *
     * @param appearanceMode {string} the appearance mode. Can be 'default', 'sepia', or 'night'
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    setAppearanceMode(appearanceMode: string): Promise<any>;
    /**
     * Clears the entire render cache. This invalidates render caches for all previously rendered documents.
     * Consider using `removeCacheForPresentedDocument()` or `clearCacheForPage()` instead of this,
     * since invalidating single documents or specific page caches since excessive cache invalidation may decrease performance.
     *
     * @param clearDiskCache {boolean} optional parameter. Android: if set to true clears disk cache as well. iOS: has no effect.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    clearCache(clearDiskCache?: boolean): Promise<any>;
    /**
     * Clears the cache from the currently presented document.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    removeCacheForPresentedDocument(): Promise<any>;
    /**
     * Invalidates the render cache for the specified page.
     *
     * @param pageIndex {number} 0-based index of the page whose render cache should be invalidated.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -Android
     */
    clearCacheForPage(pageIndex: number): Promise<any>;
    /**
     * Hides the annotation toolbar
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    hideAnnotationToolbar(): Promise<any>;
    /**
     * Shows the annotation toolbar
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    showAnnotationToolbar(): Promise<any>;
    /**
     * Toggles the annotation toolbar
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    toggleAnnotationToolbar(): Promise<any>;
    /**
     * Applies the passed in document Instant JSON.
     *
     * @param jsonValue {string} The document Instant JSON to apply.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    applyInstantJSON(jsonValue: string): Promise<any>;
    /**
     * Adds a new annotation to the current document using the Instant JSON Annotation
     * payload - https://pspdfkit.com/guides/ios/current/importing-exporting/instant-json/#instant-annotation-json-api
     *
     * @param jsonAnnotation {string} Instant JSON of the annotation to add.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    addAnnotation(jsonAnnotation: string): Promise<any>;
    /**
     * Removes a given annotation from the current document.  The annotaion is expected to be in Instant
     * JSON format - https://pspdfkit.com/guides/ios/current/importing-exporting/instant-json/#instant-annotation-json-api
     *
     * @param jsonAnnotation {string} Instant JSON of the annotation to remove.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    removeAnnotation(jsonAnnotation: string): Promise<any>;
    /**
     * Gets all annotations of the given type from the page.
     *
     * @param pageIndex {number} The page to get the annotations for.
     * @param type {string} The type of annotations to get (See here for types https://pspdfkit.com/guides/server/current/api/json-format/) or `null` to get all annotations.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    getAnnotations(pageIndex: number, type?: string): Promise<any>;
    /**
     * Gets all unsaved changes to annotations.
     *
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    getAllUnsavedAnnotations(): Promise<any>;
    /**
     * Sets the value of the form element of the fully qualified name.
     *
     * @param value {string} the value.
     * @param fullyQualifiedName {string} the fully qualified name of the form element.
     * @return {Promise<any>} callback Success (result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    setFormFieldValue(value: string, fullyQualifiedName: string): Promise<any>;
    /**
     * Gets the value of the form element of the fully qualified name.
     *
     * @param fullyQualifiedName {string} description.
     * @return {Promise<any>} callback Success (result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    getFormFieldValue(fullyQualifiedName: string): Promise<any>;
    /**
     * Imports all annotations from the specified XFDF file to the current document.
     *
     * @param xfdfPath {string} XFDF file path to import annotations
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    importXFDF(xfdfPath: string): Promise<any>;
    /**
     * Exports all annotations from the current document to the specified XFDF file path.
     *
     * @param xfdfPath {string} XFDF file path to export annotations
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    exportXFDF(xfdfPath: string): Promise<any>;
    /**
     * Processes annotations (embed, remove, flatten, or print) and saves the processed document to the given document path.
     *
     * @param annotationChange {string} the annotation change. Can be 'flatten', 'remove', 'embed' or 'print'
     * @param processedDocumentPath {string} description.
     * @param annotationType {string} The optional string annotationType argument. If omitted, we process 'All' annotations. The annotation type can have one of the following values: None, Undefined, Link, Highlight, StrikeOut, Underline, Squiggly, FreeText, Ink, Square, Circle, Line, Text, Stamp, Caret, RichMedia, Screen, Widget, Sound, FileAttachment, Polygon, PolyLine, Popup, Watermark, TrapNet, 3D, Redact, All.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     * -Android
     */
    processAnnotations(annotationChange: string, processedDocumentPath: string, annotationType: string): Promise<any>;
    /**
     * Generates a PDF document from HTML string.
     *
     * @param html {string} HTML string.
     * @param fileName {string} File name of the generated PDF.
     * @param options {string} Options to be considered when converting the HTML string to PDF.
     * @return {Promise<any>} callback Success (or result) and error callback function.
     *
     * __Supported Platforms__
     *
     * -iOS
     */
    convertPDFFromHTMLString(html: string, fileName: string, options: string): Promise<any>;
}

import { IonicNativePlugin } from '@ionic-native/core';
export interface EncodeDecodeData {
    text?: any;
    csvFileName?: any;
}
export declare class jp_encode_decode extends IonicNativePlugin {
    /**
     * createCSVWithSJIS
     * @param {EncodeDecodeData} Data
     * @return {Promise<any>}
     */
    createCSVWithSJIS(Data: EncodeDecodeData): Promise<any>;
    /**
   * readCsvAndEncodeWithUTF8
   * @return {Promise<any>}
   */
    readCsvAndEncodeWithUTF8(): Promise<any>;
}

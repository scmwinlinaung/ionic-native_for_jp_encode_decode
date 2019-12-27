

import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
export interface EncodeDecodeData {
  text?: any;
  csvFileName?: any;
}
@Plugin({
  pluginName: 'jp_encode_decode',
  plugin: 'cordova-plugin-jp_encode_decode',
  pluginRef: 'jp_encode_decode',
  repo:
    'https://github.com/scmwinlinaung/cordova-plugin-jp_encode_decode.git',
  platforms: ['iOS']
})

@Injectable()
export class jp_encode_decode extends IonicNativePlugin {

	/**
	 * createCSVWithSJIS
	 * @param {EncodeDecodeData} Data
	 * @return {Promise<any>}
	 */
  @Cordova({
    successIndex: 0,
    errorIndex: 1
  })
  createCSVWithSJIS(Data: EncodeDecodeData): Promise<any> {
    return;
  }
  /**
 * readCsvAndEncodeWithUTF8
 * @return {Promise<any>}
 */
  @Cordova()
  readCsvAndEncodeWithUTF8(): Promise<any> {
    return;
  }
}
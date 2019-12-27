import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name SpeechKit
 * @description
 * Implementation of Nuance SpeechKit SDK on Ionic
 *
 * @usage
 * ```typescript
 * import { SpeechKit } from '@ionic-native/speechkit/ngx';
 *
 * constructor(private speechkit: SpeechKit) { }
 *
 *
 * // find voice names that match language from: https://developer.nuance.com/public/index.php?task=supportedLanguages
 * this.speechkit.tts('Text to be read out loud', 'ENG-GBR', 'Serena').then(
 *   (msg) => { console.log(msg); },
 *   (err) => { console.log(err); }
 * );
 * ```
 */
export declare class SpeechKitOriginal extends IonicNativePlugin {
    /**
     * Speak text out loud in given language
     * @returns {Promise<string>}
     */
    tts(text: string, language: string, voice: string): Promise<string>;
    /**
     * Try to recognize what the user said
     * @returns {Promise<string>}
     */
    asr(language: string): Promise<string>;
}

export declare const SpeechKit: SpeechKitOriginal;
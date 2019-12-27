import { IonicNativePlugin } from '@ionic-native/core';
export declare const enum TYPE_SENSOR {
    PROXIMITY = "PROXIMITY",
    ACCELEROMETER = "ACCELEROMETER",
    GRAVITY = "GRAVITY",
    GYROSCOPE = "GYROSCOPE",
    GYROSCOPE_UNCALIBRATED = "GYROSCOPE_UNCALIBRATED",
    LINEAR_ACCELERATION = "LINEAR_ACCELERATION",
    ROTATION_VECTOR = "ROTATION_VECTOR",
    STEP_COUNTER = "STEP_COUNTER",
    GAME_ROTATION_VECTOR = "GAME_ROTATION_VECTOR",
    GEOMAGNETIC_ROTATION_VECTOR = "GEOMAGNETIC_ROTATION_VECTOR",
    MAGNETIC_FIELD = "MAGNETIC_FIELD",
    MAGNETIC_FIELD_UNCALIBRATED = "MAGNETIC_FIELD_UNCALIBRATED",
    ORIENTATION = "ORIENTATION",
    AMBIENT_TEMPERATURE = "AMBIENT_TEMPERATURE",
    LIGHT = "LIGHT",
    PRESSURE = "PRESSURE",
    RELATIVE_HUMIDITY = "RELATIVE_HUMIDITY",
    TEMPERATURE = "TEMPERATURE"
}
/**
 * @name Sensors
 * @description
 * This plugin enables sensors on Android devices
 *
 * @usage
 * ```typescript
 * import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
 *
 *
 * constructor(private sensors: Sensors) { }
 *
 * ...
 *
 *
 * this.sensors.enableSensor(TYPE_SENSOR.LIGHT);
 *
 * ```
 */
export declare class Sensors extends IonicNativePlugin {
    /**
     * This function enables the sensor
     * @param {string} TYPE_SENSOR Specify the sensor to enable
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    enableSensor(TYPE_SENSOR: string): Promise<any>;
    /**
     * This function disables the sensor
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    disableSensor(): Promise<any>;
    /**
     * This function calls the success callback
     * @return {Promise<any>} Returns sensor state
     */
    getState(): Promise<any>;
}

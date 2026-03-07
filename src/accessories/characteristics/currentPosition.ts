import { CharacteristicGetCallback } from "homebridge";
import { TuyaWebCharacteristic } from "./base";
import { BaseAccessory } from "../BaseAccessory";
import { DeviceState } from "../../api/response";
import { CoverAccessory } from "..";

export class CurrentPositionCharacteristic extends TuyaWebCharacteristic {
  public static Title = "Characteristic.CurrentPosition";

  public static HomekitCharacteristic(accessory: BaseAccessory) {
    return accessory.platform.Characteristic.CurrentPosition;
  }

  public static isSupportedByAccessory(): boolean {
    return true;
  }

  public getRemoteValue(callback: CharacteristicGetCallback): void {
    this.updateValue({}, callback);
  }

  updateValue(_data: DeviceState, callback?: CharacteristicGetCallback): void {
    callback && callback(null, (this.accessory as unknown as CoverAccessory).position);
  }
}

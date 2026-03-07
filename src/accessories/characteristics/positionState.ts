import { CharacteristicGetCallback } from "homebridge";
import { TuyaWebCharacteristic } from "./base";
import { BaseAccessory } from "../BaseAccessory";
import { DeviceState } from "../../api/response";
import { CoverAccessory } from "..";

export class PositionStateCharacteristic extends TuyaWebCharacteristic {
  public static Title = "Characteristic.PositionState";

  public static HomekitCharacteristic(accessory: BaseAccessory) {
    return accessory.platform.Characteristic.PositionState;
  }

  public static isSupportedByAccessory(): boolean {
    return true;
  }

  public getRemoteValue(callback: CharacteristicGetCallback): void {
    this.updateValue({}, callback);
  }

  updateValue(_data: DeviceState, callback?: CharacteristicGetCallback): void {
    callback && callback(null, (this.accessory as unknown as CoverAccessory).motor);
  }
}

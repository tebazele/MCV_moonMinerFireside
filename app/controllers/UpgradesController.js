import { AppState } from "../AppState.js";
import { upgradesService } from "../services/UpgradesService.js";
import { setHTML } from "../utils/Writer.js";

function _draw() {
  let template = "";
  AppState.upgrades.forEach((u) => {
    template += u.UpgradeCard;
  });
  setHTML("upgrades-container", template);
}

export class UpgradesController {
  constructor() {
    console.log("hey there from the upgrades controller");
    _draw();
    AppState.on("upgrades", _draw);
  }

  buyUpgrade(upgradeName) {
    upgradesService.buyUpgrade(upgradeName);
  }
}

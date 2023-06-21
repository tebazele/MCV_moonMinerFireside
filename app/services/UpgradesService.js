import { AppState } from "../AppState.js";
import { proService } from "./ProService.js";

class UpgradesService {
  buyUpgrade(upgradeName) {
    let foundUpgrade = AppState.upgrades.find((u) => u.name == upgradeName);
    console.log(foundUpgrade);
    if (AppState.proPoints >= foundUpgrade.price) {
      AppState.proPoints -= foundUpgrade.price;
      foundUpgrade.quantity++;
      // NOTE we can call from one service to another
      proService.getClickValue();
      console.log(foundUpgrade);

      // NOTE something changed within our array of upgrade objects but AppState.on didn't see it, so we need to let the watcher know a change has happened
      AppState.emit("upgrades");
    } else {
      window.alert(
        `You don't have enough points to buy the ${foundUpgrade.name}!`
      );
    }
    // check to see if we have enough proPoints to buy the upgrade
    // decrease the proPoints by the upgrade price
    // increase the upgrade's quantity
  }
}

export const upgradesService = new UpgradesService();

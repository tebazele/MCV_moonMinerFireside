import { AppState } from "../AppState.js";

class UpgradesService {
  buyUpgrade(upgradeName) {
    let foundUpgrade = AppState.upgrades.find((u) => u.name == upgradeName);
    console.log(foundUpgrade);
    if (AppState.proPoints >= foundUpgrade.price) {
      AppState.proPoints -= foundUpgrade.price;
      foundUpgrade.quantity++;
      console.log(foundUpgrade);
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

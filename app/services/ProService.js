import { AppState } from "../AppState.js";

function _calculateClickValue() {
  let clickValue = 1;
  AppState.upgrades.forEach((u) => {
    clickValue += u.multiplier * u.quantity;
  });
  AppState.clickValue = clickValue;
  console.log(AppState.clickValue);
  return clickValue;
}

class ProService {
  mine() {
    AppState.proPoints += _calculateClickValue();
    console.log(AppState.proPoints);
  }

  getClickValue() {
    _calculateClickValue();
  }
}

export const proService = new ProService();

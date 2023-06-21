import { AppState } from "../AppState.js";
import { proService } from "../services/ProService.js";
import { setText } from "../utils/Writer.js";

function _draw() {
  setText("procrastination-value", AppState.proPoints);
}

function _drawClickValue() {
  setText("click-value", AppState.clickValue);
}

export class ProController {
  constructor() {
    console.log("hey there from the proController");
    _draw();
    AppState.on("proPoints", _draw);
    AppState.on("clickValue", _drawClickValue);
  }

  mine() {
    proService.mine();
    console.log("is this mine function working?");
  }
}

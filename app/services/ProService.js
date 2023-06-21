import { AppState } from "../AppState.js";

class ProService {
  mine() {
    AppState.proPoints++;
    console.log(AppState.proPoints);
  }
}

export const proService = new ProService();

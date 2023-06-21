import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ProController } from "./controllers/ProController.js";
import { UpgradesController } from "./controllers/UpgradesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

export const router = [
  {
    path: "",
    controller: [ProController, UpgradesController],
    view: "",
  },
  // },
  // {
  //   path: '#/about',
  //   controller: [AboutController, ValuesController],
  //   view: AboutView
  // }
];

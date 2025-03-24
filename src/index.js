import Phaser from "phaser";
import { VideoScene } from "./scene/VideoScene";
import { FirstScene } from "./scene/FirstScene";
import { SecondScene } from "./scene/SecondScene";
import "./index.css";
import { CompareScene } from "./scene/CompareScene";

let width = (600 * window.innerHeight) / 800;
let height = window.innerHeight;

// let width = 500;
// let height = 750;

const config = {
  type: Phaser.AUTO,
  width: width,
  height: height,
  scene: [VideoScene, FirstScene, SecondScene, CompareScene],
};

const game = new Phaser.Game(config);

import { RoomGenerator } from "/js/canvas/room/RoomGenerator.js";
import { drag } from "/js/canvas/room/RoomDragging.js";

export const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: false,
  transparent: false,
  backgroundColor: 0x121212
});
export let container = new PIXI.Container();
const floor = "0000\n0000\n00xx\n0000\n0000\n0000\n00xx\n0000\n0000\n0000\n0000";
const room = RoomGenerator.generate(floor, 7);

// Debuging
console.log(app);

// Display stuff
container.interactive = true;
container.buttonMode = true;
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
app.stage.addChild(container);
drag();

// Render to the main page
document.getElementById("roomContainer").appendChild(app.view);
import * as Phaser from "phaser";

export default class Play extends Phaser.Scene {
  fire?: Phaser.Input.Keyboard.Key;
  left?: Phaser.Input.Keyboard.Key;
  right?: Phaser.Input.Keyboard.Key;
  up?: Phaser.Input.Keyboard.Key;
  down?: Phaser.Input.Keyboard.Key;

  player?: Phaser.GameObjects.Shape;

  constructor() {
    super("play");
  }

  preload() {}

  #addKey(
    name: keyof typeof Phaser.Input.Keyboard.KeyCodes,
  ): Phaser.Input.Keyboard.Key {
    return this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes[name]);
  }

  create() {
    this.fire = this.#addKey("F");
    this.left = this.#addKey("A");
    this.right = this.#addKey("D");
    this.up = this.#addKey("W");
    this.down = this.#addKey("S");

    // this.background = this.add
    //   .tileSprite(
    //     0,
    //     0,
    //     this.game.config.width as number,
    //     this.game.config.height as number,
    //     "background",
    //   )
    //   .setOrigin(0, 0);

    this.player = this.add.rectangle(100, 100, 50, 50, 0xff0000);
  }

  // update(_timeMs: number, delta: number) {
  update() {
    // if (this.left!.isDown) {
    //   this.player!.
    // }
  }
}

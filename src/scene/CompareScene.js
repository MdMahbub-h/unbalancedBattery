class CompareScene extends Phaser.Scene {
  constructor() {
    super("CompareScene");
  }
  create() {
    this.add.text(this.scale.width / 2, this.scale.height / 2, "Compare..");
  }
}
export { CompareScene };

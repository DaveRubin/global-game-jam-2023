import { Engine } from "@babylonjs/core";
import { AdvancedDynamicTexture, Control, Rectangle, TextBlock } from "@babylonjs/gui";

const SCREEN_PADDING = 40;
const BAR_WIDTH = 140;
const ENERGY = "#85d8ff";

const createRect = (background: string, inner?: boolean) => {
  const distance = `${SCREEN_PADDING}px`;
  const rect = new Rectangle();
  rect.transformCenterX = 0;
  rect.transformCenterY = 0;
  rect.width = inner ? `${BAR_WIDTH}px` : `${BAR_WIDTH + SCREEN_PADDING}px`;
  rect.height = "30px";
  rect.color = background;
  rect.background = background;
  rect.cornerRadius = 10;
  if (!inner) {
    rect.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    rect.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    rect.paddingRight = distance;
    rect.top = distance;
  }

  return rect;
};

const createText = (name: string, initialText: string) => {
  const textBlock = new TextBlock(name);
  textBlock.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  textBlock.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
  textBlock.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
  textBlock.text = initialText;
  textBlock.color = ENERGY;
  textBlock.width = "170px";
  textBlock.height = "30px";
  textBlock.top = "75px";
  return textBlock;
};

export class MainGUI {
  private background: Rectangle;
  private foreground: Rectangle;
  recoverText: TextBlock;
  totalTimeText: TextBlock;

  constructor() {
    this.background = createRect("white");
    this.foreground = createRect(ENERGY, true);
    this.recoverText = createText("progressText", "");
    this.totalTimeText = createText("progressText", "3s");
    this.totalTimeText.top = "40px";
    this.totalTimeText.color = "blue";
    this.totalTimeText.paddingRight = "50px";

    this.totalTimeText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;

    this.background.addControl(this.foreground);

    const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", true, Engine.LastCreatedScene);
    advancedTexture.addControl(this.background);
    advancedTexture.addControl(this.recoverText);
    advancedTexture.addControl(this.totalTimeText);
  }

  set progress(progres: number) {
    this.foreground.left = `${progres * BAR_WIDTH - BAR_WIDTH}px`;
  }
}

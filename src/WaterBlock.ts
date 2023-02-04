import * as BABYLON from "@babylonjs/core";

export const createNME = () => {
  var nodeMaterial = new BABYLON.NodeMaterial("node");

  // InputBlock
  var position = new BABYLON.InputBlock("position");
  position.visibleInInspector = false;
  position.visibleOnFrame = false;
  position.target = 1;
  position.setAsAttribute("position");

  // AddBlock
  var Add = new BABYLON.AddBlock("Add");
  Add.visibleInInspector = false;
  Add.visibleOnFrame = false;
  Add.target = 4;

  // ScaleBlock
  var Scale = new BABYLON.ScaleBlock("Scale");
  Scale.visibleInInspector = false;
  Scale.visibleOnFrame = false;
  Scale.target = 4;

  // MultiplyBlock
  var Multiply = new BABYLON.MultiplyBlock("Multiply");
  Multiply.visibleInInspector = false;
  Multiply.visibleOnFrame = false;
  Multiply.target = 4;

  // InputBlock
  var normal = new BABYLON.InputBlock("normal");
  normal.visibleInInspector = false;
  normal.visibleOnFrame = false;
  normal.target = 1;
  normal.setAsAttribute("normal");

  // RemapBlock
  var Remap = new BABYLON.RemapBlock("Remap");
  Remap.visibleInInspector = false;
  Remap.visibleOnFrame = false;
  Remap.target = 4;
  Remap.sourceRange = new BABYLON.Vector2(0, 0.66);
  Remap.targetRange = new BABYLON.Vector2(0, 1);

  // VectorMergerBlock
  var VectorMerger = new BABYLON.VectorMergerBlock("VectorMerger");
  VectorMerger.visibleInInspector = false;
  VectorMerger.visibleOnFrame = false;
  VectorMerger.target = 4;
  VectorMerger.xSwizzle = "x";
  VectorMerger.ySwizzle = "y";
  VectorMerger.zSwizzle = "z";
  VectorMerger.wSwizzle = "w";

  // AddBlock
  var Add1 = new BABYLON.AddBlock("Add");
  Add1.visibleInInspector = false;
  Add1.visibleOnFrame = false;
  Add1.target = 4;

  // AddBlock
  var Add2 = new BABYLON.AddBlock("Add");
  Add2.visibleInInspector = false;
  Add2.visibleOnFrame = false;
  Add2.target = 4;

  // AddBlock
  var Add3 = new BABYLON.AddBlock("Add");
  Add3.visibleInInspector = false;
  Add3.visibleOnFrame = false;
  Add3.target = 4;

  // AddBlock
  var Add4 = new BABYLON.AddBlock("Add");
  Add4.visibleInInspector = false;
  Add4.visibleOnFrame = false;
  Add4.target = 4;

  // AddBlock
  var Add5 = new BABYLON.AddBlock("Add");
  Add5.visibleInInspector = false;
  Add5.visibleOnFrame = false;
  Add5.target = 4;

  // AddBlock
  var Add6 = new BABYLON.AddBlock("Add");
  Add6.visibleInInspector = false;
  Add6.visibleOnFrame = false;
  Add6.target = 4;

  // AddBlock
  var Add7 = new BABYLON.AddBlock("Add");
  Add7.visibleInInspector = false;
  Add7.visibleOnFrame = false;
  Add7.target = 4;

  // MultiplyBlock
  var Multiply1 = new BABYLON.MultiplyBlock("Multiply");
  Multiply1.visibleInInspector = false;
  Multiply1.visibleOnFrame = false;
  Multiply1.target = 4;

  // TrigonometryBlock
  var Abs = new BABYLON.TrigonometryBlock("Abs");
  Abs.visibleInInspector = false;
  Abs.visibleOnFrame = false;
  Abs.target = 4;
  Abs.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD.visibleInInspector = false;
  SimplexPerlinD.visibleOnFrame = false;
  SimplexPerlinD.target = 4;

  // RemapBlock
  var Remap1 = new BABYLON.RemapBlock("Remap");
  Remap1.visibleInInspector = false;
  Remap1.visibleOnFrame = false;
  Remap1.target = 4;
  Remap1.sourceRange = new BABYLON.Vector2(0, 1);
  Remap1.targetRange = new BABYLON.Vector2(0, 1);

  // VectorMergerBlock
  var VectorMerger1 = new BABYLON.VectorMergerBlock("VectorMerger");
  VectorMerger1.visibleInInspector = false;
  VectorMerger1.visibleOnFrame = false;
  VectorMerger1.target = 4;
  VectorMerger1.xSwizzle = "x";
  VectorMerger1.ySwizzle = "y";
  VectorMerger1.zSwizzle = "z";
  VectorMerger1.wSwizzle = "w";

  // AddBlock
  var Add8 = new BABYLON.AddBlock("Add");
  Add8.visibleInInspector = false;
  Add8.visibleOnFrame = false;
  Add8.target = 4;

  // VectorSplitterBlock
  var VectorSplitter = new BABYLON.VectorSplitterBlock("VectorSplitter");
  VectorSplitter.visibleInInspector = false;
  VectorSplitter.visibleOnFrame = false;
  VectorSplitter.target = 4;

  // InputBlock
  var position1 = new BABYLON.InputBlock("position");
  position1.visibleInInspector = false;
  position1.visibleOnFrame = false;
  position1.target = 1;
  position1.setAsAttribute("position");

  // AddBlock
  var Add9 = new BABYLON.AddBlock("Add");
  Add9.visibleInInspector = false;
  Add9.visibleOnFrame = false;
  Add9.target = 4;

  // ScaleBlock
  var Scale1 = new BABYLON.ScaleBlock("Scale");
  Scale1.visibleInInspector = false;
  Scale1.visibleOnFrame = false;
  Scale1.target = 4;

  // InputBlock
  var Time = new BABYLON.InputBlock("Time");
  Time.visibleInInspector = false;
  Time.visibleOnFrame = false;
  Time.target = 1;
  Time.value = 0;
  Time.min = 0;
  Time.max = 0;
  Time.isBoolean = false;
  Time.matrixMode = 0;
  Time.animationType = BABYLON.AnimatedInputBlockTypes.Time;
  Time.isConstant = false;

  // InputBlock
  var InputBlock_32 = new BABYLON.InputBlock("");
  InputBlock_32.visibleInInspector = false;
  InputBlock_32.visibleOnFrame = false;
  InputBlock_32.target = 1;
  InputBlock_32.value = 0.87;
  InputBlock_32.min = 0;
  InputBlock_32.max = 1;
  InputBlock_32.isBoolean = false;
  InputBlock_32.matrixMode = 0;
  InputBlock_32.animationType = BABYLON.AnimatedInputBlockTypes.None;
  InputBlock_32.isConstant = false;

  // AddBlock
  var Add10 = new BABYLON.AddBlock("Add");
  Add10.visibleInInspector = false;
  Add10.visibleOnFrame = false;
  Add10.target = 4;

  // RemapBlock
  var Remap2 = new BABYLON.RemapBlock("Remap");
  Remap2.visibleInInspector = false;
  Remap2.visibleOnFrame = false;
  Remap2.target = 4;
  Remap2.sourceRange = new BABYLON.Vector2(0, 1);
  Remap2.targetRange = new BABYLON.Vector2(0, 1);

  // SimplexPerlin3DBlock
  var SimplexPerlinD1 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD1.visibleInInspector = false;
  SimplexPerlinD1.visibleOnFrame = false;
  SimplexPerlinD1.target = 4;

  // TrigonometryBlock
  var Abs1 = new BABYLON.TrigonometryBlock("Abs");
  Abs1.visibleInInspector = false;
  Abs1.visibleOnFrame = false;
  Abs1.target = 4;
  Abs1.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply2 = new BABYLON.MultiplyBlock("Multiply");
  Multiply2.visibleInInspector = false;
  Multiply2.visibleOnFrame = false;
  Multiply2.target = 4;

  // InputBlock
  var amp = new BABYLON.InputBlock("amp");
  amp.visibleInInspector = false;
  amp.visibleOnFrame = false;
  amp.target = 1;
  amp.value = 0.48;
  amp.min = 0;
  amp.max = 1;
  amp.isBoolean = false;
  amp.matrixMode = 0;
  amp.animationType = BABYLON.AnimatedInputBlockTypes.None;
  amp.isConstant = false;

  // MultiplyBlock
  var Multiply3 = new BABYLON.MultiplyBlock("Multiply");
  Multiply3.visibleInInspector = false;
  Multiply3.visibleOnFrame = false;
  Multiply3.target = 4;

  // MultiplyBlock
  var Multiply4 = new BABYLON.MultiplyBlock("Multiply");
  Multiply4.visibleInInspector = false;
  Multiply4.visibleOnFrame = false;
  Multiply4.target = 4;

  // TrigonometryBlock
  var Abs2 = new BABYLON.TrigonometryBlock("Abs");
  Abs2.visibleInInspector = false;
  Abs2.visibleOnFrame = false;
  Abs2.target = 4;
  Abs2.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD2 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD2.visibleInInspector = false;
  SimplexPerlinD2.visibleOnFrame = false;
  SimplexPerlinD2.target = 4;

  // ScaleBlock
  var Scale2 = new BABYLON.ScaleBlock("Scale");
  Scale2.visibleInInspector = false;
  Scale2.visibleOnFrame = false;
  Scale2.target = 4;

  // InputBlock
  var Structure = new BABYLON.InputBlock("Structure");
  Structure.visibleInInspector = false;
  Structure.visibleOnFrame = false;
  Structure.target = 1;
  Structure.value = 2;
  Structure.min = 0;
  Structure.max = 2;
  Structure.isBoolean = false;
  Structure.matrixMode = 0;
  Structure.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Structure.isConstant = false;

  // ScaleBlock
  var Scale3 = new BABYLON.ScaleBlock("Scale");
  Scale3.visibleInInspector = false;
  Scale3.visibleOnFrame = false;
  Scale3.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD3 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD3.visibleInInspector = false;
  SimplexPerlinD3.visibleOnFrame = false;
  SimplexPerlinD3.target = 4;

  // TrigonometryBlock
  var Abs3 = new BABYLON.TrigonometryBlock("Abs");
  Abs3.visibleInInspector = false;
  Abs3.visibleOnFrame = false;
  Abs3.target = 4;
  Abs3.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply5 = new BABYLON.MultiplyBlock("Multiply");
  Multiply5.visibleInInspector = false;
  Multiply5.visibleOnFrame = false;
  Multiply5.target = 4;

  // MultiplyBlock
  var Multiply6 = new BABYLON.MultiplyBlock("Multiply");
  Multiply6.visibleInInspector = false;
  Multiply6.visibleOnFrame = false;
  Multiply6.target = 4;

  // MultiplyBlock
  var Multiply7 = new BABYLON.MultiplyBlock("Multiply");
  Multiply7.visibleInInspector = false;
  Multiply7.visibleOnFrame = false;
  Multiply7.target = 4;

  // MultiplyBlock
  var Multiply8 = new BABYLON.MultiplyBlock("Multiply");
  Multiply8.visibleInInspector = false;
  Multiply8.visibleOnFrame = false;
  Multiply8.target = 4;

  // TrigonometryBlock
  var Abs4 = new BABYLON.TrigonometryBlock("Abs");
  Abs4.visibleInInspector = false;
  Abs4.visibleOnFrame = false;
  Abs4.target = 4;
  Abs4.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD4 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD4.visibleInInspector = false;
  SimplexPerlinD4.visibleOnFrame = false;
  SimplexPerlinD4.target = 4;

  // ScaleBlock
  var Scale4 = new BABYLON.ScaleBlock("Scale");
  Scale4.visibleInInspector = false;
  Scale4.visibleOnFrame = false;
  Scale4.target = 4;

  // ScaleBlock
  var Scale5 = new BABYLON.ScaleBlock("Scale");
  Scale5.visibleInInspector = false;
  Scale5.visibleOnFrame = false;
  Scale5.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD5 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD5.visibleInInspector = false;
  SimplexPerlinD5.visibleOnFrame = false;
  SimplexPerlinD5.target = 4;

  // TrigonometryBlock
  var Abs5 = new BABYLON.TrigonometryBlock("Abs");
  Abs5.visibleInInspector = false;
  Abs5.visibleOnFrame = false;
  Abs5.target = 4;
  Abs5.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply9 = new BABYLON.MultiplyBlock("Multiply");
  Multiply9.visibleInInspector = false;
  Multiply9.visibleOnFrame = false;
  Multiply9.target = 4;

  // MultiplyBlock
  var Multiply10 = new BABYLON.MultiplyBlock("Multiply");
  Multiply10.visibleInInspector = false;
  Multiply10.visibleOnFrame = false;
  Multiply10.target = 4;

  // MultiplyBlock
  var Multiply11 = new BABYLON.MultiplyBlock("Multiply");
  Multiply11.visibleInInspector = false;
  Multiply11.visibleOnFrame = false;
  Multiply11.target = 4;

  // MultiplyBlock
  var Multiply12 = new BABYLON.MultiplyBlock("Multiply");
  Multiply12.visibleInInspector = false;
  Multiply12.visibleOnFrame = false;
  Multiply12.target = 4;

  // TrigonometryBlock
  var Abs6 = new BABYLON.TrigonometryBlock("Abs");
  Abs6.visibleInInspector = false;
  Abs6.visibleOnFrame = false;
  Abs6.target = 4;
  Abs6.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD6 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD6.visibleInInspector = false;
  SimplexPerlinD6.visibleOnFrame = false;
  SimplexPerlinD6.target = 4;

  // ScaleBlock
  var Scale6 = new BABYLON.ScaleBlock("Scale");
  Scale6.visibleInInspector = false;
  Scale6.visibleOnFrame = false;
  Scale6.target = 4;

  // ScaleBlock
  var Scale7 = new BABYLON.ScaleBlock("Scale");
  Scale7.visibleInInspector = false;
  Scale7.visibleOnFrame = false;
  Scale7.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD7 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD7.visibleInInspector = false;
  SimplexPerlinD7.visibleOnFrame = false;
  SimplexPerlinD7.target = 4;

  // TrigonometryBlock
  var Abs7 = new BABYLON.TrigonometryBlock("Abs");
  Abs7.visibleInInspector = false;
  Abs7.visibleOnFrame = false;
  Abs7.target = 4;
  Abs7.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply13 = new BABYLON.MultiplyBlock("Multiply");
  Multiply13.visibleInInspector = false;
  Multiply13.visibleOnFrame = false;
  Multiply13.target = 4;

  // MultiplyBlock
  var Multiply14 = new BABYLON.MultiplyBlock("Multiply");
  Multiply14.visibleInInspector = false;
  Multiply14.visibleOnFrame = false;
  Multiply14.target = 4;

  // MultiplyBlock
  var Multiply15 = new BABYLON.MultiplyBlock("Multiply");
  Multiply15.visibleInInspector = false;
  Multiply15.visibleOnFrame = false;
  Multiply15.target = 4;

  // MultiplyBlock
  var Multiply16 = new BABYLON.MultiplyBlock("Multiply");
  Multiply16.visibleInInspector = false;
  Multiply16.visibleOnFrame = false;
  Multiply16.target = 4;

  // TrigonometryBlock
  var Abs8 = new BABYLON.TrigonometryBlock("Abs");
  Abs8.visibleInInspector = false;
  Abs8.visibleOnFrame = false;
  Abs8.target = 4;
  Abs8.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD8 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD8.visibleInInspector = false;
  SimplexPerlinD8.visibleOnFrame = false;
  SimplexPerlinD8.target = 4;

  // ScaleBlock
  var Scale8 = new BABYLON.ScaleBlock("Scale");
  Scale8.visibleInInspector = false;
  Scale8.visibleOnFrame = false;
  Scale8.target = 4;

  // AddBlock
  var Add11 = new BABYLON.AddBlock("Add");
  Add11.visibleInInspector = false;
  Add11.visibleOnFrame = false;
  Add11.target = 4;

  // AddBlock
  var Add12 = new BABYLON.AddBlock("Add");
  Add12.visibleInInspector = false;
  Add12.visibleOnFrame = false;
  Add12.target = 4;

  // AddBlock
  var Add13 = new BABYLON.AddBlock("Add");
  Add13.visibleInInspector = false;
  Add13.visibleOnFrame = false;
  Add13.target = 4;

  // AddBlock
  var Add14 = new BABYLON.AddBlock("Add");
  Add14.visibleInInspector = false;
  Add14.visibleOnFrame = false;
  Add14.target = 4;

  // AddBlock
  var Add15 = new BABYLON.AddBlock("Add");
  Add15.visibleInInspector = false;
  Add15.visibleOnFrame = false;
  Add15.target = 4;

  // AddBlock
  var Add16 = new BABYLON.AddBlock("Add");
  Add16.visibleInInspector = false;
  Add16.visibleOnFrame = false;
  Add16.target = 4;

  // AddBlock
  var Add17 = new BABYLON.AddBlock("Add");
  Add17.visibleInInspector = false;
  Add17.visibleOnFrame = false;
  Add17.target = 4;

  // VectorMergerBlock
  var VectorMerger2 = new BABYLON.VectorMergerBlock("VectorMerger");
  VectorMerger2.visibleInInspector = false;
  VectorMerger2.visibleOnFrame = false;
  VectorMerger2.target = 4;
  VectorMerger2.xSwizzle = "x";
  VectorMerger2.ySwizzle = "y";
  VectorMerger2.zSwizzle = "z";
  VectorMerger2.wSwizzle = "w";

  // RemapBlock
  var Remap3 = new BABYLON.RemapBlock("Remap");
  Remap3.visibleInInspector = false;
  Remap3.visibleOnFrame = false;
  Remap3.target = 4;
  Remap3.sourceRange = new BABYLON.Vector2(0, 0.66);
  Remap3.targetRange = new BABYLON.Vector2(0, 1);

  // OneMinusBlock
  var Oneminus = new BABYLON.OneMinusBlock("One minus");
  Oneminus.visibleInInspector = false;
  Oneminus.visibleOnFrame = false;
  Oneminus.target = 4;

  // GradientBlock
  var Gradient = new BABYLON.GradientBlock("Gradient");
  Gradient.visibleInInspector = false;
  Gradient.visibleOnFrame = false;
  Gradient.target = 4;
  Gradient.colorSteps = [];
  Gradient.colorSteps.push(
    new BABYLON.GradientBlockColorStep(0.21, new BABYLON.Color3(0, 0.4823529411764706, 1))
  );
  Gradient.colorSteps.push(
    new BABYLON.GradientBlockColorStep(
      0.47,
      new BABYLON.Color3(0.41568627450980394, 0.6862745098039216, 0.9725490196078431)
    )
  );
  Gradient.colorSteps.push(
    new BABYLON.GradientBlockColorStep(
      0.75,
      new BABYLON.Color3(0.2784313725490196, 0.9333333333333333, 0.8392156862745098)
    )
  );
  Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(1, new BABYLON.Color3(1, 1, 1)));

  // FragmentOutputBlock
  var fragmentOutput = new BABYLON.FragmentOutputBlock("fragmentOutput");
  fragmentOutput.visibleInInspector = false;
  fragmentOutput.visibleOnFrame = false;
  fragmentOutput.target = 2;
  fragmentOutput.convertToGammaSpace = false;
  fragmentOutput.convertToLinearSpace = false;
  fragmentOutput.useLogarithmicDepth = false;

  // ColorSplitterBlock
  var ColorSplitter = new BABYLON.ColorSplitterBlock("ColorSplitter");
  ColorSplitter.visibleInInspector = false;
  ColorSplitter.visibleOnFrame = false;
  ColorSplitter.target = 4;

  // InputBlock
  var Color = new BABYLON.InputBlock("Color4");
  Color.visibleInInspector = false;
  Color.visibleOnFrame = false;
  Color.target = 1;
  Color.value = new BABYLON.Color4(1, 1, 1, 0.6274509803921569);
  Color.isConstant = false;

  // RemapBlock
  var Remap4 = new BABYLON.RemapBlock("Remap");
  Remap4.visibleInInspector = false;
  Remap4.visibleOnFrame = false;
  Remap4.target = 4;
  Remap4.sourceRange = new BABYLON.Vector2(0, 1);
  Remap4.targetRange = new BABYLON.Vector2(0, 1);

  // SimplexPerlin3DBlock
  var SimplexPerlinD9 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD9.visibleInInspector = false;
  SimplexPerlinD9.visibleOnFrame = false;
  SimplexPerlinD9.target = 4;

  // MultiplyBlock
  var Multiply17 = new BABYLON.MultiplyBlock("Multiply");
  Multiply17.visibleInInspector = false;
  Multiply17.visibleOnFrame = false;
  Multiply17.target = 4;

  // InputBlock
  var amp1 = new BABYLON.InputBlock("amp");
  amp1.visibleInInspector = false;
  amp1.visibleOnFrame = false;
  amp1.target = 1;
  amp1.value = 0;
  amp1.min = 0;
  amp1.max = 1;
  amp1.isBoolean = false;
  amp1.matrixMode = 0;
  amp1.animationType = BABYLON.AnimatedInputBlockTypes.None;
  amp1.isConstant = false;

  // MultiplyBlock
  var Multiply18 = new BABYLON.MultiplyBlock("Multiply");
  Multiply18.visibleInInspector = false;
  Multiply18.visibleOnFrame = false;
  Multiply18.target = 4;

  // MultiplyBlock
  var Multiply19 = new BABYLON.MultiplyBlock("Multiply");
  Multiply19.visibleInInspector = false;
  Multiply19.visibleOnFrame = false;
  Multiply19.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD10 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD10.visibleInInspector = false;
  SimplexPerlinD10.visibleOnFrame = false;
  SimplexPerlinD10.target = 4;

  // ScaleBlock
  var Scale9 = new BABYLON.ScaleBlock("Scale");
  Scale9.visibleInInspector = false;
  Scale9.visibleOnFrame = false;
  Scale9.target = 4;

  // InputBlock
  var Structure1 = new BABYLON.InputBlock("Structure");
  Structure1.visibleInInspector = false;
  Structure1.visibleOnFrame = false;
  Structure1.target = 1;
  Structure1.value = 0;
  Structure1.min = 0;
  Structure1.max = 2;
  Structure1.isBoolean = false;
  Structure1.matrixMode = 0;
  Structure1.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Structure1.isConstant = false;

  // ScaleBlock
  var Scale10 = new BABYLON.ScaleBlock("Scale");
  Scale10.visibleInInspector = false;
  Scale10.visibleOnFrame = false;
  Scale10.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD11 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD11.visibleInInspector = false;
  SimplexPerlinD11.visibleOnFrame = false;
  SimplexPerlinD11.target = 4;

  // MultiplyBlock
  var Multiply20 = new BABYLON.MultiplyBlock("Multiply");
  Multiply20.visibleInInspector = false;
  Multiply20.visibleOnFrame = false;
  Multiply20.target = 4;

  // MultiplyBlock
  var Multiply21 = new BABYLON.MultiplyBlock("Multiply");
  Multiply21.visibleInInspector = false;
  Multiply21.visibleOnFrame = false;
  Multiply21.target = 4;

  // MultiplyBlock
  var Multiply22 = new BABYLON.MultiplyBlock("Multiply");
  Multiply22.visibleInInspector = false;
  Multiply22.visibleOnFrame = false;
  Multiply22.target = 4;

  // MultiplyBlock
  var Multiply23 = new BABYLON.MultiplyBlock("Multiply");
  Multiply23.visibleInInspector = false;
  Multiply23.visibleOnFrame = false;
  Multiply23.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD12 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD12.visibleInInspector = false;
  SimplexPerlinD12.visibleOnFrame = false;
  SimplexPerlinD12.target = 4;

  // ScaleBlock
  var Scale11 = new BABYLON.ScaleBlock("Scale");
  Scale11.visibleInInspector = false;
  Scale11.visibleOnFrame = false;
  Scale11.target = 4;

  // ScaleBlock
  var Scale12 = new BABYLON.ScaleBlock("Scale");
  Scale12.visibleInInspector = false;
  Scale12.visibleOnFrame = false;
  Scale12.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD13 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD13.visibleInInspector = false;
  SimplexPerlinD13.visibleOnFrame = false;
  SimplexPerlinD13.target = 4;

  // MultiplyBlock
  var Multiply24 = new BABYLON.MultiplyBlock("Multiply");
  Multiply24.visibleInInspector = false;
  Multiply24.visibleOnFrame = false;
  Multiply24.target = 4;

  // MultiplyBlock
  var Multiply25 = new BABYLON.MultiplyBlock("Multiply");
  Multiply25.visibleInInspector = false;
  Multiply25.visibleOnFrame = false;
  Multiply25.target = 4;

  // MultiplyBlock
  var Multiply26 = new BABYLON.MultiplyBlock("Multiply");
  Multiply26.visibleInInspector = false;
  Multiply26.visibleOnFrame = false;
  Multiply26.target = 4;

  // MultiplyBlock
  var Multiply27 = new BABYLON.MultiplyBlock("Multiply");
  Multiply27.visibleInInspector = false;
  Multiply27.visibleOnFrame = false;
  Multiply27.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD14 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD14.visibleInInspector = false;
  SimplexPerlinD14.visibleOnFrame = false;
  SimplexPerlinD14.target = 4;

  // ScaleBlock
  var Scale13 = new BABYLON.ScaleBlock("Scale");
  Scale13.visibleInInspector = false;
  Scale13.visibleOnFrame = false;
  Scale13.target = 4;

  // ScaleBlock
  var Scale14 = new BABYLON.ScaleBlock("Scale");
  Scale14.visibleInInspector = false;
  Scale14.visibleOnFrame = false;
  Scale14.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD15 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD15.visibleInInspector = false;
  SimplexPerlinD15.visibleOnFrame = false;
  SimplexPerlinD15.target = 4;

  // MultiplyBlock
  var Multiply28 = new BABYLON.MultiplyBlock("Multiply");
  Multiply28.visibleInInspector = false;
  Multiply28.visibleOnFrame = false;
  Multiply28.target = 4;

  // MultiplyBlock
  var Multiply29 = new BABYLON.MultiplyBlock("Multiply");
  Multiply29.visibleInInspector = false;
  Multiply29.visibleOnFrame = false;
  Multiply29.target = 4;

  // MultiplyBlock
  var Multiply30 = new BABYLON.MultiplyBlock("Multiply");
  Multiply30.visibleInInspector = false;
  Multiply30.visibleOnFrame = false;
  Multiply30.target = 4;

  // MultiplyBlock
  var Multiply31 = new BABYLON.MultiplyBlock("Multiply");
  Multiply31.visibleInInspector = false;
  Multiply31.visibleOnFrame = false;
  Multiply31.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD16 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD16.visibleInInspector = false;
  SimplexPerlinD16.visibleOnFrame = false;
  SimplexPerlinD16.target = 4;

  // ScaleBlock
  var Scale15 = new BABYLON.ScaleBlock("Scale");
  Scale15.visibleInInspector = false;
  Scale15.visibleOnFrame = false;
  Scale15.target = 4;

  // AddBlock
  var Add18 = new BABYLON.AddBlock("Add");
  Add18.visibleInInspector = false;
  Add18.visibleOnFrame = false;
  Add18.target = 4;

  // AddBlock
  var Add19 = new BABYLON.AddBlock("Add");
  Add19.visibleInInspector = false;
  Add19.visibleOnFrame = false;
  Add19.target = 4;

  // AddBlock
  var Add20 = new BABYLON.AddBlock("Add");
  Add20.visibleInInspector = false;
  Add20.visibleOnFrame = false;
  Add20.target = 4;

  // AddBlock
  var Add21 = new BABYLON.AddBlock("Add");
  Add21.visibleInInspector = false;
  Add21.visibleOnFrame = false;
  Add21.target = 4;

  // AddBlock
  var Add22 = new BABYLON.AddBlock("Add");
  Add22.visibleInInspector = false;
  Add22.visibleOnFrame = false;
  Add22.target = 4;

  // AddBlock
  var Add23 = new BABYLON.AddBlock("Add");
  Add23.visibleInInspector = false;
  Add23.visibleOnFrame = false;
  Add23.target = 4;

  // AddBlock
  var Add24 = new BABYLON.AddBlock("Add");
  Add24.visibleInInspector = false;
  Add24.visibleOnFrame = false;
  Add24.target = 4;

  // RemapBlock
  var Remap5 = new BABYLON.RemapBlock("Remap");
  Remap5.visibleInInspector = false;
  Remap5.visibleOnFrame = false;
  Remap5.target = 4;
  Remap5.sourceRange = new BABYLON.Vector2(-0.5, 0.5);
  Remap5.targetRange = new BABYLON.Vector2(0, 1);

  // ScaleBlock
  var Scale16 = new BABYLON.ScaleBlock("Scale");
  Scale16.visibleInInspector = false;
  Scale16.visibleOnFrame = false;
  Scale16.target = 4;

  // InputBlock
  var Structure2 = new BABYLON.InputBlock("Structure");
  Structure2.visibleInInspector = false;
  Structure2.visibleOnFrame = false;
  Structure2.target = 1;
  Structure2.value = 2;
  Structure2.min = 0;
  Structure2.max = 2;
  Structure2.isBoolean = false;
  Structure2.matrixMode = 0;
  Structure2.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Structure2.isConstant = false;

  // ScaleBlock
  var Scale17 = new BABYLON.ScaleBlock("Scale");
  Scale17.visibleInInspector = false;
  Scale17.visibleOnFrame = false;
  Scale17.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD17 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD17.visibleInInspector = false;
  SimplexPerlinD17.visibleOnFrame = false;
  SimplexPerlinD17.target = 4;

  // TrigonometryBlock
  var Abs9 = new BABYLON.TrigonometryBlock("Abs");
  Abs9.visibleInInspector = false;
  Abs9.visibleOnFrame = false;
  Abs9.target = 4;
  Abs9.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply32 = new BABYLON.MultiplyBlock("Multiply");
  Multiply32.visibleInInspector = false;
  Multiply32.visibleOnFrame = false;
  Multiply32.target = 4;

  // MultiplyBlock
  var Multiply33 = new BABYLON.MultiplyBlock("Multiply");
  Multiply33.visibleInInspector = false;
  Multiply33.visibleOnFrame = false;
  Multiply33.target = 4;

  // MultiplyBlock
  var Multiply34 = new BABYLON.MultiplyBlock("Multiply");
  Multiply34.visibleInInspector = false;
  Multiply34.visibleOnFrame = false;
  Multiply34.target = 4;

  // InputBlock
  var amp2 = new BABYLON.InputBlock("amp");
  amp2.visibleInInspector = false;
  amp2.visibleOnFrame = false;
  amp2.target = 1;
  amp2.value = 0.48;
  amp2.min = 0;
  amp2.max = 1;
  amp2.isBoolean = false;
  amp2.matrixMode = 0;
  amp2.animationType = BABYLON.AnimatedInputBlockTypes.None;
  amp2.isConstant = false;

  // MultiplyBlock
  var Multiply35 = new BABYLON.MultiplyBlock("Multiply");
  Multiply35.visibleInInspector = false;
  Multiply35.visibleOnFrame = false;
  Multiply35.target = 4;

  // MultiplyBlock
  var Multiply36 = new BABYLON.MultiplyBlock("Multiply");
  Multiply36.visibleInInspector = false;
  Multiply36.visibleOnFrame = false;
  Multiply36.target = 4;

  // TrigonometryBlock
  var Abs10 = new BABYLON.TrigonometryBlock("Abs");
  Abs10.visibleInInspector = false;
  Abs10.visibleOnFrame = false;
  Abs10.target = 4;
  Abs10.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD18 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD18.visibleInInspector = false;
  SimplexPerlinD18.visibleOnFrame = false;
  SimplexPerlinD18.target = 4;

  // ScaleBlock
  var Scale18 = new BABYLON.ScaleBlock("Scale");
  Scale18.visibleInInspector = false;
  Scale18.visibleOnFrame = false;
  Scale18.target = 4;

  // ScaleBlock
  var Scale19 = new BABYLON.ScaleBlock("Scale");
  Scale19.visibleInInspector = false;
  Scale19.visibleOnFrame = false;
  Scale19.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD19 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD19.visibleInInspector = false;
  SimplexPerlinD19.visibleOnFrame = false;
  SimplexPerlinD19.target = 4;

  // TrigonometryBlock
  var Abs11 = new BABYLON.TrigonometryBlock("Abs");
  Abs11.visibleInInspector = false;
  Abs11.visibleOnFrame = false;
  Abs11.target = 4;
  Abs11.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply37 = new BABYLON.MultiplyBlock("Multiply");
  Multiply37.visibleInInspector = false;
  Multiply37.visibleOnFrame = false;
  Multiply37.target = 4;

  // MultiplyBlock
  var Multiply38 = new BABYLON.MultiplyBlock("Multiply");
  Multiply38.visibleInInspector = false;
  Multiply38.visibleOnFrame = false;
  Multiply38.target = 4;

  // MultiplyBlock
  var Multiply39 = new BABYLON.MultiplyBlock("Multiply");
  Multiply39.visibleInInspector = false;
  Multiply39.visibleOnFrame = false;
  Multiply39.target = 4;

  // MultiplyBlock
  var Multiply40 = new BABYLON.MultiplyBlock("Multiply");
  Multiply40.visibleInInspector = false;
  Multiply40.visibleOnFrame = false;
  Multiply40.target = 4;

  // TrigonometryBlock
  var Abs12 = new BABYLON.TrigonometryBlock("Abs");
  Abs12.visibleInInspector = false;
  Abs12.visibleOnFrame = false;
  Abs12.target = 4;
  Abs12.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD20 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD20.visibleInInspector = false;
  SimplexPerlinD20.visibleOnFrame = false;
  SimplexPerlinD20.target = 4;

  // ScaleBlock
  var Scale20 = new BABYLON.ScaleBlock("Scale");
  Scale20.visibleInInspector = false;
  Scale20.visibleOnFrame = false;
  Scale20.target = 4;

  // ScaleBlock
  var Scale21 = new BABYLON.ScaleBlock("Scale");
  Scale21.visibleInInspector = false;
  Scale21.visibleOnFrame = false;
  Scale21.target = 4;

  // SimplexPerlin3DBlock
  var SimplexPerlinD21 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD21.visibleInInspector = false;
  SimplexPerlinD21.visibleOnFrame = false;
  SimplexPerlinD21.target = 4;

  // TrigonometryBlock
  var Abs13 = new BABYLON.TrigonometryBlock("Abs");
  Abs13.visibleInInspector = false;
  Abs13.visibleOnFrame = false;
  Abs13.target = 4;
  Abs13.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // MultiplyBlock
  var Multiply41 = new BABYLON.MultiplyBlock("Multiply");
  Multiply41.visibleInInspector = false;
  Multiply41.visibleOnFrame = false;
  Multiply41.target = 4;

  // MultiplyBlock
  var Multiply42 = new BABYLON.MultiplyBlock("Multiply");
  Multiply42.visibleInInspector = false;
  Multiply42.visibleOnFrame = false;
  Multiply42.target = 4;

  // MultiplyBlock
  var Multiply43 = new BABYLON.MultiplyBlock("Multiply");
  Multiply43.visibleInInspector = false;
  Multiply43.visibleOnFrame = false;
  Multiply43.target = 4;

  // MultiplyBlock
  var Multiply44 = new BABYLON.MultiplyBlock("Multiply");
  Multiply44.visibleInInspector = false;
  Multiply44.visibleOnFrame = false;
  Multiply44.target = 4;

  // TrigonometryBlock
  var Abs14 = new BABYLON.TrigonometryBlock("Abs");
  Abs14.visibleInInspector = false;
  Abs14.visibleOnFrame = false;
  Abs14.target = 4;
  Abs14.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD22 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD22.visibleInInspector = false;
  SimplexPerlinD22.visibleOnFrame = false;
  SimplexPerlinD22.target = 4;

  // ScaleBlock
  var Scale22 = new BABYLON.ScaleBlock("Scale");
  Scale22.visibleInInspector = false;
  Scale22.visibleOnFrame = false;
  Scale22.target = 4;

  // MultiplyBlock
  var Multiply45 = new BABYLON.MultiplyBlock("Multiply");
  Multiply45.visibleInInspector = false;
  Multiply45.visibleOnFrame = false;
  Multiply45.target = 4;

  // TrigonometryBlock
  var Abs15 = new BABYLON.TrigonometryBlock("Abs");
  Abs15.visibleInInspector = false;
  Abs15.visibleOnFrame = false;
  Abs15.target = 4;
  Abs15.operation = BABYLON.TrigonometryBlockOperations.Abs;

  // SimplexPerlin3DBlock
  var SimplexPerlinD23 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
  SimplexPerlinD23.visibleInInspector = false;
  SimplexPerlinD23.visibleOnFrame = false;
  SimplexPerlinD23.target = 4;
  const MORPH = 0;
  //   const MORPH = 0.31;
  // InputBlock
  var InputBlock_72 = new BABYLON.InputBlock("");
  InputBlock_72.visibleInInspector = false;
  InputBlock_72.visibleOnFrame = false;
  InputBlock_72.target = 1;
  InputBlock_72.value = MORPH;
  InputBlock_72.min = 0;
  InputBlock_72.max = 1;
  InputBlock_72.isBoolean = false;
  InputBlock_72.matrixMode = 0;
  InputBlock_72.animationType = BABYLON.AnimatedInputBlockTypes.None;
  InputBlock_72.isConstant = false;

  // TransformBlock
  var worldPos = new BABYLON.TransformBlock("worldPos");
  worldPos.visibleInInspector = false;
  worldPos.visibleOnFrame = false;
  worldPos.target = 1;
  worldPos.complementZ = 0;
  worldPos.complementW = 1;

  // InputBlock
  var world = new BABYLON.InputBlock("world");
  world.visibleInInspector = false;
  world.visibleOnFrame = false;
  world.target = 1;
  world.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

  // TransformBlock
  var worldPosviewProjectionTransform = new BABYLON.TransformBlock("worldPos * viewProjectionTransform");
  worldPosviewProjectionTransform.visibleInInspector = false;
  worldPosviewProjectionTransform.visibleOnFrame = false;
  worldPosviewProjectionTransform.target = 1;
  worldPosviewProjectionTransform.complementZ = 0;
  worldPosviewProjectionTransform.complementW = 1;

  // InputBlock
  var viewProjection = new BABYLON.InputBlock("viewProjection");
  viewProjection.visibleInInspector = false;
  viewProjection.visibleOnFrame = false;
  viewProjection.target = 1;
  viewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

  // VertexOutputBlock
  var vertexOutput = new BABYLON.VertexOutputBlock("vertexOutput");
  vertexOutput.visibleInInspector = false;
  vertexOutput.visibleOnFrame = false;
  vertexOutput.target = 1;

  // Connections
  position.output.connectTo(Add.left);
  normal.output.connectTo(Multiply.left);
  position1.output.connectTo(VectorSplitter.xyzIn);
  VectorSplitter.x.connectTo(Add8.left);
  Time.output.connectTo(Scale1.input);
  InputBlock_32.output.connectTo(Scale1.factor);
  Scale1.output.connectTo(Add8.right);
  Add8.output.connectTo(VectorMerger1.x);
  VectorSplitter.y.connectTo(Add9.left);
  Scale1.output.connectTo(Add9.right);
  Add9.output.connectTo(VectorMerger1.y);
  VectorSplitter.z.connectTo(Add10.left);
  Scale1.output.connectTo(Add10.right);
  Add10.output.connectTo(VectorMerger1.z);
  VectorMerger1.xyz.connectTo(Remap1.input);
  Remap1.output.connectTo(SimplexPerlinD.seed);
  SimplexPerlinD.output.connectTo(Abs.input);
  Abs.output.connectTo(Multiply1.left);
  amp2.output.connectTo(Multiply1.right);
  Multiply1.output.connectTo(Add7.left);
  Remap1.output.connectTo(Scale16.input);
  Structure2.output.connectTo(Scale16.factor);
  Scale16.output.connectTo(SimplexPerlinD23.seed);
  SimplexPerlinD23.output.connectTo(Abs15.input);
  Abs15.output.connectTo(Multiply45.left);
  amp2.output.connectTo(Multiply34.left);
  amp2.output.connectTo(Multiply34.right);
  Multiply34.output.connectTo(Multiply45.right);
  Multiply45.output.connectTo(Add7.right);
  Add7.output.connectTo(Add6.left);
  Scale16.output.connectTo(Scale17.input);
  Structure2.output.connectTo(Scale17.factor);
  Scale17.output.connectTo(SimplexPerlinD17.seed);
  SimplexPerlinD17.output.connectTo(Abs9.input);
  Abs9.output.connectTo(Multiply32.left);
  Multiply34.output.connectTo(Multiply33.left);
  amp2.output.connectTo(Multiply33.right);
  Multiply33.output.connectTo(Multiply32.right);
  Multiply32.output.connectTo(Add6.right);
  Add6.output.connectTo(Add5.left);
  Scale17.output.connectTo(Scale18.input);
  Structure2.output.connectTo(Scale18.factor);
  Scale18.output.connectTo(SimplexPerlinD18.seed);
  SimplexPerlinD18.output.connectTo(Abs10.input);
  Abs10.output.connectTo(Multiply36.left);
  Multiply33.output.connectTo(Multiply35.left);
  amp2.output.connectTo(Multiply35.right);
  Multiply35.output.connectTo(Multiply36.right);
  Multiply36.output.connectTo(Add5.right);
  Add5.output.connectTo(Add4.left);
  Scale18.output.connectTo(Scale19.input);
  Structure2.output.connectTo(Scale19.factor);
  Scale19.output.connectTo(SimplexPerlinD19.seed);
  SimplexPerlinD19.output.connectTo(Abs11.input);
  Abs11.output.connectTo(Multiply37.left);
  Multiply35.output.connectTo(Multiply38.left);
  amp2.output.connectTo(Multiply38.right);
  Multiply38.output.connectTo(Multiply37.right);
  Multiply37.output.connectTo(Add4.right);
  Add4.output.connectTo(Add3.left);
  Scale19.output.connectTo(Scale20.input);
  Structure2.output.connectTo(Scale20.factor);
  Scale20.output.connectTo(SimplexPerlinD20.seed);
  SimplexPerlinD20.output.connectTo(Abs12.input);
  Abs12.output.connectTo(Multiply40.left);
  Multiply38.output.connectTo(Multiply39.left);
  amp2.output.connectTo(Multiply39.right);
  Multiply39.output.connectTo(Multiply40.right);
  Multiply40.output.connectTo(Add3.right);
  Add3.output.connectTo(Add2.left);
  Scale20.output.connectTo(Scale21.input);
  Structure2.output.connectTo(Scale21.factor);
  Scale21.output.connectTo(SimplexPerlinD21.seed);
  SimplexPerlinD21.output.connectTo(Abs13.input);
  Abs13.output.connectTo(Multiply41.left);
  Multiply39.output.connectTo(Multiply42.left);
  amp2.output.connectTo(Multiply42.right);
  Multiply42.output.connectTo(Multiply41.right);
  Multiply41.output.connectTo(Add2.right);
  Add2.output.connectTo(Add1.left);
  Scale21.output.connectTo(Scale22.input);
  Structure2.output.connectTo(Scale22.factor);
  Scale22.output.connectTo(SimplexPerlinD22.seed);
  SimplexPerlinD22.output.connectTo(Abs14.input);
  Abs14.output.connectTo(Multiply44.left);
  Multiply42.output.connectTo(Multiply43.left);
  amp2.output.connectTo(Multiply43.right);
  Multiply43.output.connectTo(Multiply44.right);
  Multiply44.output.connectTo(Add1.right);
  Add1.output.connectTo(VectorMerger.x);
  Add1.output.connectTo(VectorMerger.y);
  Add1.output.connectTo(VectorMerger.z);
  VectorMerger.xyz.connectTo(Remap.input);
  Remap.output.connectTo(Multiply.right);
  Multiply.output.connectTo(Scale.input);
  InputBlock_72.output.connectTo(Scale.factor);
  Scale.output.connectTo(Add.right);
  Add.output.connectTo(worldPos.vector);
  world.output.connectTo(worldPos.transform);
  worldPos.output.connectTo(worldPosviewProjectionTransform.vector);
  viewProjection.output.connectTo(worldPosviewProjectionTransform.transform);
  worldPosviewProjectionTransform.output.connectTo(vertexOutput.vector);
  VectorMerger1.xyz.connectTo(Remap2.input);
  Remap2.output.connectTo(SimplexPerlinD1.seed);
  SimplexPerlinD1.output.connectTo(Abs1.input);
  Abs1.output.connectTo(Multiply2.left);
  amp.output.connectTo(Multiply2.right);
  Multiply2.output.connectTo(Add17.left);
  Remap2.output.connectTo(Scale2.input);
  Structure.output.connectTo(Scale2.factor);
  Scale2.output.connectTo(SimplexPerlinD2.seed);
  SimplexPerlinD2.output.connectTo(Abs2.input);
  Abs2.output.connectTo(Multiply4.left);
  amp.output.connectTo(Multiply3.left);
  amp.output.connectTo(Multiply3.right);
  Multiply3.output.connectTo(Multiply4.right);
  Multiply4.output.connectTo(Add17.right);
  Add17.output.connectTo(Add16.left);
  Scale2.output.connectTo(Scale3.input);
  Structure.output.connectTo(Scale3.factor);
  Scale3.output.connectTo(SimplexPerlinD3.seed);
  SimplexPerlinD3.output.connectTo(Abs3.input);
  Abs3.output.connectTo(Multiply5.left);
  Multiply3.output.connectTo(Multiply6.left);
  amp.output.connectTo(Multiply6.right);
  Multiply6.output.connectTo(Multiply5.right);
  Multiply5.output.connectTo(Add16.right);
  Add16.output.connectTo(Add15.left);
  Scale3.output.connectTo(Scale4.input);
  Structure.output.connectTo(Scale4.factor);
  Scale4.output.connectTo(SimplexPerlinD4.seed);
  SimplexPerlinD4.output.connectTo(Abs4.input);
  Abs4.output.connectTo(Multiply8.left);
  Multiply6.output.connectTo(Multiply7.left);
  amp.output.connectTo(Multiply7.right);
  Multiply7.output.connectTo(Multiply8.right);
  Multiply8.output.connectTo(Add15.right);
  Add15.output.connectTo(Add14.left);
  Scale4.output.connectTo(Scale5.input);
  Structure.output.connectTo(Scale5.factor);
  Scale5.output.connectTo(SimplexPerlinD5.seed);
  SimplexPerlinD5.output.connectTo(Abs5.input);
  Abs5.output.connectTo(Multiply9.left);
  Multiply7.output.connectTo(Multiply10.left);
  amp.output.connectTo(Multiply10.right);
  Multiply10.output.connectTo(Multiply9.right);
  Multiply9.output.connectTo(Add14.right);
  Add14.output.connectTo(Add13.left);
  Scale5.output.connectTo(Scale6.input);
  Structure.output.connectTo(Scale6.factor);
  Scale6.output.connectTo(SimplexPerlinD6.seed);
  SimplexPerlinD6.output.connectTo(Abs6.input);
  Abs6.output.connectTo(Multiply12.left);
  Multiply10.output.connectTo(Multiply11.left);
  amp.output.connectTo(Multiply11.right);
  Multiply11.output.connectTo(Multiply12.right);
  Multiply12.output.connectTo(Add13.right);
  Add13.output.connectTo(Add12.left);
  Scale6.output.connectTo(Scale7.input);
  Structure.output.connectTo(Scale7.factor);
  Scale7.output.connectTo(SimplexPerlinD7.seed);
  SimplexPerlinD7.output.connectTo(Abs7.input);
  Abs7.output.connectTo(Multiply13.left);
  Multiply11.output.connectTo(Multiply14.left);
  amp.output.connectTo(Multiply14.right);
  Multiply14.output.connectTo(Multiply13.right);
  Multiply13.output.connectTo(Add12.right);
  Add12.output.connectTo(Add11.left);
  Scale7.output.connectTo(Scale8.input);
  Structure.output.connectTo(Scale8.factor);
  Scale8.output.connectTo(SimplexPerlinD8.seed);
  SimplexPerlinD8.output.connectTo(Abs8.input);
  Abs8.output.connectTo(Multiply16.left);
  Multiply14.output.connectTo(Multiply15.left);
  amp.output.connectTo(Multiply15.right);
  Multiply15.output.connectTo(Multiply16.right);
  Multiply16.output.connectTo(Add11.right);
  Add11.output.connectTo(VectorMerger2.x);
  Add11.output.connectTo(VectorMerger2.y);
  Add11.output.connectTo(VectorMerger2.z);
  VectorMerger2.xyz.connectTo(Remap3.input);
  Remap3.output.connectTo(Oneminus.input);
  Oneminus.output.connectTo(Gradient.gradient);
  Gradient.output.connectTo(fragmentOutput.rgb);
  Color.output.connectTo(ColorSplitter.rgba);
  ColorSplitter.a.connectTo(fragmentOutput.a);

  // Output nodes
  nodeMaterial.addOutputNode(vertexOutput);
  nodeMaterial.addOutputNode(fragmentOutput);
  nodeMaterial.build();

  return nodeMaterial;
};

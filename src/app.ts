import {
  Color3,
  Engine,
  FreeCamera,
  HemisphericLight,
  LinesMesh,
  Material,
  Mesh,
  MeshBuilder,
  PhysicsImpostor,
  Scene,
  StandardMaterial,
  Vector2,
  Vector3,
  VertexBuffer,
} from "@babylonjs/core";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";

const createMaterial = (scene, color) => {
  const material = new StandardMaterial(scene);
  material.alpha = 1;
  material.diffuseColor = color;
  return material;
};

const createSphere = (scene, position) => {
  const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 0.1 }, scene);
  sphere.position = position;
};

const vector3ToVertex = (vector: Vector3) => {
  return [vector.x, vector.y, vector.z];
};

const vertexUpdateLastPoint = (vertex, point) => {
  for (let i = vertex.length - 3, j = 0; i < vertex.length; i++, j++) {
    vertex[i] = point[j];
  }
  return vertex;
};

const updateIndices = (indices) => {
  const i = indices[indices.length - 1];
  return [...indices, i, i + 1];
};

const vertexAddPoint = (vertex, point) => {
  return [...vertex, ...point];
};

class App {
  constructor() {
    // create the canvas html element and attach it to the webpage
    var canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.id = "gameCanvas";
    document.body.appendChild(canvas);

    // initialize babylon scene and engine
    var engine = new Engine(canvas, true);
    var scene = new Scene(engine);

    scene.gravity = new Vector3(0, 0, 0.15);
    scene.gravity = Vector3.Zero();

    var light1: HemisphericLight = new HemisphericLight(
      "light1",
      new Vector3(3, 1, -4),
      scene
    );
    const camera = new FreeCamera("camera", new Vector3(0, 0, -10), scene);
    camera.setTarget(Vector3.Zero());

    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
    sphere.position = new Vector3(0, 0, 0);

    // scene.registerBeforeRender(() => {
    //   sphere.moveWithCollisions(new Vector3(0, -0.01, 0));
    // });

    // const collision = MeshBuilder.CreateSphere(
    //   "sphere",
    //   { diameter: 3 },
    //   scene
    // );
    // collision.position = new Vector3(2, 0, 0);

    const plain = MeshBuilder.CreatePlane(
      "plain",
      { height: 150, width: 150 },
      scene
    );
    plain.position = new Vector3(0, 0, 2);
    plain.material = createMaterial(scene, new Color3(0, 0, 1));

    const lines = MeshBuilder.CreateLines("test", {
      points: [
        new Vector3(1, 0, 0),
        new Vector3(2, 0, 0),
        new Vector3(2, 1, 0),
        new Vector3(3, 0, 0),
      ],
      updatable: true,
    });
    // const lines = MeshBuilder.CreateLines(
    //   "lines",
    //   { points: [new Vector3(0, 0, 0)] },
    //   scene
    // );

    let isDragging = false;
    let timer = null;
    let currentMousePosition = Vector3.Zero();
    let currentLines: LinesMesh = null;

    canvas.addEventListener("pointerdown", function (evt) {
      let pickResult = scene.pick(evt.clientX, evt.clientY, (mesh) => {
        return mesh === plain;
      });
      if (pickResult.hit) {
        let target = pickResult.pickedPoint;
        target.z = 0;
        // sphere.moveWithCollisions(target);
        sphere.position = target;

        // points.push(currentMousePosition.clone());

        // console.log(lines.getIndices());
        // lines.setIndices([...lines.getIndices(), 3, 4]);
        // console.log(vector3ToVertex(target));
        // const test = vertexAddPoint(
        //   lines.getVerticesData(VertexBuffer.PositionKind),
        //   vector3ToVertex(target)
        // );
        // console.log(
        //   vertexAddPoint(
        //     lines.getVerticesData(VertexBuffer.PositionKind),
        //     vector3ToVertex(target)
        //   )
        // );
        // lines.setVerticesData(
        //   VertexBuffer.PositionKind,
        //   [1, 0, 0, 2, 0, 0, 2, 1, 0, 3, 1, 0, 5, 5, 0],
        //   true
        // );
        // lines.setVerticesData(VertexBuffer.PositionKind, test);

        // lines.setVerticesData(
        //   VertexBuffer.PositionKind,
        //   vertexUpdateLastPoint(
        //     lines.getVerticesData(VertexBuffer.PositionKind),
        //     vector3ToVertex(target)
        //   )
        // );
        // console.log(lines.getVerticesData(VertexBuffer.PositionKind));
        // lines.updateVerticesData(VertexBuffer.PositionKind, []);

        isDragging = true;

        timer = setInterval(function () {
          //   createSphere(scene, currentMousePosition);
          lines.setIndices(updateIndices(lines.getIndices()));
          console.log(lines.getIndices());
          lines.setVerticesData(
            VertexBuffer.PositionKind,
            vertexAddPoint(
              lines.getVerticesData(VertexBuffer.PositionKind),
              vector3ToVertex(currentMousePosition)
            )
          );
          //   lines.setVerticesData(VertexBuffer.PositionKind, points);
        }, 100);
      }
    });

    canvas.addEventListener("pointerup", function (evt) {
      isDragging = false;
      currentLines = null;
      clearInterval(timer);
    });

    canvas.addEventListener("pointermove", function (evt) {
      if (isDragging) {
        let pickResult = scene.pick(evt.clientX, evt.clientY, (mesh) => {
          return mesh === plain;
        });
        let target = pickResult.pickedPoint;
        target.z = 0;
        sphere.position;

        lines.setVerticesData(
          VertexBuffer.PositionKind,
          vertexUpdateLastPoint(
            lines.getVerticesData(VertexBuffer.PositionKind),
            vector3ToVertex(target)
          )
        );

        // sphere.moveWithCollisions(target);
        sphere.position = target;
        currentMousePosition = target;
        // camera.position.x = target.x;
        // camera.position.y = target.y;
      }
    });

    engine.runRenderLoop(function () {
      scene.render();
    });
  }
}
new App();

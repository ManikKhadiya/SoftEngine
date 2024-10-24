
---

### `docs/softEngineJs.md`

```markdown
# softEngine.js Documentation

The `softEngine.js` file provides the core functionalities of the custom rendering engine. It contains the definitions for the Camera, Device, and Mesh classes, along with their associated methods for managing 3D rendering.

## Overview

### Classes

1. **Camera**
   - Responsible for the position and orientation of the camera in 3D space.
   - Contains properties like `Position` and `Target` to determine where the camera is looking.

2. **Device**
   - Manages the rendering context and handles operations such as clearing the canvas and presenting rendered frames.
   - Contains methods for rendering objects from the scene.

3. **Mesh**
   - Represents a 3D object, defined by its vertices and faces.
   - Contains properties for rotation and methods for transforming the mesh.

## Core Methods and Properties

### Camera Class

- **Properties**
  - `Position`: A vector representing the camera's position.
  - `Target`: A vector representing the point in 3D space the camera is looking at.

### Device Class

- **Methods**
  - `clear()`: Clears the canvas for new rendering.
  - `render(camera, meshes)`: Renders all meshes using the provided camera.
  - `present()`: Displays the rendered frame on the canvas.

### Mesh Class

- **Properties**
  - `Vertices`: An array of vector3 objects defining the mesh's corners.
  - `Faces`: An array of face definitions that specify which vertices form each face of the mesh.
  - `Rotation`: A vector representing the rotation of the mesh in 3D space.

## Example Usage

Here is an example of how to create a new mesh and set its properties:

```javascript
let mesh = new SoftEngine.Mesh("MyMesh", vertexCount, faceCount);
mesh.Vertices[0] = new BABYLON.Vector3(x, y, z);
mesh.Faces[0] = { A: 0, B: 1, C: 2 };

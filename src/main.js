// Polyfill for requestAnimationFrame to ensure compatibility across different browsers
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || // Use standard requestAnimationFrame if available
          window.webkitRequestAnimationFrame || //for Safari
          window.mozRequestAnimationFrame || //for Firefox
          function (callback) { //fall back for browsers that do not support it
              window.setTimeout(callback, 1000 / 60); //use setTimeout to mimic 60fps
          };
      })();
 
// declare global variables
 var canvas; //html canvas for rendering
 var device; //instance of softEngine.device class for rendering
 var mesh; /// current mesh to be rendered
 var meshes = []; //array to hold meshes
 var camera;
 document.addEventListener("DOMContentLoaded", init, false);
 function init() {
     canvas = document.getElementById("frontBuffer");
     camera = new SoftEngine.Camera();
     device = new SoftEngine.Device(canvas);
     mesh = new SoftEngine.Mesh("Cube", 8, 12);
     meshes.push(mesh);
     mesh.Vertices[0] = new BABYLON.Vector3(-1, 1, 1);
     mesh.Vertices[1] = new BABYLON.Vector3(1, 1, 1);
     mesh.Vertices[2] = new BABYLON.Vector3(-1, -1, 1);
     mesh.Vertices[3] = new BABYLON.Vector3(1, -1, 1);
     mesh.Vertices[4] = new BABYLON.Vector3(-1, 1, -1);
     mesh.Vertices[5] = new BABYLON.Vector3(1, 1, -1);
     mesh.Vertices[6] = new BABYLON.Vector3(1, -1, -1);
     mesh.Vertices[7] = new BABYLON.Vector3(-1, -1, -1);
     mesh.Faces[0] = {
         A: 0,
         B: 1,
         C: 2
     };
     mesh.Faces[1] = {
         A: 1,
         B: 2,
         C: 3
     };
     mesh.Faces[2] = {
         A: 1,
         B: 3,
         C: 6
     };
     mesh.Faces[3] = {
         A: 1,
         B: 5,
         C: 6
     };
     mesh.Faces[4] = {
         A: 0,
         B: 1,
         C: 4
     };
     mesh.Faces[5] = {
         A: 1,
         B: 4,
         C: 5
     };
     mesh.Faces[6] = {
         A: 2,
         B: 3,
         C: 7
     };
     mesh.Faces[7] = {
         A: 3,
         B: 6,
         C: 7
     };
     mesh.Faces[8] = {
         A: 0,
         B: 2,
         C: 7
     };
     mesh.Faces[9] = {
         A: 0,
         B: 4,
         C: 7
     };
     mesh.Faces[10] = {
         A: 4,
         B: 5,
         C: 6
     };
     mesh.Faces[11] = {
         A: 4,
         B: 6,
         C: 7
     };
     camera.Position = new BABYLON.Vector3(0, 0, 10);
     camera.Target = new BABYLON.Vector3(0, 0, 0);
     requestAnimationFrame(drawingLoop);
 }
 function drawingLoop() {
     device.clear();
     mesh.Rotation.x += 0.01;
     mesh.Rotation.y += 0.01;
     device.render(camera, meshes);
     device.present();
     requestAnimationFrame(drawingLoop);
 } 
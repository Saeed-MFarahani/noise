export default class Renderer{
  domElement = document.createElement("canvas");

  render(scene) {
  }

  constructor(){
    this.graphic = this.domElement.getContext("webgl2");
  }
}
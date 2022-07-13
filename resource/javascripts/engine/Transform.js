import Euler3 from "./Euler3.js";
import Vector3 from "./Vector3.js";

export default class Transform {
  position = new Vector3();
  rotation = new Euler3();

  constructor(vector3, euler3) {
    if (vector3 instanceof Vector3) this.position = vector3;
    if (euler3 instanceof Euler3) this.rotation = euler3;
  }
}

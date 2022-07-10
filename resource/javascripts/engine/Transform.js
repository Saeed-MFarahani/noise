import Euler3 from "./Euler3.js";
import Vector3 from "./Vector3.js";

export default class Transform {

  position = new Vector3();
  rotation = new Euler3();

  constructor( vector3 , euler3 ){

    if(typeof vector3 !== "undefined")
      this.position = vector3;

    if(typeof euler3 !== "undefined")
      this.rotation = euler3;

  }
}
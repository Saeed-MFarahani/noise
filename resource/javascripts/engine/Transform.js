import Euler3 from "./Euler3.js";
import Vector3 from "./Vector3.js";

export default class Transform {

  position = new Vector3();
  rotation = new Euler3();

  constructor( _Vector3_ , _Euler3_ ){

    if(typeof _Vector3_ !== "undefined")
      this.position = _Vector3_;

    if(typeof _Euler3_ !== "undefined")
      this.rotation = _Euler3_;

  }
}
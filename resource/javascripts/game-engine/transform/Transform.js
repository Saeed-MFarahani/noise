import Euler3 from "./Euler";
import Vector3 from "./Vector3";

export default class Transform {

  Position = new Vector3();
  Rotation = new Euler3();

  constructor( Vector3 , Euler3 ){

    if(typeof Vector3 !== undefined)
      this.Position = Vector3;

    if(typeof Euler3 !== undefined)
      this.Rotation = Euler3;

  }
}
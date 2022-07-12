import Typecheck from "./Typecheck";

export default class Vector3 {
  x = 0;
  y = 0;
  z = 0;

  Set(x, y, z) {
    if(Typecheck)
      this.x = x;
    else throw "The X parameter is invalid. It is not a number!"

    if(typeof x === "number")
      this.y = y;
    else throw "The Y parameter is invalid. It is not a number!"

    if(typeof z === "number")
      this.z = z;
    else throw "The Z parameter is invalid. It is not a number!"
  }

  constructor( x, y, z ){
    this.Set( x, y, z );
  }
}
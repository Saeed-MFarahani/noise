export default class Euler3{
  x = 0;
  y = 0;
  z = 0;

  Set( x, y, z ) {
    if(typeof x !== "undefined")
      this.x = x;
    if(typeof y !== "undefined")
      this.y = y;
    if(typeof z !== "undefined")
      this.z = z;
  }

  constructor( x, y, z ){
    this.Set( x, y, z );
  }
}
export default class Vector2 {
  x = 0;
  y = 0;

  Set(x, y) {
    if(typeof x !== undefined)
      this.x = x;
    if(typeof y !== undefined)
      this.y = y;
  }
  
  constructor( x, y ){
    this.Set( x, y );
  }
}
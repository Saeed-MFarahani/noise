export default class Vector2 {
  x = 0;
  y = 0;

  Set(x, y) {
    if(typeof x === "number")
      this.x = x;
    else throw "The 'X' parameter is invalid. It is not a number!"

    if(typeof y === "number")
      this.y = y;
    else throw "The 'Y' parameter is invalid. It is not a number!"
    
  }
  
  constructor( x, y ){
    this.Set( x, y );
  }
}
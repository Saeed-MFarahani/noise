export default class Euler3 {
  x = 0;
  y = 0;
  z = 0;

  Set(x, y, z) {
    if (Typecheck.number(x)) this.x = x;
    if (Typecheck.number(y)) this.y = y;
    if (Typecheck.number(z)) this.z = z;
  }

  constructor(x, y, z) {
    this.Set(x, y, z);
  }
}

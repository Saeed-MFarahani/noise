export default class Vector2 {
  x = 0;
  y = 0;

  Set(x, y) {
    if (Typecheck.number(x)) this.x = x;
    if (Typecheck.number(y)) this.y = y;
  }

  constructor(x, y) {
    this.Set(x, y);
  }
}

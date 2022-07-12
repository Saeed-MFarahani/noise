export default class Typecheck {
  Number(input, paramName) {
    if (typeof input === "number") return true;

    else if (typeof input !== "undefined")
      throw `The ${paramName} parameter is invalid. It is not a number!`;

    return false;
  }

  String(input, paramName) {
    if (typeof input === "string") return true;

    else if (typeof input !== "undefined")
      throw `The ${paramName} parameter is invalid. It is not a number!`;

    return false;
  }

  Boolean(input, paramName) {
    if (typeof input === "boolean") return true;

    else if (typeof input !== "undefined")
      throw `The ${paramName} parameter is invalid. It is not a number!`;

    return false;
  }
  constructor(){}
}

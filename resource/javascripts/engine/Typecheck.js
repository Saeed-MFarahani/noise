export default Typecheck = {
  number : (input) => {
    if (typeof input === "number") return true;
    else return false;
  },

  string : (input) => {
    if (typeof input === "string") return true;
    else return false;
  },

  boolean : (input) => {
    if (typeof input === "boolean") return true;
    else return false;
  }
};

    "use strict";
    var n = e("974971"),
      o = String;
    t.exports = function(t) {
      if ("Symbol" === n(t)) throw TypeError("Cannot convert a Symbol value to a string");
      return o(t)
    }
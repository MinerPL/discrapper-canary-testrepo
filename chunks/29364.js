"use strict";
var r = {
    foo: {}
  },
  i = Object;
e.exports = function() {
  return ({
    __proto__: r
  }).foo === r.foo && !(({
    __proto__: null
  }) instanceof i)
}
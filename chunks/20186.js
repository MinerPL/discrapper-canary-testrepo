"use strict";
n.d(t, {
  M: function() {
    return r
  },
  d: function() {
    return s
  }
});
let i = {};

function r(e, t) {
  i[e] = t
}

function s() {
  return Object.keys(i).map(e => "".concat(e, ":").concat(i[e]))
}
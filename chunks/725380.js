"use strict";
n.d(t, {
  $E: function() {
    return a
  },
  Ky: function() {
    return s
  },
  RF: function() {
    return o
  }
}), n(47120);
let i = {};

function r(e, t) {
  return "".concat(e, ":").concat(t)
}

function s(e, t) {
  return i[r(e, t)]
}

function o(e, t, n) {
  let s = r(e, t);
  i[s] = {
    ...i[s],
    ...n
  }
}

function a(e) {
  for (let t in i) {
    let [n, r] = function(e) {
      let [t, n] = e.split(":");
      return [t, n]
    }(t);
    e(n, r, i[t])
  }
  i = {}
}
"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(709054);

function o(e) {
  r()(e.length <= 2 || s.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
}
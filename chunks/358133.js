"use strict";
n.d(e, {
  _: function() {
    return r
  }
});
let r = (t, e, n) => {
  let r, i;
  return s => {
    e.value >= 0 && (s || n) && ((i = e.value - (r || 0)) || void 0 === r) && (r = e.value, e.delta = i, t(e))
  }
}
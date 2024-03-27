"use strict";
E.r(t), E.d(t, {
  default: function() {
    return T
  }
});
var _ = E("446674"),
  s = E("42203");

function T(e) {
  let t = (0, _.useStateFromStoresArray)([s.default], () => e.filter(e => s.default.hasChannel(e.ref_id)), [e]);
  return t
}
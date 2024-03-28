"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var E = s("442837"),
  _ = s("592125");

function a(e) {
  return (0, E.useStateFromStoresArray)([_.default], () => e.filter(e => _.default.hasChannel(e.ref_id)), [e])
}
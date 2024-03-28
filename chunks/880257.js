"use strict";
E.r(t), E.d(t, {
  default: function() {
    return n
  }
});
var _ = E("442837"),
  T = E("594174");

function n() {
  return (0, _.useStateFromStores)([T.default], () => {
    var e;
    return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
  })
}
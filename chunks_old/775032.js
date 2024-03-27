"use strict";
E.r(t), E.d(t, {
  default: function() {
    return n
  }
});
var _ = E("446674"),
  T = E("697218");

function n() {
  let e = (0, _.useStateFromStores)([T.default], () => {
    var e;
    return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
  });
  return e
}
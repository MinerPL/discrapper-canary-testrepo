"use strict";
n.r(t), n.d(t, {
  isFavoriteSearchEnabled: function() {
    return a
  }
});
var s = n("594174");

function a() {
  var e, t;
  return null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
}
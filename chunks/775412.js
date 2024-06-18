"use strict";
n.d(t, {
  _O: function() {
    return o
  },
  rT: function() {
    return a
  }
});
var i = n(442837),
  r = n(594174),
  s = n(78839);
n(474936);
let o = () => {
  let e = (0, i.e7)([s.ZP], () => s.ZP.getPremiumTypeSubscription());
  return (null == e ? void 0 : e.trialId) != null
};

function a() {
  let e = (0, i.e7)([s.ZP], () => s.ZP.getPremiumTypeSubscription()),
    t = (0, i.e7)([r.default], () => r.default.getCurrentUser());
  return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
}
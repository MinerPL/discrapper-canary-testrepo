"use strict";
n.d(t, {
  x: function() {
    return a
  }
}), n(789020);
var i = n(271383),
  r = n(630388),
  s = n(549817),
  o = n(372897);

function a(e) {
  return new Promise(t => {
    i.ZP.addConditionalChangeListener(() => {
      var n;
      let a = i.ZP.getSelfMember(e);
      return !(0, r.yE)(null !== (n = null == a ? void 0 : a.flags) && void 0 !== n ? n : 0, o.q.COMPLETED_ONBOARDING) || (s.Z.finishOnboarding(e), t(), !1)
    })
  })
}
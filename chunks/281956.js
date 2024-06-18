"use strict";
n.d(t, {
  J: function() {
    return u
  },
  n: function() {
    return l
  }
}), n(47120);
var i = n(442837),
  r = n(271383),
  s = n(430824),
  o = n(607744),
  a = n(594174);

function l(e) {
  let [t, n, i, l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, o.Z, a.default, r.ZP];
  if (null == e) return !1;
  let u = t.getGuild(e),
    {
      notClaimed: _
    } = n.getCheck(e),
    d = i.getCurrentUser(),
    c = !1;
  if (null != d) {
    var E, I;
    c = null !== (I = null === (E = l.getMember(e, d.id)) || void 0 === E ? void 0 : E.isPending) && void 0 !== I && I
  }
  return (c || _) && !!(null == u ? void 0 : u.hasVerificationGate())
}

function u(e) {
  return (0, i.e7)([s.Z, o.Z, a.default, r.ZP], () => null != e && l(e, [s.Z, o.Z, a.default, r.ZP]), [e])
}
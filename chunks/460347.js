"use strict";
n.d(t, {
  Z: function() {
    return _
  },
  m: function() {
    return u
  }
}), n(789020);
var i = n(442837),
  r = n(160404),
  s = n(271383),
  o = n(70956),
  a = n(630388),
  l = n(372897);

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (n) return !0;
  let i = null != e ? new Date(e) : void 0;
  return null != i && new Date().getTime() - i.getTime() < o.Z.Millis.WEEK && !(0, a.yE)(null != t ? t : 0, l.q.COMPLETED_HOME_ACTIONS)
}

function _(e) {
  return (0, i.e7)([s.ZP, r.Z], () => {
    var t, n;
    if (r.Z.isFullServerPreview(e)) return !0;
    let i = s.ZP.getSelfMember(e);
    return u(null !== (t = null == i ? void 0 : i.joinedAt) && void 0 !== t ? t : void 0, null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : void 0)
  })
}
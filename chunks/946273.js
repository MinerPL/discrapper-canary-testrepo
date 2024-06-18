"use strict";
n.d(t, {
  vV: function() {
    return u
  }
}), n(789020);
var i = n(442837),
  r = n(271383),
  s = n(430824),
  o = n(594174),
  a = n(630388),
  l = n(372897);
let u = (e, t) => {
  var n, u, _;
  let d = (0, i.e7)([r.ZP], () => {
      var n, i;
      return (0, a.yE)(null !== (i = null === (n = r.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0, l.q.DID_REJOIN)
    }),
    c = (0, i.e7)([s.Z], () => {
      var t;
      return null === (t = s.Z.getGuild(e)) || void 0 === t ? void 0 : t.isNew()
    }),
    E = (0, i.e7)([o.default], () => {
      var e;
      return null === (e = o.default.getUser(t)) || void 0 === e ? void 0 : e.bot
    });
  return n = e, u = {
    maxDaysOld: 7
  }, _ = t, (0, i.e7)([], () => (function(e, t, n) {
    let {
      maxDaysOld: i,
      minDaysOld: o = 0
    } = t, a = s.Z.getGuild(e), l = null == a ? void 0 : a.joinedAt;
    if (null != n) {
      let t = r.ZP.getMember(e, n);
      l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt)
    }
    if (null == l) return !1;
    let u = Date.now() - l.getTime();
    return (null == i || u <= 864e5 * i) && u >= 864e5 * o
  })(n, u, _), [u, n, _]) && !c && !E && !d
}
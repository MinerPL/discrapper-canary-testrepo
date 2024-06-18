"use strict";
n.d(t, {
  Of: function() {
    return E
  },
  ZP: function() {
    return _
  },
  le: function() {
    return d
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(594174),
  o = n(251625),
  a = n(255564),
  l = n(621853),
  u = n(484459);

function _(e, t) {
  return (0, r.e7)([s.default, l.Z], () => E(e, t, [s.default, l.Z]))
}

function d(e, t) {
  return i.useEffect(() => {
    (0, u.Z)(e, void 0, {
      guildId: null != t ? t : void 0
    })
  }, [t, e]), _(e, t)
}
let c = (0, o.oH)((e, t) => new a.Z(e, t));

function E(e, t) {
  let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, l.Z], r = n.getUser(e), o = i.getUserProfile(e), a = i.getGuildMemberProfile(e, t);
  return null == r || null == o ? null : c(o, a)
}
"use strict";
n.d(t, {
  V: function() {
    return _
  },
  m: function() {
    return d
  }
});
var i = n(399606),
  r = n(592125),
  s = n(699516),
  o = n(594174),
  a = n(651530),
  l = n(163268),
  u = n(294602);
let _ = (e, t) => {
    let n = (0, a.yh)(),
      {
        explicitContentGuilds: _,
        explicitContentFriendDm: d,
        explicitContentNonFriendDm: c
      } = (0, u.B)(),
      E = (0, i.e7)([s.Z], () => s.Z.getFriendIDs().includes(t)),
      I = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
      T = (0, i.e7)([r.Z], () => {
        let t = r.Z.getChannel(e);
        return null != t && t.isPrivate()
      });
    return !!n && null != I && I.id !== t && (T && E ? (0, l.vx)(d) : T ? (0, l.vx)(c) : (0, l.vx)(_))
  },
  d = () => {
    let e = (0, a.yh)(),
      {
        explicitContentGuilds: t
      } = (0, u.B)(),
      n = (0, i.e7)([o.default], () => o.default.getCurrentUser());
    return !!e && null != n && (0, l.vx)(t)
  }
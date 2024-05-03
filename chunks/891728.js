"use strict";
s.r(t), s.d(t, {
  useCurrentUserAvailableClanIds: function() {
    return c
  },
  useCurrentUserAvailableClans: function() {
    return u
  }
}), s("47120");
var a = s("470079"),
  n = s("392711"),
  l = s.n(n),
  i = s("442837"),
  r = s("271383"),
  o = s("430824"),
  d = s("353093");

function u() {
  return (0, i.useStateFromStoresArray)([o.default, r.default], () => {
    let e = o.default.getGuilds();
    return l()(e).values().filter(e => {
      var t;
      return (0, d.isGuildAClan)(e) && (null === (t = r.default.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null
    }).value()
  })
}

function c() {
  let e = u();
  return a.useMemo(() => new Set(e.map(e => {
    let {
      id: t
    } = e;
    return t
  })), [e])
}
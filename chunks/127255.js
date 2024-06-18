"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(789020), n(47120), n(653041);
var i = n(470079),
  r = n(442837),
  s = n(630388),
  o = n(115130),
  a = n(844797),
  l = n(694312),
  u = n(405625),
  _ = n(664097),
  d = n(981631);

function c(e) {
  let {
    guildId: t,
    enableFilter: n = !1,
    channel: c
  } = e, {
    filter: E
  } = (0, r.cj)([o.Z], () => ({
    filter: o.Z.getFilter()
  })), I = (0, l.E)(t), T = (0, u.Z)(I), h = (0, _.o)(), S = (0, a.oy)(c);
  return i.useMemo(() => {
    function e(e) {
      return !!(!n || "" === E || e.application.name.toLowerCase().includes(E.toLowerCase())) || !1
    }

    function t(e) {
      return !S || (0, s.yE)(e.application.flags, d.udG.EMBEDDED_RELEASED)
    }
    let i = [...h].filter(e).filter(t),
      r = new Set(i.map(e => e.application.id));
    for (let n of T) !r.has(n.application.id) && e(n) && t(n) && i.push(n);
    return i
  }, [h, n, E, T, S])
}
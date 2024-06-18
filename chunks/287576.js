"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(470079),
  i = t(725803),
  l = t(766434),
  a = t(310291),
  r = t(674563),
  o = t(198139);

function c(e) {
  var s;
  let {
    application: t,
    loading: c
  } = (0, i.Z)(e, r.wW.GUILD_ROLE_SUBSCRIPTIONS), {
    payoutsByPeriod: d,
    loading: u
  } = (0, a.Z)(null == t ? void 0 : t.id, {
    groupType: o.uw.GUILD_PRODUCT,
    teamId: null == t ? void 0 : null === (s = t.team) || void 0 === s ? void 0 : s.id
  }), {
    currentPeriod: E,
    previousPeriods: _,
    metrics: I
  } = n.useMemo(() => {
    let {
      currentPeriod: e,
      previousPeriods: s
    } = (0, l.Br)(d), t = (0, l.Uj)(e, s[0]);
    return {
      currentPeriod: e,
      previousPeriods: s,
      metrics: t
    }
  }, [d]);
  return {
    loading: c || u,
    payoutsByPeriod: d,
    currentPeriod: E,
    previousPeriods: _,
    metrics: I,
    application: t
  }
}
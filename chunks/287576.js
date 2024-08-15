n.d(t, {
  Z: function() {
return c;
  }
});
var s = n(470079),
  a = n(725803),
  i = n(766434),
  r = n(310291),
  l = n(674563),
  o = n(198139);

function c(e) {
  var t;
  let {
application: n,
loading: c
  } = (0, a.Z)(e, l.wW.GUILD_ROLE_SUBSCRIPTIONS), {
payoutsByPeriod: d,
loading: u
  } = (0, r.Z)(null == n ? void 0 : n.id, {
groupType: o.uw.GUILD_PRODUCT,
teamId: null == n ? void 0 : null === (t = n.team) || void 0 === t ? void 0 : t.id
  }), {
currentPeriod: _,
previousPeriods: I,
metrics: E
  } = s.useMemo(() => {
let {
  currentPeriod: e,
  previousPeriods: t
} = (0, i.Br)(d), n = (0, i.Uj)(e, t[0]);
return {
  currentPeriod: e,
  previousPeriods: t,
  metrics: n
};
  }, [d]);
  return {
loading: c || u,
payoutsByPeriod: d,
currentPeriod: _,
previousPeriods: I,
metrics: E,
application: n
  };
}
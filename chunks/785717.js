n.d(t, {
  KZ: function() {
return c;
  },
  Mt: function() {
return l;
  },
  Q1: function() {
return u;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(906732),
  s = n(221292);
let o = i.createContext({}),
  l = e => {
let {
  children: t,
  layout: n,
  userId: l,
  guildId: u,
  channelId: c,
  messageId: d,
  roleId: _,
  showGuildProfile: E = !0,
  shouldTrackViewOnMount: f = !0
} = e, {
  analyticsLocations: h
} = (0, a.ZP)(), p = i.useMemo(() => ({
  layout: n,
  userId: l,
  guildId: u,
  channelId: c,
  messageId: d,
  roleId: _,
  showGuildProfile: E
}), [
  n,
  l,
  u,
  c,
  d,
  _,
  E
]);
return i.useEffect(() => {
  if (!!f && null != n && null != l)
    (0, s.pQ)({
      action: 'VIEW',
      layout: n,
      userId: l,
      guildId: u,
      channelId: c,
      messageId: d,
      roleId: _,
      showGuildProfile: E,
      analyticsLocations: h
    });
}, [f]), (0, r.jsx)(o.Provider, {
  value: p,
  children: t
});
  },
  u = e => {
let {
  analyticsLocations: t
} = (0, a.ZP)();
return i.useCallback(n => {
  let {
    layout: r,
    userId: i
  } = e;
  if (null != r && null != i)
    (0, s.pQ)({
      analyticsLocations: t,
      layout: r,
      userId: i,
      ...e,
      ...n
    });
}, [
  e,
  t
]);
  },
  c = () => {
let e = i.useContext(o);
return {
  trackUserProfileAction: u(e),
  ...e
};
  };
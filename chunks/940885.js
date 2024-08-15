n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250);
n(470079);
var a = n(410030),
  s = n(906732),
  l = n(769654),
  r = n(785717),
  o = n(726059),
  c = n(162267),
  u = n(483517),
  d = n(502762),
  h = n(171368),
  m = n(944546),
  p = n(470900),
  _ = n(772056),
  f = n(689938),
  E = n(409931);

function g(e) {
  let {
user: t
  } = e, {
analyticsLocations: n
  } = (0, s.ZP)(), {
context: g,
trackUserProfileAction: C
  } = (0, r.KZ)(), I = (0, a.ZP)(), {
mutualFriends: x,
isFetching: T
  } = (0, o.Z)(t.id, !t.bot), {
mutualGuilds: N,
isFetching: v
  } = (0, c.Z)(t.id, !0), S = !t.bot && null != x && x.length > 0, Z = null != N && N.length > 0;
  return S || Z ? (0, i.jsxs)(d.Z.Overlay, {
className: E.overlay,
children: [
  Z && (0, i.jsx)(_.Z, {
    className: E.list,
    header: f.Z.Messages.MUTUAL_GUILDS_COUNT.format({
      count: N.length
    }),
    isLoadingHeader: v,
    loadingContentsCount: N.length,
    itemType: _.R.MutualGuildList,
    onExpand: () => C({
      action: 'PRESS_SECTION',
      section: 'MUTUAL_GUILDS'
    }),
    children: N.map(e => {
      let {
        guild: n,
        nick: a
      } = e;
      return (0, i.jsx)(p.D, {
        user: t,
        guild: n,
        nick: a,
        theme: I,
        onSelect: () => (0, l.X)(n.id)
      }, n.id);
    })
  }),
  Z && S && (0, i.jsx)(u.Z, {
    className: E.divider
  }),
  S && (0, i.jsx)(_.Z, {
    className: E.list,
    header: f.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
      count: x.length
    }),
    isLoadingHeader: T,
    loadingContentsCount: x.length,
    itemType: _.R.MutualFriendsList,
    onExpand: () => C({
      action: 'PRESS_SECTION',
      section: 'MUTUAL_FRIENDS'
    }),
    children: x.map(e => {
      let {
        key: t,
        user: a,
        status: s
      } = e;
      return (0, i.jsx)(m.T, {
        user: a,
        status: s,
        onSelect: () => {
          (0, h.openUserProfileModal)({
            ...g,
            userId: a.id,
            sourceAnalyticsLocations: n
          });
        }
      }, t);
    })
  })
]
  }) : null;
}
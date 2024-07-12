n(47120), n(773603);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(447543),
  l = n(568154),
  o = n(703656),
  c = n(430824),
  d = n(701190),
  u = n(449934),
  _ = n(650233),
  h = n(981631),
  E = n(898625),
  I = n(625994);
t.Z = e => {
  let {
guildId: t,
inviteCode: n
  } = e, [m, g] = s.useState(E.hO.INITIAL), [p, T] = s.useState(null != n);
  s.useEffect(() => {
null != n && r.Z.resolveInvite(n, 'Hub').finally(() => T(!1));
  }, [n]);
  let S = (0, a.e7)([d.Z], () => null != n ? d.Z.getInvite(n) : null),
C = (0, a.e7)([c.Z], () => c.Z.getGuild(t));
  s.useEffect(() => {
null != C && (0, o.uL)(h.Z5c.CHANNEL(t));
  }, [
C,
t
  ]);
  let f = s.useCallback(e => {
  g(t => Math.max(t, e));
}, []),
N = (0, u.gK)();
  return (0, i.jsx)('div', {
className: I.page,
children: (0, i.jsxs)(l.Z, {
  embedded: !0,
  splash: N,
  waveState: m,
  showLogo: !1,
  updateWaveState: f,
  children: [
    (0, i.jsx)('div', {
      className: I.dragRegion
    }),
    (0, i.jsx)('div', {
      className: I.contentWrapper,
      children: !p && (0, i.jsx)(_.HubEmailConnectionModalView, {
        invite: S
      })
    })
  ]
})
  });
};
s(653041);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(165630),
  l = s(771845),
  c = s(11844),
  d = s(300037),
  _ = s(689938),
  E = s(581213);
t.Z = function(e) {
  let {
hasAppliedGuildBoosts: t,
subscriptionIsPausedOrPausePending: s
  } = e, u = (0, i.e7)([o.Z], () => o.Z.affinities), T = (0, i.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()), I = a.useMemo(() => {
let e = u.slice(0, 3).map(e => e.guildId);
for (let t = 0; t < T.length && !(e.length >= 3); t++) {
  let s = T[t];
  !e.includes(s) && e.push(s);
}
return e;
  }, [
u,
T
  ]);
  return 0 === I.length ? null : (0, n.jsxs)('div', {
className: E.wrapper,
children: [
  t && (0, n.jsx)(r.Heading, {
    variant: 'heading-lg/semibold',
    className: E.header,
    children: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_RECOMMENDED_SERVERS_HEADING
  }),
  I.map(e => (0, n.jsx)(d.Z, {
    className: E.recommendedServerCard,
    guildId: e,
    boostingVariant: !0
  }, e)),
  T.length > 3 && !1 === s && (0, n.jsx)(c.Z, {})
]
  });
};
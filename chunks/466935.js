n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(442837),
  a = n(481060),
  s = n(970606),
  o = n(693546),
  c = n(826581),
  u = n(246364),
  d = n(98493),
  h = n(703656),
  p = n(669405),
  _ = n(434479),
  f = n(981631),
  g = n(176505),
  m = n(689938);

function C(e) {
  let {
guild: t,
selected: n
  } = e, C = (0, r.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)), I = null != C ? C : 0;
  return l.useEffect(() => {
o.Z.fetchGuildJoinRequests({
  guildId: t.id,
  status: u.wB.SUBMITTED,
  limit: d.p
});
  }, [t.id]), (0, i.jsx)(_.m, {
id: 'application-review-'.concat(t.id),
renderIcon: e => (0, i.jsx)(p.Z, {
  className: e,
  width: 24,
  height: 24
}),
text: m.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
selected: n,
onClick: () => {
  (0, s.Q2)({
    guildId: t.id,
    source: f.jXE.CHANNEL_LIST,
    tab: g.oC.MEMBER_APPLICATIONS
  }), (0, h.uL)(f.Z5c.CHANNEL(t.id, g.oC.MEMBER_APPLICATIONS));
},
trailing: I > 0 ? (0, i.jsx)(a.NumberBadge, {
  count: I
}) : null
  });
}
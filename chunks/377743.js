n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var a = n(100527),
  s = n(906732),
  r = n(82950),
  l = n(26323),
  o = n(267642),
  c = n(981631),
  d = n(921944),
  u = n(30513),
  _ = n(689938),
  h = n(420569);

function E(e) {
  let {
guild: t,
markAsDismissed: n
  } = e, E = (0, o.KK)(t, c.Eu4.TIER_2), {
analyticsLocations: I
  } = (0, s.ZP)(a.Z.GUILD_BANNER_NOTICE);
  return (0, i.jsx)(r.Z, {
guild: t,
onDismissed: () => n(d.L.UNKNOWN),
cta: _.Z.Messages.GUILD_BANNER_NOTICE_CTA,
message: _.Z.Messages.GUILD_BANNER_NOTICE.format({
  boostsNeeded: E
}),
type: c.vID.GUILD_BANNER,
image: h,
onClick: () => (0, l.Z)({
  analyticsLocations: I,
  analyticsSourceLocation: {
    section: c.jXE.CHANNEL_NOTICE,
    object: c.qAy.SERVER_BANNER_TOOLTIP
  },
  guild: t,
  perks: (0, u.XO)()
}),
imageMarginTop: 15,
imageMarginX: 22
  });
}